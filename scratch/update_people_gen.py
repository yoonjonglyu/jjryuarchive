with open("jjryuarchive/lib/data.ts", "r", encoding="utf-8") as f:
    code = f.read()

# Map of ID to generation in PEOPLE
gen_map = {
    'ryu-hon': 1,
    'ryu-seub': 1,
    'ryu-geukseo': 2,
    'ryu-uison': 4,
    'ryu-seong': 8,
    'ryu-bokgi': 9,
    'ryu-bokrip': 9,
    'ryu-bongsi': 13,
    'ryu-seunghyeon': 14,
    'ryu-gwanhyeon': 14,
    'ryu-jungwon': 15,
    'ryu-jangwon': 15,
    'ryu-hwimun': 18,
    'ryu-chimyeong': 18,
    'ryu-jumok': 19,
    'ryu-pilyoung': 20,
    'ryu-yeonseong': 20,
    'ryu-insik': 21,
    'ryu-jingeol': 22,
    'ryu-rim': 21,
    'ryu-wonsik': 21,
    'ryu-yeonbak': 20,
    'ryu-siyeon': 20,
    'ryu-dongsi': 21,
    'ryu-dongjeo': 21
}

# Regex or substring replacement for each person's block in PEOPLE
import re

for pid, gen in gen_map.items():
    # find id: 'pid' ... generation: \d+
    pattern = rf"(id:\s*'{pid}',[\s\S]*?generation:\s*)\d+"
    code = re.sub(pattern, rf"\g<1>{gen}", code, count=1)

with open("jjryuarchive/lib/data.ts", "w", encoding="utf-8") as f:
    f.write(code)

print("Updated PEOPLE generations!")
