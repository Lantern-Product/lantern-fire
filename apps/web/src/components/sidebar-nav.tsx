"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@lantern-fire/ui";
import { cn } from "@lantern-fire/ui/utils";

type NavItem = { label: string; href: string };
type NavSection = { label: string; items: NavItem[] };

const sections: NavSection[] = [
  {
    label: "Getting started",
    items: [
      { label: "Introduction", href: "/" },
      { label: "Design tokens", href: "/tokens" },
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
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <ScrollArea className="flex-1">
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
