import { Avatar, AvatarFallback } from "@lantern-fire/ui";
import { listItems, PageStage } from "../shared";

export function ListContainerTwoColumn() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-2xl">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {listItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 rounded-lg bg-background px-4 py-3 ring-1 ring-foreground/10"
            >
              <Avatar className="size-10">
                <AvatarFallback>{item.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{item.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {item.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageStage>
  );
}
