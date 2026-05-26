"use client";

import {
  ChartLineDefault,
  ChartLineDots,
  ChartLineDotsColors,
  ChartLineDotsCustom,
  ChartLineInteractive,
  ChartLineLabel,
  ChartLineLabelCustom,
  ChartLineLinear,
  ChartLineMultiple,
  ChartLineStep,
} from "@lantern-product/ui/charts/line";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

const previewClassName = "block w-full border-0 bg-transparent p-0 ring-0";

export default function ChartsLinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Charts"
        title="Line charts"
        description="Continuous trends as connected points. Each variant is a composed Card + LineChart recipe themed with --chart-1 through --chart-5. Import from @lantern-product/ui/charts/line."
      />

      <Demo
        title="Default"
        description="Single-series natural curve with a hidden tooltip label."
        code={`import { ChartLineDefault } from "@lantern-product/ui/charts/line";

<ChartLineDefault />`}
        className={previewClassName}
      >
        <ChartLineDefault />
      </Demo>

      <Demo
        title="Linear"
        description="Straight-segment interpolation between data points."
        code={`import { ChartLineLinear } from "@lantern-product/ui/charts/line";

<ChartLineLinear />`}
        className={previewClassName}
      >
        <ChartLineLinear />
      </Demo>

      <Demo
        title="Step"
        description="Step interpolation; good for discrete state transitions over time."
        code={`import { ChartLineStep } from "@lantern-product/ui/charts/line";

<ChartLineStep />`}
        className={previewClassName}
      >
        <ChartLineStep />
      </Demo>

      <Demo
        title="Multiple"
        description="Two monotone series sharing the same axes for direct comparison."
        code={`import { ChartLineMultiple } from "@lantern-product/ui/charts/line";

<ChartLineMultiple />`}
        className={previewClassName}
      >
        <ChartLineMultiple />
      </Demo>

      <Demo
        title="Dots"
        description="Visible data point dots with an enlarged active dot on hover."
        code={`import { ChartLineDots } from "@lantern-product/ui/charts/line";

<ChartLineDots />`}
        className={previewClassName}
      >
        <ChartLineDots />
      </Demo>

      <Demo
        title="Dots colors"
        description="Per-point colored dots driven by a fill key on each data row, mapped to --chart-1 through --chart-5."
        code={`import { ChartLineDotsColors } from "@lantern-product/ui/charts/line";

<ChartLineDotsColors />`}
        className={previewClassName}
      >
        <ChartLineDotsColors />
      </Demo>

      <Demo
        title="Dots custom"
        description="Custom Lucide GitCommitVertical icons rendered at each data point via the dot prop."
        code={`import { ChartLineDotsCustom } from "@lantern-product/ui/charts/line";

<ChartLineDotsCustom />`}
        className={previewClassName}
      >
        <ChartLineDotsCustom />
      </Demo>

      <Demo
        title="Label"
        description="Value labels positioned above each data point via Recharts LabelList."
        code={`import { ChartLineLabel } from "@lantern-product/ui/charts/line";

<ChartLineLabel />`}
        className={previewClassName}
      >
        <ChartLineLabel />
      </Demo>

      <Demo
        title="Custom label"
        description="LabelList with a formatter that maps data keys to display labels from ChartConfig."
        code={`import { ChartLineLabelCustom } from "@lantern-product/ui/charts/line";

<ChartLineLabelCustom />`}
        className={previewClassName}
      >
        <ChartLineLabelCustom />
      </Demo>

      <Demo
        title="Interactive"
        description="Tab-driven metric switcher (Desktop / Mobile) over 3 months of daily data with summary totals in the header."
        code={`import { ChartLineInteractive } from "@lantern-product/ui/charts/line";

<ChartLineInteractive />`}
        className={previewClassName}
      >
        <ChartLineInteractive />
      </Demo>
    </>
  );
}
