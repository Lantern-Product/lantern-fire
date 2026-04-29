import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "lucide-react";
import { PageStage } from "../shared";

export function ListContainerWithIcons() {
  const items = [
    { Icon: HomeIcon, name: "Dashboard", count: "12" },
    { Icon: InboxIcon, name: "Inbox", count: "4" },
    { Icon: UsersIcon, name: "Team", count: "24" },
    { Icon: FolderIcon, name: "Projects", count: "9" },
    { Icon: CalendarIcon, name: "Calendar", count: "3" },
  ];
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-background ring-1 ring-foreground/10">
        <ul className="divide-y divide-border">
          {items.map(({ Icon, name, count }) => (
            <li
              key={name}
              className="flex items-center gap-3 px-4 py-3 text-sm"
            >
              <Icon className="size-4 text-muted-foreground" />
              <span className="flex-1 font-medium">{name}</span>
              <span className="text-xs text-muted-foreground">{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageStage>
  );
}
