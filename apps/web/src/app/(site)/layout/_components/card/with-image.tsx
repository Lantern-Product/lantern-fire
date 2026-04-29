import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lantern-fire/ui";
import { FauxImage, PageStage } from "../shared";

export function CardWithImage() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md">
        <Card>
          <FauxImage ratio="aspect-[16/9]" />
          <CardHeader>
            <CardTitle>Whitepaper: Edge runtime</CardTitle>
            <CardDescription>
              How modern apps deliver low-latency experiences worldwide.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Read time &middot; 8 minutes
            </p>
          </CardContent>
        </Card>
      </div>
    </PageStage>
  );
}
