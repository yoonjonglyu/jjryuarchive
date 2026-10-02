import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "전주류씨 디지털 아카이브 (全州柳氏 Digital Archive)",
  description: "전주류씨 수곡파의 역사와 인물, 족보 계보 및 안동댐 수몰 기록을 영구 보존하는 디지털 문헌 아카이브",
  keywords: ["전주류씨", "수곡파", "무실마을", "류혼", "류복기", "기봉정사", "삼산 류정원", "족보", "디지털 아카이브"],
  openGraph: {
    title: "전주류씨 디지털 아카이브",
    description: "뿌리를 잊지 않되, 현대의 디지털 언어로 기록하다.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-hanji-pattern antialiased text-slate-800 selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main className="flex-1 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}