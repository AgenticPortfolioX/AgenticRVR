import re

file_path = r"c:\Users\jmgra\antigravityagents\.agents\websites\AgenticRVR\LocalAiCustomers"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

businesses = []
for line in lines:
    m = re.match(r"^\*\s+\*\*([^*]+)\*\*\s+\(([^)]+)\)\s*–\s*(.*)", line.strip())
    if m:
        name = m.group(1).strip()
        location = m.group(2).strip()
        desc = m.group(3).strip()
        businesses.append({"name": name, "location": location, "desc": desc, "raw": line.strip()})

print(f"Total businesses parsed: {len(businesses)}")
for b in businesses[:10]:
    print(b)
