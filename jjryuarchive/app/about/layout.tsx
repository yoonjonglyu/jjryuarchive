import type { Metadata } from "next";

const BASE_URL = "https://yoonjonglyu.github.io/jjryuarchive";

export const metadata: Metadata = {
  title: "아카이브 소개 및 발기 취지 · 안동댐 수몰사와 디지털 영구 보존 비전",
  description:
    "1970년대 안동댐 및 1980년대 임하댐 건설로 수몰된 경북 안동 수곡리(무실마을)의 400년 집성촌 기억을 복원하고, 국가 소멸과 물리적 단절을 넘어 깃허브(GitHub) 글로벌 분산 저장소에 전주류씨 수곡파의 역사와 사료를 영구 보존하는 오픈 아카이브의 설립 취지와 24세손 류윤종 디렉터의 소개.",
  openGraph: {
    title: "아카이브 소개 및 발기 취지 | 전주류씨 수곡파 디지털 아카이브",
    description:
      "호수 아래 잠긴 고향, 그러나 기억은 침수되지 않습니다. 전주류씨 수곡파 디지털 영구 보존 프로젝트.",
    url: `${BASE_URL}/about`,
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "전주류씨 수곡파 디지털 아카이브 소개 및 발기 취지",
  "url": `${BASE_URL}/about`,
  "description":
    "안동댐 수몰사 기록 복원 및 국가 소멸 대비 글로벌 오픈소스 영구 보존 프로젝트 비전",
  "isPartOf": {
    "@type": "WebSite",
    "name": "전주류씨 수곡파 디지털 아카이브",
    "url": BASE_URL,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
