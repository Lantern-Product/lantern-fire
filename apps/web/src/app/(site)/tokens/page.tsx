import { PageHeader } from "@/components/page-header";
import { ColorSwatch } from "@/components/color-swatch";

const semanticTokens = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
];

const statusTokens = ["status-green", "status-amber", "status-red", "status-purple"];
const chartTokens = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"];
const sidebarTokens = [
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-accent",
  "sidebar-border",
  "sidebar-ring",
];

const radii = [
  { name: "--radius-sm", value: "0.6 × radius" },
  { name: "--radius-md", value: "0.8 × radius" },
  { name: "--radius-lg", value: "1 × radius (0.625rem)" },
  { name: "--radius-xl", value: "1.4 × radius" },
  { name: "--radius-2xl", value: "1.8 × radius" },
  { name: "--radius-3xl", value: "2.2 × radius" },
  { name: "--radius-4xl", value: "2.6 × radius" },
];

export default function TokensPage() {
  return (
    <>
      <PageHeader
        eyebrow="Foundation"
        title="Design tokens"
        description="All tokens are OKLCH and adapt between light and dark modes. Tailwind utility classes map to them via @theme inline."
      />

      <section className="mb-12">
        <h2 className="mb-4 font-heading text-lg font-semibold">Semantic colors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {semanticTokens.map((name) => (
            <ColorSwatch key={name} cssVar={`--${name}`} label={name} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-heading text-lg font-semibold">Status colors</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          Use as Tailwind classes: <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-sm">text-status-green</code>,{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-sm">bg-status-amber</code>, etc.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {statusTokens.map((name) => (
            <ColorSwatch key={name} cssVar={`--${name}`} label={name} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-heading text-lg font-semibold">Chart colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {chartTokens.map((name) => (
            <ColorSwatch key={name} cssVar={`--${name}`} label={name} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-heading text-lg font-semibold">Sidebar palette</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sidebarTokens.map((name) => (
            <ColorSwatch key={name} cssVar={`--${name}`} label={name} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 font-heading text-lg font-semibold">Typography</h2>
        <div className="space-y-6 rounded-xl border border-border bg-card p-6 ring-1 ring-foreground/5">
          <div>
            <p className="mb-1 font-mono text-xs text-muted-foreground">font-heading · Poppins</p>
            <p className="font-heading text-3xl font-semibold tracking-tight">The quick brown fox</p>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs text-muted-foreground">font-sans · Poppins</p>
            <p className="font-sans text-base">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="mb-1 font-mono text-xs text-muted-foreground">font-mono · IBM Plex Mono</p>
            <p className="font-mono text-sm">const greeting = &quot;Hello, world!&quot;;</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-heading text-lg font-semibold">Radii</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {radii.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className="size-16 border border-border bg-muted"
                style={{ borderRadius: `var(${r.name})` }}
              />
              <p className="font-mono text-[10px] text-center leading-tight">{r.name}</p>
              <p className="text-[10px] text-muted-foreground text-center leading-tight">{r.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
