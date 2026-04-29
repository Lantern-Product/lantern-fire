import { PageHeader } from "@/components/page-header";
import { ShellPreview } from "@/components/shell-preview";
import { byCategory, categoryMeta } from "../_registry";

export default function LayoutListContainerPage() {
  const meta = categoryMeta["list-container"];
  const items = byCategory("list-container");
  return (
    <>
      <PageHeader
        eyebrow="Layout"
        title={meta.title}
        description={meta.description}
      />
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
