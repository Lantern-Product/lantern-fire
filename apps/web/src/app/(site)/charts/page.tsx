"use client";

import Link from "next/link";
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
import { ArrowRightIcon } from "lucide-react";
import { PageHeader } from "@/components/page-header";

type Section = {
  id: string;
  title: string;
  href: string;
  charts: React.ReactNode[];
};

const sections: Section[] = [
  {
    id: "area",
    title: "Area charts",
    href: "/charts/area",
    charts: [
      <ChartAreaDefault key="default" />,
      <ChartAreaLinear key="linear" />,
      <ChartAreaStep key="step" />,
      <ChartAreaStacked key="stacked" />,
      <ChartAreaStackedExpand key="stacked-expand" />,
      <ChartAreaGradient key="gradient" />,
      <ChartAreaLegend key="legend" />,
      <ChartAreaAxes key="axes" />,
      <ChartAreaIcons key="icons" />,
      <ChartAreaInteractive key="interactive" />,
    ],
  },
  {
    id: "bar",
    title: "Bar charts",
    href: "/charts/bar",
    charts: [
      <ChartBarDefault key="default" />,
      <ChartBarHorizontal key="horizontal" />,
      <ChartBarMultiple key="multiple" />,
      <ChartBarStacked key="stacked" />,
      <ChartBarLabel key="label" />,
      <ChartBarLabelCustom key="label-custom" />,
      <ChartBarMixed key="mixed" />,
      <ChartBarActive key="active" />,
      <ChartBarNegative key="negative" />,
      <ChartBarInteractive key="interactive" />,
    ],
  },
  {
    id: "line",
    title: "Line charts",
    href: "/charts/line",
    charts: [
      <ChartLineDefault key="default" />,
      <ChartLineLinear key="linear" />,
      <ChartLineStep key="step" />,
      <ChartLineMultiple key="multiple" />,
      <ChartLineDots key="dots" />,
      <ChartLineDotsColors key="dots-colors" />,
      <ChartLineDotsCustom key="dots-custom" />,
      <ChartLineLabel key="label" />,
      <ChartLineLabelCustom key="label-custom" />,
      <ChartLineInteractive key="interactive" />,
    ],
  },
  {
    id: "pie",
    title: "Pie charts",
    href: "/charts/pie",
    charts: [
      <ChartPieSimple key="simple" />,
      <ChartPieSeparatorNone key="separator-none" />,
      <ChartPieLabel key="label" />,
      <ChartPieLabelCustom key="label-custom" />,
      <ChartPieLabelList key="label-list" />,
      <ChartPieLegend key="legend" />,
      <ChartPieDonut key="donut" />,
      <ChartPieDonutActive key="donut-active" />,
      <ChartPieDonutText key="donut-text" />,
      <ChartPieStacked key="stacked" />,
      <ChartPieInteractive key="interactive" />,
    ],
  },
];

export default function ChartsIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Charts"
        title="Charts"
        description="Data visualization recipes built on Recharts and themed with Lantern chart tokens. Primitives ship from @lantern-product/ui/chart; composed recipes ship from @lantern-product/ui/charts/* so apps only pay for the chart families they import."
      />

      <nav className="mb-10 -mt-2 flex flex-wrap gap-2">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-sidebar-accent/60 hover:text-foreground"
          >
            {section.title}
            <span className="ml-1.5 text-xs text-muted-foreground tabular-nums">
              {section.charts.length}
            </span>
          </Link>
        ))}
      </nav>

      <div className="flex flex-col gap-16">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-8"
          >
            <header className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-3">
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {section.charts.length}{" "}
                  {section.charts.length === 1 ? "variant" : "variants"}
                </p>
              </div>
              <Link
                href={section.href}
                className="group inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
              >
                Explore all <ArrowRightIcon className="size-3.5" />
              </Link>
            </header>
            <div className="grid gap-6 lg:grid-cols-2">
              {section.charts.map((chart, idx) => (
                <div key={idx} className="min-w-0">
                  {chart}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
