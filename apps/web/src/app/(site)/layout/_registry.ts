import type { ComponentType } from "react";

import { ContainerConstrained } from "./_components/container/constrained";
import { ContainerNarrow } from "./_components/container/narrow";
import { ContainerWide } from "./_components/container/wide";
import { ContainerFullBleed } from "./_components/container/full-bleed";
import { ContainerWithPadding } from "./_components/container/with-padding";

import { CardSimple } from "./_components/card/simple";
import { CardWithHeader } from "./_components/card/with-header";
import { CardWithHeaderAndFooter } from "./_components/card/with-header-and-footer";
import { CardWithImage } from "./_components/card/with-image";
import { CardWithImageOverlay } from "./_components/card/with-image-overlay";
import { CardWithActions } from "./_components/card/with-actions";
import { CardWithStats } from "./_components/card/with-stats";
import { CardWithList } from "./_components/card/with-list";
import { CardWithGrid } from "./_components/card/with-grid";
import { CardWithTabs } from "./_components/card/with-tabs";

import { ListContainerSimple } from "./_components/list-container/simple";
import { ListContainerWithDividers } from "./_components/list-container/with-dividers";
import { ListContainerWithIcons } from "./_components/list-container/with-icons";
import { ListContainerWithImages } from "./_components/list-container/with-images";
import { ListContainerTwoColumn } from "./_components/list-container/two-column";
import { ListContainerWithActions } from "./_components/list-container/with-actions";
import { ListContainerNarrowWithCards } from "./_components/list-container/narrow-with-cards";

import { MediaObjectSimple } from "./_components/media-object/simple";
import { MediaObjectWithDescription } from "./_components/media-object/with-description";
import { MediaObjectTwoLine } from "./_components/media-object/two-line";
import { MediaObjectThreeLine } from "./_components/media-object/three-line";
import { MediaObjectWithActions } from "./_components/media-object/with-actions";
import { MediaObjectWithOverline } from "./_components/media-object/with-overline";
import { MediaObjectWithLargeImage } from "./_components/media-object/with-large-image";
import { MediaObjectWithCircularImage } from "./_components/media-object/with-circular-image";

import { DividerSimple } from "./_components/divider/simple";
import { DividerWithLabel } from "./_components/divider/with-label";
import { DividerWithLabelLeft } from "./_components/divider/with-label-left";
import { DividerWithIcon } from "./_components/divider/with-icon";
import { DividerWithButton } from "./_components/divider/with-button";
import { DividerDotted } from "./_components/divider/dotted";
import { DividerDashed } from "./_components/divider/dashed";
import { DividerGradient } from "./_components/divider/gradient";

export type LayoutCategory =
  | "container"
  | "card"
  | "list-container"
  | "media-object"
  | "divider";

export type LayoutItem = {
  slug: string;
  title: string;
  category: LayoutCategory;
  description?: string;
  Component: ComponentType;
};

export const layoutItems: LayoutItem[] = [
  // Containers
  { slug: "constrained", title: "Constrained", category: "container", description: "Standard max-width canvas with horizontal padding.", Component: ContainerConstrained },
  { slug: "narrow", title: "Narrow", category: "container", description: "Narrow reading-width container for prose-heavy pages.", Component: ContainerNarrow },
  { slug: "wide", title: "Wide", category: "container", description: "Fluid container with consistent gutter on either side.", Component: ContainerWide },
  { slug: "full-bleed", title: "Full bleed", category: "container", description: "Edge-to-edge container for hero or banner content.", Component: ContainerFullBleed },
  { slug: "with-padding", title: "With padding", category: "container", description: "Constrained canvas with generous responsive padding.", Component: ContainerWithPadding },

  // Cards
  { slug: "simple", title: "Simple", category: "card", description: "Bare card surface with content only.", Component: CardSimple },
  { slug: "with-header", title: "With header", category: "card", description: "Card with a divided header.", Component: CardWithHeader },
  { slug: "with-header-and-footer", title: "With header and footer", category: "card", description: "Card with header, content, and a footer action bar.", Component: CardWithHeaderAndFooter },
  { slug: "with-image", title: "With image", category: "card", description: "Card with a top media block.", Component: CardWithImage },
  { slug: "with-image-overlay", title: "With image overlay", category: "card", description: "Hero card with text overlaid on the image.", Component: CardWithImageOverlay },
  { slug: "with-actions", title: "With actions", category: "card", description: "Header with a trailing menu action.", Component: CardWithActions },
  { slug: "with-stats", title: "With stats", category: "card", description: "Card with an inline stats grid.", Component: CardWithStats },
  { slug: "with-list", title: "With list", category: "card", description: "Card containing a divided list of items.", Component: CardWithList },
  { slug: "with-grid", title: "With grid", category: "card", description: "Card containing a media thumbnail grid.", Component: CardWithGrid },
  { slug: "with-tabs", title: "With tabs", category: "card", description: "Card with section tabs in the header.", Component: CardWithTabs },

  // List containers
  { slug: "simple", title: "Simple", category: "list-container", description: "Spaced cards with light surface treatment.", Component: ListContainerSimple },
  { slug: "with-dividers", title: "With dividers", category: "list-container", description: "Single surface with horizontal row dividers.", Component: ListContainerWithDividers },
  { slug: "with-icons", title: "With icons", category: "list-container", description: "Navigation-style list with icons and counts.", Component: ListContainerWithIcons },
  { slug: "with-images", title: "With images", category: "list-container", description: "List of avatars with name and role.", Component: ListContainerWithImages },
  { slug: "two-column", title: "Two column", category: "list-container", description: "Responsive grid of person cards.", Component: ListContainerTwoColumn },
  { slug: "with-actions", title: "With actions", category: "list-container", description: "List rows with a trailing action button.", Component: ListContainerWithActions },
  { slug: "narrow-with-cards", title: "Narrow with cards", category: "list-container", description: "Stack of compact cards in a narrow column.", Component: ListContainerNarrowWithCards },

  // Media objects
  { slug: "simple", title: "Simple", category: "media-object", description: "Image plus title and short description.", Component: MediaObjectSimple },
  { slug: "with-description", title: "With description", category: "media-object", description: "Larger media with a longer body description.", Component: MediaObjectWithDescription },
  { slug: "two-line", title: "Two line", category: "media-object", description: "Avatar plus name and role.", Component: MediaObjectTwoLine },
  { slug: "three-line", title: "Three line", category: "media-object", description: "Avatar plus name, role, and email.", Component: MediaObjectThreeLine },
  { slug: "with-actions", title: "With actions", category: "media-object", description: "Avatar row with trailing action buttons.", Component: MediaObjectWithActions },
  { slug: "with-overline", title: "With overline", category: "media-object", description: "Article-style row with a colored category overline.", Component: MediaObjectWithOverline },
  { slug: "with-large-image", title: "With large image", category: "media-object", description: "Two-column hero with text and a feature image.", Component: MediaObjectWithLargeImage },
  { slug: "with-circular-image", title: "With circular image", category: "media-object", description: "Quote-style block with a circular avatar.", Component: MediaObjectWithCircularImage },

  // Dividers
  { slug: "simple", title: "Simple", category: "divider", description: "Plain horizontal rule using the Separator primitive.", Component: DividerSimple },
  { slug: "with-label", title: "With label", category: "divider", description: "Centered label flanked by horizontal lines.", Component: DividerWithLabel },
  { slug: "with-label-left", title: "With label left", category: "divider", description: "Left-aligned label with a trailing rule.", Component: DividerWithLabelLeft },
  { slug: "with-icon", title: "With icon", category: "divider", description: "Icon-in-pill divider for editorial layouts.", Component: DividerWithIcon },
  { slug: "with-button", title: "With button", category: "divider", description: "Inline action button between two rules.", Component: DividerWithButton },
  { slug: "dotted", title: "Dotted", category: "divider", description: "Dotted horizontal rule.", Component: DividerDotted },
  { slug: "dashed", title: "Dashed", category: "divider", description: "Dashed horizontal rule.", Component: DividerDashed },
  { slug: "gradient", title: "Gradient", category: "divider", description: "Soft fade-out gradient rule.", Component: DividerGradient },
];

export function byCategory(category: LayoutCategory): LayoutItem[] {
  return layoutItems.filter((l) => l.category === category);
}

export function findLayoutItem(
  category: LayoutCategory,
  slug: string
): LayoutItem | undefined {
  return layoutItems.find((l) => l.category === category && l.slug === slug);
}

export const categoryMeta: Record<
  LayoutCategory,
  { title: string; description: string; href: string; referenceHref?: string }
> = {
  container: {
    title: "Containers",
    description:
      "Width and padding patterns for the outermost wrapper of a page.",
    href: "/layout/container",
  },
  card: {
    title: "Cards",
    description:
      "Surface treatments — headers, footers, images, stats, tabs, and lists composed inside a Card.",
    href: "/layout/card",
    referenceHref: "/components/cards",
  },
  "list-container": {
    title: "List containers",
    description:
      "Patterns for rendering collections — divided lists, two-column grids, and narrow card stacks.",
    href: "/layout/list-container",
  },
  "media-object": {
    title: "Media objects",
    description:
      "Image-plus-text rows for articles, person details, and quote layouts.",
    href: "/layout/media-object",
  },
  divider: {
    title: "Dividers",
    description:
      "Section separators — plain, labeled, dotted, dashed, and decorative.",
    href: "/layout/divider",
    referenceHref: "/components/cards",
  },
};
