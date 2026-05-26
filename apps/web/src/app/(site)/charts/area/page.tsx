"use client";

import {
  ChartAreaAxes,
  ChartAreaDefault,
  ChartAreaGradient,
  ChartAreaIcons,
  ChartAreaInteractive,
  ChartAreaLegend,
  ChartAreaLinear,
  ChartAreaStacked,
  ChartAreaStackedExpand,
  ChartAreaStep,
} from "@lantern-product/ui/charts/area";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

const previewClassName = "block w-full border-0 bg-transparent p-0 ring-0";

export default function ChartsAreaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Charts"
        title="Area charts"
        description="Continuous-trend visualizations with filled curves. Each variant is a composed Card + AreaChart recipe themed with --chart-1 through --chart-5. Import from @lantern-product/ui/charts/area."
      />

      <Demo
        title="Default"
        description="A single-series area chart with a natural curve and line indicator tooltip."
        code={`import { ChartAreaDefault } from "@lantern-product/ui/charts/area";

<ChartAreaDefault />`}
        className={previewClassName}
      >
        <ChartAreaDefault />
      </Demo>

      <Demo
        title="Linear"
        description="Linear interpolation between points; useful for showing exact data shape."
        code={`import { ChartAreaLinear } from "@lantern-product/ui/charts/area";

<ChartAreaLinear />`}
        className={previewClassName}
      >
        <ChartAreaLinear />
      </Demo>

      <Demo
        title="Step"
        description="Step interpolation with an icon-decorated tooltip; good for discrete state transitions."
        code={`import { ChartAreaStep } from "@lantern-product/ui/charts/area";

<ChartAreaStep />`}
        className={previewClassName}
      >
        <ChartAreaStep />
      </Demo>

      <Demo
        title="Stacked"
        description="Two series stacked with --chart-1 and --chart-2 for cumulative totals."
        code={`import { ChartAreaStacked } from "@lantern-product/ui/charts/area";

<ChartAreaStacked />`}
        className={previewClassName}
      >
        <ChartAreaStacked />
      </Demo>

      <Demo
        title="Stacked expanded"
        description="Three series normalized to 100% with stackOffset=&quot;expand&quot; for share-of-total trends."
        code={`import { ChartAreaStackedExpand } from "@lantern-product/ui/charts/area";

<ChartAreaStackedExpand />`}
        className={previewClassName}
      >
        <ChartAreaStackedExpand />
      </Demo>

      <Demo
        title="Gradient"
        description="SVG linearGradient fills referenced through CSS variables for token-driven theming."
        code={`import { ChartAreaGradient } from "@lantern-product/ui/charts/area";

<ChartAreaGradient />`}
        className={previewClassName}
      >
        <ChartAreaGradient />
      </Demo>

      <Demo
        title="Legend"
        description="Custom ChartLegend with ChartLegendContent rendered below the plot area."
        code={`import { ChartAreaLegend } from "@lantern-product/ui/charts/area";

<ChartAreaLegend />`}
        className={previewClassName}
      >
        <ChartAreaLegend />
      </Demo>

      <Demo
        title="Axes"
        description="Both X and Y axes shown with minimal tick styling for richer reference frames."
        code={`import { ChartAreaAxes } from "@lantern-product/ui/charts/area";

<ChartAreaAxes />`}
        className={previewClassName}
      >
        <ChartAreaAxes />
      </Demo>

      <Demo
        title="Icons"
        description="Lucide icons attached to ChartConfig entries appear in both tooltip and legend."
        code={`import { ChartAreaIcons } from "@lantern-product/ui/charts/area";

<ChartAreaIcons />`}
        className={previewClassName}
      >
        <ChartAreaIcons />
      </Demo>

      <Demo
        title="Interactive"
        description="Select-driven time-range filter (7d / 30d / 90d) over 3 months of daily data, with gradient fills."
        code={`import { ChartAreaInteractive } from "@lantern-product/ui/charts/area";

<ChartAreaInteractive />`}
        className={previewClassName}
      >
        <ChartAreaInteractive />
      </Demo>
    </>
  );
}
