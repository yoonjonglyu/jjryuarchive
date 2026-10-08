import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "가문 계보도 · 수곡파 세보(世譜) 인터랙티브 트리",
  description:
    "시조 완산백 류혼 공부터 파조 기봉 류복기, 삼산 류정원, 정재 류치명으로 이어지는 전주류씨 수곡파 400년 가계 계보를 세대별·인물별로 인터랙티브하게 탐색할 수 있는 디지털 세보 뷰어.",
  openGraph: {
    title: "가문 계보도 · 수곡파 세보(世譜) 인터랙티브 트리 | 전주류씨 수곡파",
    description:
      "뿌리를 찾는 후손들을 위한 전주류씨 수곡파 직계·방계 인터랙티브 가계도.",
    url: "https://yoonjonglyu.github.io/jjryuarchive/genealogy",
  },
};

export default function GenealogyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
