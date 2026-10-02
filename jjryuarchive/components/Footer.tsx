import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-300 bg-stone-900 text-stone-300 py-12 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: 가문 소개 */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-amber-600 text-slate-950 font-serif font-black text-sm">
                柳
              </span>
              <span className="font-serif font-bold text-lg text-white">전주류씨 디지털 아카이브</span>
            </div>
            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              안동댐 건설로 수몰된 무실(수곡)의 터전을 기억하고, 시조 완산백(完山伯) 이래
              수백 년간 이어져 내려온 가문의 역사와 선조들의 숭고한 정신을 글로벌 분산 저장소에 영구히 기록합니다.
            </p>
            <p className="text-xs text-amber-500 font-serif italic">
              “뿌리를 잊지 않되, 현대의 디지털 언어로 다시 세우다.”
            </p>
          </div>

          {/* Column 2: 바로가기 */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-3">아카이브 탐색</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">프로젝트 취지 및 소개</Link>
              </li>
              <li>
                <Link href="/genealogy" className="hover:text-amber-400 transition-colors">가문 계보 시각화 (세보)</Link>
              </li>
              <li>
                <Link href="/people" className="hover:text-amber-400 transition-colors">역사적 주요 인물록</Link>
              </li>
              <li>
                <Link href="/archive" className="hover:text-amber-400 transition-colors">디지털 문헌 및 수몰 기록</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: 열린 참여 */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-3">열린 기여 (Open Archive)</h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-3">
              사료 사진, 족보 교정, 인물 증언 등 문중과 후손들의 열린 참여를 언제나 환영합니다.
            </p>
            <div className="text-xs space-y-1.5 text-stone-300">
              <p>
                <span className="text-stone-500">문의: </span>
                <a href="mailto:yunjonglyu@gmail.com" className="hover:text-amber-400 underline">
                  yunjonglyu@gmail.com
                </a>
              </p>
              <p>
                <span className="text-stone-500">코드: </span>
                <a
                  href="https://github.com/yoonjonglyu/jjryuarchive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 underline"
                >
                  GitHub Repository (MIT)
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} 전주류씨 수곡파 류윤종 & 종중 기여자 일동.</p>
          <div className="flex gap-4">
            <span>본 아카이브의 1차 사료 저작권은 각 기여자 및 문중에 귀속됩니다.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
