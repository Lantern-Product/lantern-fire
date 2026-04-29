import { ContentBars, PageStage } from "../shared";

export function DividerGradient() {
  return (
    <PageStage bg="bg-background">
      <div className="mx-auto w-full max-w-2xl">
        <ContentBars rows={2} />
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <ContentBars rows={2} />
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <ContentBars rows={2} />
      </div>
    </PageStage>
  );
}
