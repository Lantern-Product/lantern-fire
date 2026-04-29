import { Avatar, AvatarFallback } from "@lantern-fire/ui";
import { BrandMark } from "../shared";
import { sidebarNavItems } from "./_nav";

export function CondensedRail() {
  return (
    <aside className="hidden w-20 shrink-0 flex-col items-center gap-y-4 border-r border-border bg-sidebar py-4 lg:flex">
      <div className="flex h-12 w-12 items-center justify-center text-primary">
        <BrandMark />
      </div>
      <nav className="flex flex-1 flex-col items-center gap-y-1">
        {sidebarNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href="#"
              title={item.name}
              className={
                "group flex size-10 items-center justify-center rounded-md transition-colors " +
                (item.current
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-foreground/70 hover:bg-sidebar-accent/60 hover:text-foreground")
              }
            >
              <Icon className="size-5" />
              <span className="sr-only">{item.name}</span>
            </a>
          );
        })}
      </nav>
      <Avatar className="size-9">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </aside>
  );
}
