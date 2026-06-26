import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import re
import json
import time
import os
import random
from concurrent.futures import ThreadPoolExecutor, as_completed

INPUT_FILE = r"c:\Users\jmgra\antigravityagents\.agents\websites\AgenticRVR\LocalAiCustomers"
OUTPUT_JSON = r"c:\Users\jmgra\antigravityagents\.agents\websites\AgenticRVR\scraped_customers.json"

USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/121.0',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
]

def ddg_search(query):
    url = "https://html.duckduckgo.com/html/?" + urllib.parse.urlencode({"q": query})
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': random.choice(USER_AGENTS)}
    )
    for attempt in range(3):
        try:
            time.sleep(random.uniform(0.5, 1.5))
            with urllib.request.urlopen(req, timeout=10) as response:
                if response.status == 200:
                    html = response.read()
                    soup = BeautifulSoup(html, 'html.parser')
                    snippets = [a.get_text() for a in soup.find_all('a', class_='result__snippet')]
                    return snippets
                elif response.status == 403:
                    # Rate limited/blocked
                    time.sleep(5 * (attempt + 1))
        except Exception as e:
            time.sleep(2)
    return []

phone_pattern = re.compile(r'\b(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})\b')
email_pattern = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b')

# Standard street address patterns (containing street prefix, type, state and ZIP)
address_pattern = re.compile(
    r'\b\d+\s+[A-Za-z0-9\s.,#-]+?\s+(?:Road|Rd|Street|St|Avenue|Ave|Boulevard|Blvd|Drive|Dr|Way|Lane|Ln|Court|Ct|Circle|Cir|Highway|Hwy|Trail|Trl|Suite|Ste|#|Parkway|Pkwy|Plaza|Plz)\b.*?\b(?:MI|Michigan)\b\s*\d{5}', 
    re.IGNORECASE
)

def extract_details(snippets, name, location):
    phone = "UNKNOWN"
    email = "UNKNOWN"
    address = "UNKNOWN"
    
    # Try to find email
    for s in snippets:
        emails = email_pattern.findall(s)
        if emails:
            # Skip generic info@ or support@ if possible, but keep first valid
            email = emails[0]
            break
            
    # Try to find phone
    for s in snippets:
        phones = phone_pattern.findall(s)
        if phones:
            phone = f"{phones[0][0]}-{phones[0][1]}-{phones[0][2]}"
            break
            
    # Try to find address
    # Look for matches with location (city name) or state + ZIP code
    for s in snippets:
        match = address_pattern.search(s)
        if match:
            address = match.group(0).strip()
            # Clean up double spaces/newlines
            address = re.sub(r'\s+', ' ', address)
            break
            
    # Fallback address parsing if strict street pattern fails:
    if address == "UNKNOWN":
        for s in snippets:
            # Look for a zip code and the location
            if location.lower() in s.lower() and ("mi" in s.lower() or "michigan" in s.lower()):
                zip_match = re.search(r'\b\d{5}\b', s)
                if zip_match:
                    # Extract around the zip code
                    idx = zip_match.start()
                    start_idx = max(0, idx - 100)
                    end_idx = min(len(s), idx + 10)
                    chunk = s[start_idx:end_idx]
                    # Find a number at the start of this chunk to identify street number
                    num_match = re.search(r'\b\d+\b', chunk)
                    if num_match:
                        address = chunk[num_match.start():].strip()
                        address = re.sub(r'\s+', ' ', address)
                        break

    return phone, email, address

def parse_businesses():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        lines = f.readlines()

    businesses = []
    for idx, line in enumerate(lines):
        m = re.match(r"^\*\s+\*\*([^*]+)\*\*\s+\(([^)]+)\)\s*–\s*(.*)", line.strip())
        if m:
            name = m.group(1).strip()
            location = m.group(2).strip()
            desc = m.group(3).strip()
            businesses.append({
                "index": idx,
                "name": name,
                "location": location,
                "desc": desc,
                "raw": line.strip()
            })
    return lines, businesses

def main():
    lines, businesses = parse_businesses()
    print(f"Loaded {len(businesses)} businesses.")
    
    # Load existing progress if any
    scraped = {}
    if os.path.exists(OUTPUT_JSON):
        try:
            with open(OUTPUT_JSON, "r", encoding="utf-8") as f:
                scraped = json.load(f)
            print(f"Loaded {len(scraped)} already processed entries.")
        except Exception:
            pass

    to_process = [b for b in businesses if b["name"] not in scraped]
    print(f"Pending processing: {len(to_process)}")
    
    # Process in a thread pool to allow some concurrency but not overload DDG
    processed_count = 0
    
    def process_one(b):
        query = f'"{b["name"]}" {b["location"]} Michigan contact phone address email'
        snippets = ddg_search(query)
        if not snippets:
            # Try secondary query without quotes
            query = f'{b["name"]} {b["location"]} MI phone address'
            snippets = ddg_search(query)
            
        phone, email, address = extract_details(snippets, b["name"], b["location"])
        return b["name"], {
            "phone": phone,
            "email": email,
            "address": address
        }

    with ThreadPoolExecutor(max_workers=3) as executor:
        futures = {executor.submit(process_one, b): b for b in to_process}
        for future in as_completed(futures):
            b = futures[future]
            try:
                name, data = future.result()
                scraped[name] = data
                processed_count += 1
                if processed_count % 10 == 0:
                    print(f"Processed {processed_count}/{len(to_process)}...")
                    # Save progress periodically
                    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
                        json.dump(scraped, f, indent=2)
            except Exception as e:
                print(f"Error processing {b['name']}: {e}")
                
    # Save final results
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(scraped, f, indent=2)
    print("Done gathering details!")

if __name__ == "__main__":
    main()
