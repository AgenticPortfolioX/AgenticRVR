import re
import json
import os

INPUT_FILE = r"c:\Users\jmgra\antigravityagents\.agents\websites\AgenticRVR\LocalAiCustomers"
SCRAPED_JSON = r"c:\Users\jmgra\antigravityagents\.agents\websites\AgenticRVR\scraped_customers.json"
OUTPUT_FILE = r"c:\Users\jmgra\antigravityagents\.agents\websites\AgenticRVR\LocalAiCustomers" # Overwrite existing file as requested

def normalize_locality(loc_str, county):
    loc_str = loc_str.strip()
    # Normalize general/county-wide entries
    l_lower = loc_str.lower()
    
    if "oakland" in l_lower and ("serves" in l_lower or "county" in l_lower or "area" in l_lower or "region" in l_lower or "footprint" in l_lower):
        return "Oakland County (General)"
    if "wayne" in l_lower and ("serves" in l_lower or "county" in l_lower or "area" in l_lower or "region" in l_lower or "footprint" in l_lower or "branch" in l_lower):
        return "Wayne County (General)"
    if "genesee" in l_lower and ("serves" in l_lower or "county" in l_lower or "area" in l_lower or "region" in l_lower or "footprint" in l_lower):
        return "Genesee County (General)"
        
    # Split by common separators
    for sep in ["/", "serves", "area", "operations", "reach", "footprint", "branch"]:
        if sep in l_lower:
            loc_str = loc_str.split(sep)[0].strip()
            l_lower = loc_str.lower()
            
    # Remove state abbreviations and trailing punctuation
    loc_str = re.sub(r',?\s*MI$', '', loc_str, flags=re.IGNORECASE)
    loc_str = re.sub(r',?\s*Michigan$', '', loc_str, flags=re.IGNORECASE)
    loc_str = loc_str.strip("()-,. ")
    
    if not loc_str:
        return f"{county} (General)"
        
    # Standard Title Case
    return loc_str.title()

def main():
    # Load scraped database
    scraped = {}
    if os.path.exists(SCRAPED_JSON):
        with open(SCRAPED_JSON, "r", encoding="utf-8") as f:
            scraped = json.load(f)
            
    # Read the input lines
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    current_county = "UNKNOWN"
    data = {} # county -> locality -> list of businesses
    
    # Regex to parse the business bullet points
    # Format: * **Business Name** (Locality) - Description
    # We also handle variations in separator like – (en dash), - (hyphen), or - (em dash)
    biz_pattern = re.compile(r"^\*\s+\*\*([^*]+)\*\*\s+\(([^)]+)\)\s*(?:–|-|—)\s*(.*)")
    
    for line in lines:
        line_str = line.strip()
        if not line_str:
            continue
            
        # Parse county header
        if line_str.startswith("## ") and "COUNTY" in line_str:
            current_county = line_str.replace("## ", "").replace("🏛️ ", "").replace("🏙️ ", "").replace("🚜 ", "").strip()
            if current_county not in data:
                data[current_county] = {}
            continue
            
        # Parse business
        m = biz_pattern.match(line_str)
        if m:
            name = m.group(1).strip()
            raw_location = m.group(2).strip()
            description = m.group(3).strip()
            
            if current_county == "UNKNOWN":
                current_county = "OAKLAND COUNTY" # default if before any header
                if current_county not in data:
                    data[current_county] = {}
                    
            locality = normalize_locality(raw_location, current_county)
            if locality not in data[current_county]:
                data[current_county][locality] = []
                
            # Match with scraped data
            phone = "UNKNOWN"
            email = "UNKNOWN"
            address = "UNKNOWN"
            
            # Direct match
            if name in scraped:
                phone = scraped[name].get("phone", "UNKNOWN")
                email = scraped[name].get("email", "UNKNOWN")
                address = scraped[name].get("address", "UNKNOWN")
            else:
                # Try partial match (e.g. "Alspector Sosin" in "Alspector Sosin & Associates PLLC")
                for k, v in scraped.items():
                    if k.lower() in name.lower() or name.lower() in k.lower():
                        phone = v.get("phone", "UNKNOWN")
                        email = v.get("email", "UNKNOWN")
                        address = v.get("address", "UNKNOWN")
                        break
            
            # Clean up empty strings or nulls to UNKNOWN
            phone = phone.strip() if phone else "UNKNOWN"
            email = email.strip() if email else "UNKNOWN"
            address = address.strip() if address else "UNKNOWN"
            
            if phone == "": phone = "UNKNOWN"
            if email == "": email = "UNKNOWN"
            if address == "": address = "UNKNOWN"
            
            data[current_county][locality].append({
                "name": name,
                "description": description,
                "phone": phone,
                "email": email,
                "address": address,
                "raw_location": raw_location
            })

    # Now write the structured output
    output = []
    output.append("# 🏛️ Local AI B2B Customers & Prospects Database")
    output.append("")
    output.append("This document contains researched B2B prospects and target customers organized by county and locality (city/town). Real contact details have been verified where available; unverified fields are marked as `UNKNOWN`.")
    output.append("")
    
    # Sort counties so they match the original order: OAKLAND, WAYNE, GENESEE
    county_order = ["OAKLAND COUNTY", "WAYNE COUNTY", "GENESEE COUNTY"]
    existing_counties = list(data.keys())
    # Add any extra counties if they exist
    for c in existing_counties:
        if c not in county_order:
            county_order.append(c)
            
    for county in county_order:
        if county not in data or not data[county]:
            continue
            
        emoji = "🏛️"
        if "WAYNE" in county:
            emoji = "🏙️"
        elif "GENESEE" in county:
            emoji = "🚜"
            
        output.append("---")
        output.append("")
        output.append(f"## {emoji} {county}")
        output.append("")
        
        # Sort localities alphabetically, but put general/county-wide at the end
        localities = sorted(list(data[county].keys()))
        general_locs = [l for l in localities if "General" in l]
        specific_locs = [l for l in localities if "General" not in l]
        sorted_localities = specific_locs + general_locs
        
        for locality in sorted_localities:
            output.append(f"### {locality}")
            output.append("")
            
            # Sort businesses alphabetically within each locality
            businesses = sorted(data[county][locality], key=lambda x: x["name"])
            for biz in businesses:
                output.append(f"* **{biz['name']}** – {biz['description']}")
                output.append(f"  * **Phone**: {biz['phone']}")
                output.append(f"  * **Email**: {biz['email']}")
                output.append(f"  * **Address**: {biz['address']}")
                
            output.append("")
            
    # Write the output file
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(output))
        
    print(f"Successfully organized and wrote customer list to {OUTPUT_FILE}!")

if __name__ == "__main__":
    main()
