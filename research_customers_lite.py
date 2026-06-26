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
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
]

def ddg_lite_search(query):
    url = "https://lite.duckduckgo.com/lite/"
    data = urllib.parse.urlencode({"q": query}).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={'User-Agent': random.choice(USER_AGENTS)}
    )
    for attempt in range(3):
        try:
            time.sleep(random.uniform(1.0, 2.5))
            with urllib.request.urlopen(req, timeout=12) as response:
                if response.status == 200:
                    html = response.read()
                    soup = BeautifulSoup(html, 'html.parser')
                    snippets = []
                    for td in soup.find_all('td', class_='result-snippet'):
                        snippets.append(td.get_text().strip())
                    return snippets
                elif response.status == 403:
                    time.sleep(5 * (attempt + 1))
        except Exception as e:
            time.sleep(3)
    return []

# Better regexes to capture phone numbers, emails and addresses in Michigan
phone_pattern = re.compile(r'\b(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. \.]?([0-9]{3})[-. \.]?([0-9]{4})\b')
email_pattern = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b')

# Address regex matching street suffix, state (MI/Michigan) and optional zip code
address_pattern = re.compile(
    r'\b\d+\s+[A-Za-z0-9\s.,#-]+?\s+(?:Road|Rd|Street|St|Avenue|Ave|Boulevard|Blvd|Drive|Dr|Way|Lane|Ln|Court|Ct|Circle|Cir|Highway|Hwy|Trail|Trl|Suite|Ste|#|Parkway|Pkwy|Plaza|Plz|Suite\s+\d+|Ste\s+\d+)\b.*?\b(?:MI|Michigan)\b\s*(?:\d{5})?',
    re.IGNORECASE
)

def extract_details(snippets, name, location):
    phone = "UNKNOWN"
    email = "UNKNOWN"
    address = "UNKNOWN"
    
    # Extract Email
    for s in snippets:
        emails = email_pattern.findall(s)
        if emails:
            # Simple validation: make sure it doesn't look like template placeholder
            valid_emails = [e for e in emails if not any(x in e.lower() for x in ["domain", "example", "email.com", "yourdomain"])]
            if valid_emails:
                email = valid_emails[0]
                break

    # Extract Phone
    for s in snippets:
        phones = phone_pattern.findall(s)
        if phones:
            phone = f"{phones[0][0]}-{phones[0][1]}-{phones[0][2]}"
            break

    # Extract Address
    for s in snippets:
        match = address_pattern.search(s)
        if match:
            address = match.group(0).strip()
            address = re.sub(r'\s+', ' ', address)
            break
            
    # Fallback address parsing: if there's a zip code and the location name in the snippet
    if address == "UNKNOWN":
        for s in snippets:
            if location.lower() in s.lower() and ("mi" in s.lower() or "michigan" in s.lower()):
                zip_match = re.search(r'\b\d{5}\b', s)
                if zip_match:
                    idx = zip_match.start()
                    start_idx = max(0, idx - 80)
                    end_idx = min(len(s), idx + 5)
                    chunk = s[start_idx:end_idx]
                    num_match = re.search(r'\b\d+\b', chunk)
                    if num_match:
                        address = chunk[num_match.start():].strip()
                        address = re.sub(r'\s+', ' ', address)
                        break

    return phone, email, address

def parse_businesses():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        lines = f.readlines()

    current_county = "UNKNOWN"
    businesses = []
    
    # We parse the file and keep track of the county for each business
    for idx, line in enumerate(lines):
        line_str = line.strip()
        if line_str.startswith("## ") and "COUNTY" in line_str:
            current_county = line_str.replace("## ", "").replace("🏛️ ", "").replace("🏙️ ", "").replace("🚜 ", "").strip()
        m = re.match(r"^\*\s+\*\*([^*]+)\*\*\s+\(([^)]+)\)\s*–\s*(.*)", line_str)
        if m:
            name = m.group(1).strip()
            location = m.group(2).strip()
            desc = m.group(3).strip()
            
            # Clean up location (if it contains slashes or serves, just take the first part)
            cleaned_location = location.split("/")[0].split("serves")[0].strip()
            
            businesses.append({
                "index": idx,
                "name": name,
                "location": cleaned_location,
                "raw_location": location,
                "county": current_county,
                "desc": desc,
                "raw": line_str
            })
    return lines, businesses

def main():
    lines, businesses = parse_businesses()
    print(f"Loaded {len(businesses)} businesses across {len(set(b['county'] for b in businesses))} counties.")
    
    # Load existing progress if any
    scraped = {}
    if os.path.exists(OUTPUT_JSON):
        try:
            with open(OUTPUT_JSON, "r", encoding="utf-8") as f:
                scraped = json.load(f)
            print(f"Loaded {len(scraped)} already processed entries.")
        except Exception:
            pass

    to_process = [b for b in businesses if b["name"] not in scraped or scraped[b["name"]]["phone"] == "UNKNOWN" and scraped[b["name"]]["address"] == "UNKNOWN"]
    print(f"Pending processing (or needs retry): {len(to_process)}")
    
    processed_count = 0
    
    def process_one(b):
        query = f'"{b["name"]}" {b["location"]} Michigan address phone contact'
        snippets = ddg_lite_search(query)
        if not snippets or len(snippets) < 2:
            # Fallback query without quotes
            query = f'{b["name"]} {b["location"]} MI contact address phone'
            snippets = ddg_lite_search(query)
            
        phone, email, address = extract_details(snippets, b["name"], b["location"])
        return b["name"], {
            "phone": phone,
            "email": email,
            "address": address,
            "county": b["county"],
            "location": b["location"],
            "desc": b["desc"]
        }

    # Use small thread pool to avoid overwhelming DDG Lite
    with ThreadPoolExecutor(max_workers=3) as executor:
        futures = {executor.submit(process_one, b): b for b in to_process}
        for future in as_completed(futures):
            b = futures[future]
            try:
                name, data = future.result()
                # If we scraped and found UNKNOWNs, but already had actual data in scraped before, preserve the actual data
                if name in scraped and scraped[name]["phone"] != "UNKNOWN" and data["phone"] == "UNKNOWN":
                    data["phone"] = scraped[name]["phone"]
                if name in scraped and scraped[name]["email"] != "UNKNOWN" and data["email"] == "UNKNOWN":
                    data["email"] = scraped[name]["email"]
                if name in scraped and scraped[name]["address"] != "UNKNOWN" and data["address"] == "UNKNOWN":
                    data["address"] = scraped[name]["address"]
                
                scraped[name] = data
                processed_count += 1
                if processed_count % 10 == 0:
                    print(f"Processed {processed_count}/{len(to_process)} entries. Saving progress...")
                    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
                        json.dump(scraped, f, indent=2)
            except Exception as e:
                print(f"Error processing {b['name']}: {e}")
                
    # Save final results
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(scraped, f, indent=2)
    print("Scraping completed!")

if __name__ == "__main__":
    main()
