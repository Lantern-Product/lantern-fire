import { Avatar, AvatarFallback, Card, CardContent } from "@lantern-product/ui";
import { ChevronRightIcon } from "lucide-react";
import { listItems, PageStage } from "../shared";

export function ListContainerNarrowWithCards() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-sm space-y-3">
        {listItems.slice(0, 4).map((item) => (
          <Card key={item.name} size="sm">
            <CardContent className="flex items-center gap-3">
              <Avatar className="size-9">
                <AvatarFallback>{item.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{item.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {item.role}
                </p>
              </div>
              <ChevronRightIcon className="size-4 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </div>
    </PageStage>
  );
}
