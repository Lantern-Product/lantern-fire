import { FauxImage, PageStage } from "../shared";

export function MediaObjectWithLargeImage() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-3xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FauxImage ratio="aspect-[4/3]" className="rounded-xl" />
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Whitepaper
            </p>
            <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight">
              Building durable workflows
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Long-running tasks shouldn't crash your app. Learn how the
              Workflow DevKit gives you pause/resume, retries, and crash-safe
              orchestration in a few lines of code.
            </p>
          </div>
        </div>
      </div>
    </PageStage>
  );
}
