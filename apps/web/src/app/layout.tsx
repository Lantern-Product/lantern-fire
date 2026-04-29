import type { Metadata, Viewport } from "next";
import { DM_Sans, Poppins, IBM_Plex_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://design.lantern.codes";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lantern Fire — Design System",
    template: "%s · Lantern Fire",
  },
  description:
    "A design system for Lantern products. shadcn/ui primitives, OKLCH design tokens, and utilities — packaged as @lantern-product/ui.",
  applicationName: "Lantern Fire",
  keywords: [
    "design system",
    "shadcn/ui",
    "Tailwind",
    "OKLCH",
    "Lantern",
    "React",
  ],
  authors: [{ name: "Lantern" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Lantern Fire",
    url: SITE_URL,
    title: "Lantern Fire — Design System",
    description:
      "shadcn/ui primitives, OKLCH design tokens, and utilities packaged as @lantern-product/ui.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lantern Fire — Design System",
    description:
      "shadcn/ui primitives, OKLCH design tokens, and utilities packaged as @lantern-product/ui.",
  },
  robots: { index: true, follow: true },
};

// sRGB approximations of --background light (oklch(0.98 0.02 90)) and
// dark (oklch(0.18 0.03 55)) from packages/ui/styles/globals.css.
// <meta name="theme-color"> can't carry oklch().
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fef9f0" },
    { media: "(prefers-color-scheme: dark)", color: "#211a13" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${poppins.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
