import { HeadingTabs } from "../shared";

export function CardWithTabs() {
  return (
    <div className="bg-muted/30 p-6 lg:p-10">
      <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border px-6 pt-5">
          <h3 className="font-heading text-base font-semibold">Candidates</h3>
          <div className="mt-3">
            <HeadingTabs />
          </div>
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
