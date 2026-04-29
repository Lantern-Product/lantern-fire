import type { ComponentType } from "react";

import { PageSimple } from "./_components/page/simple";
import { PageWithMeta } from "./_components/page/with-meta";
import { PageWithActions } from "./_components/page/with-actions";
import { PageWithMetaAndActions } from "./_components/page/with-meta-and-actions";
import { PageWithAvatarAndActions } from "./_components/page/with-avatar-and-actions";
import { PageWithBanner } from "./_components/page/with-banner";
import { PageWithTabs } from "./_components/page/with-tabs";
import { PageWithBreadcrumbs } from "./_components/page/with-breadcrumbs";
import { PageWithBreadcrumbsAndActions } from "./_components/page/with-breadcrumbs-and-actions";

import { CardSimple } from "./_components/card/simple";
import { CardWithAction } from "./_components/card/with-action";
import { CardWithDescription } from "./_components/card/with-description";
import { CardWithTabs } from "./_components/card/with-tabs";
import { CardWithStats } from "./_components/card/with-stats";
import { CardWithAvatarAndActions } from "./_components/card/with-avatar-and-actions";

import { SectionSimple } from "./_components/section/simple";
import { SectionWithAction } from "./_components/section/with-action";
import { SectionWithDescription } from "./_components/section/with-description";
import { SectionWithInputGroup } from "./_components/section/with-input-group";
import { SectionWithTabs } from "./_components/section/with-tabs";
import { SectionWithTabsAndActions } from "./_components/section/with-tabs-and-actions";
import { SectionWithTabsOnBottom } from "./_components/section/with-tabs-on-bottom";
import { SectionWithActionsAndBreadcrumbs } from "./_components/section/with-actions-and-breadcrumbs";
import { SectionWithLabel } from "./_components/section/with-label";
import { SectionWithToggle } from "./_components/section/with-toggle";

export type HeadingCategory = "page" | "card" | "section";

export type Heading = {
  slug: string;
  title: string;
  category: HeadingCategory;
  description?: string;
  Component: ComponentType;
};

export const headings: Heading[] = [
  // Page headings
  {
    slug: "simple",
    title: "Simple",
    category: "page",
    description: "A bare page title for content-only routes.",
    Component: PageSimple,
  },
  {
    slug: "with-meta",
    title: "With meta",
    category: "page",
    description: "Title plus inline metadata badges.",
    Component: PageWithMeta,
  },
  {
    slug: "with-actions",
    title: "With actions",
    category: "page",
    description: "Title with primary and secondary action buttons.",
    Component: PageWithActions,
  },
  {
    slug: "with-meta-and-actions",
    title: "With meta and actions",
    category: "page",
    description: "Full-detail header pairing metadata and actions.",
    Component: PageWithMetaAndActions,
  },
  {
    slug: "with-avatar-and-actions",
    title: "With avatar and actions",
    category: "page",
    description: "Profile-style header with avatar and CTAs.",
    Component: PageWithAvatarAndActions,
  },
  {
    slug: "with-banner",
    title: "With banner",
    category: "page",
    description: "Cover banner with overlapping profile mark.",
    Component: PageWithBanner,
  },
  {
    slug: "with-tabs",
    title: "With tabs",
    category: "page",
    description: "Title and actions above a tab strip.",
    Component: PageWithTabs,
  },
  {
    slug: "with-breadcrumbs",
    title: "With breadcrumbs",
    category: "page",
    description: "Breadcrumb trail above the page title.",
    Component: PageWithBreadcrumbs,
  },
  {
    slug: "with-breadcrumbs-and-actions",
    title: "With breadcrumbs and actions",
    category: "page",
    description: "Breadcrumbs above a heading row with actions.",
    Component: PageWithBreadcrumbsAndActions,
  },

  // Card headings
  {
    slug: "simple",
    title: "Simple",
    category: "card",
    description: "Plain card heading divided from its body.",
    Component: CardSimple,
  },
  {
    slug: "with-action",
    title: "With action",
    category: "card",
    description: "Card heading with a single inline action.",
    Component: CardWithAction,
  },
  {
    slug: "with-description",
    title: "With description",
    category: "card",
    description: "Title plus a supporting description.",
    Component: CardWithDescription,
  },
  {
    slug: "with-tabs",
    title: "With tabs",
    category: "card",
    description: "Card heading with section tabs.",
    Component: CardWithTabs,
  },
  {
    slug: "with-stats",
    title: "With stats",
    category: "card",
    description: "Card heading with an inline stat row.",
    Component: CardWithStats,
  },
  {
    slug: "with-avatar-and-actions",
    title: "With avatar and actions",
    category: "card",
    description: "Avatar-led card heading with action buttons.",
    Component: CardWithAvatarAndActions,
  },

  // Section headings
  {
    slug: "simple",
    title: "Simple",
    category: "section",
    description: "Bare section title with a divider.",
    Component: SectionSimple,
  },
  {
    slug: "with-action",
    title: "With action",
    category: "section",
    description: "Section title with a primary action.",
    Component: SectionWithAction,
  },
  {
    slug: "with-description",
    title: "With description",
    category: "section",
    description: "Section title plus supporting copy.",
    Component: SectionWithDescription,
  },
  {
    slug: "with-input-group",
    title: "With input group",
    category: "section",
    description: "Section title with inline search field.",
    Component: SectionWithInputGroup,
  },
  {
    slug: "with-tabs",
    title: "With tabs",
    category: "section",
    description: "Section title above a tab strip.",
    Component: SectionWithTabs,
  },
  {
    slug: "with-tabs-and-actions",
    title: "With tabs and actions",
    category: "section",
    description: "Section title with tabs and trailing actions.",
    Component: SectionWithTabsAndActions,
  },
  {
    slug: "with-tabs-on-bottom",
    title: "With tabs on bottom",
    category: "section",
    description: "Description-led section with bottom-aligned tabs.",
    Component: SectionWithTabsOnBottom,
  },
  {
    slug: "with-actions-and-breadcrumbs",
    title: "With actions and breadcrumbs",
    category: "section",
    description: "Breadcrumbs above a section title with actions.",
    Component: SectionWithActionsAndBreadcrumbs,
  },
  {
    slug: "with-label",
    title: "With label",
    category: "section",
    description: "Section title paired with a status label.",
    Component: SectionWithLabel,
  },
  {
    slug: "with-toggle",
    title: "With toggle",
    category: "section",
    description: "Section title with an inline switch control.",
    Component: SectionWithToggle,
  },
];

export function byCategory(category: HeadingCategory): Heading[] {
  return headings.filter((h) => h.category === category);
}

export function findHeading(
  category: HeadingCategory,
  slug: string
): Heading | undefined {
  return headings.find((h) => h.category === category && h.slug === slug);
}

export const categoryMeta: Record<
  HeadingCategory,
  { title: string; description: string; href: string }
> = {
  page: {
    title: "Page headings",
    description:
      "Top-of-page titles for full routes. Pair them with breadcrumbs, meta, and primary actions.",
    href: "/headings/page",
  },
  card: {
    title: "Card headings",
    description:
      "Headers that sit at the top of a card surface, with actions, tabs, or stats.",
    href: "/headings/card",
  },
  section: {
    title: "Section headings",
    description:
      "Inline section titles for grouping related content within a page.",
    href: "/headings/section",
  },
};
