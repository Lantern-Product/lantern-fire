import { SparklesIcon, StarIcon } from "lucide-react";
import { ContentBars, PageStage } from "../shared";

export function DividerWithIcon() {
  return (
    <PageStage bg="bg-background">
      <div className="mx-auto w-full max-w-2xl">
        <ContentBars rows={2} />
        <div className="my-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <SparklesIcon className="size-4" />
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <ContentBars rows={2} />
        <div className="my-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <StarIcon className="size-4" />
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <ContentBars rows={2} />
      </div>
    </PageStage>
  );
}
