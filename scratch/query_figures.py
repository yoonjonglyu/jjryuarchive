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
        'pagesize': 20,
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

def get_person_info(scode):
    data = urllib.parse.urlencode({
        'Gen_ID': 'aaawjswnfb',
        'New_Gen_ID': 'dlgustns2002',
        'New_Gen_EditorNo': 301,
        'scode': scode,
        'infoTab': 1
    }).encode('utf-8')
    req = urllib.request.Request(
        'http://www.dmook.co.kr/genealogy/web/web/getInfo.asp',
        data=data,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        return resp.read().decode('utf-8', errors='replace')

names_to_check = [
    '성', '복기', '복립', '우잠', '득잠', '지잠', '수잠', '의잠', '희잠', '시잠',
    '숙', '직', '욱', '학', '격', '세귀', '세구', '정원', '관원', '도원', '장원',
    '진걸', '주목', '심춘', '도수', '필영', '후평', '연백', '연박', '동시', '동저',
    '원식', '시연', '흥식', '봉시', '치명'
]

results = {}
for name in names_to_check:
    items = search_dmook(name)
    # Filter for those whose father or paName or ancestor matches our line
    sugok_items = []
    for it in items:
        sinfo = it.get('srchInfo', {})
        sugok_items.append({
            'code': it.get('Code'),
            'gen': sinfo.get('c_generation'),
            'k_name': sinfo.get('k_Name'),
            'c_name': sinfo.get('c_Name'),
            'father': sinfo.get('k_fName'),
            'paname': sinfo.get('s_paName'),
            'zi': sinfo.get('zi')
        })
    results[name] = sugok_items
    print(f"=== {name}: {len(sugok_items)} matches ===")
    for m in sugok_items[:5]:
        print(f"  {m['gen']}세 {m['c_name']}({m['k_name']}) - 부: {m['father']}, 파: {m['paname']}, 코드: {m['code']}")
