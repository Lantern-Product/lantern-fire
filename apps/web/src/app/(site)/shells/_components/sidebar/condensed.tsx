import { ContentPlaceholder, StatGrid } from "../shared";
import { CondensedRail } from "./_condensed-rail";

export function SidebarCondensed() {
  return (
    <div className="flex min-h-full bg-muted/30">
      <CondensedRail />
      <main className="flex-1 px-6 py-10 lg:px-10">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Dashboard
        </h1>
        <div className="mt-8 space-y-8">
          <StatGrid />
          <ContentPlaceholder rows={4} />
        </div>
      </main>
    </div>
  );
}
