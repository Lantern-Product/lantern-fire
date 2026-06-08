import type { ComponentType } from "react";

import { DrawerWithCloseButton } from "./_components/drawers/with-close-button";
import { DrawerEmpty } from "./_components/drawers/empty";
import { DrawerWideEmpty } from "./_components/drawers/wide-empty";
import { DrawerWithBackgroundOverlay } from "./_components/drawers/with-background-overlay";
import { DrawerWithBrandedHeader } from "./_components/drawers/with-branded-header";
import { DrawerWithStickyFooter } from "./_components/drawers/with-sticky-footer";
import { DrawerCreateProject } from "./_components/drawers/create-project";
import { DrawerWideCreateProject } from "./_components/drawers/wide-create-project";
import { DrawerUserProfile } from "./_components/drawers/user-profile";
import { DrawerWideUserProfile } from "./_components/drawers/wide-user-profile";
import { DrawerContactList } from "./_components/drawers/contact-list";
import { DrawerFileDetails } from "./_components/drawers/file-details";

export type OverlayCategory = "drawers";

export type Overlay = {
  slug: string;
  title: string;
  category: OverlayCategory;
  description?: string;
  Component: ComponentType;
};

export const overlays: Overlay[] = [
  // Drawers (slide-over panels)
  {
    slug: "with-close-button",
    title: "With close button on outside",
    category: "drawers",
    description: "Dismiss control floats on the scrim just outside the panel edge.",
    Component: DrawerWithCloseButton,
  },
  {
    slug: "empty",
    title: "Empty",
    category: "drawers",
    description: "A bare narrow panel with a titled header and dismiss button.",
    Component: DrawerEmpty,
  },
  {
    slug: "wide-empty",
    title: "Wide empty",
    category: "drawers",
    description: "The empty panel at a wider max-width for denser content.",
    Component: DrawerWideEmpty,
  },
  {
    slug: "with-background-overlay",
    title: "With background overlay",
    category: "drawers",
    description: "A dimmed, blurred scrim focuses attention on the panel.",
    Component: DrawerWithBackgroundOverlay,
  },
  {
    slug: "with-branded-header",
    title: "With branded header",
    category: "drawers",
    description: "A saturated brand header with title and supporting copy.",
    Component: DrawerWithBrandedHeader,
  },
  {
    slug: "with-sticky-footer",
    title: "With sticky footer",
    category: "drawers",
    description: "Scrollable body with action buttons pinned to a sticky footer.",
    Component: DrawerWithStickyFooter,
  },
  {
    slug: "create-project",
    title: "Create project form",
    category: "drawers",
    description: "Branded header, stacked form fields, and a sticky action footer.",
    Component: DrawerCreateProject,
  },
  {
    slug: "wide-create-project",
    title: "Wide create project form",
    category: "drawers",
    description: "A two-column, label-aligned form for roomier data entry.",
    Component: DrawerWideCreateProject,
  },
  {
    slug: "user-profile",
    title: "User profile",
    category: "drawers",
    description: "Cover image, avatar, quick actions, and a profile detail list.",
    Component: DrawerUserProfile,
  },
  {
    slug: "wide-user-profile",
    title: "Wide horizontal user profile",
    category: "drawers",
    description: "A horizontal profile layout with identity column and detail grid.",
    Component: DrawerWideUserProfile,
  },
  {
    slug: "contact-list",
    title: "Contact list",
    category: "drawers",
    description: "Searchable directory with sticky alphabetical section headers.",
    Component: DrawerContactList,
  },
  {
    slug: "file-details",
    title: "File details",
    category: "drawers",
    description: "File preview, metadata, sharing list, and download actions.",
    Component: DrawerFileDetails,
  },
];

export function byCategory(category: OverlayCategory): Overlay[] {
  return overlays.filter((o) => o.category === category);
}

export function findOverlay(
  category: OverlayCategory,
  slug: string
): Overlay | undefined {
  return overlays.find((o) => o.category === category && o.slug === slug);
}

export const categoryMeta: Record<
  OverlayCategory,
  { title: string; description: string; href: string; referenceHref?: string }
> = {
  drawers: {
    title: "Drawers",
    description:
      "Slide-over panels for forms, profiles, and detail views — anchored to the edge of the viewport above the current page.",
    href: "/overlays/drawers",
    referenceHref: "/components/overlays",
  },
};
