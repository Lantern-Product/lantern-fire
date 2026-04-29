import type { ComponentType } from "react";

import { AvatarSimple } from "./_components/avatar/simple";
import { AvatarWithStatus } from "./_components/avatar/with-status";
import { AvatarWithStatusBottom } from "./_components/avatar/with-status-bottom";
import { AvatarRounded } from "./_components/avatar/rounded";
import { AvatarWithInitials } from "./_components/avatar/with-initials";
import { AvatarGroupStacked } from "./_components/avatar/group-stacked";
import { AvatarGroupGrid } from "./_components/avatar/group-grid";
import { AvatarGroupWithCounter } from "./_components/avatar/group-with-counter";
import { AvatarWithName } from "./_components/avatar/with-name";
import { AvatarWithNameAndEmail } from "./_components/avatar/with-name-and-email";
import { AvatarLargeWithActions } from "./_components/avatar/large-with-actions";

import { BadgeSmall } from "./_components/badge/small";
import { BadgeDefault } from "./_components/badge/default";
import { BadgeLarge } from "./_components/badge/large";
import { BadgeWithDot } from "./_components/badge/with-dot";
import { BadgeWithIcon } from "./_components/badge/with-icon";
import { BadgeWithButton } from "./_components/badge/with-button";
import { BadgeWithBorder } from "./_components/badge/with-border";
import { BadgeWithBorderAndIcon } from "./_components/badge/with-border-and-icon";
import { BadgePill } from "./_components/badge/pill";
import { BadgePillWithDot } from "./_components/badge/pill-with-dot";
import { BadgePillWithIcon } from "./_components/badge/pill-with-icon";
import { BadgePillWithBorder } from "./_components/badge/pill-with-border";
import { BadgeStatusSuccess } from "./_components/badge/status-success";
import { BadgeStatusWarning } from "./_components/badge/status-warning";
import { BadgeStatusError } from "./_components/badge/status-error";
import { BadgeStatusInfo } from "./_components/badge/status-info";

import { DropdownSimple } from "./_components/dropdown/simple";
import { DropdownWithIconButton } from "./_components/dropdown/with-icon-button";
import { DropdownWithDivider } from "./_components/dropdown/with-divider";
import { DropdownWithGroupedItems } from "./_components/dropdown/with-grouped-items";
import { DropdownWithCheckboxItems } from "./_components/dropdown/with-checkbox-items";

import { ButtonPrimary } from "./_components/button/primary";
import { ButtonSecondary } from "./_components/button/secondary";
import { ButtonSoft } from "./_components/button/soft";
import { ButtonWithLeadingIcon } from "./_components/button/with-leading-icon";
import { ButtonWithTrailingIcon } from "./_components/button/with-trailing-icon";
import { ButtonRounded } from "./_components/button/rounded";
import { ButtonCircular } from "./_components/button/circular";
import { ButtonPill } from "./_components/button/pill";

import { ButtonGroupSimple } from "./_components/button-group/simple";
import { ButtonGroupAttached } from "./_components/button-group/attached";
import { ButtonGroupWithIcons } from "./_components/button-group/with-icons";
import { ButtonGroupSegmented } from "./_components/button-group/segmented";
import { ButtonGroupWithDropdown } from "./_components/button-group/with-dropdown";

export type ElementCategory =
  | "avatar"
  | "badge"
  | "dropdown"
  | "button"
  | "button-group";

export type Element = {
  slug: string;
  title: string;
  category: ElementCategory;
  description?: string;
  Component: ComponentType;
};

export const elements: Element[] = [
  // Avatars
  { slug: "simple", title: "Simple", category: "avatar", description: "A range of avatar sizes with letter fallbacks.", Component: AvatarSimple },
  { slug: "with-status", title: "With status", category: "avatar", description: "Avatars with a status indicator pinned top-right.", Component: AvatarWithStatus },
  { slug: "with-status-bottom", title: "With status bottom", category: "avatar", description: "Bottom-right status indicator placement.", Component: AvatarWithStatusBottom },
  { slug: "rounded", title: "Rounded", category: "avatar", description: "Squared avatars with progressive corner radii.", Component: AvatarRounded },
  { slug: "with-initials", title: "With initials", category: "avatar", description: "Color-coded initial fallbacks for users without photos.", Component: AvatarWithInitials },
  { slug: "group-stacked", title: "Group stacked", category: "avatar", description: "Overlapping avatar group with shared ring.", Component: AvatarGroupStacked },
  { slug: "group-grid", title: "Group grid", category: "avatar", description: "Avatars laid out in a uniform grid.", Component: AvatarGroupGrid },
  { slug: "group-with-counter", title: "Group with counter", category: "avatar", description: "Stacked group with an overflow counter.", Component: AvatarGroupWithCounter },
  { slug: "with-name", title: "With name", category: "avatar", description: "Avatar paired with a name label.", Component: AvatarWithName },
  { slug: "with-name-and-email", title: "With name and email", category: "avatar", description: "List-row layout with avatar, name, and email.", Component: AvatarWithNameAndEmail },
  { slug: "large-with-actions", title: "Large with actions", category: "avatar", description: "Profile card with a large avatar and primary actions.", Component: AvatarLargeWithActions },

  // Badges
  { slug: "small", title: "Small", category: "badge", description: "Compact badges for dense layouts.", Component: BadgeSmall },
  { slug: "default", title: "Default", category: "badge", description: "Standard badge sizes across all variants.", Component: BadgeDefault },
  { slug: "large", title: "Large", category: "badge", description: "Larger badges suitable for headings and stats.", Component: BadgeLarge },
  { slug: "with-dot", title: "With dot", category: "badge", description: "Status badges with a leading colored dot.", Component: BadgeWithDot },
  { slug: "with-icon", title: "With icon", category: "badge", description: "Badges with leading lucide icons.", Component: BadgeWithIcon },
  { slug: "with-button", title: "With button", category: "badge", description: "Removable tag badges with a close button.", Component: BadgeWithButton },
  { slug: "with-border", title: "With border", category: "badge", description: "Outline badges in semantic colors.", Component: BadgeWithBorder },
  { slug: "with-border-and-icon", title: "With border and icon", category: "badge", description: "Outline status badges with an icon.", Component: BadgeWithBorderAndIcon },
  { slug: "pill", title: "Pill", category: "badge", description: "Soft-tinted pill badges.", Component: BadgePill },
  { slug: "pill-with-dot", title: "Pill with dot", category: "badge", description: "Pill badges with a status dot.", Component: BadgePillWithDot },
  { slug: "pill-with-icon", title: "Pill with icon", category: "badge", description: "Pill badges with a leading icon.", Component: BadgePillWithIcon },
  { slug: "pill-with-border", title: "Pill with border", category: "badge", description: "Pills with a tinted ring border.", Component: BadgePillWithBorder },
  { slug: "status-success", title: "Status success", category: "badge", description: "Success-state badge styles.", Component: BadgeStatusSuccess },
  { slug: "status-warning", title: "Status warning", category: "badge", description: "Warning-state badge styles.", Component: BadgeStatusWarning },
  { slug: "status-error", title: "Status error", category: "badge", description: "Error-state badge styles.", Component: BadgeStatusError },
  { slug: "status-info", title: "Status info", category: "badge", description: "Informational badge styles.", Component: BadgeStatusInfo },

  // Dropdowns
  { slug: "simple", title: "Simple", category: "dropdown", description: "Plain dropdown with a list of actions.", Component: DropdownSimple },
  { slug: "with-icon-button", title: "With icon button", category: "dropdown", description: "Icon-only trigger with leading icons in items.", Component: DropdownWithIconButton },
  { slug: "with-divider", title: "With divider", category: "dropdown", description: "Items separated into logical groups by dividers.", Component: DropdownWithDivider },
  { slug: "with-grouped-items", title: "With grouped items", category: "dropdown", description: "Items organized under labeled headings.", Component: DropdownWithGroupedItems },
  { slug: "with-checkbox-items", title: "With checkbox items", category: "dropdown", description: "Filter dropdown with multi-select checkboxes.", Component: DropdownWithCheckboxItems },

  // Buttons
  { slug: "primary", title: "Primary", category: "button", description: "Primary buttons across xs / sm / default / lg sizes.", Component: ButtonPrimary },
  { slug: "secondary", title: "Secondary", category: "button", description: "Secondary, outline, ghost, and link variants.", Component: ButtonSecondary },
  { slug: "soft", title: "Soft", category: "button", description: "Soft tinted buttons in semantic colors.", Component: ButtonSoft },
  { slug: "with-leading-icon", title: "With leading icon", category: "button", description: "Buttons with a leading lucide icon.", Component: ButtonWithLeadingIcon },
  { slug: "with-trailing-icon", title: "With trailing icon", category: "button", description: "Buttons with a trailing icon.", Component: ButtonWithTrailingIcon },
  { slug: "rounded", title: "Rounded", category: "button", description: "Buttons with squared and reduced-radius corners.", Component: ButtonRounded },
  { slug: "circular", title: "Circular", category: "button", description: "Icon-only circular buttons.", Component: ButtonCircular },
  { slug: "pill", title: "Pill", category: "button", description: "Fully rounded pill-style buttons.", Component: ButtonPill },

  // Button Groups
  { slug: "simple", title: "Simple", category: "button-group", description: "Spaced row of independent buttons.", Component: ButtonGroupSimple },
  { slug: "attached", title: "Attached", category: "button-group", description: "Joined horizontal and vertical button groups.", Component: ButtonGroupAttached },
  { slug: "with-icons", title: "With icons", category: "button-group", description: "Toolbar-style icon-only button groups.", Component: ButtonGroupWithIcons },
  { slug: "segmented", title: "Segmented", category: "button-group", description: "Tab-style segmented controls.", Component: ButtonGroupSegmented },
  { slug: "with-dropdown", title: "With dropdown", category: "button-group", description: "Split button: action plus dropdown trigger.", Component: ButtonGroupWithDropdown },
];

export function byCategory(category: ElementCategory): Element[] {
  return elements.filter((e) => e.category === category);
}

export function findElement(
  category: ElementCategory,
  slug: string
): Element | undefined {
  return elements.find((e) => e.category === category && e.slug === slug);
}

export const categoryMeta: Record<
  ElementCategory,
  { title: string; description: string; href: string; referenceHref?: string }
> = {
  avatar: {
    title: "Avatars",
    description:
      "User identity primitives — single avatars, status indicators, and grouped layouts.",
    href: "/elements/avatar",
    referenceHref: "/components/data",
  },
  badge: {
    title: "Badges",
    description:
      "Status pills and tags for inline labels, statuses, and counters.",
    href: "/elements/badge",
    referenceHref: "/components/buttons",
  },
  dropdown: {
    title: "Dropdowns",
    description:
      "Static menu surfaces showing the visual design of grouped, dividered, and checkbox menus.",
    href: "/elements/dropdown",
    referenceHref: "/components/overlays",
  },
  button: {
    title: "Buttons",
    description:
      "Composed button patterns: leading/trailing icons, soft variants, rounded, circular, and pill.",
    href: "/elements/button",
    referenceHref: "/components/buttons",
  },
  "button-group": {
    title: "Button groups",
    description:
      "Joined and segmented controls — toolbars, view toggles, and split buttons.",
    href: "/elements/button-group",
    referenceHref: "/components/buttons",
  },
};
