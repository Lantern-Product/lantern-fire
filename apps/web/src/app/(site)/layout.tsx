import { SidebarNav } from "@/components/sidebar-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-sidebar md:flex md:flex-col">
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div>
            <p className="font-heading text-base font-semibold leading-tight">
              Lantern Fire
            </p>
            <p className="text-xs text-muted-foreground">Design system v0.1.0</p>
          </div>
          <ThemeToggle />
        </div>
        <SidebarNav />
      </aside>
      <main className="flex-1 px-6 py-10 md:px-12 md:py-12 max-w-5xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
