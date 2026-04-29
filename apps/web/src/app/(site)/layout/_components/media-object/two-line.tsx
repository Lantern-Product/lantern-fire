import { Avatar, AvatarFallback } from "@lantern-fire/ui";
import { listItems, PageStage } from "../shared";

export function MediaObjectTwoLine() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-2xl">
        <ul className="space-y-3">
          {listItems.slice(0, 4).map((item) => (
            <li key={item.name} className="flex items-center gap-3">
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
