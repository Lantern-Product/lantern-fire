import { Avatar, AvatarFallback } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function AvatarWithName() {
  return (
    <ShowcaseFrame>
      <div className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarFallback>RC</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium">Ricardo Cooper</p>
      </div>
      <div className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarFallback>LW</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium">Lindsay Walton</p>
      </div>
      <div className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarFallback>TC</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium">Tom Cook</p>
      </div>
    </ShowcaseFrame>
  );
}
