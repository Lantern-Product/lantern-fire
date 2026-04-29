import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@lantern-fire/ui";
import { ContentBars, PageStage } from "../shared";

export function CardWithHeaderAndFooter() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <ContentBars rows={4} />
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </div>
    </PageStage>
  );
}
