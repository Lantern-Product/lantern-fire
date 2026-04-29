import { Button } from "@lantern-product/ui";

export function PageWithBanner() {
  return (
    <div className="bg-background">
      <div className="h-32 w-full bg-gradient-to-r from-primary/40 via-primary/20 to-primary/30" />
      <div className="border-b border-border px-6 pb-6 lg:px-8">
        <div className="mx-auto -mt-12 flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-4">
            <div className="flex size-24 items-center justify-center rounded-xl border-4 border-background bg-card text-2xl font-semibold text-foreground shadow-sm">
              RC
            </div>
            <div className="pb-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Profile
              </p>
              <h1 className="mt-0.5 font-heading text-2xl font-semibold tracking-tight">
                Ricardo Cooper
              </h1>
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline">Message</Button>
            <Button>Follow</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
