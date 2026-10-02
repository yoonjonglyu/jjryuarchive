import Link from "next/link";
import { PEOPLE, ARCHIVE_ITEMS, TIMELINE } from "@/lib/data";

export default function HomePage() {
  const featuredPeople = PEOPLE.slice(0, 4);
  const featuredArchives = ARCHIVE_ITEMS.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-600 shadow-xl">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-500 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600 blur-3xl"></div>
        </div>

        <div className="relative container mx-auto max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-amber-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
            전주류씨(全州柳氏) 수곡파 디지털 문헌 보존 프로젝트
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            “뿌리를 잊지 않되,<br className="hidden sm:inline" /> 현대의 디지털 언어로 기록하다”
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            안동댐 건설로 수몰된 400년 집성촌 무실(수곡)의 맥락을 되살리고,
            시조 완산백(完山伯) 이래 이어온 가문의 족보와 고문서, 선조들의 행적을
            글로벌 오픈 저장소에 영구히 보존합니다.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/genealogy"
              className="rounded-lg bg-amber-600 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 shadow-lg hover:bg-amber-500 transition-all duration-200 hover:-translate-y-0.5"
            >
              계보도 탐색하기 →
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm sm:text-base font-semibold text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-all duration-200"
            >
              수몰 역사와 취지 읽기
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-slate-800/80">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">600+ 년</div>
              <div className="text-xs text-slate-400 mt-1">가문 전승 역사</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">16 世</div>
              <div className="text-xs text-slate-400 mt-1">정리된 직계 계보</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">100%</div>
              <div className="text-xs text-slate-400 mt-1">오픈 디지털 아카이브</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">글로벌</div>
              <div className="text-xs text-slate-400 mt-1">GitHub 영구 분산 보존</div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section: 수곡파와 안동댐 수몰 이야기 */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-amber-900/10 bg-gradient-to-br from-stone-100 via-amber-50/40 to-stone-100 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Special Narrative
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              호수 아래 잠긴 고향, 그러나 기억은 침수되지 않습니다
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              1970년대 중반, 안동 다목적댐 건설로 인해 전주류씨 수곡파가 400여 년간 일구어온
              수곡리(무실마을) 집성촌 전역이 물에 잠겼습니다.
              선조들의 삶터와 문중의 공간적 구심점이 순식간에 사라지며,
              많은 후손들이 자신의 뿌리와 유산에 닿기 어려운 현실을 맞이했습니다.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              우리는 묻습니다: <strong className="text-slate-950 font-semibold">“물리적인 공간이 사라졌다면 역사는 어디에 머물러야 하는가?”</strong><br />
              본 프로젝트는 이 물음에 대한 응답입니다. 디지털 코드로 직조된 아카이브는 화재도, 수몰도,
              국가의 혼란도 겪지 않는 영원한 기록의 고향이 될 것입니다.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-semibold text-amber-800 hover:text-amber-950 underline underline-offset-4"
              >
                수곡파의 수몰 역사와 아카이빙 비전 자세히 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Explorations: 4대 핵심 탐색 */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            아카이브 핵심 둘러보기
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            원하는 주제를 선택하여 가문의 기록을 체계적으로 열람해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: 계보도 */}
          <Link
            href="/genealogy"
            className="group relative rounded-xl border border-stone-200 bg-white p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-900 font-serif text-xl font-bold">
                譜
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                가문 계보 시각화 (세보)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                시조 완산백 류혼 공부터 파조 기봉 류복기 공, 삼산 류정원 공으로 이어지는 수곡파 직계 및 방계 계통을 트리로 조망합니다.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-amber-700 flex items-center justify-between">
              <span>계보 트리 열람</span>
              <span>→</span>
            </div>
          </Link>

          {/* Card 2: 인물록 */}
          <Link
            href="/people"
            className="group relative rounded-xl border border-stone-200 bg-white p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 font-serif text-xl font-bold">
                賢
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                역사 속 주요 선조
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                임진왜란 예안의병장 기봉공, 영남학파 거유 삼산공, 파리장서 독립청원 서산공 등 가문을 빛낸 주요 인물의 약력과 유묵을 확인합니다.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-amber-700 flex items-center justify-between">
              <span>인물 열람실 입장</span>
              <span>→</span>
            </div>
          </Link>

          {/* Card 3: 기록물 */}
          <Link
            href="/archive"
            className="group relative rounded-xl border border-stone-200 bg-white p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone-100 text-stone-800 font-serif text-xl font-bold">
                錄
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                디지털 사료관
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                『삼산집』 목판본, 기봉정사 상량문, 1974년 수곡리 수몰 직전의 항공 사진 등 실물 사료를 고화질로 디지털 열람합니다.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-semibold text-amber-700 flex items-center justify-between">
              <span>사료 아카이브 열람</span>
              <span>→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured People Preview */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Representative Figures</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">가문의 대표 인물</h2>
          </div>
          <Link href="/people" className="text-sm font-semibold text-slate-700 hover:text-amber-800">
            전체 인물 보기 ({PEOPLE.length}명) →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredPeople.map((person) => (
            <div
              key={person.id}
              className="rounded-xl border border-stone-200 bg-white p-5 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono">{person.generation}世</span>
                  <span className="rounded bg-stone-100 px-2 py-0.5 font-medium">{person.branch}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  {person.name} <span className="text-sm font-normal text-slate-500">({person.hanjaName})</span>
                </h3>
                {person.pseudonym && (
                  <p className="text-xs font-medium text-amber-800 mb-1">{person.pseudonym}</p>
                )}
                <p className="text-xs text-slate-600 line-clamp-3 mt-2 leading-relaxed">
                  {person.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-slate-500">
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
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Digitized Records</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">주요 보존 사료</h2>
          </div>
          <Link href="/archive" className="text-sm font-semibold text-slate-700 hover:text-amber-800">
            전체 사료 보기 ({ARCHIVE_ITEMS.length}건) →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArchives.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-stone-200 bg-white p-6 shadow-2xs hover:shadow-sm transition-all space-y-3"
            >
              <span className="inline-block rounded bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 text-xs font-medium">
                {item.categoryLabel}
              </span>
              <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500">연대: {item.dateOrEra}</p>
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2 text-[11px] text-stone-500">
                보관처: {item.sourceOrKeeper}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Heritage Timeline</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            전주류씨 수곡파 역사 연표
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            시조의 입향부터 수몰의 비극, 그리고 디지털 아카이브로 부활하기까지의 궤적
          </p>
        </div>

        <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-8 py-4">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-amber-600 shadow-xs group-hover:scale-125 transition-transform" />

              {/* Year badge for desktop */}
              <div className="sm:absolute sm:-left-36 sm:top-1 sm:w-28 sm:text-right font-serif text-sm font-bold text-amber-800">
                {item.year}
              </div>

              <div className="bg-white rounded-lg border border-stone-200 p-4 shadow-2xs">
                <h3 className="font-serif text-sm sm:text-base font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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