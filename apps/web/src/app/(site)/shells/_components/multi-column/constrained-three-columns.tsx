import { ContentPlaceholder } from "../shared";
import { FullSidebar } from "../sidebar/_full-sidebar";
import { SecondaryList } from "./_secondary-list";

export function MultiColumnConstrainedThreeColumns() {
  return (
    <div className="flex min-h-full bg-muted/30">
      <FullSidebar tone="light" />
      <div className="flex flex-1 justify-center">
        <div className="flex w-full max-w-7xl">
          <section className="hidden w-72 shrink-0 border-r border-border bg-background xl:block">
            <SecondaryList title="Inbox" />
          </section>
          <main className="flex-1 px-6 py-10 lg:px-10">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Lindsay Walton
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Quote needed for Acme rollout
            </p>
            <div className="mt-8">
              <ContentPlaceholder rows={3} />
            </div>
          </main>
          <aside className="hidden w-72 shrink-0 border-l border-border bg-background xl:block">
            <SecondaryList title="Details" />
          </aside>
        </div>
      </div>
    </div>
  );
}
