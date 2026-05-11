import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import {
  findLayoutItem,
  layoutItems,
  type LayoutCategory,
} from "@/app/(site)/layout/_registry";

const categories: LayoutCategory[] = [
  "container",
  "card",
  "list-container",
  "media-object",
  "divider",
];

export function generateStaticParams() {
  return layoutItems.map((l) => ({ category: l.category, slug: l.slug }));
}

export default async function LayoutPreviewPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  if (!categories.includes(category as LayoutCategory)) {
    notFound();
  }
  const item = findLayoutItem(category as LayoutCategory, slug);
  if (!item) {
    notFound();
  }
  const { Component } = item;
  return (
    <div className="relative min-h-screen w-full">
      <Component />
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href={`/layout/${item.category}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-foreground/5 backdrop-blur transition-colors hover:bg-muted"
        >
          <ArrowLeftIcon className="size-4" />
          Back to gallery
        </Link>
      </div>
    </div>
  );
}
