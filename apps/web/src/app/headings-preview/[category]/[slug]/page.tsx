import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import {
  findHeading,
  headings,
  type HeadingCategory,
} from "@/app/(site)/headings/_registry";

const categories: HeadingCategory[] = ["page", "card", "section"];

export function generateStaticParams() {
  return headings.map((h) => ({ category: h.category, slug: h.slug }));
}

export default async function HeadingPreviewPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  if (!categories.includes(category as HeadingCategory)) {
    notFound();
  }
  const heading = findHeading(category as HeadingCategory, slug);
  if (!heading) {
    notFound();
  }
  const { Component } = heading;
  return (
    <div className="relative min-h-screen w-full">
      <Component />
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href={`/headings/${heading.category}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-foreground/5 backdrop-blur transition-colors hover:bg-muted"
        >
          <ArrowLeftIcon className="size-4" />
          Back to gallery
        </Link>
      </div>
    </div>
  );
}
