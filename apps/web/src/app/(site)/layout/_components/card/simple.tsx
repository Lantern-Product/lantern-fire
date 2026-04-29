import { Card, CardContent } from "@lantern-product/ui";
import { ContentBars, PageStage } from "../shared";

export function CardSimple() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardContent>
            <ContentBars rows={4} />
          </CardContent>
        </Card>
      </div>
    </PageStage>
  );
}
