import type { ReactNode } from "react";
import { cn } from "@lantern-product/ui/utils";

// The interactive stage + dismiss controls are a client island. They are
// re-exported here so every variant can keep importing from "../shared", while
// the plain data/presentational helpers below stay server-safe (importing data
// from a "use client" module into a server component would break it).
export {
  DrawerStage,
  DrawerCloseButton,
  DrawerHeader,
  type DrawerStageProps,
} from "./drawer-stage";

/** A dashed placeholder used for the body of the "empty" drawer variants. */
export function DrawerBodyPlaceholder() {
  return (
    <div className="flex-1 px-4 pb-6 sm:px-6">
      <div className="h-full min-h-72 rounded-lg border-2 border-dashed border-border" />
    </div>
  );
}

/** Cover-image stand-in (gradient block) for profile and file drawers. */
export function FauxCover({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-primary/70 via-primary/40 to-secondary",
        className
      )}
      aria-hidden
    >
      {children}
    </div>
  );
}

/** Avatar stand-in with initials, tinted by a palette index. */
export function FauxAvatar({
  initials,
  className,
  tone = "primary",
}: {
  initials: string;
  className?: string;
  tone?: "primary" | "secondary" | "muted";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold",
        tone === "primary" && "bg-primary/15 text-primary",
        tone === "secondary" && "bg-secondary text-secondary-foreground",
        tone === "muted" && "bg-muted text-muted-foreground",
        className
      )}
      aria-hidden
    >
      {initials}
    </span>
  );
}

export const directory = [
  { letter: "A", people: ["Leslie Abbott", "Hector Adams", "Blake Alexander"] },
  { letter: "B", people: ["Angela Beaver", "Yvette Blanchard", "Lawrence Brooks"] },
  { letter: "C", people: ["Jeffrey Clark", "Kathryn Cooper"] },
  { letter: "D", people: ["Alicia Davis", "Roberto Diaz"] },
];

export const profileFields = [
  { label: "Bio", value: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent." },
  { label: "Location", value: "New York, NY" },
  { label: "Website", value: "ashleyporter.com" },
  { label: "Birthday", value: "June 8, 1990" },
];

export const fileMeta = [
  { label: "Uploaded by", value: "Marie Culver" },
  { label: "Created", value: "June 8, 2026" },
  { label: "Last modified", value: "June 8, 2026" },
  { label: "Dimensions", value: "4032 × 3024" },
  { label: "Resolution", value: "72 × 72" },
];
