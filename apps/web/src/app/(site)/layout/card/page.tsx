import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ShellPreview } from "@/components/shell-preview";
import { byCategory, categoryMeta } from "../_registry";

export default function LayoutCardPage() {
  const meta = categoryMeta.card;
  const items = byCategory("card");
  return (
    <>
      <PageHeader
        eyebrow="Layout"
        title={meta.title}
        description={meta.description}
      />
      {meta.referenceHref ? (
        <p className="-mt-4 mb-8 text-sm text-muted-foreground">
          Looking for every Card prop? See{" "}
          <Link
            href={meta.referenceHref}
            className="font-medium text-primary hover:underline"
          >
            Components &rsaquo; Cards
          </Link>
          .
        </p>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => {
          const { Component } = item;
          return (
            <ShellPreview
              key={item.slug}
              href={`/layout-preview/${item.category}/${item.slug}`}
              title={item.title}
              description={item.description}
            >
              <Component />
            </ShellPreview>
          );
        })}
      </div>
    </>
  );
}
