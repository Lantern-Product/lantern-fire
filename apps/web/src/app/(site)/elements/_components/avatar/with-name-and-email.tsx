import { Avatar, AvatarFallback } from "@lantern-fire/ui";
import { ListRowStage } from "../shared";

export function AvatarWithNameAndEmail() {
  const items = [
    { initials: "RC", name: "Ricardo Cooper", email: "ricardo.cooper@example.com" },
    { initials: "LW", name: "Lindsay Walton", email: "lindsay.walton@example.com" },
    { initials: "TC", name: "Tom Cook", email: "tom.cook@example.com" },
  ];
  return (
    <ListRowStage>
      <ul className="-my-4 divide-y divide-border">
        {items.map((item) => (
          <li key={item.initials} className="flex items-center gap-3 py-3">
            <Avatar className="size-10">
              <AvatarFallback>{item.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{item.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {item.email}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </ListRowStage>
  );
}
