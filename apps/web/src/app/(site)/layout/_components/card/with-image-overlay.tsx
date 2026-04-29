import { Badge } from "@lantern-product/ui";
import { PageStage } from "../shared";

export function CardWithImageOverlay() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md">
        <div className="relative overflow-hidden rounded-xl ring-1 ring-foreground/10">
          <div
            className="aspect-[4/3] w-full bg-gradient-to-br from-primary/40 via-violet-500/30 to-rose-500/40"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <Badge variant="secondary" className="bg-white/15 text-white">
              Featured
            </Badge>
            <h3 className="mt-3 font-heading text-xl font-semibold">
              Building durable workflows
            </h3>
            <p className="mt-1 text-sm text-white/80">
              A practical guide to crash-safe orchestration for AI apps.
            </p>
          </div>
        </div>
      </div>
    </PageStage>
  );
}
