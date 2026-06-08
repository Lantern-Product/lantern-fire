"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { PanelRightOpenIcon, XIcon } from "lucide-react";
import { Button } from "@lantern-product/ui";
import { cn } from "@lantern-product/ui/utils";

/**
 * Demo-only context so the dismiss controls inside a drawer can close it
 * without each variant having to wire up state. This plumbing intentionally
 * lives in the shared stage (not in the per-variant files), so the showcased
 * component source stays a clean, static panel.
 */
const DrawerDemoContext = createContext<{ close: () => void } | null>(null);

/**
 * A faux application page rendered behind a drawer so each variant reads as a
 * slide-over panel sitting on top of real product chrome. Purely decorative.
 */
function FauxPage() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <div className="flex h-14 items-center gap-4 border-b border-border bg-background px-6">
        <div className="size-6 rounded-md bg-primary/20" />
        <div className="h-3 w-24 rounded-full bg-muted-foreground/20" />
        <div className="ml-auto flex items-center gap-3">
          <div className="h-3 w-16 rounded-full bg-muted-foreground/15" />
          <div className="size-8 rounded-full bg-muted-foreground/15" />
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="h-5 w-48 rounded-full bg-muted-foreground/15" />
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-20 rounded-lg border border-border bg-background"
            />
          ))}
        </div>
        <div className="h-64 rounded-lg border border-dashed border-border bg-background/60" />
      </div>
    </div>
  );
}

export type DrawerStageProps = {
  children: ReactNode;
  /** Panel width. Narrow ≈ max-w-md, wide ≈ max-w-2xl. */
  width?: "narrow" | "wide";
  /** Render a dimmed background overlay (scrim) behind the panel. */
  overlay?: boolean;
  /** Where the dismiss control lives relative to the panel. */
  close?: "inside" | "outside" | "none";
};

/**
 * Shared stage for every drawer variant. Handles the faux page behind the
 * panel, the scrim, panel positioning/sizing, and the optional close control.
 * Each variant only has to supply the panel's header / body / footer.
 *
 * Built with static positioning (no portals) so it scales correctly inside the
 * gallery thumbnails and fills the screen on the dedicated preview route.
 */
export function DrawerStage({
  children,
  width = "narrow",
  overlay = false,
  close = "inside",
}: DrawerStageProps) {
  // Demo-only: defaults to open so the scaled, non-interactive gallery
  // thumbnails always show the panel. On the full-screen preview route the
  // panel can be dismissed and reopened.
  const [open, setOpen] = useState(true);

  return (
    <DrawerDemoContext.Provider value={{ close: () => setOpen(false) }}>
      <div className="relative flex h-full w-full justify-end overflow-hidden bg-muted/30">
        <FauxPage />

        {/* Reopen affordance, revealed once the panel is dismissed. */}
        <div
          className={cn(
            "absolute inset-0 z-0 grid place-items-center transition-opacity duration-300",
            open ? "pointer-events-none opacity-0" : "opacity-100"
          )}
        >
          <Button onClick={() => setOpen(true)}>
            <PanelRightOpenIcon />
            Open drawer
          </Button>
        </div>

        {/* Backdrop scrim. */}
        <div
          className={cn(
            "absolute inset-0 z-10 transition-opacity duration-300",
            overlay
              ? "bg-foreground/40 supports-backdrop-filter:backdrop-blur-xs"
              : "bg-foreground/5",
            open ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          aria-hidden
        />

        {/* Slide-over panel. */}
        <div
          className={cn(
            "relative z-20 flex h-full w-full flex-col bg-card text-card-foreground shadow-2xl ring-1 ring-foreground/10 transition-transform duration-300 ease-in-out",
            width === "wide" ? "max-w-2xl" : "max-w-md",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          {close === "outside" ? (
            <div className="absolute left-0 top-0 z-20 -translate-x-full pr-2 pt-4 sm:pr-4">
              <DrawerCloseButton tone="contrast" />
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </DrawerDemoContext.Provider>
  );
}

/**
 * Dismiss control for a drawer. `tone="default"` sits inside a light panel,
 * `tone="branded"` sits on a colored header, and `tone="contrast"` floats on
 * the scrim outside the panel.
 */
export function DrawerCloseButton({
  tone = "default",
}: {
  tone?: "default" | "branded" | "contrast";
}) {
  const ctx = useContext(DrawerDemoContext);
  return (
    <button
      type="button"
      aria-label="Close panel"
      onClick={() => ctx?.close()}
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
        tone === "branded" &&
          "text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground",
        tone === "default" &&
          "text-muted-foreground hover:bg-muted hover:text-foreground",
        tone === "contrast" &&
          "bg-foreground/60 text-white/90 backdrop-blur-sm hover:bg-foreground/75 hover:text-white"
      )}
    >
      <XIcon className="size-5" />
    </button>
  );
}

/** Header row used by most narrow drawers: title + description + inside close. */
export function DrawerHeader({
  title,
  description,
  className,
  showClose = true,
}: {
  title: string;
  description?: string;
  className?: string;
  /** Hide the in-header close when the dismiss control lives outside the panel. */
  showClose?: boolean;
}) {
  return (
    <div className={cn("flex items-start justify-between gap-4 px-4 py-6 sm:px-6", className)}>
      <div className="min-w-0">
        <h2 className="font-heading text-base font-semibold text-foreground">
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {showClose ? <DrawerCloseButton /> : null}
    </div>
  );
}
