"use client";

import { useState, useMemo } from "react";
import { GENEALOGY_TREE, GenealogyNode } from "@/lib/data";

export default function GenealogyPage() {
  const [selectedGen, setSelectedGen] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNode, setSelectedNode] = useState<GenealogyNode | null>(null);

  // Filtered nodes
  const filteredNodes = useMemo(() => {
    return GENEALOGY_TREE.filter((node) => {
      const matchGen = selectedGen === "all" || node.generation === selectedGen;
      const matchQuery =
        !searchQuery ||
        node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.hanjaName.includes(searchQuery) ||
        (node.pseudonym && node.pseudonym.includes(searchQuery)) ||
        (node.title && node.title.includes(searchQuery)) ||
        (node.branch && node.branch.includes(searchQuery));
      return matchGen && matchQuery;
    });
  }, [selectedGen, searchQuery]);

  // Unique generations
  const generations = useMemo(() => {
    const gens = Array.from(new Set(GENEALOGY_TREE.map((n) => n.generation)));
    return gens.sort((a, b) => a - b);
  }, []);

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-muk-sharp pb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#3E6586]">
          Lineage Tree & Generations · 譜
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0c0c0c]">
          전주류씨 수곡파 세보(世譜) 계보도
        </h1>
        <p className="text-sm sm:text-base text-[#555555] max-w-2xl mx-auto">
          시조 완산백(完山伯) 류혼 공부터 수곡파 입향 파조 기봉 류복기 공, 삼산 류정원 공으로 이어지는
          가문의 계보를 세대별로 조망하고 인적 사항을 탐색할 수 있습니다.
        </p>
      </div>

      {/* Control Bar: Filter and Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl border border-muk-sharp bg-white p-4 shadow-2xs">
        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="선조 이름, 한자, 호(號), 관직 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-muk-sharp bg-[#FAFAFA] px-4 py-2 text-sm text-[#0c0c0c] placeholder-[#888888] focus:border-[#3E6586] focus:bg-white focus:outline-hidden transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-xs text-[#888888] hover:text-[#0c0c0c]"
            >
              지우기
            </button>
          )}
        </div>

        {/* Generation Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-semibold text-[#666666] whitespace-nowrap">세대(世):</span>
          <button
            onClick={() => setSelectedGen("all")}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              selectedGen === "all"
                ? "bg-[#0c0c0c] text-white font-bold"
                : "bg-[#FAFAFA] text-[#333333] hover:bg-[#F2F2F2] border border-muk-sharp"
            }`}
          >
            전체
          </button>
          {generations.map((gen) => (
            <button
              key={gen}
              onClick={() => setSelectedGen(gen)}
              className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                selectedGen === gen
                  ? "bg-[#3E6586] text-white font-bold shadow-2xs"
                  : "bg-[#FAFAFA] text-[#333333] hover:bg-[#F2F2F2] border border-muk-sharp"
              }`}
            >
              {gen}世
            </button>
          ))}
        </div>
      </div>

      {/* Branch Explanation Box (Earth Surface) */}
      <div className="asharyu-surface-earth p-4 text-xs sm:text-sm text-[#544D3C] flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <span className="font-bold text-[#917D47]">💡 수곡파 계통 안내:</span> 시조 류혼(1세) → 완산부원군 류습(2세) → 묵계공 류극서(3세) → … → <strong>수곡파 파조 기봉 류복기(7세, 안동 무실 입향)</strong> → … → <strong>대사헌 삼산 류정원(11세)</strong>
        </div>
        <span className="text-xs text-[#888888] whitespace-nowrap font-mono">
          검색 결과: <strong className="text-[#0c0c0c]">{filteredNodes.length}</strong>위
        </span>
      </div>

      {/* Genealogy Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredNodes.map((node) => {
          const isSelected = selectedNode?.id === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 relative ${
                isSelected
                  ? "border-[#3E6586] bg-[#ECF2F6]/60 shadow-md ring-2 ring-[#7BA2BE]/30"
                  : "asharyu-surface-card"
              }`}
            >
              {/* Generation Badge */}
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold font-mono px-2 py-0.5 rounded bg-[#ECF2F6] text-[#3E6586]">
                  {node.generation}世
                </span>
                {node.isSubBranchHead && (
                  <span className="rounded bg-[#917D47] text-white px-2 py-0.5 text-[10px] font-bold">
                    파조(派祖)
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="font-serif text-lg font-bold text-[#0c0c0c]">
                {node.name}
              </h3>

              {node.pseudonym && (
                <p className="text-xs font-semibold text-[#917D47] mt-0.5">
                  {node.pseudonym}
                </p>
              )}

              <p className="text-xs text-[#777777] mt-2 font-medium">
                {node.branch}
              </p>

              {node.title && (
                <p className="text-xs text-[#555555] mt-1 line-clamp-1">
                  관직: {node.title}
                </p>
              )}

              <div className="mt-3 pt-2 border-t border-[#E2E2E2] flex items-center justify-between text-[11px] text-[#3E6586] font-semibold">
                <span>상세 정보 보기</span>
                <span>→</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal: Nong-muk (농묵 濃墨) Elevation & Void Spacing */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0c0c]/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-muk-sharp space-y-5">
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-[#888888] hover:bg-[#FAFAFA] hover:text-[#0c0c0c]"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="inline-block font-mono text-xs font-bold text-[#3E6586] bg-[#ECF2F6] px-2 py-0.5 rounded">
                제 {selectedNode.generation}世손
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0c0c0c]">
                {selectedNode.name}
              </h2>
              {selectedNode.pseudonym && (
                <p className="text-sm font-semibold text-[#917D47]">{selectedNode.pseudonym}</p>
              )}
            </div>

            <div className="divide-y divide-[#E2E2E2] text-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-[#777777]">본관 및 분파</span>
                <span className="font-semibold text-[#0c0c0c]">{selectedNode.branch}</span>
              </div>
              {selectedNode.title && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#777777]">관직 및 증직</span>
                  <span className="font-medium text-[#0c0c0c] text-right">{selectedNode.title}</span>
                </div>
              )}
              {selectedNode.fatherId && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-[#777777]">부친(父親)</span>
                  <span className="font-medium text-[#0c0c0c]">
                    {GENEALOGY_TREE.find((n) => n.id === selectedNode.fatherId)?.name || "계통 참조"}
                  </span>
                </div>
              )}
              {selectedNode.childrenIds && (
                <div className="py-2.5 flex justify-between items-start">
                  <span className="text-[#777777]">자녀(子女)</span>
                  <div className="text-right space-y-0.5">
                    {selectedNode.childrenIds.map((cid) => {
                      const child = GENEALOGY_TREE.find((n) => n.id === cid);
                      return child ? (
                        <div key={cid} className="font-medium text-[#0c0c0c]">
                          {child.name}
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
              {selectedNode.note && (
                <div className="py-2.5">
                  <span className="text-[#777777] block mb-1">비고 및 행적</span>
                  <p className="text-xs text-[#333333] bg-[#FAFAFA] p-3 rounded-lg border border-muk-sharp leading-relaxed">
                    {selectedNode.note}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedNode(null)}
                className="btn-asharyu-wood px-5 py-2 text-sm font-semibold"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
