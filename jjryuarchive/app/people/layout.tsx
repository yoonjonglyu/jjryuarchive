import type { Metadata } from "next";

const BASE_URL = "https://yoonjonglyu.github.io/jjryuarchive";

export const metadata: Metadata = {
  title: "역사 속 주요 선조 (주요 인물 열전) · 도학과 호국의 500년 선비 가문",
  description:
    "시조 완산부원군 류습(柳濕) 공부터 입향조 류성, 임진왜란 예안의병장 기봉 류복기, 대사헌 삼산 류정원, 예학의 대가 동암 류장원, 영남학파 종장 정재 류치명, 산남의진 의병장 류시연, 파리장서 서산 류필영, 만주 무장투쟁 백하 류원식, 3대 독립운동가 류동시까지 전주류씨 수곡파를 빛낸 대표 선조의 생애와 학문, 구국 행적 총람.",
  openGraph: {
    title: "역사 속 주요 선조 열전 | 전주류씨 수곡파 디지털 아카이브",
    description:
      "도학(道學)과 절의(節義), 3대 독립운동으로 영남 사림의 기틀을 세운 전주류씨 수곡파 주요 선조 열전 및 사료.",
    url: `${BASE_URL}/people`,
  },
  alternates: {
    canonical: `${BASE_URL}/people`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "전주류씨 수곡파 역사 속 주요 선조 열전",
  "url": `${BASE_URL}/people`,
  "description":
    "임진왜란 의병장 기봉 류복기, 영남 사림의 거유 삼산 류정원, 동암 류장원, 정재 류치명, 독립지사 서산 류필영 등 전주류씨 수곡파 대표 선조 인명록",
  "isPartOf": {
    "@type": "WebSite",
    "name": "전주류씨 수곡파 디지털 아카이브",
    "url": BASE_URL,
  },
};

export default function PeopleLayout({
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
