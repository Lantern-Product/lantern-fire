import { Badge } from "@lantern-product/ui";

export function SectionWithLabel() {
  return (
    <div className="bg-background p-6 lg:p-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <h2 className="font-heading text-lg font-semibold tracking-tight">
            Job Postings
          </h2>
          <Badge variant="secondary">Beta</Badge>
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
