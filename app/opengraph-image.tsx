import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Toni Grunwald | Product Strategist & Startup Operator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            width: "80px",
            height: "6px",
            background: "#418b6d",
            borderRadius: "3px",
          }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#418b6d",
            }}
          >
            Product · Strategy · 0→1
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#0d2a1f",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Toni Grunwald
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#4a6b5a",
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            Founder-grade product & strategy operator. I build, launch, and ship real things.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              color: "#4a6b5a",
              letterSpacing: "0.05em",
            }}
          >
            toni.grunwald@gmail.com
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 900,
              color: "#0d2a1f",
              letterSpacing: "-0.02em",
            }}
          >
            TG.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
