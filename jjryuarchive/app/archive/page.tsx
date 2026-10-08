"use client";

import { useState, useMemo } from "react";
import { ARCHIVE_ITEMS, ArchiveItem } from "@/lib/data";
import { assetPath } from "@/lib/utils";

const CATEGORIES = [
  { key: "all", label: "전체 사료 (全)" },
  { key: "document", label: "문헌·고서 (文)" },
  { key: "historic_site", label: "유적·종택 (址)" },
  { key: "submerged_history", label: "수몰사 기록 (水)" },
  { key: "calligraphy", label: "유묵·현판 (墨)" },
];

export default function ArchivePage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: ARCHIVE_ITEMS.length };
    ARCHIVE_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredItems = useMemo(() => {
    return ARCHIVE_ITEMS.filter((item) => {
      const matchCat = selectedCat === "all" || item.category === selectedCat;
      const matchQuery =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.hanjaTitle && item.hanjaTitle.includes(searchQuery)) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.significance.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.sourceOrKeeper.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCat, searchQuery]);

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header: Permanent Digital Preservation Mission */}
      <div className="text-center space-y-3 border-b border-muk-sharp p-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#3E6586]/30 bg-[#ECF2F6] px-3.5 py-1 text-xs font-bold text-[#3E6586]">
          <span>🏛️ 국가 소멸 대비 영구 디지털 보존소 · Permanent Digital Archive</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0c0c0c]">
          전주류씨 수곡파 디지털 사료관
        </h1>
        <p className="text-sm sm:text-base text-[#555555] max-w-2xl mx-auto leading-relaxed">
          국가의 존망과 지형의 침식을 넘어 500년 가문의 정신을 인류의 디지털 유산으로 영구 전승합니다.
          유네스코 세계기록유산 유교책판(상변통고·정재집·기봉집·삼산집), 수곡종택 교지·호적단자·분재기,
          수몰 전 무실마을의 실측 사진과 파리장서·서로군정서 독립운동 사료의 <strong>100% 진본 실물 사진</strong>을 보존합니다.
        </p>

        {/* Quick Summary Highlights */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-center">
          <div className="p-3 rounded-lg bg-white border border-muk-sharp shadow-2xs">
            <div className="text-xs text-[#888888]">핵심 문헌·고서 실물</div>
            <div className="text-lg font-bold font-serif text-[#3E6586] mt-0.5">12종 진본 수록</div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-muk-sharp shadow-2xs">
            <div className="text-xs text-[#888888]">유네스코 세계기록유산</div>
            <div className="text-lg font-bold font-serif text-[#3E6586] mt-0.5">유교책판 6종</div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-muk-sharp shadow-2xs">
            <div className="text-xs text-[#888888]">임하댐 수몰사 기록</div>
            <div className="text-lg font-bold font-serif text-[#3E6586] mt-0.5">무실 원경·지표도</div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-muk-sharp shadow-2xs">
            <div className="text-xs text-[#888888]">한국국학진흥원 기탁</div>
            <div className="text-lg font-bold font-serif text-[#3E6586] mt-0.5">고문서 3,000+ 점</div>
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

      {/* Counter & Preservation Status */}
      <div className="flex justify-between items-center text-xs text-[#777777]">
        <span>총 <strong className="text-[#0c0c0c]">{filteredItems.length}</strong>건의 핵심 사료가 디지털로 영구 보존 중입니다.</span>
        <span className="font-mono text-[11px] text-[#3E6586]">AI 생성물 배제 · 100% 진본 고증 완료</span>
      </div>

      {/* Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="asharyu-surface-card cursor-pointer flex flex-col justify-between group overflow-hidden"
          >
            {/* Image Thumbnail */}
            {item.imageUrl && (
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F2F2F2] border-b border-muk-sharp">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath(item.imageUrl)}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-md asharyu-tag-earth px-2.5 py-1 text-xs font-medium shadow-xs backdrop-blur-xs bg-white/90">
                    {item.categoryLabel}
                  </span>
                </div>
                {item.category === "document" && (
                  <div className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-0.5 text-[10px] text-white font-mono backdrop-blur-xs">
                    실물 진본 사진
                  </div>
                )}
              </div>
            )}

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                {/* Header (when no image, show category tag here) */}
                <div className="flex items-center justify-between text-xs mb-2.5 gap-2">
                  {!item.imageUrl && (
                    <span className="rounded-md asharyu-tag-earth px-2.5 py-0.5 text-xs font-medium whitespace-nowrap shrink-0">
                      {item.categoryLabel}
                    </span>
                  )}
                  <span className="text-[#888888] text-[11px] font-mono ml-auto truncate">
                    {item.dateOrEra}
                  </span>
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
          </div>
        ))}
      </div>

      {/* KRIKS 3,000+ Depository Corpus Showcase */}
      <div className="rounded-2xl border border-muk-sharp bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E2E2] pb-5">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#917D47]">
              Depository Vault System · 韓國國學進興院 寄託古文書群
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0c0c0c]">
              한국국학진흥원 기탁 수곡파 수장고 사료군 (3,000+ 점)
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3E6586]/30 bg-[#ECF2F6] px-3.5 py-1 text-xs font-bold text-[#3E6586]">
            <span>영구 기탁 수장고 보존</span>
          </div>
        </div>

        <p className="text-sm text-[#444444] leading-relaxed">
          임하댐 수몰을 앞두고 전주류씨 수곡파 종중(무실종택·용와종택·삼산문중·정재문중 등)은
          가문이 500년간 간직해 온 <strong>3,000여 점의 방대한 1차 사료</strong>를 
          <strong>한국국학진흥원(안동시 도산면 소재)</strong>에 일괄 기탁하여 항온·항습 설비를 갖춘 장판각과 지하 수장고에 안전하게 안치하였습니다.
          현재 상단의 24개 핵심 사료는 이 방대한 기탁 사료군 중 가장 대표적인 학술·역사적 정수만을 선별하여 고해상도 디지털 실물 사진과 함께 전시한 것입니다.
        </p>

        {/* 6 Vault Classification Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-[#FAFAFA] border border-muk-sharp space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm font-bold text-[#0c0c0c]">Ⅰ. 유교책판 (세계기록유산)</span>
              <span className="text-[11px] font-mono font-bold text-[#3E6586] bg-[#ECF2F6] px-2 py-0.5 rounded">600여 판</span>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              『상변통고』, 『정재선생문집』, 『삼산집』, 『기봉집』, 『호고와집』 등 조선 성리학 및 예학의 결정판 목판 전량 보존.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAFAFA] border border-muk-sharp space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm font-bold text-[#0c0c0c]">Ⅱ. 관서 공문서 및 고신</span>
              <span className="text-[11px] font-mono font-bold text-[#917D47] bg-[#F6F1E3] px-2 py-0.5 rounded">150여 점</span>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              조선 국왕의 붉은 옥새(시명지보)가 날인된 대사헌·이조참판 사령 교지(敎旨), 증직 교첩, 관원 사령 공문서군.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAFAFA] border border-muk-sharp space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm font-bold text-[#0c0c0c]">Ⅲ. 호적단자 및 준호구</span>
              <span className="text-[11px] font-mono font-bold text-[#4D6B48] bg-[#E7F0E6] px-2 py-0.5 rounded">350여 점</span>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              숙종~고종 연간 예안현·안동부 관청에 3년마다 제출한 공인 호적. 4조 혈통과 솔거 노비, 가구 구성의 300년 변천사 실증.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAFAFA] border border-muk-sharp space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm font-bold text-[#0c0c0c]">Ⅳ. 분재기·화회문기 (재산)</span>
              <span className="text-[11px] font-mono font-bold text-[#805030] bg-[#F7EFE9] px-2 py-0.5 rounded">80여 점</span>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              가문 전답·가옥 상속 분배 문서. 균분상속에서 장자우대 상속으로 이행하는 조선 후기 가족제도의 변화를 규명하는 1급 사료.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAFAFA] border border-muk-sharp space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm font-bold text-[#0c0c0c]">Ⅴ. 친필 간찰 및 학술서간</span>
              <span className="text-[11px] font-mono font-bold text-[#3E6586] bg-[#ECF2F6] px-2 py-0.5 rounded">1,000여 통</span>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              용와 류승현, 양파 류관현, 동암 류장원 선생 등이 퇴계학파 석학들과 주고받은 친필 서간, 철학 논변 및 가사 생활 기록.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAFAFA] border border-muk-sharp space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm font-bold text-[#0c0c0c]">Ⅵ. 향약·서당규범·홀기</span>
              <span className="text-[11px] font-mono font-bold text-[#917D47] bg-[#F6F1E3] px-2 py-0.5 rounded">500여 책</span>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed">
              기양서당 완의(完議), 수곡리 향약안, 세덕사 제례 홀기, 문중 계안 등 자치 공동체 운영과 도의적 규범 기록물.
            </p>
          </div>
        </div>

        {/* Links to Official National Repositories */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E2E2] text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#777777] font-medium">공식 수장고 원문 통합 검색:</span>
            <a
              href="https://www.koreastudy.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#3E6586] hover:underline"
            >
              한국국학진흥원 국학자료포털 (koreastudy.or.kr) ↗
            </a>
            <span className="text-[#CCCCCC]">·</span>
            <a
              href="https://archive.aks.ac.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#3E6586] hover:underline"
            >
              한국학중앙연구원 한국고문서자료관 ↗
            </a>
          </div>
          <span className="font-mono text-[11px] text-[#888888]">
            수탁 등록: 한국국학진흥원 국학자료 수장고 전주류씨 기탁군
          </span>
        </div>
      </div>

      {/* Contribution Banner */}
      <div className="asharyu-surface-earth p-6 sm:p-8 text-center space-y-3">
        <h3 className="font-serif text-lg font-bold text-[#0c0c0c]">
          가문의 소중한 사료를 제보해 주세요
        </h3>
        <p className="text-xs sm:text-sm text-[#544D3C] max-w-xl mx-auto leading-relaxed">
          안동댐·임하댐 수몰 전 무실마을의 옛 사진, 고문서 스캔본, 종택 관련 사진, 문집 필사본 등
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

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c0c0c]/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-muk-sharp space-y-6">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-[#888888] hover:bg-[#FAFAFA] hover:text-[#0c0c0c] z-10 bg-white/80"
              aria-label="모달 닫기"
            >
              ✕
            </button>

            {/* Modal Image with Click to Zoom */}
            {selectedItem.imageUrl && (
              <div className="space-y-2">
                <div 
                  onClick={() => setPreviewImage({ url: selectedItem.imageUrl!, title: selectedItem.title })}
                  className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-muk-sharp bg-[#F2F2F2] cursor-zoom-in group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetPath(selectedItem.imageUrl)}
                    alt={selectedItem.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-xs font-medium">
                      🔍 고해상도 원본 사진 크게 보기
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/70 text-white text-[11px] px-2.5 py-0.5 rounded-md backdrop-blur-xs font-mono">
                    소장/출처: {selectedItem.sourceOrKeeper}
                  </div>
                </div>
                <p className="text-[11px] text-center text-[#888888]">
                  ※ 사진을 클릭하시면 고해상도 원본 실물 사진을 확대하여 보실 수 있습니다.
                </p>
              </div>
            )}

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
                역사적 의의 및 영구 보존 가치
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

      {/* Fullscreen High-Res Image Lightbox */}
      {previewImage && (
        <div 
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath(previewImage.url)}
              alt={previewImage.title}
              className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/20"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-lg font-bold bg-white/10 px-3 py-1 rounded-full"
            >
              ✕ 닫기
            </button>
          </div>
          <p className="text-white/90 text-sm font-serif mt-3 text-center">
            {previewImage.title} (실물 사료 원본 고화질 디지털 영구 보존본)
          </p>
        </div>
      )}
    </div>
  );
}
