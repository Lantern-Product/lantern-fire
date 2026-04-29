import { BellIcon, SearchIcon } from "lucide-react";
import {
  Button,
  Avatar,
  AvatarFallback,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@lantern-product/ui";
import { BrandMark, ContentPlaceholder, navItems } from "../shared";

export function StackedWithCardSearch() {
  return (
    <div className="min-h-full bg-muted/30">
      <header className="bg-primary pb-20 text-primary-foreground">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6 lg:px-8">
          <BrandMark />
          <div className="hidden flex-1 max-w-lg md:block">
            <InputGroup className="bg-background">
              <InputGroupAddon align="inline-start">
                <SearchIcon className="size-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search" />
            </InputGroup>
          </div>
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
        <nav className="mx-auto mt-6 hidden max-w-7xl items-center gap-1 px-6 md:flex lg:px-8">
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
      </header>

      <main className="-mt-12">
        <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="rounded-xl border border-border bg-background p-6 shadow-sm ring-1 ring-foreground/5">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Customers
            </h1>
            <div className="mt-6">
              <ContentPlaceholder rows={4} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
