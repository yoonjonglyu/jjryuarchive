import urllib.request
import urllib.parse
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

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

# Trace 류도원 (379005)
print("=== 류도원 (379005) ===")
ped = get_pedigree(379005)
for row in ped:
    gen = row.get('generation')
    members = row.get('info', [])
    names = [f"{m.get('cname')}({m.get('sname')}, code:{m.get('code')}, fcode:{m.get('fcode')})" for m in members]
    if int(gen) >= 14:
        print(f"Gen {gen}세: {', '.join(names[:10])}")

print("\n=== Detail of 379005 (류도원) ===")
det = get_detail(379005)
for line in det.splitlines():
    if line.strip() and not line.startswith('<'):
        print(line.strip())
