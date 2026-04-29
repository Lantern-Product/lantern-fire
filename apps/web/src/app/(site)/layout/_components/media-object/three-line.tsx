import { Avatar, AvatarFallback } from "@lantern-product/ui";
import { PageStage } from "../shared";

export function MediaObjectThreeLine() {
  const items = [
    {
      name: "Wade Cooper",
      role: "Senior Engineer",
      meta: "wade.cooper@example.com",
      initials: "WC",
    },
    {
      name: "Arlene Mccoy",
      role: "Product Designer",
      meta: "arlene.mccoy@example.com",
      initials: "AM",
    },
    {
      name: "Devon Webb",
      role: "Marketing Lead",
      meta: "devon.webb@example.com",
      initials: "DW",
    },
  ];
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-2xl">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.name} className="flex items-start gap-3">
              <Avatar className="size-10">
                <AvatarFallback>{item.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{item.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {item.role}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {item.meta}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageStage>
  );
}
