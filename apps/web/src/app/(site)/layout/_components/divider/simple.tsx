import { Separator } from "@lantern-product/ui";
import { ContentBars, PageStage } from "../shared";

export function DividerSimple() {
  return (
    <PageStage bg="bg-background">
      <div className="mx-auto w-full max-w-2xl">
        <ContentBars rows={2} />
        <Separator className="my-8" />
        <ContentBars rows={2} />
        <Separator className="my-8" />
        <ContentBars rows={2} />
      </div>
    </PageStage>
  );
}
