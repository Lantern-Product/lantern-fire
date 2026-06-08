import { Button } from "@lantern-product/ui";
import { DrawerHeader, DrawerStage } from "../shared";

export function DrawerWithStickyFooter() {
  return (
    <DrawerStage>
      <DrawerHeader title="Panel title" />
      <div className="flex-1 overflow-y-auto px-4 pb-6 sm:px-6">
        <div className="min-h-[42rem] rounded-lg border-2 border-dashed border-border" />
      </div>
      <div className="flex shrink-0 justify-end gap-3 border-t border-border px-4 py-4 sm:px-6">
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </div>
    </DrawerStage>
  );
}
