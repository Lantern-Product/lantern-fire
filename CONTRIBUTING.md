# Contributing to Lantern Fire

## Prerequisites

- Node.js ≥ 20
- npm ≥ 10

## Setup

```sh
git clone https://github.com/Lantern-Product/lantern-fire
cd lantern-fire
npm install
npm run build
```

## Adding a component

### 1. Run the shadcn CLI

```sh
cd packages/ui
npx shadcn add <component-name>
```

### 2. Fix import paths

The shadcn CLI generates incorrect absolute-style paths. After adding a component, run:

```sh
# Fix utils imports
find src/components -name "*.tsx" -exec sed -i '' 's|from "src/lib/utils"|from "../lib/utils"|g' {} +
# Fix cross-component imports
find src/components -name "*.tsx" -exec sed -i '' 's|from "src/components/|from "./|g' {} +
```

Then verify manually — some edge cases (e.g. self-referential imports like `sonner`) need hand-editing.

### 3. Export the component

Add an export to `packages/ui/src/index.ts`:

```ts
export * from "./components/your-component";
```

If the component wraps a large third-party library (like recharts), consider a subpath export instead (see `packages/ui/src/chart.ts` as a reference).

### 4. Write a story

Add a story file in `apps/docs/src/your-component.stories.tsx`:

```tsx
import type { Story } from "@ladle/react";
import { YourComponent } from "@lantern-fire/ui";

export default { title: "Components/YourComponent" };

export const Default: Story = () => <YourComponent />;
```

### 5. Build and check

```sh
npm run build          # from repo root
cd packages/ui
npm run check:exports  # publint + arethetypeswrong
```

## Design token changes

All tokens live in `packages/ui/styles/globals.css`.

- Use OKLCH for all color values.
- Every token defined in `:root` must also be defined in `.dark`.
- After adding a new semantic token (e.g. `--my-token`), wire it into `@theme inline` as `--color-my-token: var(--my-token)` so Tailwind generates utility classes.
- Status / semantic colors belong in `:root`/`.dark`, not hardcoded in `@theme inline`.

## Commit conventions

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(button): add destructive-solid variant
fix(tokens): correct dark-mode card color
chore(deps): update lucide-react to 1.9.0
```

## Release process

Releases are managed with [Changesets](https://github.com/changesets/changesets).

1. After your change, run `npx changeset` and describe the change.
2. Merge the PR — a Changesets PR will be created automatically by CI.
3. Merge the Changesets PR to publish.
