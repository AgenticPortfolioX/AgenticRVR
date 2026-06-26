import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

try:
    url = "https://search.brave.com/search?q=" + urllib.parse.quote("Alspector Sosin & Associates PLLC Birmingham Michigan address phone")
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
    )
    with urllib.request.urlopen(req, timeout=5) as response:
        print("Brave Status:", response.status)
        html = response.read()
        soup = BeautifulSoup(html, 'html.parser')
        
        # Print out elements with classes like "snippet" or "result"
        snippets = []
        for tag in soup.find_all(True):
            cls = tag.get('class')
            if cls:
                cls_str = " ".join(cls) if isinstance(cls, list) else cls
                if "snippet" in cls_str or "desc" in cls_str:
                    text = tag.get_text().strip()
                    if text and len(text) > 20:
                        snippets.append((cls_str, text))
                        
        print("Found snippets:", len(snippets))
        for idx, (c, s) in enumerate(snippets[:10]):
            print(f"{idx} [class={c}]: {s}")
except Exception as e:
    print("Brave Error:", e)




