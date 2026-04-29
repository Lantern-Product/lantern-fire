import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import {
  findShell,
  shells,
  type ShellCategory,
} from "@/app/(site)/shells/_registry";

const categories: ShellCategory[] = ["stacked", "sidebar", "multi-column"];

export function generateStaticParams() {
  return shells.map((s) => ({ category: s.category, slug: s.slug }));
}

export default async function ShellPreviewPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  if (!categories.includes(category as ShellCategory)) {
    notFound();
  }
  const shell = findShell(category as ShellCategory, slug);
  if (!shell) {
    notFound();
  }
  const { Component } = shell;
  return (
    <div className="relative min-h-screen w-full">
      <Component />
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href={`/shells/${shell.category}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-foreground/5 backdrop-blur transition-colors hover:bg-muted"
        >
          <ArrowLeftIcon className="size-4" />
          Back to gallery
        </Link>
      </div>
    </div>
  );
}
