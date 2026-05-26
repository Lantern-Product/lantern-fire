"use client";

import {
  ChartBarActive,
  ChartBarDefault,
  ChartBarHorizontal,
  ChartBarInteractive,
  ChartBarLabel,
  ChartBarLabelCustom,
  ChartBarMixed,
  ChartBarMultiple,
  ChartBarNegative,
  ChartBarStacked,
} from "@lantern-product/ui/charts/bar";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

const previewClassName = "block w-full border-0 bg-transparent p-0 ring-0";

export default function ChartsBarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Charts"
        title="Bar charts"
        description="Categorical comparisons rendered as rectangles. Each variant is a composed Card + BarChart recipe themed with --chart-1 through --chart-5. Import from @lantern-product/ui/charts/bar."
      />

      <Demo
        title="Default"
        description="Single-series vertical bars with rounded tops and a label-less tooltip."
        code={`import { ChartBarDefault } from "@lantern-product/ui/charts/bar";

<ChartBarDefault />`}
        className={previewClassName}
      >
        <ChartBarDefault />
      </Demo>

      <Demo
        title="Horizontal"
        description="Rotated layout with category labels on the Y axis; useful for long category names."
        code={`import { ChartBarHorizontal } from "@lantern-product/ui/charts/bar";

<ChartBarHorizontal />`}
        className={previewClassName}
      >
        <ChartBarHorizontal />
      </Demo>

      <Demo
        title="Multiple"
        description="Two series side-by-side with a dashed indicator tooltip."
        code={`import { ChartBarMultiple } from "@lantern-product/ui/charts/bar";

<ChartBarMultiple />`}
        className={previewClassName}
      >
        <ChartBarMultiple />
      </Demo>

      <Demo
        title="Stacked + legend"
        description="Two series stacked on a single stackId with a custom legend underneath."
        code={`import { ChartBarStacked } from "@lantern-product/ui/charts/bar";

<ChartBarStacked />`}
        className={previewClassName}
      >
        <ChartBarStacked />
      </Demo>

      <Demo
        title="Label"
        description="Bar values rendered above each bar via Recharts LabelList."
        code={`import { ChartBarLabel } from "@lantern-product/ui/charts/bar";

<ChartBarLabel />`}
        className={previewClassName}
      >
        <ChartBarLabel />
      </Demo>

      <Demo
        title="Custom label"
        description="Horizontal layout with category labels rendered inside the bars and values on the right."
        code={`import { ChartBarLabelCustom } from "@lantern-product/ui/charts/bar";

<ChartBarLabelCustom />`}
        className={previewClassName}
      >
        <ChartBarLabelCustom />
      </Demo>

      <Demo
        title="Mixed"
        description="Per-bar fill colors driven by ChartConfig keys across --chart-1 through --chart-5."
        code={`import { ChartBarMixed } from "@lantern-product/ui/charts/bar";

<ChartBarMixed />`}
        className={previewClassName}
      >
        <ChartBarMixed />
      </Demo>

      <Demo
        title="Active"
        description="A specific bar highlighted with a dashed stroke via a custom Bar shape renderer."
        code={`import { ChartBarActive } from "@lantern-product/ui/charts/bar";

<ChartBarActive />`}
        className={previewClassName}
      >
        <ChartBarActive />
      </Demo>

      <Demo
        title="Negative"
        description="Positive and negative values colored differently using Recharts Cell components."
        code={`import { ChartBarNegative } from "@lantern-product/ui/charts/bar";

<ChartBarNegative />`}
        className={previewClassName}
      >
        <ChartBarNegative />
      </Demo>

      <Demo
        title="Interactive"
        description="Tab-driven metric switcher (Desktop / Mobile) over 3 months of daily data with summary totals in the header."
        code={`import { ChartBarInteractive } from "@lantern-product/ui/charts/bar";

<ChartBarInteractive />`}
        className={previewClassName}
      >
        <ChartBarInteractive />
      </Demo>
    </>
  );
}
