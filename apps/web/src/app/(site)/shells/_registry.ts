import type { ComponentType } from "react";

import { StackedLightNav } from "./_components/stacked/light-nav";
import { StackedDarkNav } from "./_components/stacked/dark-nav";
import { StackedBrandedNav } from "./_components/stacked/branded-nav";
import { StackedWithPageHeading } from "./_components/stacked/with-page-heading";
import { StackedWithTabs } from "./_components/stacked/with-tabs";
import { StackedWithSecondaryHeader } from "./_components/stacked/with-secondary-header";
import { StackedWithSearch } from "./_components/stacked/with-search";
import { StackedWithOverlap } from "./_components/stacked/with-overlap";
import { StackedWithCardSearch } from "./_components/stacked/with-card-search";

import { SidebarLight } from "./_components/sidebar/light";
import { SidebarLightWithHeader } from "./_components/sidebar/light-with-header";
import { SidebarDark } from "./_components/sidebar/dark";
import { SidebarBrand } from "./_components/sidebar/brand";
import { SidebarBrandWithHeader } from "./_components/sidebar/brand-with-header";
import { SidebarCondensed } from "./_components/sidebar/condensed";
import { SidebarCondensedWithHeader } from "./_components/sidebar/condensed-with-header";
import { SidebarWithSecondaryColumn } from "./_components/sidebar/with-secondary-column";

import { MultiColumnFullWidthSecondary } from "./_components/multi-column/full-width-secondary";
import { MultiColumnFullWidthThreeColumns } from "./_components/multi-column/full-width-three-columns";
import { MultiColumnConstrainedSecondary } from "./_components/multi-column/constrained-secondary";
import { MultiColumnConstrainedThreeColumns } from "./_components/multi-column/constrained-three-columns";
import { MultiColumnWithStickySidebar } from "./_components/multi-column/with-sticky-sidebar";
import { MultiColumnWithBottomAlignedNav } from "./_components/multi-column/with-bottom-aligned-nav";

export type ShellCategory = "stacked" | "sidebar" | "multi-column";

export type Shell = {
  slug: string;
  title: string;
  category: ShellCategory;
  description?: string;
  Component: ComponentType;
};

export const shells: Shell[] = [
  // Stacked layouts
  {
    slug: "light-nav",
    title: "Light nav",
    category: "stacked",
    description: "Light top nav with primary actions and avatar menu.",
    Component: StackedLightNav,
  },
  {
    slug: "dark-nav",
    title: "Dark nav",
    category: "stacked",
    description: "Dark top nav for high-contrast product chrome.",
    Component: StackedDarkNav,
  },
  {
    slug: "branded-nav",
    title: "Branded nav",
    category: "stacked",
    description: "Saturated brand color top nav.",
    Component: StackedBrandedNav,
  },
  {
    slug: "with-page-heading",
    title: "With page heading",
    category: "stacked",
    description: "Top nav plus a sub-header with title and primary action.",
    Component: StackedWithPageHeading,
  },
  {
    slug: "with-tabs",
    title: "With tabs",
    category: "stacked",
    description: "Top nav with secondary tabs for in-page navigation.",
    Component: StackedWithTabs,
  },
  {
    slug: "with-secondary-header",
    title: "With secondary header",
    category: "stacked",
    description: "Top nav plus a separated secondary toolbar.",
    Component: StackedWithSecondaryHeader,
  },
  {
    slug: "with-search",
    title: "With search",
    category: "stacked",
    description: "Prominent inline search field in the top nav.",
    Component: StackedWithSearch,
  },
  {
    slug: "with-overlap",
    title: "With overlap",
    category: "stacked",
    description: "Branded header with content card overlapping it.",
    Component: StackedWithOverlap,
  },
  {
    slug: "with-card-search",
    title: "With card search",
    category: "stacked",
    description: "Compact branded header with white search field.",
    Component: StackedWithCardSearch,
  },

  // Sidebar layouts
  {
    slug: "light",
    title: "Light sidebar",
    category: "sidebar",
    description: "Standard light sidebar with grouped nav items.",
    Component: SidebarLight,
  },
  {
    slug: "light-with-header",
    title: "Light sidebar + header",
    category: "sidebar",
    description: "Light sidebar paired with a top utility header.",
    Component: SidebarLightWithHeader,
  },
  {
    slug: "dark",
    title: "Dark sidebar",
    category: "sidebar",
    description: "Dark sidebar for content-first product UIs.",
    Component: SidebarDark,
  },
  {
    slug: "brand",
    title: "Brand sidebar",
    category: "sidebar",
    description: "Saturated brand sidebar with white nav text.",
    Component: SidebarBrand,
  },
  {
    slug: "brand-with-header",
    title: "Brand sidebar + header",
    category: "sidebar",
    description: "Brand sidebar with a complementary top header.",
    Component: SidebarBrandWithHeader,
  },
  {
    slug: "condensed",
    title: "Condensed sidebar",
    category: "sidebar",
    description: "Icon-only rail sidebar to maximize content area.",
    Component: SidebarCondensed,
  },
  {
    slug: "condensed-with-header",
    title: "Condensed sidebar + header",
    category: "sidebar",
    description: "Icon rail with a top header and breadcrumbs.",
    Component: SidebarCondensedWithHeader,
  },
  {
    slug: "with-secondary-column",
    title: "With secondary column",
    category: "sidebar",
    description: "Sidebar plus a secondary content list column.",
    Component: SidebarWithSecondaryColumn,
  },

  // Multi-column layouts
  {
    slug: "full-width-secondary",
    title: "Full width with secondary",
    category: "multi-column",
    description: "Full-width content area with a flush secondary column.",
    Component: MultiColumnFullWidthSecondary,
  },
  {
    slug: "full-width-three-columns",
    title: "Full width three columns",
    category: "multi-column",
    description: "Three-column flush layout for content-rich apps.",
    Component: MultiColumnFullWidthThreeColumns,
  },
  {
    slug: "constrained-secondary",
    title: "Constrained with secondary",
    category: "multi-column",
    description: "Centered max-width canvas with secondary column.",
    Component: MultiColumnConstrainedSecondary,
  },
  {
    slug: "constrained-three-columns",
    title: "Constrained three columns",
    category: "multi-column",
    description: "Centered three-column canvas with rails.",
    Component: MultiColumnConstrainedThreeColumns,
  },
  {
    slug: "with-sticky-sidebar",
    title: "With sticky sidebar",
    category: "multi-column",
    description: "Persistent sidebar that sticks while content scrolls.",
    Component: MultiColumnWithStickySidebar,
  },
  {
    slug: "with-bottom-aligned-nav",
    title: "With bottom-aligned nav",
    category: "multi-column",
    description: "Sidebar with utility nav anchored to the bottom.",
    Component: MultiColumnWithBottomAlignedNav,
  },
];

export function byCategory(category: ShellCategory): Shell[] {
  return shells.filter((s) => s.category === category);
}

export function findShell(category: ShellCategory, slug: string): Shell | undefined {
  return shells.find((s) => s.category === category && s.slug === slug);
}

export const categoryMeta: Record<
  ShellCategory,
  { title: string; description: string; href: string }
> = {
  stacked: {
    title: "Stacked layouts",
    description: "A horizontal top nav with content stacked beneath it.",
    href: "/shells/stacked",
  },
  sidebar: {
    title: "Sidebar layouts",
    description: "A persistent vertical sidebar paired with a content area.",
    href: "/shells/sidebar",
  },
  "multi-column": {
    title: "Multi-column layouts",
    description: "Multiple content columns for dense, list-driven apps.",
    href: "/shells/multi-column",
  },
};
