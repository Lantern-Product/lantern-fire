import {
  Avatar,
  AvatarFallback,
  Button,
} from "@lantern-fire/ui";
import { listItems, PageStage } from "../shared";

export function ListContainerWithActions() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-background ring-1 ring-foreground/10">
        <ul className="divide-y divide-border">
          {listItems.slice(0, 4).map((item) => (
            <li key={item.name} className="flex items-center gap-3 px-4 py-3">
              <Avatar className="size-9">
                <AvatarFallback>{item.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{item.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {item.role}
                </p>
              </div>
              <Button size="sm" variant="outline">
                Message
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </PageStage>
  );
}
