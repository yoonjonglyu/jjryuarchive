"use client";

import { useState, useMemo } from "react";
import { GENEALOGY_TREE, GenealogyNode } from "@/lib/data";

type BranchFilter = "all" | "root" | "jongpa" | "samsan" | "dongam" | "chiljam";
type ViewMode = "grouped" | "grid";

// Historical era metadata for generation groups
const ERA_GROUPS: {
  id: string;
  title: string;
  hanjaTitle: string;
  generations: number[];
  description: string;
}[] = [
  {
    id: "era-root",
    title: "1. 가문의 뿌리와 안동 무실 입향",
    hanjaTitle: "家門之根 · 水谷入鄕",
    generations: [1, 2, 3, 4, 5, 6, 7, 8],
    description: "고려 말 완산부원군 류습의 오자급제부터 세종 대 집현전 부제학 류의손을 거쳐 안동 임동면 수곡리에 처음 터를 잡은 류성 공까지의 선대",
  },
  {
    id: "era-gibong",
    title: "2. 수곡파 파조 기봉공과 일곱 아들 (칠잠)",
    hanjaTitle: "岐峯公 · 七潛",
    generations: [9, 10],
    description: "임진왜란 예안의병장 기봉 류복기 공이 가문을 영남 대족으로 도약시키고, 일곱 아들(우잠·득잠·지잠·수잠·의잠·희잠·시잠)이 무실 각 문중의 기틀을 확립",
  },
  {
    id: "era-omok",
    title: "3. 오목(五木)과 가학의 전승",
    hanjaTitle: "五木 · 家學傳承",
    generations: [11, 12, 13, 14],
    description: "류우잠의 다섯 아들(숙·직·욱·학·격) 이하 정재계·삼산계·동암계로 분기하며 삼가정 류봉시, 용와 류승현, 양파 류관현 등 학덕 높은 석학 배출",
  },
  {
    id: "era-golden",
    title: "4. 영남 성리학과 예학의 황금기",
    hanjaTitle: "儒學黃金期 · 三山·東巖·壺巖",
    generations: [15, 16, 17],
    description: "대사헌 삼산 류정원, 유네스코 세계기록유산 『상변통고』 찬술자 동암 류장원, 호암 류도원, 호곡 류범휴 등 당대 영남 사림을 주도한 학술 집대성",
  },
  {
    id: "era-jongjang",
    title: "5. 영남 남인의 종장 정재 류치명",
    hanjaTitle: "儒宗 · 定齋 柳致明",
    generations: [18, 19],
    description: "19세기 퇴계학통의 정맥을 이은 영남 사림의 영수 대사헌 정재 류치명과 호고와 류휘문이 주도한 학맥",
  },
  {
    id: "era-patriot",
    title: "6. 국권 수호와 3대 독립운동",
    hanjaTitle: "國權守護 · 獨立運動 3代",
    generations: [20, 21],
    description: "파리장서 서산 류필영, 산남의병장 류시연, 만주 무장투쟁 백하 류원식, 정재 종가 류연박·류동시·류동저 3대 독립운동 가문의 불멸의 충절",
  },
];

export default function GenealogyPage() {
  const [selectedGen, setSelectedGen] = useState<number | "all">("all");
  const [selectedBranch, setSelectedBranch] = useState<BranchFilter>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grouped");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNode, setSelectedNode] = useState<GenealogyNode | null>(null);

  // Filtered nodes
  const filteredNodes = useMemo(() => {
    return GENEALOGY_TREE.filter((node) => {
      const matchGen = selectedGen === "all" || node.generation === selectedGen;
      const matchBranch =
        selectedBranch === "all" ||
        (selectedBranch === "root" && node.generation <= 9) ||
        (selectedBranch !== "root" && node.subBranchKey === selectedBranch);

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        node.name.toLowerCase().includes(q) ||
        node.hanjaName.includes(q) ||
        (node.courtesyName && node.courtesyName.toLowerCase().includes(q)) ||
        (node.pseudonym && node.pseudonym.toLowerCase().includes(q)) ||
        (node.title && node.title.toLowerCase().includes(q)) ||
        (node.branch && node.branch.toLowerCase().includes(q)) ||
        (node.note && node.note.toLowerCase().includes(q)) ||
        (node.jokboCode && String(node.jokboCode).includes(q));

      return matchGen && matchBranch && matchQuery;
    });
  }, [selectedGen, selectedBranch, searchQuery]);

  // Unique generations
  const generations = useMemo(() => {
    const gens = Array.from(new Set(GENEALOGY_TREE.map((n) => n.generation)));
    return gens.sort((a, b) => a - b);
  }, []);

  const branchCounts = useMemo(() => {
    return {
      all: GENEALOGY_TREE.length,
      root: GENEALOGY_TREE.filter((n) => n.generation <= 9).length,
      jongpa: GENEALOGY_TREE.filter((n) => n.subBranchKey === "jongpa" && n.generation >= 10).length,
      samsan: GENEALOGY_TREE.filter((n) => n.subBranchKey === "samsan").length,
      dongam: GENEALOGY_TREE.filter((n) => n.subBranchKey === "dongam").length,
      chiljam: GENEALOGY_TREE.filter((n) => n.subBranchKey === "chiljam").length,
    };
  }, []);

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-muk-sharp pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#3E6586]/30 bg-[#ECF2F6] px-3.5 py-1 text-xs font-bold text-[#3E6586]">
          <span>전주류씨 대동보 공인 연계 · 21代 主要人物 世譜</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0c0c0c] tracking-tight">
          전주류씨 수곡파(水谷派) 주요인물 계보도
        </h1>
        <p className="text-sm sm:text-base text-[#555555] max-w-3xl mx-auto leading-relaxed">
          본 계보도는 전주류씨 대동보(全州柳氏大同譜 9만 7천여 위) 중 안동 무실(수곡)에 입향하여 500년간
          도학과 예학, 의병과 독립운동을 주도한 <strong>핵심 주요 인물 71위의 직계 계통과 분파 맥락을 엄선하여 수록한 주요인물 계보도</strong>입니다.
          공인 인터넷 전자족보 데이터베이스(dmook seq: 335364)와 대조하여 전산 등록 코드(scode)를 100% 연동하였습니다.
        </p>
      </div>

      {/* Official Jokbo DB Sync Banner */}
      <div className="rounded-xl border border-[#917D47]/30 bg-[#F9F7F1] p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="rounded bg-[#917D47] text-white text-[11px] font-bold px-2 py-0.5">
              원전 대조 완료
            </span>
            <span className="font-bold text-sm text-[#0c0c0c]">
              전주류씨 대동보 6권(회헌공파 수곡파 세보) 정본 연동
            </span>
          </div>
          <p className="text-xs text-[#666666] leading-relaxed">
            인물 카드를 클릭하면 각 선조의 <strong>대동보 고유 전산 코드(scode) 및 책 권수·면수</strong>와 함께,
            인터넷 전자족보 뷰어에서 <strong>실제 족보 원문 면주(面註)를 새 창으로 직접 열람</strong>하실 수 있습니다.
          </p>
        </div>
        <a
          href="http://www.dmook.co.kr/genealogy/?seq=335364"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#917D47] bg-white px-3.5 py-2 text-xs font-bold text-[#917D47] hover:bg-[#917D47] hover:text-white transition-colors shadow-2xs"
        >
          <span>전자족보 검색기 원문 열람</span>
          <span>↗</span>
        </a>
      </div>

      {/* Branch Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-muk-sharp pb-3">
        <span className="text-xs font-bold text-[#666666] mr-1">분파 필터:</span>
        <button
          onClick={() => setSelectedBranch("all")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            selectedBranch === "all"
              ? "bg-[#0c0c0c] text-white shadow-2xs"
              : "bg-white text-[#555555] hover:bg-[#F5F5F5] border border-muk-sharp"
          }`}
        >
          전체 ({branchCounts.all})
        </button>
        <button
          onClick={() => setSelectedBranch("root")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            selectedBranch === "root"
              ? "bg-[#917D47] text-white shadow-2xs"
              : "bg-white text-[#555555] hover:bg-[#F5F5F5] border border-muk-sharp"
          }`}
        >
          선대 뿌리 (1~9세, {branchCounts.root})
        </button>
        <button
          onClick={() => setSelectedBranch("jongpa")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            selectedBranch === "jongpa"
              ? "bg-[#3E6586] text-white shadow-2xs"
              : "bg-white text-[#555555] hover:bg-[#F5F5F5] border border-muk-sharp"
          }`}
        >
          무실종택·정재계 ({branchCounts.jongpa})
        </button>
        <button
          onClick={() => setSelectedBranch("samsan")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            selectedBranch === "samsan"
              ? "bg-[#3E6586] text-white shadow-2xs"
              : "bg-white text-[#555555] hover:bg-[#F5F5F5] border border-muk-sharp"
          }`}
        >
          삼산파 ({branchCounts.samsan})
        </button>
        <button
          onClick={() => setSelectedBranch("dongam")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            selectedBranch === "dongam"
              ? "bg-[#3E6586] text-white shadow-2xs"
              : "bg-white text-[#555555] hover:bg-[#F5F5F5] border border-muk-sharp"
          }`}
        >
          동암파 ({branchCounts.dongam})
        </button>
        <button
          onClick={() => setSelectedBranch("chiljam")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            selectedBranch === "chiljam"
              ? "bg-[#3E6586] text-white shadow-2xs"
              : "bg-white text-[#555555] hover:bg-[#F5F5F5] border border-muk-sharp"
          }`}
        >
          칠잠·오목 지파 ({branchCounts.chiljam})
        </button>
      </div>

      {/* Control Toolbar: Search + Generation Select Dropdown + View Mode */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 rounded-xl border border-muk-sharp bg-white p-3.5 shadow-2xs">
        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="선조 성명, 한자, 자(字), 호(號), 관직, 대동보 코드 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-muk-sharp bg-[#FAFAFA] px-3.5 py-2 text-sm text-[#0c0c0c] placeholder-[#888888] focus:border-[#3E6586] focus:bg-white focus:outline-hidden transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2 text-xs text-[#888888] hover:text-[#0c0c0c]"
            >
              지우기
            </button>
          )}
        </div>

        {/* Right Controls: Generation Select & View Toggle */}
        <div className="flex items-center gap-2 justify-between md:justify-end">
          {/* Generation Select Dropdown */}
          <div className="flex items-center gap-1.5">
            <label htmlFor="gen-select" className="text-xs font-semibold text-[#666666] whitespace-nowrap">
              세대:
            </label>
            <select
              id="gen-select"
              value={selectedGen}
              onChange={(e) => setSelectedGen(e.target.value === "all" ? "all" : Number(e.target.value))}
              className="rounded-lg border border-muk-sharp bg-[#FAFAFA] px-2.5 py-1.5 text-xs font-semibold text-[#0c0c0c] focus:border-[#3E6586] focus:bg-white focus:outline-hidden cursor-pointer"
            >
              <option value="all">전체 세대 (1~21세)</option>
              {generations.map((gen) => (
                <option key={gen} value={gen}>
                  제 {gen}세
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center rounded-lg border border-muk-sharp bg-[#FAFAFA] p-0.5">
            <button
              onClick={() => setViewMode("grouped")}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                viewMode === "grouped"
                  ? "bg-white text-[#3E6586] shadow-xs font-bold"
                  : "text-[#666666] hover:text-[#0c0c0c]"
              }`}
            >
              세대별 시대 묶음
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                viewMode === "grid"
                  ? "bg-white text-[#3E6586] shadow-xs font-bold"
                  : "text-[#666666] hover:text-[#0c0c0c]"
              }`}
            >
              카드 그리드
            </button>
          </div>
        </div>
      </div>

      {/* Result Indicator */}
      <div className="flex items-center justify-between text-xs text-[#666666] px-1">
        <span>
          조회된 주요 인물: <strong className="text-[#0c0c0c] font-bold">{filteredNodes.length}</strong>위
          {selectedGen !== "all" && ` · 제 ${selectedGen}세`}
        </span>
        <span className="text-[#888888] hidden sm:inline">
          선조 카드를 누르시면 직계 부자 관계 및 전자족보 원문 상세를 열람하실 수 있습니다.
        </span>
      </div>

      {/* Main Content: Grouped Era View vs Flat Grid View */}
      {viewMode === "grouped" && selectedGen === "all" && !searchQuery ? (
        <div className="space-y-10">
          {ERA_GROUPS.map((era) => {
            const eraNodes = filteredNodes.filter((n) => era.generations.includes(n.generation));
            if (eraNodes.length === 0) return null;

            return (
              <section key={era.id} className="space-y-4">
                {/* Era Header Banner */}
                <div className="rounded-xl border-l-4 border-[#3E6586] bg-white p-4 shadow-2xs border-y border-r border-muk-sharp">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h2 className="font-serif text-lg font-bold text-[#0c0c0c]">
                      {era.title} <span className="text-xs font-normal text-[#917D47] font-serif ml-1.5">{era.hanjaTitle}</span>
                    </h2>
                    <span className="text-xs font-mono font-bold text-[#3E6586] bg-[#ECF2F6] px-2 py-0.5 rounded w-fit">
                      {eraNodes.length}위 수록
                    </span>
                  </div>
                  <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                    {era.description}
                  </p>
                </div>

                {/* Nodes Grid for this Era */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {eraNodes.map((node) => (
                    <AncestorCard
                      key={node.id}
                      node={node}
                      isSelected={selectedNode?.id === node.id}
                      onClick={() => setSelectedNode(node)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        /* Flat Grid View (Used when searching, filtering specific gen, or user chose grid) */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredNodes.map((node) => (
            <AncestorCard
              key={node.id}
              node={node}
              isSelected={selectedNode?.id === node.id}
              onClick={() => setSelectedNode(node)}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredNodes.length === 0 && (
        <div className="text-center py-16 rounded-xl border border-dashed border-muk-sharp bg-white p-8 space-y-3">
          <p className="text-sm font-semibold text-[#555555]">
            검색 조건에 일치하는 주요 인물이 없습니다.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedGen("all");
              setSelectedBranch("all");
            }}
            className="text-xs font-bold text-[#3E6586] underline hover:text-[#0c0c0c]"
          >
            전체 필터 초기화
          </button>
        </div>
      )}

      {/* Detail Modal */}
      {selectedNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0c0c]/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-muk-sharp space-y-5 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-[#888888] hover:bg-[#FAFAFA] hover:text-[#0c0c0c]"
            >
              ✕
            </button>

            <div className="space-y-1 border-b border-muk-sharp pb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#3E6586] bg-[#ECF2F6] px-2 py-0.5 rounded">
                  제 {selectedNode.generation}世
                </span>
                {selectedNode.isSubBranchHead && (
                  <span className="rounded bg-[#917D47] text-white text-[10px] font-bold px-2 py-0.5">
                    파조(派祖)
                  </span>
                )}
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#0c0c0c] pt-1">
                {selectedNode.name}
              </h2>
              {(selectedNode.pseudonym || selectedNode.courtesyName) && (
                <p className="text-sm font-semibold text-[#917D47]">
                  {[selectedNode.pseudonym, selectedNode.courtesyName].filter(Boolean).join(" · ")}
                </p>
              )}
              {selectedNode.birthDeath && (
                <p className="text-xs text-[#777777] font-mono">
                  생몰: {selectedNode.birthDeath}
                </p>
              )}
            </div>

            <div className="divide-y divide-[#EAEAEA] text-sm">
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#777777]">본관 및 문중</span>
                <span className="font-semibold text-[#0c0c0c]">{selectedNode.branch}</span>
              </div>
              {selectedNode.title && (
                <div className="py-2.5 flex justify-between items-start gap-4">
                  <span className="text-[#777777] whitespace-nowrap">관직 및 증직</span>
                  <span className="font-medium text-[#0c0c0c] text-right">{selectedNode.title}</span>
                </div>
              )}
              {selectedNode.fatherId && (
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-[#777777]">부친(父親)</span>
                  {(() => {
                    const father = GENEALOGY_TREE.find((n) => n.id === selectedNode.fatherId);
                    return father ? (
                      <button
                        onClick={() => setSelectedNode(father)}
                        className="font-medium text-[#3E6586] hover:underline"
                      >
                        {father.name} (제 {father.generation}世) ↑
                      </button>
                    ) : (
                      <span className="font-medium text-[#0c0c0c]">계통 참조</span>
                    );
                  })()}
                </div>
              )}
              {selectedNode.childrenIds && selectedNode.childrenIds.length > 0 && (
                <div className="py-2.5 flex justify-between items-start">
                  <span className="text-[#777777]">자녀(子女)</span>
                  <div className="text-right space-y-1">
                    {selectedNode.childrenIds.map((cid) => {
                      const child = GENEALOGY_TREE.find((n) => n.id === cid);
                      return child ? (
                        <button
                          key={cid}
                          onClick={() => setSelectedNode(child)}
                          className="block font-medium text-[#3E6586] hover:underline ml-auto"
                        >
                          {child.name} (제 {child.generation}世) ↓
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              {/* Jokbo Database Reference Box */}
              {selectedNode.jokboCode && (
                <div className="py-3 bg-[#FAFAFA] -mx-2 px-4 rounded-xl border border-muk-sharp my-2 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#917D47]">
                    <span>📜 전주류씨 대동보 DB 등록 정보</span>
                    <span className="font-mono text-[#0c0c0c]">코드 #{selectedNode.jokboCode}</span>
                  </div>
                  {selectedNode.jokboBook && (
                    <div className="text-xs text-[#555555] flex justify-between">
                      <span>수록 위치</span>
                      <span className="font-mono">제 {selectedNode.jokboBook}권 {selectedNode.jokboPage ? `${selectedNode.jokboPage}쪽` : ''}</span>
                    </div>
                  )}
                  <a
                    href={`http://www.dmook.co.kr/fileRoot/kr/d/l/dlgustns2002/DigitalAlbumRoot/210106120031/gene/info.html?scode=${selectedNode.jokboCode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-1 rounded bg-white border border-[#917D47]/40 py-2 text-xs font-bold text-[#917D47] hover:bg-[#917D47] hover:text-white transition-colors shadow-2xs"
                  >
                    <span>전자족보 원문 상세면주(dmook) 열람하기</span>
                    <span>↗</span>
                  </a>
                </div>
              )}

              {selectedNode.note && (
                <div className="py-2.5">
                  <span className="text-[#777777] block mb-1">역사적 의의 및 행적</span>
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

// Reusable Ancestor Card Component
function AncestorCard({
  node,
  isSelected,
  onClick,
}: {
  node: GenealogyNode;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 relative flex flex-col justify-between ${
        isSelected
          ? "border-[#3E6586] bg-[#ECF2F6]/60 shadow-md ring-2 ring-[#7BA2BE]/30"
          : "asharyu-surface-card hover:border-[#3E6586]/40 hover:shadow-xs"
      }`}
    >
      <div>
        {/* Generation & Sub-Branch Badge */}
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-bold font-mono px-2 py-0.5 rounded bg-[#ECF2F6] text-[#3E6586]">
            제 {node.generation}世
          </span>
          <div className="flex items-center gap-1">
            {node.isSubBranchHead && (
              <span className="rounded bg-[#917D47] text-white px-1.5 py-0.5 text-[10px] font-bold">
                파조(派祖)
              </span>
            )}
            {node.jokboCode && (
              <span className="rounded bg-[#F0EFEB] text-[#666666] px-1.5 py-0.5 text-[10px] font-mono">
                #{node.jokboCode}
              </span>
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="font-serif text-lg font-bold text-[#0c0c0c]">
          {node.name}
        </h3>

        {/* Courtesy Name / Pseudonym */}
        {(node.pseudonym || node.courtesyName) && (
          <p className="text-xs font-semibold text-[#917D47] mt-0.5 line-clamp-1">
            {[node.pseudonym, node.courtesyName].filter(Boolean).join(" · ")}
          </p>
        )}

        {/* Branch */}
        <p className="text-xs text-[#666666] mt-2 font-medium line-clamp-1">
          {node.branch}
        </p>

        {/* Title */}
        {node.title && (
          <p className="text-xs text-[#444444] mt-1 line-clamp-1">
            관직: {node.title}
          </p>
        )}
      </div>

      <div className="mt-3.5 pt-2 border-t border-[#EAEAEA] flex items-center justify-between text-[11px] text-[#3E6586] font-semibold">
        <span>상세 계보 및 사료</span>
        <span>→</span>
      </div>
    </div>
  );
}
