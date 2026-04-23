# Lantern Fire Design System

Shared design system for Lantern products — shadcn/ui primitives, design tokens, and utilities in a single consumable package.

## Stack

- Tailwind CSS v4 (CSS-first, no config file)
- shadcn/ui style `radix-nova`
- React 18.3+ / React 19 / TypeScript 5
- Tokens in OKLCH
- Fonts: Poppins (sans/heading), IBM Plex Mono (mono)
- Icons: lucide-react

## Structure

```
lantern-fire/
├── apps/
│   └── docs/                → Component showcase (Ladle)
├── packages/
│   └── ui/                  → @lantern-fire/ui
│       ├── src/
│       │   ├── components/  shadcn/ui primitives
│       │   ├── lib/         cn() utility
│       │   ├── index.ts     barrel export (all non-chart components)
│       │   └── chart.ts     chart-only barrel (imports recharts)
│       ├── styles/
│       │   ├── globals.css  tokens, @theme, base layer, .prose
│       │   └── fonts.css    optional Google Fonts loader
│       └── components.json  shadcn CLI config
├── turbo.json
└── package.json
```

## Development

```sh
npm install
npm run build          # build all packages
```

### Run the component showcase

```sh
cd apps/docs
npm run dev            # starts Ladle on http://localhost:61000
```

## Consuming

### Installation

```sh
npm i @lantern-fire/ui
# peer deps if not already present:
npm i react react-dom tailwindcss
```

### Import styles (once, in your app root)

```ts
import "@lantern-fire/ui/styles";
```

This imports the OKLCH design tokens, Tailwind v4 base layer, and the `.prose` typography helper. It does **not** load any fonts — see the [Font loading](#font-loading) section.

### Import components

```ts
import { Button, Card, cn } from "@lantern-fire/ui";

// Charts are a separate subpath to avoid bundling recharts for non-chart consumers:
import { ChartContainer, ChartTooltip } from "@lantern-fire/ui/chart";
```

### Dark mode

The package uses the `.dark` class strategy. Add `class="dark"` to `<html>` to activate dark mode:

```tsx
<html className={isDark ? "dark" : ""}>
```

The `@custom-variant dark (&:is(.dark *))` rule means every child of `.dark` gets dark tokens automatically.

### "use client" boundary

The entire `@lantern-fire/ui` bundle is marked `"use client"`. This means:
- In Next.js App Router, you can import from `@lantern-fire/ui` in any file, but only inside a component tree that has a client boundary above it, **or** from a file that is itself a client component.
- Server Components that only need `cn` or variant constants should still work since those are pure functions — but they will be bundled as client code.
- If you need a truly server-safe `cn`, copy the `cn` utility locally from `src/lib/utils.ts`.

### Font loading

`globals.css` does **not** load Poppins or IBM Plex Mono. Choose one of these strategies:

**Option A — next/font (recommended for Next.js):**

```ts
import { Poppins, IBM_Plex_Mono } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });
```

Then add `className={`${poppins.variable} ${mono.variable}`}` to your `<html>` element.

**Option B — optional Google Fonts CSS (non-Next.js):**

```ts
import "@lantern-fire/ui/fonts";
```

This imports the Google Fonts `@import url(...)` directly. It is a blocking network request and disables font optimisation — use only when `next/font` is unavailable.

## Design tokens

All tokens are OKLCH and defined as CSS custom properties. Tailwind utility classes map to them via `@theme inline`.

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--background` | `oklch(0.98 0.02 90)` | `oklch(0.18 0.03 55)` | Page background |
| `--foreground` | `oklch(0.22 0.05 65)` | `oklch(0.98 0.02 90)` | Body text |
| `--card` | `oklch(0.99 0.015 85)` | `oklch(0.24 0.03 55)` | Card surface |
| `--primary` | `oklch(0.68 0.21 30)` | `oklch(0.72 0.19 30)` | Brand orange |
| `--secondary` | `oklch(0.95 0.03 170)` | `oklch(0.28 0.05 170)` | Teal tint |
| `--muted` | `oklch(0.95 0.015 85)` | `oklch(0.28 0.02 55)` | Subtle backgrounds |
| `--destructive` | `oklch(0.577 0.245 27.3)` | `oklch(0.704 0.191 22.2)` | Error / danger |
| `--border` | `oklch(0.92 0.02 80)` | `oklch(1 0 0 / 10%)` | Borders |
| `--radius` | `0.625rem` | — | Base border radius |

### Status colors

Semantic status colors adapt between light and dark:

| Token | Light | Dark |
|---|---|---|
| `--status-green` | `oklch(0.627 0.178 149)` | `oklch(0.72 0.17 149)` |
| `--status-amber` | `oklch(0.716 0.165 70)` | `oklch(0.80 0.16 70)` |
| `--status-red` | `oklch(0.645 0.246 16)` | `oklch(0.72 0.23 16)` |
| `--status-purple` | `oklch(0.592 0.249 292)` | `oklch(0.72 0.22 292)` |

Use as Tailwind classes: `text-status-green`, `bg-status-amber`, etc.

## Component catalog

### Form primitives
`Input` `Textarea` `Label` `Checkbox` `RadioGroup` `Switch` `Select` `Form`

### Buttons & indicators
`Button` (variants: default, outline, secondary, ghost, destructive, destructive-solid, link) · `Badge`

### Layout
`Card` `CardHeader` `CardTitle` `CardDescription` `CardContent` `CardFooter` `CardAction` · `Separator` · `ScrollArea`

### Navigation
`Tabs` · `Breadcrumb` · `Pagination` · `Accordion`

### Overlays
`Dialog` · `Sheet` · `DropdownMenu` · `Popover` · `HoverCard` · `Tooltip` · `Command`

### Feedback
`Alert` · `Skeleton` · `Progress` · `Toaster` (Sonner)

### Data
`Table` · `Avatar` · `ChartContainer` · `ChartTooltip` · `ChartLegend` (from `@lantern-fire/ui/chart`)

### Typography
`.prose` — apply to a container with rendered markdown for consistent typographic styles.

## Icon-only buttons (accessibility)

Always include a screen-reader label when using icon-only buttons:

```tsx
<Button size="icon" variant="ghost" aria-label="Delete item">
  <TrashIcon />
</Button>
```

## Adding new components

1. Run `npx shadcn add <component>` from `packages/ui/`.
2. Fix any `src/lib/utils` → `../lib/utils` import paths (the CLI gets these wrong).
3. Export from `packages/ui/src/index.ts`.
4. Add a story in `apps/docs/src/`.
5. Run `npm run build` to verify.
