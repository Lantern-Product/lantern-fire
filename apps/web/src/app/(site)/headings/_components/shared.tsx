import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@lantern-product/ui";

export const breadcrumbItems = [
  { name: "Projects", href: "#" },
  { name: "Engineering", href: "#" },
  { name: "Back End Developer", href: "#" },
];

export const tabItems = [
  { name: "Applied", current: true, count: "52" },
  { name: "Phone Screening", current: false, count: "6" },
  { name: "Interview", current: false, count: "4" },
  { name: "Offer", current: false },
  { name: "Disqualified", current: false },
];

export function HeadingBreadcrumbs() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, i) => {
          const isLast = i === breadcrumbItems.length - 1;
          return (
            <span key={item.name} className="inline-flex items-center gap-1.5">
              {isLast ? (
                <BreadcrumbItem>
                  <BreadcrumbPage>{item.name}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
                </BreadcrumbItem>
              )}
              {!isLast ? <BreadcrumbSeparator /> : null}
            </span>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export function HeadingTabs({
  variant = "underline",
}: {
  variant?: "underline" | "pills";
}) {
  if (variant === "pills") {
    return (
      <nav className="flex gap-2" aria-label="Tabs">
        {tabItems.map((tab) => (
          <a
            key={tab.name}
            href="#"
            aria-current={tab.current ? "page" : undefined}
            className={
              "inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors " +
              (tab.current
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground")
            }
          >
            {tab.name}
            {tab.count ? (
              <span
                className={
                  "rounded-full px-2 py-0.5 text-xs font-medium " +
                  (tab.current
                    ? "bg-background text-foreground"
                    : "bg-muted text-muted-foreground")
                }
              >
                {tab.count}
              </span>
            ) : null}
          </a>
        ))}
      </nav>
    );
  }
  return (
    <nav className="-mb-px flex gap-6" aria-label="Tabs">
      {tabItems.map((tab) => (
        <a
          key={tab.name}
          href="#"
          aria-current={tab.current ? "page" : undefined}
          className={
            "inline-flex items-center gap-2 border-b-2 px-1 py-3 text-sm font-medium transition-colors " +
            (tab.current
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:border-border hover:text-foreground")
          }
        >
          {tab.name}
          {tab.count ? (
            <span
              className={
                "rounded-full px-2 py-0.5 text-xs font-medium " +
                (tab.current
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground")
              }
            >
              {tab.count}
            </span>
          ) : null}
        </a>
      ))}
    </nav>
  );
}

export const candidateMeta = [
  { iconName: "briefcase", value: "Full-time" },
  { iconName: "mapPin", value: "Remote" },
  { iconName: "currencyDollar", value: "$120k - $140k" },
  { iconName: "calendar", value: "Closing on January 9, 2026" },
];

export const stats = [
  { name: "Number of deploys", value: "405" },
  { name: "Average deploy time", value: "3.65", unit: "mins" },
  { name: "Number of servers", value: "3" },
  { name: "Success rate", value: "98.5%" },
];
