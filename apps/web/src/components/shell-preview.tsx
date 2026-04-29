"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

const VIEWPORT_WIDTH = 1280;
const VIEWPORT_HEIGHT = 800;

export function ShellPreview({
  href,
  title,
  description,
  children,
}: {
  href: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(0.32);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / VIEWPORT_WIDTH);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const frameHeight = VIEWPORT_HEIGHT * scale;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm ring-1 ring-foreground/5 transition-all hover:ring-foreground/20 focus-within:ring-2 focus-within:ring-ring">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-background"
        style={{ height: frameHeight }}
        aria-hidden
        suppressHydrationWarning
      >
        <div
          className="pointer-events-none absolute left-0 top-0 overflow-hidden"
          style={{
            width: VIEWPORT_WIDTH,
            height: VIEWPORT_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <div style={{ width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT }}>
            {children}
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 border-t border-border px-5 py-4">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-base font-semibold">
            <Link
              href={href}
              className="focus:outline-none after:absolute after:inset-0 after:content-['']"
            >
              {title}
            </Link>
          </h3>
          {description ? (
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Open <ArrowUpRightIcon className="size-3.5" />
        </span>
      </div>
    </div>
  );
}
