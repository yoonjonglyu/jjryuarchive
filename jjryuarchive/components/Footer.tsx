import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-[#0c0c0c] text-[#A2A2A2] py-14 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1: 가문 소개 & 디자인 시스템 철학 */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#1a1a1a] text-[#D9C58F] border border-[#3E6586]/40 font-serif font-black text-sm">
                柳
              </span>
              <span className="font-serif font-bold text-lg text-white">전주류씨 디지털 아카이브</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A2A2A2] max-w-md leading-relaxed">
              안동댐 건설로 수몰된 수곡리(무실)의 터전을 기리고, 시조 완산백(完山伯) 이래
              수백 년간 이어져 내려온 가문의 역사와 선조들의 숭고한 정신을
              글로벌 분산 저장소에 영구히 기록합니다.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#7BA2BE] font-medium pt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7BA2BE]"></span>
              <span>Styled with <strong>asharyu-design-token</strong> (陰陽五行 · 水墨淡彩)</span>
            </div>
          </div>

          {/* Column 2: 바로가기 */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-3 text-[#E2E2E2]">
              아카이브 열람 (門)
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-[#AEC6D7] transition-colors">프로젝트 취지 및 수몰사</Link>
              </li>
              <li>
                <Link href="/genealogy" className="hover:text-[#AEC6D7] transition-colors">가문 계보도 (세보 시각화)</Link>
              </li>
              <li>
                <Link href="/people" className="hover:text-[#AEC6D7] transition-colors">역사 속 주요 선조록</Link>
              </li>
              <li>
                <Link href="/archive" className="hover:text-[#AEC6D7] transition-colors">디지털 사료 및 수몰 사진</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: 열린 기여 */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-3 text-[#E2E2E2]">
              열린 참여 (共)
            </h3>
            <p className="text-xs text-[#888888] leading-relaxed mb-3">
              사료 사진, 족보 교정, 인물 증언 등 문중과 후손들의 열린 참여를 언제나 환영합니다.
            </p>
            <div className="text-xs space-y-1.5 text-[#A2A2A2]">
              <p>
                <span className="text-[#666666]">문의: </span>
                <a href="mailto:yunjonglyu@gmail.com" className="hover:text-[#AEC6D7] underline">
                  yunjonglyu@gmail.com
                </a>
              </p>
              <p>
                <span className="text-[#666666]">코드: </span>
                <a
                  href="https://github.com/yoonjonglyu/jjryuarchive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#AEC6D7] underline"
                >
                  GitHub Repository (Open Source)
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#666666] gap-4">
          <p>© {new Date().getFullYear()} 전주류씨 수곡파 류윤종 & 종중 기여자 일동.</p>
          <div className="flex gap-4">
            <span>본 아카이브의 1차 사료 저작권은 각 기여자 및 문중에 귀속됩니다.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
