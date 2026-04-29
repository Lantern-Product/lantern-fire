import { ContentBars, PageStage } from "../shared";

export function DividerWithLabel() {
  return (
    <PageStage bg="bg-background">
      <div className="mx-auto w-full max-w-2xl">
        <ContentBars rows={2} />
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Section
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <ContentBars rows={2} />
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Continued
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <ContentBars rows={2} />
      </div>
    </PageStage>
  );
}
