from scratch.validate_tree import nodes
import json

ts_lines = ["export const GENEALOGY_TREE: GenealogyNode[] = ["]
for n in nodes:
    ts_lines.append("  {")
    ts_lines.append(f"    id: {json.dumps(n['id'])},")
    ts_lines.append(f"    name: {json.dumps(n['name'], ensure_ascii=False)},")
    ts_lines.append(f"    hanjaName: {json.dumps(n['hanjaName'], ensure_ascii=False)},")
    if 'courtesyName' in n:
        ts_lines.append(f"    courtesyName: {json.dumps(n['courtesyName'], ensure_ascii=False)},")
    if 'pseudonym' in n:
        ts_lines.append(f"    pseudonym: {json.dumps(n['pseudonym'], ensure_ascii=False)},")
    ts_lines.append(f"    generation: {n['generation']},")
    if 'birthDeath' in n:
        ts_lines.append(f"    birthDeath: {json.dumps(n['birthDeath'], ensure_ascii=False)},")
    ts_lines.append(f"    branch: {json.dumps(n['branch'], ensure_ascii=False)},")
    if 'title' in n:
        ts_lines.append(f"    title: {json.dumps(n['title'], ensure_ascii=False)},")
    if n.get('isSubBranchHead'):
        ts_lines.append("    isSubBranchHead: true,")
    if 'fatherId' in n:
        ts_lines.append(f"    fatherId: {json.dumps(n['fatherId'])},")
    if 'childrenIds' in n:
        cids_str = ", ".join(json.dumps(c) for c in n['childrenIds'])
        ts_lines.append(f"    childrenIds: [{cids_str}],")
    if 'note' in n:
        ts_lines.append(f"    note: {json.dumps(n['note'], ensure_ascii=False)},")
    if 'jokboCode' in n:
        ts_lines.append(f"    jokboCode: {n['jokboCode']},")
    if 'jokboBook' in n:
        ts_lines.append(f"    jokboBook: {n['jokboBook']},")
    if 'jokboPage' in n:
        ts_lines.append(f"    jokboPage: {n['jokboPage']},")
    if 'subBranchKey' in n:
        ts_lines.append(f"    subBranchKey: {json.dumps(n['subBranchKey'])},")
    ts_lines.append("  },")
ts_lines.append("];")

with open("scratch/export_tree.ts", "w", encoding="utf-8") as f:
    f.write("\n".join(ts_lines))
print(f"Exported {len(nodes)} nodes to scratch/export_tree.ts")
