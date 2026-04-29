import { BellIcon } from "lucide-react";
import {
  Button,
  Avatar,
  AvatarFallback,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@lantern-product/ui";
import { BrandMark, ContentPlaceholder, navItems } from "../shared";

export function StackedWithTabs() {
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
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Marketing site
          </h1>
          <Tabs defaultValue="overview" className="mt-6">
            <TabsList variant="line">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="visitors">Visitors</TabsTrigger>
              <TabsTrigger value="conversions">Conversions</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <ContentPlaceholder rows={4} />
      </main>
    </div>
  );
}
