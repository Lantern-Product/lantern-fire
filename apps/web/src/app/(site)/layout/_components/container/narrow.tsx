import { ContentBars } from "../shared";

export function ContainerNarrow() {
  return (
    <div className="min-h-full bg-muted/30 py-10">
      <div className="mx-auto max-w-2xl rounded-xl border-2 border-dashed border-primary/40 bg-background px-6 py-10">
        <p className="mb-2 text-xs font-mono text-primary/80">max-w-2xl</p>
        <h2 className="mb-6 font-heading text-2xl font-semibold tracking-tight">
          Narrow container
        </h2>
        <ContentBars rows={5} />
      </div>
    </div>
  );
}
