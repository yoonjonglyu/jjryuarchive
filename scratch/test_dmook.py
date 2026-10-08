import urllib.request
import urllib.parse
import json

def search(name):
    # test utf-8 vs euc-kr
    data_bytes = urllib.parse.urlencode({
        'Gen_ID': 'aaawjswnfb',
        'New_Gen_ID': 'dlgustns2002',
        'New_Gen_EditorNo': 301,
        'page': 1,
        'pagesize': 10,
        'tblSrch': 1,
        'SNameK': name
    }).encode('utf-8')

    req = urllib.request.Request(
        'http://www.dmook.co.kr/genealogy/web/web/getList_SP.asp',
        data=data_bytes,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        raw = resp.read()
    
    for enc in ['euc-kr', 'cp949', 'utf-8']:
        try:
            decoded = raw.decode(enc)
            print(f"Decoded with {enc}:")
            items = json.loads(decoded)
            for it in items[:3]:
                print(it.get('srchInfo'))
            return
        except Exception as e:
            print(f"Failed {enc}: {e}")

if __name__ == '__main__':
    search('복기')
