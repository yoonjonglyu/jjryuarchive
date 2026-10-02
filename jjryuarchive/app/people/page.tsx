"use client";

import { useState, useMemo } from "react";
import { PEOPLE, Person } from "@/lib/data";

const CATEGORIES = [
  { key: "all", label: "전체 인물" },
  { key: "progenitor", label: "시조·중흥조" },
  { key: "patriot", label: "의병·독립지사" },
  { key: "scholar", label: "유학자·학통" },
];

export default function PeoplePage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const filteredPeople = useMemo(() => {
    return PEOPLE.filter((person) => {
      const matchCat = selectedCat === "all" || person.category === selectedCat;
      const matchQuery =
        !searchQuery ||
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.hanjaName.includes(searchQuery) ||
        (person.pseudonym && person.pseudonym.includes(searchQuery)) ||
        (person.title && person.title.includes(searchQuery)) ||
        person.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.achievements.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-stone-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Historical Luminaries</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
          전주류씨 가문의 주요 인물
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          시조 완산백 이래 도학의 정신을 밝히고, 임진왜란과 일제강점기 국난 속에서 충의와 절개를 지킨 선조들의 생애와 업적을 기립니다.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-2xs">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCat(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                selectedCat === cat.key
                  ? "bg-slate-900 text-white shadow-2xs"
                  : "bg-stone-100 text-slate-700 hover:bg-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative sm:w-72">
          <input
            type="text"
            placeholder="인물명, 호, 업적 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-stone-300 bg-stone-50/60 px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-amber-600 focus:bg-white focus:outline-hidden"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Result Count */}
      <div className="text-xs text-slate-500">
        총 <strong className="text-slate-800">{filteredPeople.length}</strong>명의 인물이 등재되어 있습니다.
      </div>

      {/* People Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPeople.map((person) => (
          <div
            key={person.id}
            onClick={() => setSelectedPerson(person)}
            className="cursor-pointer rounded-2xl border border-stone-200 bg-white p-6 shadow-2xs hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="font-mono font-bold bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded">
                  {person.generation}世
                </span>
                <span className="font-medium text-slate-500">{person.branch}</span>
              </div>

              {/* Name & Titles */}
              <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                {person.name} <span className="text-base font-normal text-slate-500">({person.hanjaName})</span>
              </h3>

              {person.pseudonym && (
                <p className="text-xs font-semibold text-amber-800 mt-0.5">
                  {person.pseudonym} {person.courtesyName ? `· 자 ${person.courtesyName}` : ""}
                </p>
              )}

              {person.birthDeath && (
                <p className="text-xs text-slate-400 mt-1">
                  생몰: {person.birthDeath}
                </p>
              )}

              {person.title && (
                <p className="text-xs font-medium text-slate-700 mt-2 bg-stone-50 p-1.5 rounded border border-stone-100">
                  {person.title}
                </p>
              )}

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                {person.summary}
              </p>
            </div>

            {/* Bottom Action */}
            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-700">
              <span>상세 행적 및 유묵 보기</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Person Detail Modal */}
      {selectedPerson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-stone-300 space-y-6">
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-stone-100 hover:text-slate-700"
            >
              ✕
            </button>

            {/* Header */}
            <div className="space-y-2 border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  {selectedPerson.generation}世
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedPerson.branch}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {selectedPerson.name} ({selectedPerson.hanjaName})
              </h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                {selectedPerson.pseudonym && <span>호: <strong>{selectedPerson.pseudonym}</strong></span>}
                {selectedPerson.courtesyName && <span>자: <strong>{selectedPerson.courtesyName}</strong></span>}
                {selectedPerson.birthDeath && <span>생몰: <strong>{selectedPerson.birthDeath}</strong></span>}
              </div>
              {selectedPerson.title && (
                <div className="text-sm font-semibold text-amber-900 mt-2">
                  관직: {selectedPerson.title}
                </div>
              )}
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-sm text-slate-900 uppercase tracking-wide">
                인물 약력 및 개요
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200">
                {selectedPerson.summary}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-sm text-slate-900 uppercase tracking-wide">
                주요 업적 및 역사적 기여
              </h4>
              <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                {selectedPerson.achievements.map((ach, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {ach}
                  </li>
                ))}
              </ul>
            </div>

            {/* Writings and Relics */}
            {(selectedPerson.writings || selectedPerson.relics) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-100 text-xs">
                {selectedPerson.writings && (
                  <div className="p-3 bg-amber-50/50 rounded-lg border border-amber-100">
                    <span className="font-bold text-amber-950 block mb-1">저서 및 문집:</span>
                    <p className="text-slate-700">{selectedPerson.writings.join(", ")}</p>
                  </div>
                )}
                {selectedPerson.relics && (
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="font-bold text-slate-900 block mb-1">관련 유적 및 유물:</span>
                    <p className="text-slate-700">{selectedPerson.relics.join(", ")}</p>
                  </div>
                )}
              </div>
            )}

            {/* Close button */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedPerson(null)}
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
