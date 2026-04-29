import { ContentBars } from "../shared";

export function ContainerWide() {
  return (
    <div className="min-h-full bg-muted/30 py-10">
      <div className="mx-6 rounded-xl border-2 border-dashed border-primary/40 bg-background px-6 py-10 lg:px-8">
        <p className="mb-2 text-xs font-mono text-primary/80">mx-6 (fluid)</p>
        <h2 className="mb-6 font-heading text-2xl font-semibold tracking-tight">
          Wide container
        </h2>
        <ContentBars rows={4} />
      </div>
    </div>
  );
}
