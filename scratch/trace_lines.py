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

def trace_lineage(scode, label):
    print(f"\n==================== LINEAGE OF {label} (scode={scode}) ====================")
    ped = get_pedigree(scode)
    # The direct line can be traced using father codes
    code_map = {}
    for row in ped:
        gen = int(row.get('generation'))
        for m in row.get('info', []):
            code_map[m.get('code')] = {**m, 'generation': gen}
    
    # Trace upwards from target scode
    curr = str(scode)
    line = []
    while curr in code_map and curr != '0':
        node = code_map[curr]
        line.append(node)
        curr = str(node.get('fcode', '0'))
    
    line.reverse()
    for n in line:
        print(f"Gen {n['generation']}세: {n.get('cname')}({n.get('sname')}) [code: {n.get('code')}]")

if __name__ == '__main__':
    # 류연박 (389492)
    trace_lineage(389492, "류연박(淵博)")
    # 류필영 (392274)
    trace_lineage(392274, "류필영(必永)")
    # 류시연 (390295)
    trace_lineage(390295, "류시연(時淵)")
