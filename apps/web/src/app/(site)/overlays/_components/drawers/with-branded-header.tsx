import { DrawerCloseButton, DrawerStage } from "../shared";

export function DrawerWithBrandedHeader() {
  return (
    <DrawerStage close="none">
      <div className="bg-primary px-4 py-6 text-primary-foreground sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-heading text-base font-semibold">Panel title</h2>
          <DrawerCloseButton tone="branded" />
        </div>
        <p className="mt-1 text-sm text-primary-foreground/80">
          A branded header anchors the panel and reinforces the active context.
        </p>
      </div>
      <div className="flex-1 px-4 pb-6 pt-6 sm:px-6">
        <div className="h-full min-h-72 rounded-lg border-2 border-dashed border-border" />
      </div>
    </DrawerStage>
  );
}
