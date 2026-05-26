"use client";

import {
  ChartPieDonut,
  ChartPieDonutActive,
  ChartPieDonutText,
  ChartPieInteractive,
  ChartPieLabel,
  ChartPieLabelCustom,
  ChartPieLabelList,
  ChartPieLegend,
  ChartPieSeparatorNone,
  ChartPieSimple,
  ChartPieStacked,
} from "@lantern-product/ui/charts/pie";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

const previewClassName = "block w-full border-0 bg-transparent p-0 ring-0";

export default function ChartsPiePage() {
  return (
    <>
      <PageHeader
        eyebrow="Charts"
        title="Pie charts"
        description="Part-to-whole proportions rendered as sectors of a disc. Each variant is a composed Card + PieChart recipe themed with --chart-1 through --chart-5. Import from @lantern-product/ui/charts/pie."
      />

      <Demo
        title="Simple"
        description="Basic 5-sector pie chart with per-sector colors driven by ChartConfig keys."
        code={`import { ChartPieSimple } from "@lantern-product/ui/charts/pie";

<ChartPieSimple />`}
        className={previewClassName}
      >
        <ChartPieSimple />
      </Demo>

      <Demo
        title="Separator none"
        description="Same chart with no white separator stroke between sectors for a continuous disc."
        code={`import { ChartPieSeparatorNone } from "@lantern-product/ui/charts/pie";

<ChartPieSeparatorNone />`}
        className={previewClassName}
      >
        <ChartPieSeparatorNone />
      </Demo>

      <Demo
        title="Label"
        description="Default Recharts sector labels showing the numeric value at each slice."
        code={`import { ChartPieLabel } from "@lantern-product/ui/charts/pie";

<ChartPieLabel />`}
        className={previewClassName}
      >
        <ChartPieLabel />
      </Demo>

      <Demo
        title="Custom label"
        description="Custom SVG text rendered at each sector with full control over positioning and styling."
        code={`import { ChartPieLabelCustom } from "@lantern-product/ui/charts/pie";

<ChartPieLabelCustom />`}
        className={previewClassName}
      >
        <ChartPieLabelCustom />
      </Demo>

      <Demo
        title="Label list"
        description="Category labels rendered directly inside each sector via Recharts LabelList."
        code={`import { ChartPieLabelList } from "@lantern-product/ui/charts/pie";

<ChartPieLabelList />`}
        className={previewClassName}
      >
        <ChartPieLabelList />
      </Demo>

      <Demo
        title="Legend"
        description="Pie chart with a wrapped 4-column ChartLegend at the bottom."
        code={`import { ChartPieLegend } from "@lantern-product/ui/charts/pie";

<ChartPieLegend />`}
        className={previewClassName}
      >
        <ChartPieLegend />
      </Demo>

      <Demo
        title="Donut"
        description="Donut variant with an inner radius hole."
        code={`import { ChartPieDonut } from "@lantern-product/ui/charts/pie";

<ChartPieDonut />`}
        className={previewClassName}
      >
        <ChartPieDonut />
      </Demo>

      <Demo
        title="Donut active"
        description="Donut with the first sector expanded outward via a custom Sector shape renderer."
        code={`import { ChartPieDonutActive } from "@lantern-product/ui/charts/pie";

<ChartPieDonutActive />`}
        className={previewClassName}
      >
        <ChartPieDonutActive />
      </Demo>

      <Demo
        title="Donut with text"
        description="Donut with the computed total visitor count centered inside the hole."
        code={`import { ChartPieDonutText } from "@lantern-product/ui/charts/pie";

<ChartPieDonutText />`}
        className={previewClassName}
      >
        <ChartPieDonutText />
      </Demo>

      <Demo
        title="Stacked"
        description="Two concentric pies (inner desktop, outer mobile) sharing the same monthly color keys."
        code={`import { ChartPieStacked } from "@lantern-product/ui/charts/pie";

<ChartPieStacked />`}
        className={previewClassName}
      >
        <ChartPieStacked />
      </Demo>

      <Demo
        title="Interactive"
        description="Donut with a Select-driven active-sector highlight and a dynamic centered total."
        code={`import { ChartPieInteractive } from "@lantern-product/ui/charts/pie";

<ChartPieInteractive />`}
        className={previewClassName}
      >
        <ChartPieInteractive />
      </Demo>
    </>
  );
}
