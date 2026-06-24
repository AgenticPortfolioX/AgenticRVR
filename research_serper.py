import urllib.request
import json
import re
import os
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from threading import Lock

INPUT_FILE = r"c:\Users\jmgra\antigravityagents\.agents\websites\AgenticRVR\LocalAiCustomers"
OUTPUT_JSON = r"c:\Users\jmgra\antigravityagents\.agents\websites\AgenticRVR\scraped_customers.json"
ENV_FILE = r"c:\Users\jmgra\antigravityagents\.agents\websites\AgenticRVR\.env"

phone_pattern = re.compile(r'\b(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. \.]?([0-9]{3})[-. \.]?([0-9]{4})\b')
email_pattern = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b')

# Address regex matching street suffix, state (MI/Michigan) and optional zip code
address_pattern = re.compile(
    r'\b\d+\s+[A-Za-z0-9\s.,#-]+?\s+(?:Road|Rd|Street|St|Avenue|Ave|Boulevard|Blvd|Drive|Dr|Way|Lane|Ln|Court|Ct|Circle|Cir|Highway|Hwy|Trail|Trl|Suite|Ste|#|Parkway|Pkwy|Plaza|Plz|Suite\s+\d+|Ste\s+\d+)\b.*?\b(?:MI|Michigan)\b\s*(?:\d{5})?',
    re.IGNORECASE
)

db_lock = Lock()

def get_serper_key():
    if os.path.exists(ENV_FILE):
        with open(ENV_FILE, 'r', encoding='utf-8') as f:
            for line in f:
                stripped = line.strip()
                if stripped.upper().startswith('SERPER_API_KEY='):
                    return stripped.split('=', 1)[1].strip()
    return None

def query_places(query, api_key):
    url = "https://google.serper.dev/places"
    req = urllib.request.Request(
        url,
        data=json.dumps({"q": query}).encode("utf-8"),
        headers={
            "X-API-KEY": api_key,
            "Content-Type": "application/json"
        },
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            if resp.status == 200:
                result = json.loads(resp.read().decode("utf-8"))
                return result.get("places", [])
    except Exception as e:
        pass
    return []

def query_search(query, api_key):
    url = "https://google.serper.dev/search"
    req = urllib.request.Request(
        url,
        data=json.dumps({"q": query}).encode("utf-8"),
        headers={
            "X-API-KEY": api_key,
            "Content-Type": "application/json"
        },
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            if resp.status == 200:
                result = json.loads(resp.read().decode("utf-8"))
                return result
    except Exception as e:
        pass
    return {}

def extract_details_from_search(result, name, location):
    phone = "UNKNOWN"
    email = "UNKNOWN"
    address = "UNKNOWN"
    
    # 1. Try Knowledge Graph
    kg = result.get("knowledgeGraph", {})
    if kg:
        attributes = kg.get("attributes", {})
        if attributes:
            address = attributes.get("Address", address)
            phone = attributes.get("Phone", phone)
        address = kg.get("address", address)
        phone = kg.get("phone", phone)

    # 2. Try organic snippets to fill missing
    snippets = []
    for o in result.get("organic", []):
        snippets.append(o.get("snippet", ""))
        
    for s in snippets:
        if email == "UNKNOWN":
            emails = email_pattern.findall(s)
            if emails:
                valid_emails = [e for e in emails if not any(x in e.lower() for x in ["domain", "example", "email.com", "yourdomain"])]
                if valid_emails:
                    email = valid_emails[0]
        if phone == "UNKNOWN":
            phones = phone_pattern.findall(s)
            if phones:
                phone = f"{phones[0][0]}-{phones[0][1]}-{phones[0][2]}"
        if address == "UNKNOWN":
            match = address_pattern.search(s)
            if match:
                address = match.group(0).strip()
                address = re.sub(r'\s+', ' ', address)

    return phone, email, address

def parse_businesses():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        lines = f.readlines()

    current_county = "UNKNOWN"
    current_locality = "UNKNOWN"
    businesses = []
    
    for line in lines:
        line_str = line.strip()
        if not line_str:
            continue
        if line_str.startswith("## ") and "COUNTY" in line_str:
            current_county = line_str.replace("## ", "").replace("🏛️ ", "").replace("🏙️ ", "").replace("🚜 ", "").strip()
            continue
        if line_str.startswith("### ") and not "COUNTY" in line_str:
            current_locality = line_str.replace("### ", "").strip()
            continue
            
        m = re.match(r"^\*\s+\*\*([^*]+)\*\*\s*(?:\(([^)]+)\))?\s*(?:–|-|—)\s*(.*)", line_str)
        if m:
            name = m.group(1).strip()
            loc = m.group(2)
            location = loc.strip() if loc else current_locality
            cleaned_location = location.split("/")[0].split("serves")[0].strip()
            
            businesses.append({
                "name": name,
                "location": cleaned_location,
                "county": current_county
            })
    return businesses

def main():
    api_key = get_serper_key()
    if not api_key or api_key == "your_serper_api_key_here":
        print("ERROR: Please set your SERPER_API_KEY in the .env file.")
        return

    businesses = parse_businesses()
    print(f"Loaded {len(businesses)} businesses for verification.")

    # Load existing progress if any
    scraped = {}
    if os.path.exists(OUTPUT_JSON):
        try:
            with open(OUTPUT_JSON, "r", encoding="utf-8") as f:
                scraped = json.load(f)
            print(f"Loaded {len(scraped)} existing scraped entries.")
        except Exception:
            pass

    # Process businesses that are missing phone or address
    to_process = []
    for b in businesses:
        name = b["name"]
        if name not in scraped or scraped[name].get("phone") == "UNKNOWN" or scraped[name].get("address") == "UNKNOWN":
            to_process.append(b)

    print(f"Businesses requiring search: {len(to_process)}")
    
    if not to_process:
        print("All business entries are already fully populated! Run organize_customers.py directly.")
        return

    processed = 0
    
    def process_one(b):
        name = b["name"]
        loc = b["location"]
        
        phone = "UNKNOWN"
        email = "UNKNOWN"
        address = "UNKNOWN"
        
        # 1. Query Places API
        places_query = f'"{name}" {loc} MI'
        places = query_places(places_query, api_key)
        
        if places:
            place = places[0]
            phone = place.get("phoneNumber", phone)
            address = place.get("address", address)
            
        # 2. Fallback or email search via Search API
        if phone == "UNKNOWN" or address == "UNKNOWN" or email == "UNKNOWN":
            search_query = f'"{name}" {loc} Michigan contact phone address email'
            search_res = query_search(search_query, api_key)
            
            p_s, e_s, a_s = extract_details_from_search(search_res, name, loc)
            if phone == "UNKNOWN" and p_s != "UNKNOWN":
                phone = p_s
            if address == "UNKNOWN" and a_s != "UNKNOWN":
                address = a_s
            if email == "UNKNOWN" and e_s != "UNKNOWN":
                email = e_s

        # Clean up empty strings or nulls to UNKNOWN
        phone = phone.strip() if phone else "UNKNOWN"
        email = email.strip() if email else "UNKNOWN"
        address = address.strip() if address else "UNKNOWN"
        
        if phone == "": phone = "UNKNOWN"
        if email == "": email = "UNKNOWN"
        if address == "": address = "UNKNOWN"
        
        return name, {
            "phone": phone,
            "email": email,
            "address": address
        }

    # Parallel query with ThreadPoolExecutor (8 threads to avoid rate limits)
    print("Starting parallel search...")
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(process_one, b): b for b in to_process}
        for future in as_completed(futures):
            b = futures[future]
            try:
                name, result = future.result()
                with db_lock:
                    scraped[name] = result
                    processed += 1
                    if processed % 10 == 0:
                        with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
                            json.dump(scraped, f, indent=2)
                        print(f"[{processed}/{len(to_process)}] Completed. Saved progress...")
            except Exception as e:
                print(f"Error processing {b['name']}: {e}")

    # Save final results
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(scraped, f, indent=2)
    print("\nSearch complete! Run python organize_customers.py to regenerate LocalAiCustomers.")

if __name__ == "__main__":
    main()
