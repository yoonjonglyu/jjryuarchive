"use client";

import { useState, useMemo } from "react";
import { PEOPLE, Person } from "@/lib/data";

const CATEGORIES = [
  { key: "all", label: "전체 선조 (全)" },
  { key: "progenitor", label: "시조·입향조 (始)" },
  { key: "scholar", label: "유학자·학통 (儒)" },
  { key: "patriot", label: "호국·독립지사 (義)" },
  { key: "official", label: "명신·관료 (官)" },
];

export default function PeoplePage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PEOPLE.length };
    PEOPLE.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredPeople = useMemo(() => {
    return PEOPLE.filter((person) => {
      const matchCat = selectedCat === "all" || person.category === selectedCat;
      const matchQuery =
        !searchQuery ||
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.hanjaName.includes(searchQuery) ||
        (person.pseudonym && person.pseudonym.includes(searchQuery)) ||
        (person.courtesyName && person.courtesyName.includes(searchQuery)) ||
        (person.title && person.title.includes(searchQuery)) ||
        person.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.achievements.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (person.writings && person.writings.some((w) => w.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchCat && matchQuery;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-muk-sharp pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#3E6586]/30 bg-[#ECF2F6] px-3.5 py-1 text-xs font-bold text-[#3E6586]">
          <span>Historical Luminaries · 全州柳氏 洙谷派 25代 先祖</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0c0c0c]">
          가문의 대표 인물 열전 (25人)
        </h1>
        <p className="text-sm sm:text-base text-[#555555] max-w-2xl mx-auto leading-relaxed">
          고려조 완산백 류혼 시조 이래 400여 년 무실(수곡)의 터전을 닦고,
          퇴계 정통 학맥을 계승하여 『상변통고』·『정재집』·『삼산집』 등 불후의 학술을 집대성하며,
          임진왜란 예안의병과 만주 독립투쟁, 파리장서, 대한민국 임시정부 국무위원, 영남 의병 항전에 이르기까지
          조선의 역사와 사상사를 주도한 대표 선조 25인의 생애와 행적을 집대성했습니다.
        </p>

        {/* 4 Summary Highlight Cards */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-center">
          <div className="p-3 rounded-lg bg-white border border-muk-sharp shadow-2xs">
            <div className="text-xs text-[#888888]">시조·입향조</div>
            <div className="text-sm font-bold font-serif text-[#0c0c0c] mt-0.5">류혼 · 류습 · 류성 · 류복기</div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-muk-sharp shadow-2xs">
            <div className="text-xs text-[#888888]">영남 도학·예학 거봉</div>
            <div className="text-sm font-bold font-serif text-[#3E6586] mt-0.5">류정원 · 류장원 · 류치명</div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-muk-sharp shadow-2xs">
            <div className="text-xs text-[#888888]">임진왜란 호국 의병</div>
            <div className="text-sm font-bold font-serif text-[#917D47] mt-0.5">류복기(예안) · 류복립(진주)</div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-muk-sharp shadow-2xs">
            <div className="text-xs text-[#888888]">항일 독립운동 지사</div>
            <div className="text-sm font-bold font-serif text-[#4D6B48] mt-0.5">류필영 · 류인식 · 류림 · 류원식</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl border border-muk-sharp bg-white p-4 shadow-2xs">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.key] || 0;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCat(cat.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCat === cat.key
                    ? "bg-[#0c0c0c] text-white shadow-2xs"
                    : "bg-[#FAFAFA] text-[#333333] hover:bg-[#F2F2F2] border border-muk-sharp"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedCat === cat.key
                      ? "bg-white/20 text-white"
                      : "bg-[#EAEAEA] text-[#666666]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative sm:w-72">
          <input
            type="text"
            placeholder="인물명, 호, 업적 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-muk-sharp bg-[#FAFAFA] px-4 py-2 text-sm text-[#0c0c0c] placeholder-[#888888] focus:border-[#3E6586] focus:bg-white focus:outline-hidden transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-xs text-[#888888] hover:text-[#0c0c0c]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Result Count */}
      <div className="text-xs text-[#777777]">
        총 <strong className="text-[#0c0c0c]">{filteredPeople.length}</strong>명의 선조가 등재되어 있습니다.
      </div>

      {/* People Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPeople.map((person) => (
          <div
            key={person.id}
            onClick={() => setSelectedPerson(person)}
            className="asharyu-surface-card cursor-pointer p-6 flex flex-col justify-between group"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between text-xs text-[#777777] mb-3">
                <span className="font-mono font-bold bg-[#ECF2F6] text-[#3E6586] border border-[#AEC6D7]/40 px-2 py-0.5 rounded">
                  {person.generation}世
                </span>
                <span className="font-medium text-[#777777]">{person.branch}</span>
              </div>

              {/* Name & Titles */}
              <h3 className="font-serif text-xl font-bold text-[#0c0c0c] group-hover:text-[#3E6586] transition-colors">
                {person.name} <span className="text-base font-normal text-[#666666]">({person.hanjaName})</span>
              </h3>

              {person.pseudonym && (
                <p className="text-xs font-semibold text-[#917D47] mt-0.5">
                  {person.pseudonym} {person.courtesyName ? `· 자 ${person.courtesyName}` : ""}
                </p>
              )}

              {person.birthDeath && (
                <p className="text-xs text-[#888888] mt-1">
                  생몰: {person.birthDeath}
                </p>
              )}

              {person.title && (
                <p className="text-xs font-medium text-[#333333] mt-2 bg-[#FAFAFA] p-2 rounded border border-muk-sharp truncate">
                  {person.title}
                </p>
              )}

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#555555] mt-3 line-clamp-3 leading-relaxed">
                {person.summary}
              </p>
            </div>

            {/* Bottom Action */}
            <div className="mt-5 pt-3 border-t border-[#E2E2E2] flex items-center justify-between text-xs font-semibold text-[#3E6586]">
              <span>상세 행적 및 유묵 보기</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Person Detail Modal: Nong-muk Elevation */}
      {selectedPerson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0c0c]/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-muk-sharp space-y-6">
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-[#888888] hover:bg-[#FAFAFA] hover:text-[#0c0c0c]"
            >
              ✕
            </button>

            {/* Header */}
            <div className="space-y-2 border-b border-[#E2E2E2] pb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#3E6586] bg-[#ECF2F6] px-2 py-0.5 rounded">
                  {selectedPerson.generation}世
                </span>
                <span className="text-xs text-[#777777] font-medium">
                  {selectedPerson.branch}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c0c0c]">
                {selectedPerson.name} ({selectedPerson.hanjaName})
              </h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#555555]">
                {selectedPerson.pseudonym && <span>호: <strong>{selectedPerson.pseudonym}</strong></span>}
                {selectedPerson.courtesyName && <span>자: <strong>{selectedPerson.courtesyName}</strong></span>}
                {selectedPerson.birthDeath && <span>생몰: <strong>{selectedPerson.birthDeath}</strong></span>}
              </div>
              {selectedPerson.title && (
                <div className="text-sm font-semibold text-[#3E6586] mt-2">
                  관직: {selectedPerson.title}
                </div>
              )}
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#0c0c0c] uppercase tracking-wide">
                인물 약력 및 개요
              </h4>
              <p className="text-sm text-[#333333] leading-relaxed bg-[#FAFAFA] p-4 rounded-xl border border-muk-sharp">
                {selectedPerson.summary}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#0c0c0c] uppercase tracking-wide">
                주요 업적 및 역사적 기여
              </h4>
              <ul className="space-y-1.5 text-sm text-[#333333] list-disc pl-5">
                {selectedPerson.achievements.map((ach, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {ach}
                  </li>
                ))}
              </ul>
            </div>

            {/* Writings and Relics */}
            {(selectedPerson.writings || selectedPerson.relics) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E2E2E2] text-xs">
                {selectedPerson.writings && (
                  <div className="p-3 bg-[#ECF2F6]/60 rounded-lg border border-[#AEC6D7]/40">
                    <span className="font-bold text-[#3E6586] block mb-1">저서 및 문집:</span>
                    <p className="text-[#333333]">{selectedPerson.writings.join(", ")}</p>
                  </div>
                )}
                {selectedPerson.relics && (
                  <div className="p-3 bg-[#F6F1E3] rounded-lg border border-[#E8DDBF]">
                    <span className="font-bold text-[#917D47] block mb-1">관련 유적 및 유물:</span>
                    <p className="text-[#544D3C]">{selectedPerson.relics.join(", ")}</p>
                  </div>
                )}
              </div>
            )}

            {/* Close button */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedPerson(null)}
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
