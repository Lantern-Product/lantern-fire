import { FauxImage, PageStage } from "../shared";

export function MediaObjectSimple() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex items-start gap-4">
          <FauxImage className="size-20 shrink-0 rounded-lg" ratio="" />
          <div className="min-w-0">
            <h3 className="font-heading text-base font-semibold">
              Building durable workflows
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A practical introduction to long-running orchestration on Vercel.
            </p>
          </div>
        </div>
      </div>
    </PageStage>
  );
}
