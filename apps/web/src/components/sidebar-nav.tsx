"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ScrollArea } from "@lantern-product/ui";
import { cn } from "@lantern-product/ui/utils";

type NavItem = { label: string; href: string };
type NavSection = { label: string; items: NavItem[] };

const sections: NavSection[] = [
  {
    label: "Getting started",
    items: [
      { label: "Introduction", href: "/" },
      { label: "Design tokens", href: "/tokens" },
      { label: "Typography", href: "/typography" },
      { label: "Release notes", href: "/releases" },
    ],
  },
  {
    label: "Components",
    items: [
      { label: "Overview", href: "/components" },
      { label: "Buttons", href: "/components/buttons" },
      { label: "Cards", href: "/components/cards" },
      { label: "Forms", href: "/components/forms" },
      { label: "Overlays", href: "/components/overlays" },
      { label: "Feedback", href: "/components/feedback" },
      { label: "Navigation", href: "/components/navigation" },
      { label: "Data", href: "/components/data" },
    ],
  },
  {
    label: "Application shells",
    items: [
      { label: "Overview", href: "/shells" },
      { label: "Stacked layouts", href: "/shells/stacked" },
      { label: "Sidebar layouts", href: "/shells/sidebar" },
      { label: "Multi-column", href: "/shells/multi-column" },
    ],
  },
  {
    label: "Headings",
    items: [
      { label: "Overview", href: "/headings" },
      { label: "Page headings", href: "/headings/page" },
      { label: "Card headings", href: "/headings/card" },
      { label: "Section headings", href: "/headings/section" },
    ],
  },
  {
    label: "Elements",
    items: [
      { label: "Overview", href: "/elements" },
      { label: "Avatars", href: "/elements/avatar" },
      { label: "Badges", href: "/elements/badge" },
      { label: "Dropdowns", href: "/elements/dropdown" },
      { label: "Buttons", href: "/elements/button" },
      { label: "Button groups", href: "/elements/button-group" },
    ],
  },
  {
    label: "Layout",
    items: [
      { label: "Overview", href: "/layout" },
      { label: "Containers", href: "/layout/container" },
      { label: "Cards", href: "/layout/card" },
      { label: "List containers", href: "/layout/list-container" },
      { label: "Media objects", href: "/layout/media-object" },
      { label: "Dividers", href: "/layout/divider" },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();
  const activeRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", behavior: "auto" });
  }, [pathname]);

  return (
    <ScrollArea
      className="flex-1 min-h-0 [&>[data-slot=scroll-area-viewport]]:[mask-image:linear-gradient(to_bottom,transparent,black_20px,black_calc(100%-20px),transparent)]"
    >
      <nav className="px-3 pb-6">
        {sections.map((section) => (
          <div key={section.label} className="mt-4 first:mt-2">
            <p className="px-2 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {section.label}
            </p>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      ref={active ? activeRef : undefined}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm transition-colors",
                        active
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-foreground/80 hover:bg-sidebar-accent/60 hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </ScrollArea>
  );
}
