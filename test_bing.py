import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import random

USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
]

def bing_search(query):
    url = "https://www.bing.com/search?" + urllib.parse.urlencode({"q": query})
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': random.choice(USER_AGENTS)}
    )
    try:
        with urllib.request.urlopen(req, timeout=5) as response:
            html = response.read()
            soup = BeautifulSoup(html, 'html.parser')
            snippets = []
            # Try to get text from search result blocks
            for li in soup.find_all('li', class_='b_algo'):
                text = li.get_text(separator=' ')
                snippets.append(text)
            # If empty, let's look for any paragraphs or divs
            if not snippets:
                for div in soup.find_all('div', class_='b_caption'):
                    snippets.append(div.get_text(separator=' '))
            return snippets
    except Exception as e:
        print("Bing Error:", e)
        return []

print(bing_search("Alspector Sosin & Associates PLLC Birmingham Michigan address phone"))
