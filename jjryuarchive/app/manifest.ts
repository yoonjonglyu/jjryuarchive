import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "전주류씨 수곡파 디지털 아카이브",
    short_name: "전주류씨 아카이브",
    description: "500년 가문의 역사와 유네스코 세계기록유산, 수몰지 사료를 영구 보존하는 디지털 문헌 보존소",
    start_url: "./",
    display: "standalone",
    background_color: "#F6F5F2",
    theme_color: "#0c0c0c",
    icons: [
      {
        src: "./favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
