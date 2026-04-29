import { BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, Button } from "@lantern-product/ui";
import { ContentPlaceholder, StatGrid, BrandMark, navItems } from "../shared";

export function MultiColumnWithStickySidebar() {
  return (
    <div className="min-h-full bg-muted/30">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6 lg:px-8">
          <BrandMark className="text-primary" />
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors " +
                  (item.current
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground")
                }
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <Button variant="ghost" size="icon-sm" aria-label="Notifications">
              <BellIcon />
            </Button>
            <Avatar className="size-8">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="mx-auto flex max-w-7xl gap-8 px-6 py-10 lg:px-8">
        <aside className="sticky top-20 hidden h-fit w-56 shrink-0 lg:block">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Sections
          </p>
          <ul className="mt-3 space-y-1">
            {["Overview", "Activity", "Members", "Settings", "Billing"].map(
              (item, idx) => (
                <li key={item}>
                  <a
                    href="#"
                    className={
                      "block rounded-md px-2 py-1.5 text-sm transition-colors " +
                      (idx === 0
                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        : "text-foreground/80 hover:bg-sidebar-accent/60")
                    }
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </aside>
        <main className="flex-1 space-y-8">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Workspace overview
          </h1>
          <StatGrid />
          <ContentPlaceholder rows={4} />
        </main>
      </div>
    </div>
  );
}
