import { BellIcon } from "lucide-react";
import { Button, Avatar, AvatarFallback } from "@lantern-product/ui";
import { BrandMark, ContentPlaceholder, navItems } from "../shared";

export function StackedWithOverlap() {
  return (
    <div className="min-h-full bg-muted/30">
      <div className="bg-primary pb-32 text-primary-foreground">
        <header>
          <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6 lg:px-8">
            <BrandMark />
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors " +
                    (item.current
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/10")
                  }
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="ml-auto flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Notifications"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <BellIcon />
              </Button>
              <Avatar className="size-8 ring-2 ring-primary-foreground/30">
                <AvatarFallback className="bg-primary-foreground/15 text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <h1 className="font-heading text-3xl font-semibold tracking-tight">
            Dashboard
          </h1>
        </div>
      </div>

      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="rounded-xl border border-border bg-background p-6 shadow-sm ring-1 ring-foreground/5">
            <ContentPlaceholder rows={4} />
          </div>
        </div>
      </main>
    </div>
  );
}
