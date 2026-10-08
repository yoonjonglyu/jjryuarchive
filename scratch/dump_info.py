import urllib.request
import urllib.parse

data = urllib.parse.urlencode({
    'Gen_ID': 'aaawjswnfb',
    'New_Gen_ID': 'dlgustns2002',
    'New_Gen_EditorNo': 301,
    'scode': 378494,
    'infoTab': 1
}).encode('utf-8')

req = urllib.request.Request(
    'http://www.dmook.co.kr/genealogy/web/web/getInfo.asp',
    data=data,
    headers={'User-Agent': 'Mozilla/5.0'}
)
with urllib.request.urlopen(req) as resp:
    headers = dict(resp.headers)
    raw = resp.read()

print("Headers:", headers)
with open("scratch/info_raw.bin", "wb") as f:
    f.write(raw)
print("Saved info_raw.bin, size:", len(raw))
