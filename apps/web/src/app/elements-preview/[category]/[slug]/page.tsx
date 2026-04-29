import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import {
  elements,
  findElement,
  type ElementCategory,
} from "@/app/(site)/elements/_registry";

const categories: ElementCategory[] = [
  "avatar",
  "badge",
  "dropdown",
  "button",
  "button-group",
];

export function generateStaticParams() {
  return elements.map((e) => ({ category: e.category, slug: e.slug }));
}

export default async function ElementPreviewPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  if (!categories.includes(category as ElementCategory)) {
    notFound();
  }
  const element = findElement(category as ElementCategory, slug);
  if (!element) {
    notFound();
  }
  const { Component } = element;
  return (
    <div className="relative min-h-screen w-full">
      <Component />
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href={`/elements/${element.category}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-foreground/5 backdrop-blur transition-colors hover:bg-muted"
        >
          <ArrowLeftIcon className="size-4" />
          Back to gallery
        </Link>
      </div>
    </div>
  );
}
