"use client";

import { useState, useMemo } from "react";
import { ARCHIVE_ITEMS, ArchiveItem } from "@/lib/data";

const CATEGORIES = [
  { key: "all", label: "전체 사료 (全)" },
  { key: "document", label: "문헌·고서 (文)" },
  { key: "submerged_history", label: "안동댐 수몰사 (水)" },
  { key: "historic_site", label: "유적·종택 (址)" },
  { key: "calligraphy", label: "유묵·현판 (墨)" },
];

export default function ArchivePage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

  const filteredItems = useMemo(() => {
    return ARCHIVE_ITEMS.filter((item) => {
      const matchCat = selectedCat === "all" || item.category === selectedCat;
      const matchQuery =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.hanjaTitle && item.hanjaTitle.includes(searchQuery)) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.significance.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-muk-sharp pb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#3E6586]">
          Digital Archive Repository · 錄
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0c0c0c]">
          전주류씨 디지털 사료관
        </h1>
        <p className="text-sm sm:text-base text-[#555555] max-w-2xl mx-auto">
          『삼산집』을 비롯한 고문헌과 족보 목판본, 안동댐 수몰 이전 무실마을의 사진,
          현판과 유묵 등 가문의 숨결이 깃든 사료를 디지털로 영구 보존합니다.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl border border-muk-sharp bg-white p-4 shadow-2xs">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCat(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                selectedCat === cat.key
                  ? "bg-[#0c0c0c] text-white shadow-2xs"
                  : "bg-[#FAFAFA] text-[#333333] hover:bg-[#F2F2F2] border border-muk-sharp"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative sm:w-72">
          <input
            type="text"
            placeholder="사료명, 키워드, 소장처 검색..."
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

      {/* Counter */}
      <div className="flex justify-between items-center text-xs text-[#777777]">
        <span>총 <strong className="text-[#0c0c0c]">{filteredItems.length}</strong>건의 디지털 사료가 열람 가능합니다.</span>
        <span className="font-mono text-[11px] text-[#3E6586]">교차 검증 사료 등재율 100%</span>
      </div>

      {/* Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="asharyu-surface-card cursor-pointer p-6 flex flex-col justify-between group"
          >
            <div>
              {/* Category tag */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="rounded-md asharyu-tag-earth px-2.5 py-0.5 text-xs font-medium">
                  {item.categoryLabel}
                </span>
                <span className="text-[#888888] text-[11px] font-mono">{item.dateOrEra}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-[#0c0c0c] group-hover:text-[#3E6586] transition-colors leading-snug">
                {item.title}
              </h3>
              {item.hanjaTitle && (
                <p className="text-xs text-[#888888] font-serif mt-0.5">
                  {item.hanjaTitle}
                </p>
              )}

              {/* Location */}
              {item.location && (
                <p className="text-xs text-[#666666] mt-2 flex items-center gap-1">
                  <span>📍</span> {item.location}
                </p>
              )}

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#555555] mt-3 line-clamp-3 leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {item.tag.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-[#FAFAFA] border border-muk-sharp px-2 py-0.5 text-[11px] text-[#555555]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 pt-3 border-t border-[#E2E2E2] flex items-center justify-between text-xs text-[#777777]">
              <span className="truncate max-w-[180px]">{item.sourceOrKeeper}</span>
              <span className="font-semibold text-[#3E6586] group-hover:translate-x-1 transition-transform">
                상세 해제 →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Contribution Banner: Earth Surface */}
      <div className="asharyu-surface-earth p-6 sm:p-8 text-center space-y-3">
        <h3 className="font-serif text-lg font-bold text-[#0c0c0c]">
          가문의 소중한 사료를 제보해 주세요
        </h3>
        <p className="text-xs sm:text-sm text-[#544D3C] max-w-xl mx-auto leading-relaxed">
          안동댐 수몰 전 무실마을의 옛 사진, 고문서 스캔본, 종택 관련 사진, 문집 필사본 등
          후손들이 함께 나누고 보존해야 할 자료가 있으시다면 언제든 디지털 아카이브로 제보 부탁드립니다.
        </p>
        <div className="pt-2">
          <a
            href="mailto:yunjonglyu@gmail.com"
            className="btn-asharyu-wood px-5 py-2 text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
          >
            사료 제보 및 문의하기 (yunjonglyu@gmail.com)
          </a>
        </div>
      </div>

      {/* Item Detail Modal: Nong-muk Elevation */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0c0c]/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-muk-sharp space-y-6">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-[#888888] hover:bg-[#FAFAFA] hover:text-[#0c0c0c]"
            >
              ✕
            </button>

            {/* Header */}
            <div className="space-y-2 border-b border-[#E2E2E2] pb-4">
              <span className="inline-block font-mono text-xs font-semibold asharyu-tag-earth px-2 py-0.5 rounded">
                {selectedItem.categoryLabel}
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0c0c0c]">
                {selectedItem.title}
              </h2>
              {selectedItem.hanjaTitle && (
                <p className="text-sm font-serif text-[#777777]">{selectedItem.hanjaTitle}</p>
              )}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#555555] pt-1">
                <span>시대/연대: <strong>{selectedItem.dateOrEra}</strong></span>
                {selectedItem.location && <span>소재지: <strong>{selectedItem.location}</strong></span>}
                <span>보관/기탁: <strong>{selectedItem.sourceOrKeeper}</strong></span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#0c0c0c] uppercase tracking-wide">
                사료 해제 및 내용
              </h4>
              <p className="text-sm text-[#333333] leading-relaxed bg-[#FAFAFA] p-4 rounded-xl border border-muk-sharp">
                {selectedItem.description}
              </p>
            </div>

            {/* Significance */}
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#0c0c0c] uppercase tracking-wide">
                역사적 의의 및 보존 가치
              </h4>
              <p className="text-sm text-[#544D3C] leading-relaxed bg-[#F6F1E3] p-4 rounded-xl border border-[#E8DDBF]">
                {selectedItem.significance}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {selectedItem.tag.map((t, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-[#FAFAFA] border border-muk-sharp px-3 py-1 text-xs text-[#555555] font-medium"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Close */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedItem(null)}
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
