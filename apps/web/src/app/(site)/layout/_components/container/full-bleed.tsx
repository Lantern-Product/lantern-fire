import { ContentBars } from "../shared";

export function ContainerFullBleed() {
  return (
    <div className="min-h-full bg-muted/30 py-10">
      <div className="border-2 border-dashed border-primary/40 bg-background px-12 py-10">
        <p className="mb-2 text-xs font-mono text-primary/80">w-full</p>
        <h2 className="mb-6 font-heading text-2xl font-semibold tracking-tight">
          Full-bleed container
        </h2>
        <ContentBars rows={3} />
      </div>
    </div>
  );
}
