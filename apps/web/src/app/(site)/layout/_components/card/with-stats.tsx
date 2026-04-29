import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lantern-fire/ui";
import { PageStage } from "../shared";

export function CardWithStats() {
  const stats = [
    { name: "Subscribers", value: "71,897", change: "+12.4%" },
    { name: "Open rate", value: "58.16%", change: "+5.4%" },
    { name: "Click rate", value: "24.57%", change: "-3.2%" },
    { name: "MRR", value: "$48.2k", change: "+8.1%" },
  ];
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Last 30 days</CardTitle>
            <CardDescription>
              Performance across your team's mailing lists.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.name} className="rounded-lg bg-muted/40 p-4">
                  <dt className="text-xs text-muted-foreground">{s.name}</dt>
                  <dd className="mt-1 flex items-baseline gap-1.5">
                    <span className="font-heading text-xl font-semibold">
                      {s.value}
                    </span>
                    <span className="text-xs text-primary">{s.change}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </div>
    </PageStage>
  );
}
