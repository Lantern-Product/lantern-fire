import { ContentBars, PageStage } from "../shared";

export function DividerWithLabelLeft() {
  return (
    <PageStage bg="bg-background">
      <div className="mx-auto w-full max-w-2xl">
        <ContentBars rows={2} />
        <div className="my-8 flex items-center gap-4">
          <span className="font-heading text-sm font-semibold">
            Recent activity
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <ContentBars rows={2} />
        <div className="my-8 flex items-center gap-4">
          <span className="font-heading text-sm font-semibold">Older</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <ContentBars rows={2} />
      </div>
    </PageStage>
  );
}
