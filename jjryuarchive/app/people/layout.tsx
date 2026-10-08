import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "가문의 대표 인물 열전 (25人) · 학통과 호국의 선조",
  description:
    "시조 완산백 류혼 공부터 입향조 류성, 임진왜란 예안의병장 기봉 류복기, 대사헌 삼산 류정원, 동암 류장원, 영남학파 종장 정재 류치명, 산남의진 의병장 류시연, 파리장서 서산 류필영, 대한민국 임시정부 국무위원 류림까지 전주류씨 수곡파 500년을 빛낸 25대 대표 선조의 생애와 행적.",
  openGraph: {
    title: "가문의 대표 인물 열전 (25人) · 학통과 호국의 선조 | 전주류씨 수곡파",
    description:
      "도학(道學)과 절의(節義), 3대 독립운동으로 영남 사림의 기틀을 세운 전주류씨 수곡파 25대 주요 인물 열전.",
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
