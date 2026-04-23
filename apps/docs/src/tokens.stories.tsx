import type { Story } from "@ladle/react";

export default { title: "Foundation/Tokens" };

const colorTokens = [
  { name: "background", var: "--background" },
  { name: "foreground", var: "--foreground" },
  { name: "card", var: "--card" },
  { name: "primary", var: "--primary" },
  { name: "primary-foreground", var: "--primary-foreground" },
  { name: "secondary", var: "--secondary" },
  { name: "muted", var: "--muted" },
  { name: "accent", var: "--accent" },
  { name: "destructive", var: "--destructive" },
  { name: "border", var: "--border" },
  { name: "ring", var: "--ring" },
];

const statusTokens = [
  { name: "status-green", var: "--status-green" },
  { name: "status-amber", var: "--status-amber" },
  { name: "status-red", var: "--status-red" },
  { name: "status-purple", var: "--status-purple" },
];

const chartTokens = [
  { name: "chart-1", var: "--chart-1" },
  { name: "chart-2", var: "--chart-2" },
  { name: "chart-3", var: "--chart-3" },
  { name: "chart-4", var: "--chart-4" },
  { name: "chart-5", var: "--chart-5" },
];

function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-10 w-10 shrink-0 rounded-lg border border-border"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="font-mono text-xs text-muted-foreground">{cssVar}</p>
      </div>
    </div>
  );
}

export const Colors: Story = () => (
  <div className="grid grid-cols-2 gap-4 p-6 max-w-xl">
    {colorTokens.map((t) => (
      <Swatch key={t.var} name={t.name} cssVar={t.var} />
    ))}
  </div>
);

export const StatusColors: Story = () => (
  <div className="grid grid-cols-2 gap-4 p-6 max-w-xl">
    {statusTokens.map((t) => (
      <Swatch key={t.var} name={t.name} cssVar={t.var} />
    ))}
  </div>
);

export const ChartColors: Story = () => (
  <div className="grid grid-cols-2 gap-4 p-6 max-w-xl">
    {chartTokens.map((t) => (
      <Swatch key={t.var} name={t.name} cssVar={t.var} />
    ))}
  </div>
);

export const Typography: Story = () => (
  <div className="flex flex-col gap-4 p-6 max-w-lg">
    <div>
      <p className="text-xs font-mono text-muted-foreground mb-1">font-sans (Poppins)</p>
      <p className="font-sans text-base">The quick brown fox jumps over the lazy dog</p>
    </div>
    <div>
      <p className="text-xs font-mono text-muted-foreground mb-1">font-heading (Poppins)</p>
      <p className="font-heading text-2xl font-semibold">Heading text example</p>
    </div>
    <div>
      <p className="text-xs font-mono text-muted-foreground mb-1">font-mono (IBM Plex Mono)</p>
      <p className="font-mono text-sm">const greeting = "Hello, world!";</p>
    </div>
  </div>
);
