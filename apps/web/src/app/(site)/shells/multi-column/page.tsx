import { PageHeader } from "@/components/page-header";
import { ShellPreview } from "@/components/shell-preview";
import { byCategory, categoryMeta } from "../_registry";

export default function MultiColumnShellsPage() {
  const meta = categoryMeta["multi-column"];
  const items = byCategory("multi-column");
  return (
    <>
      <PageHeader
        eyebrow="Application shells"
        title={meta.title}
        description={meta.description}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((shell) => {
          const { Component } = shell;
          return (
            <ShellPreview
              key={shell.slug}
              href={`/shells-preview/${shell.category}/${shell.slug}`}
              title={shell.title}
              description={shell.description}
            >
              <Component />
            </ShellPreview>
          );
        })}
      </div>
    </>
  );
}
