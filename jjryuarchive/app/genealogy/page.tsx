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
      <div className="text-center space-y-3 border-b border-stone-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Genealogy & Lineage Tree</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
          전주류씨 수곡파 세보(世譜) 계보도
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          시조 완산백(完山伯) 류혼 공부터 수곡파 입향 파조 기봉 류복기 공, 삼산 류정원 공으로 이어지는
          가문의 계보를 세대별로 조망하고 인적 사항을 탐색할 수 있습니다.
        </p>
      </div>

      {/* Control Bar: Filter and Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-2xs">
        {/* Search */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="선조 이름, 한자, 호(號), 관직 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-stone-300 bg-stone-50/60 px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-amber-600 focus:bg-white focus:outline-hidden"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
            >
              지우기
            </button>
          )}
        </div>

        {/* Generation Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">세대(世):</span>
          <button
            onClick={() => setSelectedGen("all")}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              selectedGen === "all"
                ? "bg-slate-900 text-white font-bold"
                : "bg-stone-100 text-slate-700 hover:bg-stone-200"
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
                  ? "bg-amber-700 text-white font-bold"
                  : "bg-stone-100 text-slate-700 hover:bg-stone-200"
              }`}
            >
              {gen}世
            </button>
          ))}
        </div>
      </div>

      {/* Branch Explanation Box */}
      <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <span className="font-bold text-amber-900">💡 수곡파 계통 안내:</span> 시조 류혼(1세) → 완산부원군 류습(2세) → 묵계공 류극서(3세) → … → <strong>수곡파 파조 기봉 류복기(7세, 안동 무실 입향)</strong> → … → <strong>대사헌 삼산 류정원(11세)</strong>
        </div>
        <span className="text-xs text-stone-500 whitespace-nowrap">
          검색 결과: <strong className="text-slate-900">{filteredNodes.length}</strong>위
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
                  ? "border-amber-600 bg-amber-50/40 shadow-md ring-2 ring-amber-500/20"
                  : "border-stone-200 bg-white hover:border-amber-300 hover:shadow-xs"
              }`}
            >
              {/* Generation Badge */}
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold font-mono px-2 py-0.5 rounded bg-stone-100 text-slate-700">
                  {node.generation}世
                </span>
                {node.isSubBranchHead && (
                  <span className="rounded bg-amber-600 text-white px-2 py-0.5 text-[10px] font-bold">
                    파조(派祖)
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="font-serif text-lg font-bold text-slate-900">
                {node.name}
              </h3>

              {node.pseudonym && (
                <p className="text-xs font-semibold text-amber-800 mt-0.5">
                  {node.pseudonym}
                </p>
              )}

              <p className="text-xs text-slate-500 mt-2 font-medium">
                {node.branch}
              </p>

              {node.title && (
                <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                  관직: {node.title}
                </p>
              )}

              <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-amber-700 font-medium">
                <span>상세 정보 보기</span>
                <span>→</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal / Slide-in Panel */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-300 space-y-5">
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-stone-100 hover:text-slate-700"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="inline-block font-mono text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                제 {selectedNode.generation}世손
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                {selectedNode.name}
              </h2>
              {selectedNode.pseudonym && (
                <p className="text-sm font-semibold text-amber-900">{selectedNode.pseudonym}</p>
              )}
            </div>

            <div className="divide-y divide-stone-100 text-sm">
              <div className="py-2 flex justify-between">
                <span className="text-slate-500">본관 및 분파</span>
                <span className="font-semibold text-slate-800">{selectedNode.branch}</span>
              </div>
              {selectedNode.title && (
                <div className="py-2 flex justify-between">
                  <span className="text-slate-500">관직 및 증직</span>
                  <span className="font-medium text-slate-800 text-right">{selectedNode.title}</span>
                </div>
              )}
              {selectedNode.fatherId && (
                <div className="py-2 flex justify-between">
                  <span className="text-slate-500">부친(父親)</span>
                  <span className="font-medium text-slate-800">
                    {GENEALOGY_TREE.find((n) => n.id === selectedNode.fatherId)?.name || "계통 참조"}
                  </span>
                </div>
              )}
              {selectedNode.childrenIds && (
                <div className="py-2 flex justify-between items-start">
                  <span className="text-slate-500">자녀(子女)</span>
                  <div className="text-right space-y-0.5">
                    {selectedNode.childrenIds.map((cid) => {
                      const child = GENEALOGY_TREE.find((n) => n.id === cid);
                      return child ? (
                        <div key={cid} className="font-medium text-slate-800">
                          {child.name}
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
              {selectedNode.note && (
                <div className="py-2">
                  <span className="text-slate-500 block mb-1">비고 및 행적</span>
                  <p className="text-xs text-slate-700 bg-stone-50 p-2.5 rounded border border-stone-200 leading-relaxed">
                    {selectedNode.note}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedNode(null)}
                className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
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
