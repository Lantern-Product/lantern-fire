import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@lantern-fire/ui";
import { ArrowRightIcon } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { byCategory, categoryMeta } from "./_registry";

export default function ShellsIndexPage() {
  const categories = ["stacked", "sidebar", "multi-column"] as const;
  return (
    <>
      <PageHeader
        eyebrow="Application shells"
        title="Application shells"
        description="Full-page layout templates composed from Lantern Fire primitives. Use them as starting points for product UIs — pick a stacked nav, a persistent sidebar, or a multi-column workspace."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((c) => {
          const meta = categoryMeta[c];
          const count = byCategory(c).length;
          return (
            <Link key={c} href={meta.href} className="group">
              <Card className="h-full transition-shadow hover:ring-foreground/20">
                <CardHeader>
                  <CardTitle>{meta.title}</CardTitle>
                  <CardDescription>{meta.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-xs text-muted-foreground">
                    {count} {count === 1 ? "layout" : "layouts"}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Explore <ArrowRightIcon className="size-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
}
