import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import random

USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
]

url = "https://www.bing.com/search?q=test"
req = urllib.request.Request(
    url, 
    headers={'User-Agent': random.choice(USER_AGENTS)}
)
try:
    with urllib.request.urlopen(req, timeout=5) as response:
        html = response.read().decode('utf-8', errors='ignore')
        print(html[:2000])
except Exception as e:
    print(e)
