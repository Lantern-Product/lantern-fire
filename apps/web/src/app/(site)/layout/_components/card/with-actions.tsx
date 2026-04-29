import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lantern-fire/ui";
import { EllipsisVerticalIcon } from "lucide-react";
import { ContentBars, PageStage } from "../shared";

export function CardWithActions() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Team activity</CardTitle>
            <CardDescription>Last 7 days of events.</CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon" aria-label="More">
                <EllipsisVerticalIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <ContentBars rows={3} />
          </CardContent>
        </Card>
      </div>
    </PageStage>
  );
}
