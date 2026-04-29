import type { ReactNode } from "react";

export function ContentBars({
  rows = 3,
  className = "",
}: {
  rows?: number;
  className?: string;
}) {
  const widths = ["w-3/4", "w-2/3", "w-5/6", "w-1/2", "w-4/5", "w-3/5"];
  return (
    <div className={"space-y-3 " + className}>
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className={"h-3 rounded bg-muted " + widths[i % widths.length]}
        />
      ))}
    </div>
  );
}

export function FauxImage({
  className = "",
  ratio = "aspect-[16/9]",
}: {
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={
        "w-full overflow-hidden bg-gradient-to-br from-primary/30 via-primary/15 to-primary/40 " +
        ratio +
        " " +
        className
      }
      aria-hidden
    />
  );
}

export function PageStage({
  children,
  bg = "bg-muted/30",
}: {
  children: ReactNode;
  bg?: string;
}) {
  return (
    <div className={"flex min-h-full flex-col " + bg + " p-12 lg:p-16"}>
      {children}
    </div>
  );
}

export const listItems = [
  { name: "Wade Cooper", role: "Senior Engineer", initials: "WC" },
  { name: "Arlene Mccoy", role: "Product Designer", initials: "AM" },
  { name: "Devon Webb", role: "Marketing Lead", initials: "DW" },
  { name: "Tom Cook", role: "Director", initials: "TC" },
  { name: "Tanya Fox", role: "Engineering Manager", initials: "TF" },
];
