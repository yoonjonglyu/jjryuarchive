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

ancestors = [
    (10, '류희잠', 378744),
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

for gen, name, scode in ancestors:
    print(f"\n==================== [{gen}세] {name} (scode: {scode}) ====================")
    info = get_info(scode)
    fields = {}
    for line in info.splitlines():
        line = line.strip()
        if 'id="SName"' in line: fields['이름'] = line
        elif 'id="Zi"' in line: fields['자'] = line
        elif 'id="Hao"' in line: fields['호'] = line
        elif 'id="SBorn_date"' in line: fields['생년'] = line
        elif 'id="SDead_Date"' in line: fields['졸년'] = line
        elif 'id="FnName"' in line: fields['부명'] = line
    for k, v in fields.items():
        print(f"  {k}: {v}")
    
    det = get_detail(scode)
    clean_det = []
    for line in det.splitlines():
        line = line.strip()
        if line and not line.startswith('<') and not line.startswith('goDic'):
            clean_det.append(line)
    if clean_det:
        print("  [상세 기록/행장]:", " ".join(clean_det[:5]))
