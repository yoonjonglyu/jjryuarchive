import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "아카이브 소개 · 수몰사와 디지털 영구 보존 비전",
  description:
    "1980년대 임하댐 건설로 수몰된 무실마을의 기억을 복원하고, 국가 소멸과 지형의 침식을 넘어 깃허브(GitHub) 글로벌 분산 저장소에 가문의 역사를 영구 보존하는 오픈 아카이브 철학과 참여 안내.",
  openGraph: {
    title: "아카이브 소개 · 수몰사와 디지털 영구 보존 비전 | 전주류씨 수곡파",
    description:
      "호수 아래 잠긴 고향, 그러나 기억은 침수되지 않습니다. 전주류씨 수곡파 디지털 영구 보존 프로젝트.",
    url: "https://yoonjonglyu.github.io/jjryuarchive/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
