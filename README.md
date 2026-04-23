# Lantern Fire Design System

Shared design system for Lantern products — shadcn/ui primitives, design tokens, and utilities in a single consumable package.

## Structure

```
lantern-fire/
├── packages/
│   └── ui/                 → @lantern-fire/ui
│       ├── src/
│       │   ├── components/  shadcn/ui primitives (button, card, badge, etc.)
│       │   ├── lib/         cn() utility
│       │   └── index.ts     barrel export
│       ├── styles/
│       │   └── globals.css  tokens, @theme, base layer, .prose
│       └── components.json  shadcn CLI config
├── turbo.json
└── package.json
```

## Stack

- Tailwind CSS v4 (CSS-first, no config file)
- shadcn/ui style `radix-nova`
- React 19 / TypeScript 5
- Tokens in OKLCH
- Fonts: Poppins (sans/heading), IBM Plex Mono (mono)
- Icons: lucide-react

## Development

```sh
npm install
npm run build
```

## Consuming (future)

The package is structured for three consumption modes, to be wired up in follow-up work:

- **npm**: `npm i @lantern-fire/ui`
- **git**: `"@lantern-fire/ui": "github:Lantern-Product/lantern-fire"`
- **local link**: `npm link` from a cloned copy

Downstream apps import components from `@lantern-fire/ui` and side-effect-import the tokens once:

```ts
import "@lantern-fire/ui/styles";
import { Button, Card, cn } from "@lantern-fire/ui";
```
