with open("jjryuarchive/lib/data.ts", "r", encoding="utf-8") as f:
    orig = f.read()

start_marker = "export const GENEALOGY_TREE: GenealogyNode[] = ["
end_marker = "export const ARCHIVE_ITEMS: ArchiveItem[] = ["

s_idx = orig.find(start_marker)
e_idx = orig.find(end_marker)

if s_idx == -1 or e_idx == -1:
    print(f"Markers not found! s_idx={s_idx}, e_idx={e_idx}")
    exit(1)

with open("scratch/export_tree.ts", "r", encoding="utf-8") as f:
    new_tree = f.read().strip()

new_content = orig[:s_idx] + new_tree + "\n\n// 3. 기록물(아카이브) 데이터\n" + orig[e_idx:]

with open("jjryuarchive/lib/data.ts", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Successfully replaced GENEALOGY_TREE in jjryuarchive/lib/data.ts!")
