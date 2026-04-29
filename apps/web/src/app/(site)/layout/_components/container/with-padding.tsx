import { ContentBars } from "../shared";

export function ContainerWithPadding() {
  return (
    <div className="min-h-full bg-muted/30 py-10">
      <div className="mx-auto max-w-5xl rounded-xl border-2 border-dashed border-primary/40 bg-background px-12 py-16 sm:px-16 lg:px-24">
        <p className="mb-2 text-xs font-mono text-primary/80">
          max-w-5xl &middot; px-12 sm:px-16 lg:px-24
        </p>
        <h2 className="mb-6 font-heading text-2xl font-semibold tracking-tight">
          Container with generous padding
        </h2>
        <ContentBars rows={4} />
      </div>
    </div>
  );
}
