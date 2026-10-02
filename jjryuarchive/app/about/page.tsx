import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-stone-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Project Mission & Philosophy</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
          아카이브 프로젝트 소개
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          뿌리를 잊지 않되, 현대의 디지털 언어로 다시 세우는 전주류씨 수곡파 기록의 집
        </p>
      </div>

      {/* Main Narrative Article */}
      <article className="prose prose-stone lg:prose-lg max-w-none space-y-8 text-slate-700 leading-relaxed">
        {/* Section 1: 작업 동기 */}
        <section className="rounded-2xl border border-amber-900/10 bg-white p-6 sm:p-10 shadow-xs space-y-4">
          <h2 className="font-serif text-2xl font-bold text-slate-900 border-l-4 border-amber-600 pl-3">
            🕊️ 작업 동기: 수몰된 고향과 기억의 단절
          </h2>
          <p>
            전주류씨 수곡파(洙谷派, 일명 무실류씨)는 조선 중기 기봉 류복기(柳復起) 선생의 입향 이래,
            경북 안동군 임동면 수곡리(무실마을)를 중심으로 400여 년간 독자적이고 유서 깊은 문중 문화를 일구어 왔습니다.
            퇴계 학통을 계승한 도학의 가풍과 임진왜란 의병 및 구한말 항일 독립운동에 이르기까지,
            가문은 나라가 위기에 처할 때마다 의(義)를 실천해 온 선비의 고장이었습니다.
          </p>
          <p>
            그러나 <strong>1970년대 중반 안동 다목적댐 건설</strong>로 인해 대대로 이어오던 집성촌 마을 전체가 물속에 잠기게 되었습니다.
            수백 년 된 종택과 정사들은 황급히 해체되어 높은 언덕으로 옮겨졌고,
            오랜 세월 마을을 감싸던 지리적·문화적 맥락은 호수의 물결 아래로 단절되었습니다.
          </p>
          
          <div className="my-6 rounded-xl border border-amber-200 bg-amber-50/70 p-5 text-slate-800 italic font-serif">
            “만약 외세나 국가적 혼란으로 나라가 멸망한다면, 제대로 된 문중의 역사가 사라지는 것은 아닐까?”
          </div>

          <p>
            그 우려는 단순한 기우가 아니었습니다.
            물리적인 공간이 파괴되고 후손들이 도시로 흩어지며,
            젊은 세대들은 자신의 뿌리와 선조들의 역사에 접근하기 어려운 현실에 놓이게 되었습니다.
            이 프로젝트는 바로 그 단절을 극복하고 <strong>가문과 역사를 지키기 위한 최소한의 기록 의무</strong>에서 비롯되었습니다.
          </p>
        </section>

        {/* Section 2: 디지털 영구 보존 철학 */}
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-10 shadow-xs space-y-4">
          <h2 className="font-serif text-2xl font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
            🏛️ 글로벌 분산 저장소: 왜 GitHub인가?
          </h2>
          <p>
            종이로 인쇄된 족보나 특정 개인의 컴퓨터에 저장된 파일은 화재, 침수, 자연재해,
            혹은 후대의 무관심으로 언제든 소실될 수 있습니다.
          </p>
          <p>
            본 아카이브는 전 세계에 분산 보존되는 <strong>글로벌 오픈소스 저장소(GitHub / Git)</strong>와
            웹 표준 기술을 채택하였습니다.
            깃허브의 전 지구적 아카이브 프로그램(Arctic Code Vault 등)을 통해,
            설령 미래에 어떠한 국가적 변란이나 기술적 격변이 발생하더라도
            선조들의 계보와 사료는 후손들에게 오롯이 전승될 수 있도록 보장합니다.
          </p>
        </section>

        {/* Section 3: 원칙 */}
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-10 shadow-xs space-y-4">
          <h2 className="font-serif text-2xl font-bold text-slate-900 border-l-4 border-slate-900 pl-3">
            📜 3대 아카이브 구축 원칙
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="rounded-lg bg-stone-50 p-4 border border-stone-200">
              <h3 className="font-serif font-bold text-base text-slate-900 mb-1">1. 실증적 교차 검증</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                구전 설화에만 의존하지 않고, 조선왕조실록, 승정원일기, 문집(삼산집 등), 족보 판본과의 교차 검증을 거쳐 기록합니다.
              </p>
            </div>
            <div className="rounded-lg bg-stone-50 p-4 border border-stone-200">
              <h3 className="font-serif font-bold text-base text-slate-900 mb-1">2. 열린 데이터 (Open Data)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                족보와 인물 데이터를 구조화된 JSON/TypeScript 형식으로 개방하여 연구자와 후손 누구나 쉽게 활용하도록 합니다.
              </p>
            </div>
            <div className="rounded-lg bg-stone-50 p-4 border border-stone-200">
              <h3 className="font-serif font-bold text-base text-slate-900 mb-1">3. 상호 존중과 참여</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                문중 내 각 지파와 후손들의 다양한 증언과 소장 자료를 편견 없이 수렴하며 지속적으로 보완합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 참여 및 기여 안내 */}
        <section className="rounded-2xl border border-amber-900/10 bg-amber-50/50 p-6 sm:p-10 shadow-xs space-y-4">
          <h2 className="font-serif text-2xl font-bold text-slate-900 border-l-4 border-amber-700 pl-3">
            🤝 참여 및 기여 방법 (Open Archive)
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            본 프로젝트는 전주류씨 종중원 및 후손 누구나 사료를 제보하고 교정할 수 있는 열린 아카이브입니다.
          </p>
          <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
            <li><strong>사료 및 사진 기증:</strong> 안동댐 수몰 이전 무실마을 사진, 종택 및 선조 유품, 고문서 스캔본 제보</li>
            <li><strong>족보 오기 교정:</strong> 생몰년, 자/호, 오탈자, 행적 오류에 대한 정정 요청</li>
            <li><strong>웹 개발 및 데이터 입력 기여:</strong> GitHub Pull Request를 통한 코드 및 데이터 개선</li>
          </ul>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <a
              href="mailto:yunjonglyu@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-800 transition-colors"
            >
              ✉️ 문의 및 자료 제보: yunjonglyu@gmail.com
            </a>
            <a
              href="https://github.com/yoonjonglyu/jjryuarchive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-stone-50 transition-colors"
            >
              GitHub 저장소 참여하기 →
            </a>
          </div>
        </section>

        {/* Section 5: 저작권 및 발기인 */}
        <div className="text-center pt-8 border-t border-stone-200 text-sm text-slate-500 space-y-2">
          <p className="font-serif italic text-slate-700">
            “뿌리를 잊지 않되, 현대의 언어로 기록하다.”
          </p>
          <p>
            기획 및 발기: 전주류씨 수곡파 류윤종
          </p>
          <p className="text-xs">
            사이트 소스코드는 MIT License 하에 공개되며, 사료의 1차 저작권은 각 기여자 및 문중에 귀속됩니다.
          </p>
        </div>
      </article>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4">
        <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
          ← 홈으로 돌아가기
        </Link>
        <Link href="/genealogy" className="text-sm font-semibold text-amber-700 hover:text-amber-900">
          가문 계보도 열람하기 →
        </Link>
      </div>
    </div>
  );
}
