import Link from "next/link";
import { Button } from "@lantern-product/ui";
import { LanternMark } from "@/components/lantern-mark";
import { ThemeToggle } from "@/components/theme-toggle";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <LanternMark className="h-7 w-auto" />
            <span className="font-heading text-base font-semibold tracking-tight">
              Lantern Fire
            </span>
            <span className="text-xs text-muted-foreground">v0.1.0</span>
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/components"
              className="hidden rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
            >
              Components
            </Link>
            <Link
              href="/elements"
              className="hidden rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
            >
              Elements
            </Link>
            <Link
              href="/tokens"
              className="hidden rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
            >
              Tokens
            </Link>
            <div className="ml-2 flex items-center gap-2">
              <ThemeToggle />
              <Button asChild size="sm">
                <Link href="/components">Browse</Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
