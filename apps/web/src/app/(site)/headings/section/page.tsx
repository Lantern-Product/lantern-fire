import { PageHeader } from "@/components/page-header";
import { ShellPreview } from "@/components/shell-preview";
import { byCategory, categoryMeta } from "../_registry";

export default function SectionHeadingsPage() {
  const meta = categoryMeta.section;
  const items = byCategory("section");
  return (
    <>
      <PageHeader
        eyebrow="Headings"
        title={meta.title}
        description={meta.description}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((heading) => {
          const { Component } = heading;
          return (
            <ShellPreview
              key={heading.slug}
              href={`/headings-preview/${heading.category}/${heading.slug}`}
              title={heading.title}
              description={heading.description}
            >
              <Component />
            </ShellPreview>
          );
        })}
      </div>
    </>
  );
}
