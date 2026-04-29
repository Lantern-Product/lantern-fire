import { Button } from "@lantern-product/ui";
import { PlusIcon } from "lucide-react";
import { ContentBars, PageStage } from "../shared";

export function DividerWithButton() {
  return (
    <PageStage bg="bg-background">
      <div className="mx-auto w-full max-w-2xl">
        <ContentBars rows={2} />
        <div className="my-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <Button size="sm" variant="outline">
            <PlusIcon /> Add section
          </Button>
          <div className="h-px flex-1 bg-border" />
        </div>
        <ContentBars rows={2} />
      </div>
    </PageStage>
  );
}
