import Link from "next/link";
import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@lantern-fire/ui";
import { ArrowRightIcon } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { PageHeader } from "@/components/page-header";

export default function HomePage() {
  return (
    <>
      <PageHeader
        eyebrow="Lantern Fire"
        title="A design system for Lantern products"
        description="Shared shadcn/ui primitives, OKLCH design tokens, and utilities — packaged as @lantern-fire/ui and consumable from any React 18.3+ app."
      />

      <section className="mb-10">
        <h2 className="mb-3 font-heading text-lg font-semibold">Installation</h2>
        <CodeBlock>{`npm install @lantern-fire/ui`}</CodeBlock>
        <p className="mt-3 text-sm text-muted-foreground">
          You also need <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-sm">react</code>,{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-sm">react-dom</code>,{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-sm">tailwindcss</code> v4, and{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-sm">shadcn</code> as peer dependencies.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-heading text-lg font-semibold">Setup</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          Import the design tokens once in your app&apos;s root stylesheet:
        </p>
        <CodeBlock>{`/* app/globals.css */
@import "@lantern-fire/ui/styles";

/* If consuming from a monorepo, tell Tailwind to scan the package source: */
@source "../../../node_modules/@lantern-fire/ui/dist";`}</CodeBlock>
        <p className="mt-3 mb-3 text-sm text-muted-foreground">Then import components anywhere:</p>
        <CodeBlock>{`import { Button, Card, cn } from "@lantern-fire/ui";

export function Example() {
  return <Button variant="default">Click me</Button>;
}`}</CodeBlock>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-heading text-lg font-semibold">Explore</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/tokens" className="group">
            <Card className="h-full transition-shadow hover:ring-foreground/20">
              <CardHeader>
                <CardTitle>Design tokens</CardTitle>
                <CardDescription>
                  OKLCH color scales, typography, radii, and status colors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  View tokens <ArrowRightIcon className="size-3.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
          <Link href="/components" className="group">
            <Card className="h-full transition-shadow hover:ring-foreground/20">
              <CardHeader>
                <CardTitle>Components</CardTitle>
                <CardDescription>
                  52 primitives covering forms, overlays, navigation, feedback, and data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Browse components <ArrowRightIcon className="size-3.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-heading text-lg font-semibold">Stack</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Tailwind CSS v4</Badge>
          <Badge variant="secondary">shadcn/ui radix-nova</Badge>
          <Badge variant="secondary">React 19</Badge>
          <Badge variant="secondary">TypeScript 5</Badge>
          <Badge variant="secondary">OKLCH tokens</Badge>
          <Badge variant="secondary">lucide-react</Badge>
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-heading text-lg font-semibold">Quick preview</h2>
        <div className="rounded-xl border border-border bg-card p-6 ring-1 ring-foreground/5">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive-solid">Delete</Button>
            <Badge>New</Badge>
            <Badge variant="outline">v0.1.0</Badge>
          </div>
        </div>
      </section>
    </>
  );
}
