import urllib.request
import urllib.parse
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

def search_name(name):
    params = {
        'Gen_ID': 'aaawjswnfb',
        'New_Gen_ID': 'dlgustns2002',
        'New_Gen_EditorNo': 301,
        'page': 1,
        'pagesize': 50,
        'tblSrch': 1,
        'SNameK': name
    }
    data = urllib.parse.urlencode(params).encode('utf-8')
    req = urllib.request.Request(
        'http://www.dmook.co.kr/genealogy/web/web/getList_SP.asp',
        data=data,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode('utf-8', errors='replace'))

print("=== Search 춘 ===")
items = search_name('춘')
for it in items:
    sinfo = it.get('srchInfo', {})
    if '檜軒' in sinfo.get('s_paName', ''):
        print(f"  {sinfo.get('c_generation')}세 {sinfo.get('c_Name')}({sinfo.get('k_Name')}) - 부: {sinfo.get('k_fName')}, 호:{sinfo.get('Hao', '')}, 코드: {it.get('Code')}")

print("\n=== Search 평 ===")
items = search_name('평')
for it in items:
    sinfo = it.get('srchInfo', {})
    if '檜軒' in sinfo.get('s_paName', ''):
        print(f"  {sinfo.get('c_generation')}세 {sinfo.get('c_Name')}({sinfo.get('k_Name')}) - 부: {sinfo.get('k_fName')}, 코드: {it.get('Code')}")
