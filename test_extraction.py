import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import re
import random

USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
]

def ddg_search(query):
    url = "https://html.duckduckgo.com/html/?" + urllib.parse.urlencode({"q": query})
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': random.choice(USER_AGENTS)}
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read()
            soup = BeautifulSoup(html, 'html.parser')
            return [a.get_text() for a in soup.find_all('a', class_='result__snippet')]
    except Exception as e:
        print("Error:", e)
        return []

phone_pattern = re.compile(r'\b(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})\b')
email_pattern = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b')
address_pattern = re.compile(
    r'\b\d+\s+[A-Za-z0-9\s.,#-]+?\s+(?:Road|Rd|Street|St|Avenue|Ave|Boulevard|Blvd|Drive|Dr|Way|Lane|Ln|Court|Ct|Circle|Cir|Highway|Hwy|Trail|Trl|Suite|Ste|#|Parkway|Pkwy|Plaza|Plz)\b.*?\b(?:MI|Michigan)\b\s*\d{5}', 
    re.IGNORECASE
)

def extract_details(snippets, name, location):
    phone = "UNKNOWN"
    email = "UNKNOWN"
    address = "UNKNOWN"
    for s in snippets:
        emails = email_pattern.findall(s)
        if emails:
            email = emails[0]
            break
    for s in snippets:
        phones = phone_pattern.findall(s)
        if phones:
            phone = f"{phones[0][0]}-{phones[0][1]}-{phones[0][2]}"
            break
    for s in snippets:
        match = address_pattern.search(s)
        if match:
            address = match.group(0).strip()
            address = re.sub(r'\s+', ' ', address)
            break
    return phone, email, address

name = "Alspector Sosin & Associates PLLC"
location = "Birmingham"
query = f'"{name}" {location} Michigan contact phone address email'
snippets = ddg_search(query)
print("Query 1 Snippets count:", len(snippets))
if not snippets:
    query = f'{name} {location} MI phone address'
    snippets = ddg_search(query)
    print("Query 2 Snippets count:", len(snippets))

print("Snippets:")
for s in snippets:
    print("-", s)

phone, email, address = extract_details(snippets, name, location)
print(f"Result: Phone={phone}, Email={email}, Address={address}")
