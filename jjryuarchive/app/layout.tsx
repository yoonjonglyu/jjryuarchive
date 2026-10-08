import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = "https://yoonjonglyu.github.io/jjryuarchive";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "전주류씨 수곡파 디지털 아카이브 · 500년 가문 사료 영구 보존소",
    template: "%s | 전주류씨 수곡파 디지털 아카이브",
  },
  description:
    "국가 소멸과 지형의 침식을 넘어 500년 무실마을의 역사와 유네스코 세계기록유산 유교책판(상변통고·정재집·기봉집·삼산집), 수몰 전 원경 사진, 3,000여 점의 고문서를 디지털로 영구 보존하는 공식 아카이브입니다.",
  keywords: [
    "전주류씨",
    "전주유씨",
    "수곡파",
    "무실마을",
    "수곡리",
    "기봉 류복기",
    "삼산 류정원",
    "동암 류장원",
    "정재 류치명",
    "호고와 류휘문",
    "상변통고",
    "정재선생문집",
    "기봉집",
    "삼산집",
    "유네스코 세계기록유산",
    "유교책판",
    "임하댐 수몰",
    "안동댐",
    "한국국학진흥원",
    "한국고문서자료관",
    "족보 계보도",
    "세보",
    "디지털 아카이브",
  ],
  authors: [{ name: "전주류씨 수곡파 아카이브 편찬위원회", url: BASE_URL }],
  creator: "전주류씨 수곡파 대종회",
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
      "뿌리를 잊지 않되 현대의 디지털 코드로 영구히 기록하다. 500년 집성촌 무실의 역사와 유네스코 세계기록유산, 3,000여 점의 고문서 1차 사료를 보존합니다.",
    url: BASE_URL,
    siteName: "전주류씨 수곡파 디지털 아카이브",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/archives/submerged_musil.jpg`,
        width: 1200,
        height: 630,
        alt: "수몰 전 무실마을 전경과 500년 전주류씨 수곡파 고문헌 기록",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "전주류씨 수곡파 디지털 아카이브",
    description: "500년 가문 역사와 유네스코 세계기록유산, 수몰지 사료의 영구 디지털 보존소",
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
      "alternateName": "Jeonju Ryu Sugok Branch Digital Archive",
      "description": "500년 무실마을의 역사, 유네스코 세계기록유산 유교책판, 한국국학진흥원 기탁 3,000여 점 고문서의 영구 디지털 보존 플랫폼",
      "inLanguage": "ko-KR",
      "publisher": {
        "@id": `${BASE_URL}/#organization`,
      },
    },
    {
      "@type": "ArchiveOrganization",
      "@id": `${BASE_URL}/#organization`,
      "name": "전주류씨 수곡파 대종회 및 디지털 아카이브",
      "url": BASE_URL,
      "logo": `${BASE_URL}/favicon.ico`,
      "knowsAbout": [
        "전주류씨 수곡파",
        "무실마을",
        "유네스코 세계기록유산 한국의 유교책판",
        "상변통고",
        "정재선생문집",
        "기봉 류복기",
        "삼산 류정원",
        "임하댐 수몰사",
      ],
      "sameAs": [
        "https://www.koreastudy.or.kr",
        "https://archive.aks.ac.kr",
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