import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://design.lantern.codes";

const STATIC_ROUTES = [
  "",
  "/charts",
  "/charts/area",
  "/charts/bar",
  "/charts/line",
  "/charts/pie",
  "/components",
  "/components/buttons",
  "/components/cards",
  "/components/data",
  "/components/feedback",
  "/components/forms",
  "/components/navigation",
  "/components/overlays",
  "/elements",
  "/elements/avatar",
  "/elements/badge",
  "/elements/button",
  "/elements/button-group",
  "/elements/dropdown",
  "/headings",
  "/headings/card",
  "/headings/page",
  "/headings/section",
  "/layout",
  "/layout/card",
  "/layout/container",
  "/layout/divider",
  "/layout/list-container",
  "/layout/media-object",
  "/shells",
  "/shells/multi-column",
  "/shells/sidebar",
  "/shells/stacked",
  "/tokens",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
