import { ContentBars, PageStage } from "../shared";

export function DividerDashed() {
  return (
    <PageStage bg="bg-background">
      <div className="mx-auto w-full max-w-2xl">
        <ContentBars rows={2} />
        <div className="my-8 border-t border-dashed border-border" />
        <ContentBars rows={2} />
        <div className="my-8 border-t border-dashed border-border" />
        <ContentBars rows={2} />
      </div>
    </PageStage>
  );
}
