import {
  Avatar,
  AvatarFallback,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@lantern-product/ui";
import { listItems, PageStage } from "../shared";

export function CardWithList() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Team members</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <ul className="divide-y divide-border">
              {listItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-3 px-4 py-3"
                >
                  <Avatar className="size-9">
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
          </CardContent>
        </Card>
      </div>
    </PageStage>
  );
}
