# @lantern-product/ui

Lantern Fire Design System — shadcn/ui primitives, design tokens, and utilities in a single consumable package.

- Docs & component gallery: [design.lantern.codes](https://design.lantern.codes)
- Source: [Lantern-Product/lantern-fire](https://github.com/Lantern-Product/lantern-fire) (`packages/ui`)
- License: MIT

## Install

```sh
npm i @lantern-product/ui
# peer deps if not already present:
npm i react react-dom tailwindcss shadcn
```

Requires React 18.3+ / 19, Tailwind CSS v4, and shadcn 4.

## Set up

Import the stylesheet once at your app root:

```ts
import "@lantern-product/ui/styles";
```

This loads the OKLCH design tokens, Tailwind v4 base layer, and the `.prose` typography helper. It does **not** load fonts — see [Fonts](#fonts).

### Dark mode

Uses the `.dark` class strategy. Add `class="dark"` to `<html>` to activate.

### "use client" boundary

The entire bundle is marked `"use client"`. In Next.js App Router you can import from `@lantern-product/ui` anywhere, but the code is always bundled as client. If you need a server-safe `cn`, vendor it from `./utils`.

## Use

```tsx
import { Button, Card, cn } from "@lantern-product/ui";

export function Example() {
  return (
    <Card className={cn("p-6")}>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
    </Card>
  );
}
```

### Button variants

`primary` (default, filled green) · `secondary` (outlined) · `secondary-green` (filled accent) · `secondary-coral` (filled accent) · `ghost` · `destructive` · `destructive-solid` · `link`

> **Upgrading from 0.1.x:** `variant="default"` and `variant="outline"` were removed in 0.2.0. Use `variant="primary"` and `variant="secondary"`. The old filled-gray `secondary` is now `secondary-green`. See [CHANGELOG.md](./CHANGELOG.md).

## Subpath exports

| Import | Purpose |
| --- | --- |
| `@lantern-product/ui` | All non-chart components + `cn` |
| `@lantern-product/ui/chart` | Chart primitives (pulls in `recharts` — keep separate) |
| `@lantern-product/ui/utils` | `cn` and other utilities, no React |
| `@lantern-product/ui/styles` | Tokens, Tailwind base, `.prose` (CSS side-effect import) |
| `@lantern-product/ui/fonts` | DM Sans / Poppins / IBM Plex Mono via Google Fonts |
| `@lantern-product/ui/components.json` | shadcn CLI config (for `npx shadcn add` in consumers) |

## Fonts

`./styles` does not load fonts. Pick one:

**Option A — `next/font` (recommended for Next.js):**

```ts
import { DM_Sans, Poppins, IBM_Plex_Mono } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-heading" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
```

Attach the variables to `<html>`:

```tsx
<html className={`${dmSans.variable} ${poppins.variable} ${mono.variable}`}>
```

**Option B — blocking Google Fonts `@import` (non-Next.js):**

```ts
import "@lantern-product/ui/fonts";
```

## Icon-only buttons

Always pass `aria-label`:

```tsx
<Button size="icon" variant="ghost" aria-label="Delete item">
  <TrashIcon />
</Button>
```

## Links

- Docs site: [design.lantern.codes](https://design.lantern.codes)
- Changelog: [`CHANGELOG.md`](./CHANGELOG.md)
- Issues: [github.com/Lantern-Product/lantern-fire/issues](https://github.com/Lantern-Product/lantern-fire/issues)
