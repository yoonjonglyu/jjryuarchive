import Link from "next/link";
import { PEOPLE, ARCHIVE_ITEMS, TIMELINE } from "@/lib/data";
import { assetPath } from "@/lib/utils";

export default function HomePage() {
  const featuredPeople = PEOPLE.slice(0, 4);
  const featuredArchives = ARCHIVE_ITEMS.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section: Yin (음 陰) & Wu Xing (오행 五行) Atmosphere */}
      <section className="relative overflow-hidden bg-[#0c0c0c] text-white pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b-2 border-[#3E6586] shadow-xl">
        {/* Ambient Ki-un (기운) Diffusion */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#7BA2BE] blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#B5A16B] blur-3xl"></div>
        </div>

        <div className="relative container mx-auto max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7BA2BE]/30 bg-[#7BA2BE]/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#AEC6D7] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7BA2BE] animate-pulse"></span>
            전주류씨(全州柳氏) 수곡파 디지털 문헌 보존 아카이브
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            “뿌리를 잊지 않되,<br className="hidden sm:inline" /> 현대의 디지털 언어로 기록하다”
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#C2C2C2] leading-relaxed font-normal">
            안동댐 건설로 수몰된 400년 집성촌 무실(수곡)의 맥락을 되살리고,
            시조 완산백(完山伯) 이래 이어온 가문의 족보와 고문서, 선조들의 행적을
            글로벌 오픈 저장소에 영구히 보존합니다.
          </p>

          {/* Action Buttons (Wood Element: Action & Life) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/genealogy"
              className="btn-asharyu-wood px-6 py-3 text-sm sm:text-base font-semibold shadow-md flex items-center gap-2"
            >
              <span>계보도 탐색하기</span>
              <span>→</span>
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-[#333333] bg-[#1a1a1a]/90 px-6 py-3 text-sm sm:text-base font-semibold text-[#E2E2E2] hover:border-[#7BA2BE] hover:bg-[#222222] transition-all duration-200"
            >
              수몰 역사와 취지 읽기
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-[#1f1f1f]">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-[#D9C58F]">600+ 年</div>
              <div className="text-xs text-[#888888] mt-1">가문 전승 역사</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-[#D9C58F]">16 世</div>
              <div className="text-xs text-[#888888] mt-1">정리된 직계 계보</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-[#D9C58F]">100%</div>
              <div className="text-xs text-[#888888] mt-1">오픈 디지털 아카이브</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-[#D9C58F]">글로벌</div>
              <div className="text-xs text-[#888888] mt-1">GitHub 영구 분산 보존</div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section: Earth Element (토 土) Surface */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="asharyu-surface-earth p-8 sm:p-12 shadow-sm space-y-4">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#917D47]">
              Special Narrative · 水沒史
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c0c0c] leading-snug">
              호수 아래 잠긴 고향, 그러나 기억은 침수되지 않습니다
            </h2>
            <p className="text-[#333333] leading-relaxed text-sm sm:text-base">
              1970년대 안동댐과 1980년대 임하댐 건설로 인해 전주류씨 수곡파가 400여 년간 일구어온
              수곡리(무실마을) 집성촌 전역이 물에 잠겼습니다.
              선조들의 삶터와 문중의 공간적 구심점이 사라지며,
              많은 후손들이 자신의 뿌리와 유산에 닿기 어려운 현실을 맞이했습니다.
            </p>
            <p className="text-[#333333] leading-relaxed text-sm sm:text-base">
              우리는 묻습니다: <strong className="text-[#0c0c0c] font-semibold">“물리적인 공간이 사라졌다면 역사는 어디에 머물러야 하는가?”</strong><br />
              본 프로젝트는 이 물음에 대한 응답입니다. 디지털 코드로 직조된 아카이브는 화재도, 수몰도,
              국가의 혼란도 겪지 않는 영원한 기록의 고향이 될 것입니다.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-semibold text-[#3E6586] hover:text-[#5C83A2] underline underline-offset-4"
              >
                수곡파의 수몰 역사와 아카이빙 비전 자세히 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Explorations: 4 Core Cards with 0.5px Muk-seon Border & Nong-dam Hover */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3E6586]">
            Exploration Pillars
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c0c0c]">
            아카이브 핵심 둘러보기
          </h2>
          <p className="text-[#555555] text-sm sm:text-base">
            원하는 주제를 선택하여 가문의 기록을 체계적으로 열람해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: 계보도 */}
          <Link
            href="/genealogy"
            className="asharyu-surface-card p-6 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ECF2F6] text-[#3E6586] font-serif text-xl font-bold border border-[#AEC6D7]/40">
                譜
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0c0c0c] group-hover:text-[#3E6586] transition-colors">
                수곡파 주요인물 계보도 (21代)
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                완산부원군 류습 공부터 파조 기봉 류복기 공, 정재 류치명 공, 3대 독립운동 선조까지 전주류씨 대동보 DB와 연동된 핵심 주요 인물 71위의 직계 계통을 열람합니다.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E2E2] text-xs font-semibold text-[#3E6586] flex items-center justify-between">
              <span>계보 트리 열람</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Card 2: 인물록 */}
          <Link
            href="/people"
            className="asharyu-surface-card p-6 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F6F1E3] text-[#917D47] font-serif text-xl font-bold border border-[#E8DDBF]/40">
                賢
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0c0c0c] group-hover:text-[#3E6586] transition-colors">
                역사 속 주요 선조
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                임진왜란 예안의병장 기봉공, 영남학파 거유 삼산공, 파리장서 독립청원 서산공 등 가문을 빛낸 주요 인물의 약력과 유묵을 확인합니다.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E2E2] text-xs font-semibold text-[#3E6586] flex items-center justify-between">
              <span>인물 열람실 입장</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Card 3: 사료관 */}
          <Link
            href="/archive"
            className="asharyu-surface-card p-6 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E7F0E6] text-[#4D6B48] font-serif text-xl font-bold border border-[#ACC4A6]/40">
                錄
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0c0c0c] group-hover:text-[#3E6586] transition-colors">
                디지털 사료관
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                『삼산집』 목판본, 기봉정사 상량문, 1974년 수곡리 수몰 직전의 항공 사진 등 실물 사료를 고화질로 디지털 열람합니다.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E2E2] text-xs font-semibold text-[#3E6586] flex items-center justify-between">
              <span>사료 아카이브 열람</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured People Preview */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3E6586]">Representative Figures</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c0c0c]">가문의 대표 인물</h2>
          </div>
          <Link href="/people" className="text-sm font-semibold text-[#3E6586] hover:text-[#5C83A2]">
            전체 인물 보기 ({PEOPLE.length}명) →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredPeople.map((person) => (
            <div
              key={person.id}
              className="asharyu-surface-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#777777] mb-2">
                  <span className="font-mono font-bold bg-[#ECF2F6] text-[#3E6586] px-2 py-0.5 rounded">
                    {person.generation}世
                  </span>
                  <span className="rounded bg-[#FAFAFA] border border-[#E2E2E2] px-2 py-0.5 font-medium text-[11px]">
                    {person.branch}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0c0c0c]">
                  {person.name} <span className="text-sm font-normal text-[#666666]">({person.hanjaName})</span>
                </h3>
                {person.pseudonym && (
                  <p className="text-xs font-medium text-[#917D47] mb-1">{person.pseudonym}</p>
                )}
                <p className="text-xs text-[#555555] line-clamp-3 mt-2 leading-relaxed">
                  {person.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E2E2E2] text-xs text-[#777777] truncate">
                {person.title || "행적 기록"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archive Highlights */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3E6586]">Digitized Records</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c0c0c]">주요 보존 사료</h2>
          </div>
          <Link href="/archive" className="text-sm font-semibold text-[#3E6586] hover:text-[#5C83A2]">
            전체 사료 보기 ({ARCHIVE_ITEMS.length}건) →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArchives.map((item) => (
            <Link
              key={item.id}
              href="/archive"
              className="asharyu-surface-card overflow-hidden flex flex-col justify-between group"
            >
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
                </div>
              )}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    {!item.imageUrl && (
                      <span className="inline-block rounded asharyu-tag-earth px-2.5 py-0.5 text-xs font-medium">
                        {item.categoryLabel}
                      </span>
                    )}
                    <span className="text-xs text-[#888888] font-mono ml-auto">연대: {item.dateOrEra}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#0c0c0c] group-hover:text-[#3E6586] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E2E2E2] text-[11px] text-[#888888] flex items-center justify-between">
                  <span className="truncate max-w-[180px]">보관처: {item.sourceOrKeeper}</span>
                  <span className="text-[#3E6586] font-semibold group-hover:translate-x-1 transition-transform">열람 →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Timeline Section: Ink Line & Wu Xing Points */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3E6586]">Heritage Timeline</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c0c0c]">
            전주류씨 수곡파 역사 연표
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            시조의 입향부터 수몰의 비극, 그리고 디지털 아카이브로 부활하기까지의 궤적
          </p>
        </div>

        <div className="relative border-l-2 border-[#7BA2BE]/60 ml-4 sm:ml-44 space-y-8 pl-6 sm:pl-8 py-4">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#3E6586] shadow-xs group-hover:scale-125 transition-transform" />

              {/* Year badge: mobile flow + desktop right-aligned with proper spacing */}
              <div className="font-serif text-xs sm:text-sm font-bold text-[#3E6586] mb-1.5 sm:mb-0 sm:absolute sm:right-[calc(100%+3.5rem)] sm:top-1 sm:w-36 sm:text-right">
                {item.year}
              </div>

              <div className="bg-white rounded-lg border border-muk-sharp p-4 shadow-2xs">
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#0c0c0c] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}