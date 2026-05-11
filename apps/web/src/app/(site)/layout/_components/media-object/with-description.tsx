import { FauxImage, PageStage } from "../shared";

export function MediaObjectWithDescription() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex items-start gap-4">
          <FauxImage className="size-16 shrink-0 rounded-lg" ratio="" />
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-base font-semibold">
              Building durable workflows
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Long-running tasks shouldn't crash your app. Learn how the WDK
              gives you pause/resume, retries, and crash-safe orchestration in a
              few lines of code.
            </p>
          </div>
        </div>
      </div>
    </PageStage>
  );
}
