import urllib.request
import urllib.parse
import json
import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

def get_tab2(scode):
    data = urllib.parse.urlencode({
        'Gen_ID': 'aaawjswnfb',
        'New_Gen_ID': 'dlgustns2002',
        'New_Gen_EditorNo': 301,
        'scode': scode,
        'infoTab': 2
    }).encode('utf-8')
    req = urllib.request.Request(
        'http://www.dmook.co.kr/genealogy/web/web/getInfo.asp',
        data=data,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        txt = resp.read().decode('utf-8', errors='replace')
        return re.sub(r'\s+', ' ', re.sub(r'<[^<]+?>', ' ', txt)).strip()

def get_tab3(scode):
    data = urllib.parse.urlencode({
        'Gen_ID': 'aaawjswnfb',
        'New_Gen_ID': 'dlgustns2002',
        'New_Gen_EditorNo': 301,
        'scode': scode,
        'infoTab': 3
    }).encode('utf-8')
    req = urllib.request.Request(
        'http://www.dmook.co.kr/genealogy/web/web/getInfo.asp',
        data=data,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        txt = resp.read().decode('utf-8', errors='replace')
        return re.sub(r'\s+', ' ', re.sub(r'<[^<]+?>', ' ', txt)).strip()

# Check children of 류희잠
def get_children(scode):
    data = urllib.parse.urlencode({
        'Gen_ID': 'aaawjswnfb',
        'New_Gen_ID': 'dlgustns2002',
        'New_Gen_EditorNo': 301,
        'scode': scode,
        'infoTab': 1
    }).encode('utf-8')
    req = urllib.request.Request(
        'http://www.dmook.co.kr/genealogy/web/web/getPedigree.asp',
        data=data,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        ped = json.loads(resp.read().decode('utf-8', errors='replace'))
        ch = []
        for r in ped:
            for m in r.get('info', []):
                if str(m.get('fcode')) == str(scode):
                    ch.append(m)
        return ch

print("=== 류희잠의 아들들 ===")
for c in get_children(378744):
    sc = c.get('code')
    print(f"  {c.get('cname')}({c.get('sname')}) [scode:{sc}]: {get_tab2(sc)}")

ancestors = [
    (11, '류휘', 378745),
    (12, '류두휘', 378746),
    (13, '류성재', 382096),
    (14, '류서현', 382097),
    (15, '류효원', 382098),
    (16, '류천휴', 382099),
    (17, '류순문', 382100),
    (18, '류치광', 382104),
    (19, '류필호', 402956),
    (20, '류연현', 402957),
    (21, '류하식', 402969),
    (22, '류광혁', 402970),
    (23, '류재홍', 402974),
]

print("\n=== 직계 선조별 관직 및 행적 (tab2) ===")
for gen, name, scode in ancestors:
    tab2 = get_tab2(scode)
    tab3 = get_tab3(scode)
    print(f"[{gen}세] {name} (code:{scode}):")
    print(f"   상세: {tab2}")
    if '배우자' in tab3 or '부' in tab3:
        print(f"   처가: {tab3[:150]}")
