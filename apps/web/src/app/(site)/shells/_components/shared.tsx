import { FlameIcon } from "lucide-react";

export const navItems = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

export const sidebarSections = [
  {
    label: "Workspace",
    items: [
      { name: "Dashboard", iconName: "home", current: true },
      { name: "Team", iconName: "users", current: false },
      { name: "Projects", iconName: "folder", current: false },
      { name: "Calendar", iconName: "calendar", current: false },
      { name: "Documents", iconName: "fileText", current: false },
      { name: "Reports", iconName: "barChart", current: false },
    ],
  },
  {
    label: "Your teams",
    items: [
      { name: "Heroicons", initial: "H", current: false },
      { name: "Tailwind Labs", initial: "T", current: false },
      { name: "Workcation", initial: "W", current: false },
    ],
  },
];

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <FlameIcon className="size-6" />
    </span>
  );
}

export function FauxAvatar({
  initials = "JD",
  className = "",
}: {
  initials?: string;
  className?: string;
}) {
  return (
    <span
      className={
        "inline-flex size-8 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary " +
        className
      }
      aria-hidden
    >
      {initials}
    </span>
  );
}

export function ContentPlaceholder({
  rows = 3,
  className = "",
}: {
  rows?: number;
  className?: string;
}) {
  return (
    <div className={"space-y-3 " + className}>
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="h-24 rounded-lg border border-dashed border-border bg-muted/40"
        />
      ))}
    </div>
  );
}

export function StatGrid() {
  const stats = [
    { name: "Total subscribers", value: "71,897", change: "+12.4%" },
    { name: "Avg. open rate", value: "58.16%", change: "+5.4%" },
    { name: "Avg. click rate", value: "24.57%", change: "-3.2%" },
  ];
  return (
    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.name}
          className="rounded-lg border border-border bg-card px-5 py-4"
        >
          <dt className="text-sm text-muted-foreground">{s.name}</dt>
          <dd className="mt-2 flex items-baseline justify-between gap-2">
            <span className="font-heading text-2xl font-semibold">
              {s.value}
            </span>
            <span className="text-xs font-medium text-primary">{s.change}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
