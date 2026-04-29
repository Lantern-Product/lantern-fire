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

export default function ElementsIndexPage() {
  const categories = [
    "avatar",
    "badge",
    "dropdown",
    "button",
    "button-group",
  ] as const;
  return (
    <>
      <PageHeader
        eyebrow="Elements"
        title="Elements"
        description="Composed patterns for the small atoms of the design system: avatars, badges, dropdowns, buttons, and button groups. Each variant is staged in a realistic context — toolbars, list rows, and cards — to show the design in use."
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
                    {count} {count === 1 ? "variant" : "variants"}
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
