import urllib.request
import urllib.parse
import json

def fetch_pedigree(scode):
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
        raw = resp.read()
    
    # Try multiple decodings
    for enc in ['cp949', 'euc-kr', 'utf-8']:
        try:
            txt = raw.decode(enc)
            print(f"Pedigree decoded with {enc} (len={len(txt)}):")
            print(txt[:1000])
            return
        except Exception as e:
            pass

def fetch_info(scode):
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
        raw = resp.read()
    
    for enc in ['cp949', 'euc-kr', 'utf-8']:
        try:
            txt = raw.decode(enc)
            print(f"Info decoded with {enc} (len={len(txt)}):")
            print(txt[:1000])
            return
        except Exception as e:
            pass

if __name__ == '__main__':
    print("=== Testing Pedigree ===")
    fetch_pedigree(378494)
    print("=== Testing Info ===")
    fetch_info(378494)
