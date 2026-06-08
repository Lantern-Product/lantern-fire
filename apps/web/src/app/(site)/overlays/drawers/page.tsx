import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ShellPreview } from "@/components/shell-preview";
import { byCategory, categoryMeta } from "../_registry";
import { readOverlaySource } from "../_lib/source";

export default function OverlaysDrawersPage() {
  const meta = categoryMeta.drawers;
  const items = byCategory("drawers");
  return (
    <>
      <PageHeader
        eyebrow="Overlays"
        title={meta.title}
        description={meta.description}
      />
      {meta.referenceHref ? (
        <p className="-mt-4 mb-8 text-sm text-muted-foreground">
          Looking for the interactive Sheet primitive and every prop? See{" "}
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
        {items.map((overlay) => {
          const { Component } = overlay;
          const code = readOverlaySource(overlay.category, overlay.slug);
          return (
            <ShellPreview
              key={overlay.slug}
              href={`/overlays-preview/${overlay.category}/${overlay.slug}`}
              title={overlay.title}
              description={overlay.description}
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
