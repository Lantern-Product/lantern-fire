import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lantern-fire/ui";
import { ContentBars, PageStage } from "../shared";

export function CardWithHeader() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Project status</CardTitle>
            <CardDescription>Updated a few seconds ago.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContentBars rows={4} />
          </CardContent>
        </Card>
      </div>
    </PageStage>
  );
}
