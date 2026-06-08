import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import {
  findOverlay,
  overlays,
  type OverlayCategory,
} from "@/app/(site)/overlays/_registry";

const categories: OverlayCategory[] = ["drawers"];

export function generateStaticParams() {
  return overlays.map((o) => ({ category: o.category, slug: o.slug }));
}

export default async function OverlayPreviewPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  if (!categories.includes(category as OverlayCategory)) {
    notFound();
  }
  const overlay = findOverlay(category as OverlayCategory, slug);
  if (!overlay) {
    notFound();
  }
  const { Component } = overlay;
  return (
    <div className="relative h-screen w-full">
      <Component />
      <div className="fixed bottom-4 left-4 z-50">
        <Link
          href={`/overlays/${overlay.category}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-foreground/5 backdrop-blur transition-colors hover:bg-muted"
        >
          <ArrowLeftIcon className="size-4" />
          Back to gallery
        </Link>
      </div>
    </div>
  );
}
