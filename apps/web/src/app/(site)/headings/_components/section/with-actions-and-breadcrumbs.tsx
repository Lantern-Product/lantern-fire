import { Button } from "@lantern-product/ui";
import { HeadingBreadcrumbs } from "../shared";

export function SectionWithActionsAndBreadcrumbs() {
  return (
    <div className="bg-background p-6 lg:p-10">
      <div className="mx-auto max-w-3xl">
        <HeadingBreadcrumbs />
        <div className="mt-3 flex items-center justify-between gap-4 border-b border-border pb-3">
          <h2 className="font-heading text-lg font-semibold tracking-tight">
            Job Postings
          </h2>
          <div className="flex shrink-0 gap-2">
            <Button size="sm" variant="secondary">
              Edit
            </Button>
            <Button size="sm">Publish</Button>
          </div>
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
