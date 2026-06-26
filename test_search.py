import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

def ddg_lite_search(query):
    url = "https://lite.duckduckgo.com/lite/"
    data = urllib.parse.urlencode({"q": query}).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read()
            print("HTML Length:", len(html))
            soup = BeautifulSoup(html, 'html.parser')
            # In Lite DDG, results are in a table structure. Let's print out text.
            snippets = []
            for td in soup.find_all('td', class_='result-snippet'):
                snippets.append(td.get_text().strip())
            print(f"Found {len(snippets)} snippets.")
            for idx, s in enumerate(snippets[:5]):
                print(idx, s)
            return snippets
    except Exception as e:
        print(f"Error: {e}")
        return []

ddg_lite_search("Alspector Sosin & Associates PLLC Birmingham Michigan")

