import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#F7F6F2",
          border: "12px solid #0C0C0C",
          fontFamily: "serif",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#ECF2F6",
              border: "1px solid #AEC6D7",
              padding: "6px 18px",
              borderRadius: "20px",
              color: "#3E6586",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            🏛️ 500年 數位記錄館 · Permanent Digital Archive
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#917D47",
              letterSpacing: "4px",
              fontWeight: "bold",
            }}
          >
            全州柳氏 洙谷派
          </div>
        </div>

        {/* Center Title & Slogan */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "900",
              color: "#0C0C0C",
              letterSpacing: "-1px",
              lineHeight: 1.15,
            }}
          >
            전주류씨 수곡파 디지털 아카이브
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#544D3C",
              fontStyle: "italic",
            }}
          >
            “뿌리를 잊지 않되, 현대의 디지털 언어로 기록하다”
          </div>
        </div>

        {/* Bottom 3 Badges */}
        <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              border: "2px solid #0C0C0C",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div style={{ fontSize: "16px", color: "#888888" }}>유네스코 세계기록유산</div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#3E6586", marginTop: "4px" }}>
              유교책판 6종 목판
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              border: "2px solid #0C0C0C",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div style={{ fontSize: "16px", color: "#888888" }}>임하댐·안동댐 수몰사</div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#3E6586", marginTop: "4px" }}>
              무실 원경·실측 기록
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              border: "2px solid #0C0C0C",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <div style={{ fontSize: "16px", color: "#888888" }}>한국국학진흥원 기탁</div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#3E6586", marginTop: "4px" }}>
              고문서 3,000+ 점
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
