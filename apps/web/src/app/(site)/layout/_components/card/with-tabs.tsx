import { Card, CardContent, CardHeader } from "@lantern-product/ui";
import { ContentBars, PageStage } from "../shared";

export function CardWithTabs() {
  const tabs = [
    { name: "Overview", current: true },
    { name: "Activity", current: false },
    { name: "Members", current: false },
    { name: "Settings", current: false },
  ];
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader className="border-b pb-0">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
              {tabs.map((t) => (
                <span
                  key={t.name}
                  aria-current={t.current ? "page" : undefined}
                  className={
                    "border-b-2 px-1 pb-3 text-sm font-medium " +
                    (t.current
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground")
                  }
                >
                  {t.name}
                </span>
              ))}
            </nav>
          </CardHeader>
          <CardContent>
            <ContentBars rows={4} />
          </CardContent>
        </Card>
      </div>
    </PageStage>
  );
}
