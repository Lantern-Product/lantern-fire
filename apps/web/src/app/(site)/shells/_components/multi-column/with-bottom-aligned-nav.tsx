import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  FileTextIcon,
  SettingsIcon,
  HelpCircleIcon,
  LogOutIcon,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@lantern-product/ui";
import { BrandMark, ContentPlaceholder, StatGrid } from "../shared";

const main = [
  { name: "Dashboard", icon: HomeIcon, current: true },
  { name: "Team", icon: UsersIcon },
  { name: "Projects", icon: FolderIcon },
  { name: "Calendar", icon: CalendarIcon },
  { name: "Documents", icon: FileTextIcon },
];

const utility = [
  { name: "Settings", icon: SettingsIcon },
  { name: "Help", icon: HelpCircleIcon },
  { name: "Sign out", icon: LogOutIcon },
];

export function MultiColumnWithBottomAlignedNav() {
  return (
    <div className="flex min-h-full bg-muted/30">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-sidebar lg:flex">
        <div className="flex h-16 items-center px-6 text-primary">
          <BrandMark />
        </div>
        <nav className="flex-1 px-3">
          <ul className="space-y-1">
            {main.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <a
                    href="#"
                    className={
                      "flex items-center gap-x-3 rounded-md px-2 py-2 text-sm font-medium transition-colors " +
                      (item.current
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-foreground/80 hover:bg-sidebar-accent/60 hover:text-foreground")
                    }
                  >
                    <Icon className="size-5" />
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-border p-3">
          <ul className="space-y-1">
            {utility.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <a
                    href="#"
                    className="flex items-center gap-x-3 rounded-md px-2 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-sidebar-accent/60 hover:text-foreground"
                  >
                    <Icon className="size-5" />
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex items-center gap-3 rounded-md px-2 py-2">
            <Avatar className="size-8">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 text-sm leading-tight">
              <p className="truncate font-medium">Jamie Doe</p>
              <p className="truncate text-xs text-muted-foreground">
                jamie@lantern.fire
              </p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 px-6 py-10 lg:px-10">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Dashboard
        </h1>
        <div className="mt-8 space-y-8">
          <StatGrid />
          <ContentPlaceholder rows={4} />
        </div>
      </main>
    </div>
  );
}
