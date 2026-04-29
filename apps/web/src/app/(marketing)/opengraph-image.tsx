import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lantern Fire — A design system for Lantern products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// sRGB approximations of Lantern Fire's OKLCH palette: warm-coral primary
// (oklch(0.68 0.21 30)) on the dark warm-brown end of the background ramp.
// next/og can't render oklch().
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
          padding: 80,
          background:
            "radial-gradient(circle at 20% 20%, #f4a26b 0%, #d97757 35%, #6b3a2a 70%, #2a1810 100%)",
          color: "#fef9f0",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 161 223"
            width="36"
            height="50"
            fill="#fef9f0"
          >
            <path d="M22.6984 187.179C22.6984 170.484 34.7171 156.597 50.6386 153.579C54.2148 152.898 57.1378 149.312 57.1378 145.694V119.785C57.1378 114.593 52.9084 110.959 47.7482 111.803C20.6571 116.248 0 139.643 0 167.808C0 194.496 18.5343 216.869 43.5188 222.936C44.8252 223.261 46.0826 222.304 46.0826 220.973C46.0826 220.13 45.5437 219.383 44.7435 219.075C31.8594 214.127 22.7147 201.732 22.7147 187.195L22.6984 187.179Z" />
            <path d="M160.44 111.932C160.44 56.1707 119.991 9.78654 66.6582 0.149527C61.4163 -0.79146 57.1216 2.81025 57.1216 8.09925V71.5672C57.1216 75.0554 59.914 78.5922 63.3269 79.3872C96.1824 87.126 120.628 116.459 120.628 151.47C120.628 164.19 117.395 176.147 111.712 186.595C102.388 202.543 89.8138 211.125 79.428 215.749C76.2111 217.015 72.8798 218.053 69.4506 218.864C68.5034 219.091 67.8176 219.919 67.8176 220.892C67.8176 222.206 69.0423 223.212 70.3487 222.936C121.853 211.872 160.44 166.396 160.44 111.916V111.932Z" />
          </svg>
          <span>Lantern Fire · v0.1.0</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            A design system for Lantern products
          </div>
          <div style={{ fontSize: 30, opacity: 0.85, maxWidth: 920 }}>
            shadcn/ui primitives, OKLCH tokens, and utilities — packaged as
            @lantern-product/ui.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            opacity: 0.8,
          }}
        >
          <span>design.lantern.codes</span>
          <span style={{ fontFamily: "ui-monospace, SFMono-Regular, monospace" }}>
            npm install @lantern-product/ui
          </span>
        </div>
      </div>
    ),
    size,
  );
}
