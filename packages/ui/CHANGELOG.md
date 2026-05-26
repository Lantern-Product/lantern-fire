# @lantern-product/ui

## 0.3.0

### Minor Changes

- Add four chart-family subpath exports themed with Lantern OKLCH chart tokens — 42 ready-to-use Recharts recipes covering Area, Bar, Line, and Pie families. Each family ships as its own opt-in bundle so apps only pay for the chart types they import.

  **Added**

  - `@lantern-product/ui/charts/area` — 10 area chart variants (default, linear, step, stacked, stacked-expand, gradient, legend, axes, icons, interactive)
  - `@lantern-product/ui/charts/bar` — 10 bar chart variants (default, horizontal, multiple, stacked, label, label-custom, mixed, active, negative, interactive)
  - `@lantern-product/ui/charts/line` — 10 line chart variants (default, linear, step, multiple, dots, dots-colors, dots-custom, label, label-custom, interactive)
  - `@lantern-product/ui/charts/pie` — 11 pie chart variants (simple, separator-none, label, label-custom, label-list, legend, donut, donut-active, donut-text, stacked, interactive)

  **Docs**

  - New top-level Charts section in the sidebar with an overview gallery at `/charts` and per-family pages at `/charts/{area,bar,line,pie}`.
  - The Components > Data page no longer lists `ChartContainer`; primitives live on `@lantern-product/ui/chart`, recipes on `@lantern-product/ui/charts/{family}`.

## 0.2.0

### Minor Changes

- a3ec61b: Re-anchor brand on Lantern green and restructure button variants.

  **Breaking changes**

  - `variant="default"` removed. Use `variant="primary"` (now the named filled-green action).
  - `variant="outline"` removed. Use `variant="secondary"` (now the outlined low-emphasis companion).
  - `variant="secondary"` semantics changed from filled-gray to outlined. Use `variant="secondary-green"` for the previous filled look.

  **Added**

  - `variant="secondary-green"` — filled accent using the `--secondary` token.
  - `variant="secondary-coral"` — filled accent using the new `--secondary-coral` token.

  **Tokens**

  - OKLCH scale re-anchored on Lantern green `#005042`.
  - Coral demoted from brand primary to an accent role.

### Patch Changes

- f0df041: Add package README and point `homepage` at the design system docs site (`design.lantern.codes`) so npm renders proper install/usage docs.

## 0.1.1

### Patch Changes

- a214974: Initial public release
