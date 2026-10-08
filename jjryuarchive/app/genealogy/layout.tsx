import type { Metadata } from "next";

const BASE_URL = "https://yoonjonglyu.github.io/jjryuarchive";

export const metadata: Metadata = {
  title: "수곡파 주요인물 계보도 (21代 71位) · 대동보 연동 가계도",
  description:
    "전주류씨 대동보(全州柳氏大同譜) 공인 데이터 기반 1세 완산부원군 류습(柳濕) 공부터 파조 기봉 류복기, 칠잠(七潛), 오목(五木), 삼산 류정원, 동암 류장원, 정재 류치명, 21세 독립운동가 류동시까지 21세대 71위 선조의 직계·방계 계보와 세대별 역사 플로우를 인터랙티브하게 탐색할 수 있는 공식 디지털 세보 뷰어.",
  openGraph: {
    title: "수곡파 주요인물 계보도 (21代 71位) | 전주류씨 수곡파 디지털 아카이브",
    description:
      "뿌리를 찾는 후손들을 위한 전주류씨 수곡파 21대 71위 대동보 연동 인터랙티브 가계도 및 세대별 역사 흐름.",
    url: `${BASE_URL}/genealogy`,
  },
  alternates: {
    canonical: `${BASE_URL}/genealogy`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "전주류씨 수곡파 주요인물 계보도 (21대 71위)",
  "url": `${BASE_URL}/genealogy`,
  "description":
    "전주류씨 대동보 공인 데이터 연동 21세대 71위 선조의 직계 가계 계보도 및 세수 탐색 시스템",
  "isPartOf": {
    "@type": "WebSite",
    "name": "전주류씨 수곡파 디지털 아카이브",
    "url": BASE_URL,
  },
};

export default function GenealogyLayout({
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
