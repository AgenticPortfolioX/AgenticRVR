import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

url = "https://www.bing.com/search?q=" + urllib.parse.quote("Alspector Sosin & Associates PLLC Birmingham Michigan address phone")
req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
)
try:
    with urllib.request.urlopen(req, timeout=5) as response:
        html = response.read().decode('utf-8', errors='ignore')
        soup = BeautifulSoup(html, 'html.parser')
        
        # Print all class names in the page
        classes = set()
        for tag in soup.find_all(True):
            cls = tag.get('class')
            if cls:
                if isinstance(cls, list):
                    classes.update(cls)
                else:
                    classes.add(cls)
        print("Classes found in Bing:", sorted(list(classes))[:50])
        
        # Let's print the text of the first 10 paragraphs or list items
        print("\nFirst 10 p tags text:")
        for idx, p in enumerate(soup.find_all('p')[:10]):
            print(idx, p.text)
            
        print("\nFirst 10 li tags text:")
        for idx, li in enumerate(soup.find_all('li')[:10]):
            print(idx, li.text[:200])
except Exception as e:
    print(e)
