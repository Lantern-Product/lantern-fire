import { ImageResponse } from "next/og";
import { version as uiVersion } from "@lantern-product/ui/package.json";

export const runtime = "edge";
export const alt = "Lantern Fire — A design system for Lantern products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const components = [
  "Button", "Card", "Dialog", "Badge", "Avatar",
  "Tooltip", "Popover", "Select", "Table", "Tabs",
  "Sheet", "Command", "Accordion", "Sidebar", "Carousel",
];

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px",
          background: "linear-gradient(135deg, #2e1c13 0%, #1e120c 55%, #150d08 100%)",
          color: "#fef9f0",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Subtle warm glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,119,87,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Component name watermark grid */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 16px",
            width: 400,
            opacity: 0.08,
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: 1,
            color: "#fef9f0",
            lineHeight: 1.5,
          }}
        >
          {components.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>

        {/* Top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 161 223"
            width="32"
            height="44"
            fill="#fef9f0"
          >
            <path d="M22.6984 187.179C22.6984 170.484 34.7171 156.597 50.6386 153.579C54.2148 152.898 57.1378 149.312 57.1378 145.694V119.785C57.1378 114.593 52.9084 110.959 47.7482 111.803C20.6571 116.248 0 139.643 0 167.808C0 194.496 18.5343 216.869 43.5188 222.936C44.8252 223.261 46.0826 222.304 46.0826 220.973C46.0826 220.13 45.5437 219.383 44.7435 219.075C31.8594 214.127 22.7147 201.732 22.7147 187.195L22.6984 187.179Z" />
            <path d="M160.44 111.932C160.44 56.1707 119.991 9.78654 66.6582 0.149527C61.4163 -0.79146 57.1216 2.81025 57.1216 8.09925V71.5672C57.1216 75.0554 59.914 78.5922 63.3269 79.3872C96.1824 87.126 120.628 116.459 120.628 151.47C120.628 164.19 117.395 176.147 111.712 186.595C102.388 202.543 89.8138 211.125 79.428 215.749C76.2111 217.015 72.8798 218.053 69.4506 218.864C68.5034 219.091 67.8176 219.919 67.8176 220.892C67.8176 222.206 69.0423 223.212 70.3487 222.936C121.853 211.872 160.44 166.396 160.44 111.916V111.932Z" />
          </svg>
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 0.5,
              opacity: 0.9,
            }}
          >
            Lantern Fire
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              opacity: 0.45,
              marginLeft: 2,
              letterSpacing: 1,
            }}
          >
            v{uiVersion}
          </span>
        </div>

        {/* Center: headline + descriptor */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Eyebrow pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              width: "fit-content",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(217,119,87,0.15)",
                border: "1px solid rgba(217,119,87,0.3)",
                borderRadius: 999,
                padding: "6px 16px",
                fontSize: 14,
                fontWeight: 500,
                color: "#f4a26b",
                letterSpacing: 0.5,
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#d97757",
                }}
              />
              52 components · Tailwind v4 · React 19 · OKLCH tokens
            </div>
          </div>

          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -2.5,
              lineHeight: 1.05,
              maxWidth: 860,
              color: "#fef9f0",
            }}
          >
            A design system for Lantern products.
          </div>

          <div
            style={{
              fontSize: 26,
              fontWeight: 300,
              opacity: 0.6,
              maxWidth: 680,
              lineHeight: 1.4,
            }}
          >
            shadcn/ui primitives, OKLCH design tokens, and utilities — ready to ship.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(254,249,240,0.1)",
          }}
        >
          <span style={{ fontSize: 18, opacity: 0.5, letterSpacing: 0.5 }}>
            design.lantern.codes
          </span>
          <span
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, 'Courier New', monospace",
              fontSize: 17,
              background: "rgba(254,249,240,0.06)",
              border: "1px solid rgba(254,249,240,0.12)",
              borderRadius: 8,
              padding: "8px 18px",
              opacity: 0.75,
              letterSpacing: 0.3,
            }}
          >
            npm install @lantern-product/ui
          </span>
        </div>
      </div>
    ),
    size,
  );
}
