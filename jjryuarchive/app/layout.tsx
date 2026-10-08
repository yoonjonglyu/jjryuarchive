import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = "https://yoonjonglyu.github.io/jjryuarchive";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "전주류씨 수곡파 디지털 아카이브 (全州柳氏 水谷派) · 500년 가문 사료 및 21대 계보도",
    template: "%s | 전주류씨 수곡파 디지털 아카이브",
  },
  description:
    "전주류씨 수곡파(무실 류씨) 500년 역사, 시조 완산부원군 류습(柳濕)부터 21대 류동시까지 71위 대동보 연동 주요인물 계보도, 기봉 류복기·삼산 류정원·동암 류장원·정재 류치명·서산 류필영 행적, 유네스코 세계기록유산 유교책판(상변통고 등) 및 안동댐 수몰사 사료를 영구 보존하는 공식 디지털 아카이브입니다.",
  keywords: [
    "전주류씨",
    "전주유씨",
    "전주류씨 수곡파",
    "무실류씨",
    "무실마을",
    "수곡리",
    "류습",
    "완산부원군",
    "류극서",
    "류성",
    "기봉 류복기",
    "류복기",
    "칠잠",
    "류우잠",
    "류희잠",
    "삼산 류정원",
    "류정원",
    "동암 류장원",
    "류장원",
    "정재 류치명",
    "류치명",
    "호고와 류휘문",
    "서산 류필영",
    "백하 류원식",
    "류동시",
    "상변통고",
    "정재집",
    "기봉집",
    "삼산집",
    "유네스코 세계기록유산",
    "유교책판",
    "안동댐 수몰",
    "임하댐 수몰",
    "한국국학진흥원",
    "전주류씨 대동보",
    "족보 계보도",
    "세보",
    "디지털 아카이브",
  ],
  authors: [{ name: "전주류씨 수곡파 류윤종 (Ryuis)", url: BASE_URL }],
  creator: "류윤종 (Ryuis)",
  publisher: "전주류씨 수곡파 디지털 아카이브",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "전주류씨 수곡파 디지털 아카이브 (全州柳氏 水谷派 Digital Archive)",
    description:
      "뿌리를 잊지 않되 현대의 디지털 언어로 영구히 기록하다. 500년 집성촌 무실의 역사, 21대 71위 대동보 연동 계보도, 유네스코 세계기록유산 유교책판 1차 사료를 보존합니다.",
    url: BASE_URL,
    siteName: "전주류씨 수곡파 디지털 아카이브",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/archives/submerged_musil.jpg`,
        width: 1200,
        height: 630,
        alt: "수몰 전 무실마을 전경과 전주류씨 수곡파 고문헌 기록",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "전주류씨 수곡파 디지털 아카이브 (全州柳氏 水谷派)",
    description: "500년 가문 역사와 21대 71위 계보도, 유네스코 세계기록유산 유교책판의 영구 디지털 보존소",
    images: [`${BASE_URL}/images/archives/submerged_musil.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "전주류씨 수곡파 디지털 아카이브",
      "alternateName": [
        "全州柳氏 水谷派 數碼檔案館",
        "Jeonju Ryu Clan Sugok Branch Digital Archive",
        "무실류씨 디지털 아카이브",
      ],
      "description":
        "안동 무실(수곡) 500년 집성촌 역사, 시조 완산부원군 류습(柳濕)부터 21대 류동시까지 71위 대동보 연동 계보도, 유네스코 세계기록유산 유교책판(상변통고 등), 수몰사 1차 사료의 영구 분산 보존 플랫폼",
      "inLanguage": "ko-KR",
      "publisher": {
        "@id": `${BASE_URL}/#organization`,
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/genealogy?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ArchiveOrganization",
      "@id": `${BASE_URL}/#organization`,
      "name": "전주류씨 수곡파 디지털 아카이브",
      "alternateName": "全州柳氏 水谷派",
      "url": BASE_URL,
      "logo": `${BASE_URL}/favicon.ico`,
      "founder": {
        "@type": "Person",
        "name": "류윤종",
        "alternateName": "Ryuis",
        "jobTitle": "Archive Director & Software Engineer",
        "email": "yunjonglyu@gmail.com",
        "description": "전주류씨 24세손 (기봉 류복기 파조 16대손, 희잠공계, 부 류재홍)",
      },
      "knowsAbout": [
        "전주류씨 수곡파 (全州柳氏 水谷派)",
        "무실마을 (수곡리)",
        "완산부원군 류습 (柳濕)",
        "기봉 류복기 (柳復起)",
        "삼산 류정원 (柳正源)",
        "동암 류장원 (柳長源)",
        "정재 류치명 (柳致明)",
        "서산 류필영 (柳必永)",
        "백하 류원식 (柳元植)",
        "유네스코 세계기록유산 한국의 유교책판 (상변통고, 삼산집, 정재집, 기봉집)",
        "안동댐 및 임하댐 수몰사 (1970~1980년대)",
        "전주류씨 대동보 (全州柳氏大同譜)",
      ],
      "sameAs": [
        "https://github.com/yoonjonglyu/jjryuarchive",
        "https://www.koreastudy.or.kr",
        "https://archive.aks.ac.kr",
      ],
    },
    {
      "@type": "Dataset",
      "@id": `${BASE_URL}/#dataset-genealogy`,
      "name": "전주류씨 수곡파 주요인물 계보도 데이터셋 (21대 71위)",
      "description":
        "전주류씨 대동보 공식 식별 코드와 연동된 1세 류습부터 21세 류동시까지 71위 선조의 세수, 생몰년, 자/호, 관직, 부자 관계 구조화 데이터",
      "license": "https://opensource.org/licenses/MIT",
      "inLanguage": "ko-KR",
      "isAccessibleForFree": true,
      "creator": {
        "@id": `${BASE_URL}/#organization`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "전주류씨 수곡파(무실 류씨)는 어떤 가문인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "전주류씨 수곡파(水谷派, 일명 무실 류씨)는 고려 말 완산부원군 류습(柳濕)을 시조로 하며, 8세 류성(柳城) 공이 경북 안동 임동면 수곡리(무실마을)에 입향하고 9세 기봉 류복기(柳復起, 1555~1617) 공이 임진왜란 예안의병장으로 활약하며 영남 남인의 대표 문중으로 번성한 명문 가문입니다. 대사헌 삼산 류정원, 예학의 대가 동암 류장원, 영남 사림의 영수 정재 류치명, 3대 독립운동가 서산 류필영·백하 류원식·류동시 등을 배출했습니다.",
          },
        },
        {
          "@type": "Question",
          "name": "무실마을과 안동댐·임하댐 수몰사는 무엇인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1970년대 안동댐 건설과 1980년대 임하댐 건설로 인해 400여 년간 이어진 전주류씨 수곡파의 집성촌인 수곡리(무실마을)가 호수 아래로 수몰되었습니다. 무실종택, 기양서당, 수애당 등 종중 고택들은 현재의 고지대로 해체 이건되었으며, 본 디지털 아카이브는 수몰로 인해 흩어진 역사와 맥락을 영구 보존하기 위해 설립되었습니다.",
          },
        },
        {
          "@type": "Question",
          "name": "유네스코 세계기록유산에 등재된 수곡파의 문헌은 무엇인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2015년 유네스코 세계기록유산에 등재된 '한국의 유교책판' 중 동암 류장원의 예학 집대성 저작인 『상변통고(常變通攷)』, 정재 류치명의 『정재선생문집(定齋先生文集)』, 삼산 류정원의 『삼산집(三山集)』, 기봉 류복기의 『기봉집(岐峯集)』 목판 등이 전주류씨 수곡파 문중의 대표적 세계기록유산입니다.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" data-theme="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-asharyu-hanji antialiased text-[#0c0c0c] selection:bg-[#AEC6D7]/40 selection:text-[#3E6586]">
        <Navbar />
        <main className="flex-1 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}