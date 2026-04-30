import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ShellPreview } from "@/components/shell-preview";
import { byCategory, categoryMeta } from "../_registry";
import { readElementSource } from "../_lib/source";

export default function ElementsDropdownPage() {
  const meta = categoryMeta.dropdown;
  const items = byCategory("dropdown");
  return (
    <>
      <PageHeader
        eyebrow="Elements"
        title={meta.title}
        description={meta.description}
      />
      {meta.referenceHref ? (
        <p className="-mt-4 mb-8 text-sm text-muted-foreground">
          Looking for every DropdownMenu prop? See{" "}
          <Link
            href={meta.referenceHref}
            className="font-medium text-primary hover:underline"
          >
            Components &rsaquo; Overlays
          </Link>
          .
        </p>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((el) => {
          const { Component } = el;
          const code = readElementSource(el.category, el.slug);
          return (
            <ShellPreview
              key={el.slug}
              href={`/elements-preview/${el.category}/${el.slug}`}
              title={el.title}
              description={el.description}
              code={code || undefined}
            >
              <Component />
            </ShellPreview>
          );
        })}
      </div>
    </>
  );
}
