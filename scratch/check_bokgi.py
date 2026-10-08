import urllib.request
import urllib.parse
import json
import sys

def get_detail(scode):
    data = urllib.parse.urlencode({
        'Gen_ID': 'aaawjswnfb',
        'New_Gen_ID': 'dlgustns2002',
        'New_Gen_EditorNo': 301,
        'scode': scode,
        'infoTab': 2
    }).encode('utf-8')
    req = urllib.request.Request(
        'http://www.dmook.co.kr/genealogy/web/web/getDetail_2020.asp',
        data=data,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        return resp.read().decode('utf-8', errors='replace')

def get_info(scode, tab=1):
    data = urllib.parse.urlencode({
        'Gen_ID': 'aaawjswnfb',
        'New_Gen_ID': 'dlgustns2002',
        'New_Gen_EditorNo': 301,
        'scode': scode,
        'infoTab': tab
    }).encode('utf-8')
    req = urllib.request.Request(
        'http://www.dmook.co.kr/genealogy/web/web/getInfo.asp',
        data=data,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        return resp.read().decode('utf-8', errors='replace')

def get_pedigree(scode):
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
        return json.loads(resp.read().decode('utf-8', errors='replace'))

sys.stdout.reconfigure(encoding='utf-8')
print("=== DETAIL of Ryu Bok-gi (378494) ===")
print(get_detail(378494))

print("\n=== PEDIGREE GENERATIONS for 378494 ===")
ped = get_pedigree(378494)
for row in ped:
    gen = row.get('generation')
    members = row.get('info', [])
    names = [f"{m.get('cname')}({m.get('sname')}, code:{m.get('code')}, fcode:{m.get('fcode')})" for m in members]
    print(f"Gen {gen} (count {len(members)}): {', '.join(names[:10])}")
