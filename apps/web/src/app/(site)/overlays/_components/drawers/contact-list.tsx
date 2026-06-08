import { Input } from "@lantern-product/ui";
import { SearchIcon } from "lucide-react";
import {
  DrawerCloseButton,
  DrawerStage,
  FauxAvatar,
  directory,
} from "../shared";

function initialsFor(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function DrawerContactList() {
  return (
    <DrawerStage close="none">
      <div className="space-y-4 border-b border-border px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-heading text-base font-semibold text-foreground">
            Directory
          </h2>
          <DrawerCloseButton />
        </div>
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search" className="pl-9" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {directory.map((group) => (
          <div key={group.letter} className="relative">
            <div className="sticky top-0 z-10 border-y border-border bg-muted/60 px-4 py-1.5 text-sm font-semibold text-muted-foreground sm:px-6">
              {group.letter}
            </div>
            <ul className="divide-y divide-border">
              {group.people.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/40 sm:px-6"
                >
                  <FauxAvatar
                    initials={initialsFor(name)}
                    tone="muted"
                    className="size-9 text-xs"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DrawerStage>
  );
}
