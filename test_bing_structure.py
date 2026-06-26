import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import re

url = "https://www.bing.com/search?q=" + urllib.parse.quote("Alspector Sosin & Associates PLLC Birmingham Michigan address phone")
req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
)
try:
    with urllib.request.urlopen(req, timeout=5) as response:
        html = response.read().decode('utf-8', errors='ignore')
        soup = BeautifulSoup(html, 'html.parser')
        
        # Let's print out all divs that have a class containing 'algo'
        algos = soup.find_all(class_=re.compile(r'algo|caption|snippet|description'))
        print(f"Found {len(algos)} matching elements.")
        for idx, el in enumerate(algos[:10]):
            print(f"\nElement {idx} (tag={el.name}, class={el.get('class')}):")
            print(el.get_text(separator=' ')[:300])
except Exception as e:
    print(e)
