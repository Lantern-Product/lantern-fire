import { ContentPlaceholder, StatGrid } from "../shared";
import { FullSidebar } from "../sidebar/_full-sidebar";
import { SecondaryList } from "./_secondary-list";

export function MultiColumnConstrainedSecondary() {
  return (
    <div className="flex min-h-full bg-muted/30">
      <FullSidebar tone="light" />
      <div className="flex flex-1 justify-center">
        <div className="flex w-full max-w-7xl">
          <main className="flex-1 px-6 py-10 lg:px-10">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Dashboard
            </h1>
            <div className="mt-8 space-y-8">
              <StatGrid />
              <ContentPlaceholder rows={3} />
            </div>
          </main>
          <aside className="hidden w-80 shrink-0 border-l border-border bg-background xl:block">
            <SecondaryList />
          </aside>
        </div>
      </div>
    </div>
  );
}
