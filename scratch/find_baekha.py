import urllib.request
import urllib.parse
import sys

sys.stdout.reconfigure(encoding='utf-8')

def get_info(scode):
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

scodes = [383324, 389388, 391366, 391953, 395683, 396790, 397270, 397327, 399630]
for sc in scodes:
    info = get_info(sc)
    for line in info.splitlines():
        if any(tag in line for tag in ['infoTitle', 'SName', 'Zi', 'Hao', 'FnName']):
            print(f"[{sc}] {line.strip()}")
