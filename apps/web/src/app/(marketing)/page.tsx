import type { Metadata } from "next";
import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lantern-product/ui";
import {
  ArrowRightIcon,
  BlocksIcon,
  ExternalLinkIcon,
  PaletteIcon,
  PackageIcon,
  SparklesIcon,
} from "lucide-react";
import { Hero3 } from "@/components/blocks/hero-3";
import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = {
  title: {
    absolute: "Lantern Fire — Design System",
  },
  description:
    "A design system for Lantern products. shadcn/ui primitives, OKLCH design tokens, and utilities — packaged as @lantern-product/ui.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Lantern Fire — Design System",
    description:
      "shadcn/ui primitives, OKLCH design tokens, and utilities packaged as @lantern-product/ui.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lantern Fire — Design System",
    description:
      "shadcn/ui primitives, OKLCH design tokens, and utilities packaged as @lantern-product/ui.",
  },
};

const features = [
  {
    icon: PaletteIcon,
    title: "OKLCH design tokens",
    description:
      "Perceptually-uniform color scales, semantic roles, and status palettes — all themable via CSS variables.",
  },
  {
    icon: BlocksIcon,
    title: "52 shadcn primitives",
    description:
      "Buttons, dialogs, forms, navigation, data tables — every component you need, pre-wired to the Lantern Fire theme.",
  },
  {
    icon: PackageIcon,
    title: "Monorepo-friendly",
    description:
      "Ships as a workspace package. Tree-shakable ESM/CJS dual builds, types included, zero runtime cost.",
  },
  {
    icon: SparklesIcon,
    title: "React 18.3+ & Tailwind v4",
    description:
      "Built for modern stacks. Next.js App Router, Server Components, and the new Tailwind v4 engine.",
  },
];

const stack = [
  "Tailwind CSS v4",
  "shadcn/ui radix-nova",
  "React 19",
  "TypeScript 5",
  "OKLCH tokens",
  "lucide-react",
];

export default function LandingPage() {
  return (
    <>
      <Hero3 />

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Why Lantern Fire
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Everything you need to ship a polished interface, none of the bikeshedding.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              A shared design language for every Lantern product. Consume it as{" "}
              <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-sm">
                @lantern-product/ui
              </code>
              , override what you need, and stay in sync as the system evolves.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="transition-shadow hover:ring-foreground/15">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quick start
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Drop it into any React 18.3+ app.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Install the package, import the design tokens once, and start using primitives.
              Tailwind v4 picks up the workspace source automatically — no codegen, no
              build steps.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                1. Install
              </p>
              <CodeBlock>{`npm install @lantern-product/ui`}</CodeBlock>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                2. Import tokens
              </p>
              <CodeBlock>{`/* app/globals.css */
@import "@lantern-product/ui/styles";

/* Monorepo? Tell Tailwind to scan the package source: */
@source "../../../node_modules/@lantern-product/ui/dist";`}</CodeBlock>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                3. Use components
              </p>
              <CodeBlock>{`import { Button, Card, cn } from "@lantern-product/ui";

export function Example() {
  return <Button>Click me</Button>;
}`}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Live preview
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Every section here uses the same primitives you&apos;d ship with.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/components" className="group">
              <Card className="h-full transition-shadow hover:ring-foreground/20">
                <CardHeader>
                  <CardTitle>Components</CardTitle>
                  <CardDescription>
                    52 primitives covering forms, overlays, navigation, feedback, and data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Browse components <ArrowRightIcon className="size-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/elements" className="group">
              <Card className="h-full transition-shadow hover:ring-foreground/20">
                <CardHeader>
                  <CardTitle>Elements</CardTitle>
                  <CardDescription>
                    Composable building blocks — avatars, badges, button groups, dropdowns.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Explore elements <ArrowRightIcon className="size-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/tokens" className="group">
              <Card className="h-full transition-shadow hover:ring-foreground/20">
                <CardHeader>
                  <CardTitle>Design tokens</CardTitle>
                  <CardDescription>
                    OKLCH color scales, typography, radii, status colors, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    View tokens <ArrowRightIcon className="size-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to light it up?
          </h2>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            Start with the components, dial in your theme via tokens, and ship a cohesive
            interface across every Lantern product.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/components">Browse components</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/tokens">View tokens</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLinkIcon className="size-4" />
                Source on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
          <p>Lantern Fire v0.1.0 — A design system for Lantern products.</p>
          <p>Built with @lantern-product/ui, Next.js 16, and Tailwind v4.</p>
        </div>
      </footer>
    </>
  );
}
