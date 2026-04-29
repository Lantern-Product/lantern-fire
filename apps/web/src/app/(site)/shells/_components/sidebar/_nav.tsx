import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  FileTextIcon,
  BarChart3Icon,
  type LucideIcon,
} from "lucide-react";

export type SidebarNavTone = "light" | "dark" | "brand";

export const sidebarNavItems: { name: string; icon: LucideIcon; current?: boolean }[] = [
  { name: "Dashboard", icon: HomeIcon, current: true },
  { name: "Team", icon: UsersIcon },
  { name: "Projects", icon: FolderIcon },
  { name: "Calendar", icon: CalendarIcon },
  { name: "Documents", icon: FileTextIcon },
  { name: "Reports", icon: BarChart3Icon },
];

export const sidebarTeams = [
  { name: "Heroicons", initial: "H" },
  { name: "Tailwind Labs", initial: "T" },
  { name: "Workcation", initial: "W" },
];

export function toneClasses(tone: SidebarNavTone) {
  switch (tone) {
    case "dark":
      return {
        container: "bg-zinc-900 text-zinc-100",
        itemActive: "bg-zinc-800 text-white",
        itemIdle: "text-zinc-300 hover:bg-zinc-800 hover:text-white",
        groupLabel: "text-zinc-400",
        teamInitial:
          "border-zinc-700 bg-zinc-900 text-zinc-300 group-hover:text-white",
        divider: "border-zinc-800",
      };
    case "brand":
      return {
        container: "bg-primary text-primary-foreground",
        itemActive: "bg-primary-foreground/15 text-primary-foreground",
        itemIdle:
          "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground",
        groupLabel: "text-primary-foreground/70",
        teamInitial:
          "border-primary-foreground/30 bg-primary text-primary-foreground/90",
        divider: "border-primary-foreground/15",
      };
    case "light":
    default:
      return {
        container: "bg-sidebar text-sidebar-foreground border-r border-border",
        itemActive: "bg-sidebar-accent text-sidebar-accent-foreground",
        itemIdle:
          "text-foreground/80 hover:bg-sidebar-accent/60 hover:text-foreground",
        groupLabel: "text-muted-foreground",
        teamInitial:
          "border-border bg-background text-muted-foreground",
        divider: "border-border",
      };
  }
}
