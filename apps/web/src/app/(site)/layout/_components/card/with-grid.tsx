import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lantern-fire/ui";
import { FauxImage, PageStage } from "../shared";

export function CardWithGrid() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Recent uploads</CardTitle>
            <CardDescription>Six most recent assets.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <FauxImage key={i} ratio="aspect-square" className="rounded-md" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageStage>
  );
}
