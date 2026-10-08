import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "가문의 대표 인물 · 학통과 호국의 선조",
  description:
    "시조 완산백 류혼 공부터 중흥조 류성, 임진왜란 예안의병장 기봉 류복기, 대사헌 삼산 류정원, 동암 류장원, 영남학파 종장 정재 류치명, 파리장서 서산 류필영, 만주 독립투쟁 백하 류원식까지 전주류씨 수곡파를 빛낸 역대 선조들의 행적과 학문.",
  openGraph: {
    title: "가문의 대표 인물 · 학통과 호국의 선조 | 전주류씨 수곡파",
    description:
      "도학(道學)과 절의(節義)로 영남 사림의 기틀을 세운 전주류씨 수곡파 38대 주요 인물 열전.",
    url: "https://yoonjonglyu.github.io/jjryuarchive/people",
  },
};

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
