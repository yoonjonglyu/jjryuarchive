import urllib.request
import urllib.parse
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

def search_dmook(name, generation=None):
    params = {
        'Gen_ID': 'aaawjswnfb',
        'New_Gen_ID': 'dlgustns2002',
        'New_Gen_EditorNo': 301,
        'page': 1,
        'pagesize': 50,
        'tblSrch': 1,
        'SNameK': name
    }
    if generation:
        params['Generation'] = generation
    data = urllib.parse.urlencode(params).encode('utf-8')
    req = urllib.request.Request(
        'http://www.dmook.co.kr/genealogy/web/web/getList_SP.asp',
        data=data,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        txt = resp.read().decode('utf-8', errors='replace')
        try:
            return json.loads(txt)
        except:
            return []

for name in ['원식', '도원', '주목', '심춘', '후평', '진걸', '치명', '관원']:
    items = search_dmook(name)
    print(f"\n=== Search {name} ===")
    for it in items:
        sinfo = it.get('srchInfo', {})
        if '檜軒' in sinfo.get('s_paName', ''):
            print(f"  {sinfo.get('c_generation')}세 {sinfo.get('c_Name')}({sinfo.get('k_Name')}) - 부: {sinfo.get('k_fName')}, 파: {sinfo.get('s_paName')}, 코드: {it.get('Code')}")
