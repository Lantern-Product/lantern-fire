export function CardWithDescription() {
  return (
    <div className="bg-muted/30 p-6 lg:p-10">
      <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border px-6 py-5">
          <h3 className="font-heading text-base font-semibold">
            Applicant Information
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Personal details and application materials submitted by the
            candidate.
          </p>
        </div>
        <div className="space-y-3 p-6">
          <div className="h-3 w-3/4 rounded bg-muted" />
          <div className="h-3 w-2/3 rounded bg-muted" />
          <div className="h-3 w-1/2 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
