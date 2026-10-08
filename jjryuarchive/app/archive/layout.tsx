import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "디지털 사료관 · 1차 고문헌 및 목판 영구 보존",
  description:
    "유네스코 세계기록유산 유교책판(상변통고, 정재선생문집, 기봉집, 삼산집, 호고와집), 수곡종택 교지·호적단자·분재기, 수몰 전 무실마을 실측 사진 등 전주류씨 수곡파의 핵심 1차 사료 24종 실물 사진과 한국국학진흥원 기탁 3,000여 점 사료군 총람.",
  openGraph: {
    title: "디지털 사료관 · 1차 고문헌 및 목판 영구 보존 | 전주류씨 수곡파",
    description:
      "국가 소멸 대비 500년 가문 사료의 영구 디지털 보존 및 유네스코 세계기록유산 유교책판 실물 고화질 뷰어.",
    url: "https://yoonjonglyu.github.io/jjryuarchive/archive",
  },
};

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
