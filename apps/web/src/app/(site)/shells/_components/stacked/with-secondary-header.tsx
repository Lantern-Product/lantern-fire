import { BellIcon, FilterIcon, ListFilterIcon } from "lucide-react";
import { Button, Avatar, AvatarFallback } from "@lantern-product/ui";
import { BrandMark, ContentPlaceholder, navItems } from "../shared";

export function StackedWithSecondaryHeader() {
  return (
    <div className="min-h-full bg-muted/30">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6 lg:px-8">
          <BrandMark className="text-primary" />
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
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
      <div className="border-b border-border bg-muted/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <FilterIcon /> Filters
            </Button>
            <Button variant="ghost" size="sm">
              <ListFilterIcon /> Sort
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">128 results</p>
        </div>
      </div>
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <ContentPlaceholder rows={5} />
      </main>
    </div>
  );
}
