import { Avatar, AvatarFallback } from "@lantern-fire/ui";
import { BrandMark } from "../shared";
import {
  sidebarNavItems,
  sidebarTeams,
  toneClasses,
  type SidebarNavTone,
} from "./_nav";

export function FullSidebar({ tone }: { tone: SidebarNavTone }) {
  const t = toneClasses(tone);
  return (
    <aside
      className={"hidden w-64 shrink-0 flex-col gap-y-5 px-6 py-4 lg:flex " + t.container}
    >
      <div className="flex h-12 items-center">
        <BrandMark
          className={
            tone === "light" ? "text-primary" : "text-primary-foreground"
          }
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1">
              {sidebarNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href="#"
                      className={
                        "group flex items-center gap-x-3 rounded-md px-2 py-2 text-sm font-medium transition-colors " +
                        (item.current ? t.itemActive : t.itemIdle)
                      }
                    >
                      <Icon className="size-5 shrink-0" />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <p
              className={
                "px-2 text-xs font-semibold uppercase tracking-wide " +
                t.groupLabel
              }
            >
              Your teams
            </p>
            <ul className="-mx-2 mt-2 space-y-1">
              {sidebarTeams.map((team) => (
                <li key={team.name}>
                  <a
                    href="#"
                    className={
                      "group flex items-center gap-x-3 rounded-md px-2 py-2 text-sm font-medium transition-colors " +
                      t.itemIdle
                    }
                  >
                    <span
                      className={
                        "flex size-6 shrink-0 items-center justify-center rounded-md border text-xs font-semibold " +
                        t.teamInitial
                      }
                    >
                      {team.initial}
                    </span>
                    {team.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className={"-mx-6 mt-auto border-t pt-4 " + t.divider}>
            <a
              href="#"
              className={
                "flex items-center gap-x-3 px-6 py-2 text-sm font-medium transition-colors " +
                t.itemIdle
              }
            >
              <Avatar className="size-8">
                <AvatarFallback
                  className={
                    tone === "dark"
                      ? "bg-zinc-700 text-zinc-100"
                      : tone === "brand"
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : ""
                  }
                >
                  JD
                </AvatarFallback>
              </Avatar>
              <span>Jamie Doe</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
