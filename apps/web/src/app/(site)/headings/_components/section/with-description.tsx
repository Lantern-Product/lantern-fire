export function SectionWithDescription() {
  return (
    <div className="bg-background p-6 lg:p-10">
      <div className="mx-auto max-w-3xl">
        <div className="border-b border-border pb-4">
          <h2 className="font-heading text-lg font-semibold tracking-tight">
            Job Postings
          </h2>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            All open roles, prioritized by date posted. Drag to reorder or
            promote postings to the top of the careers page.
          </p>
        </div>
        <div className="mt-4 space-y-3">
          <div className="h-3 w-3/4 rounded bg-muted" />
          <div className="h-3 w-2/3 rounded bg-muted" />
          <div className="h-3 w-1/2 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
