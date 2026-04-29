import { Avatar, AvatarFallback } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function AvatarWithStatus() {
  const items = [
    { initials: "RC", color: "bg-emerald-500" },
    { initials: "LW", color: "bg-amber-500" },
    { initials: "TC", color: "bg-rose-500" },
    { initials: "WF", color: "bg-muted-foreground" },
  ];
  return (
    <ShowcaseFrame>
      {items.map((item) => (
        <span key={item.initials} className="relative inline-flex">
          <Avatar className="size-12">
            <AvatarFallback>{item.initials}</AvatarFallback>
          </Avatar>
          <span
            className={
              "absolute -top-0.5 -right-0.5 z-10 inline-flex size-3 rounded-full ring-2 ring-background " +
              item.color
            }
            aria-hidden
          />
        </span>
      ))}
    </ShowcaseFrame>
  );
}
