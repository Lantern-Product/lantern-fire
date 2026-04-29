import { Avatar, AvatarFallback } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function AvatarWithInitials() {
  return (
    <ShowcaseFrame>
      <Avatar className="size-12">
        <AvatarFallback className="bg-primary/15 text-primary font-semibold">
          RC
        </AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold">
          LW
        </AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback className="bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold">
          TC
        </AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback className="bg-rose-500/15 text-rose-600 dark:text-rose-400 font-semibold">
          WF
        </AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback className="bg-violet-500/15 text-violet-600 dark:text-violet-400 font-semibold">
          LK
        </AvatarFallback>
      </Avatar>
    </ShowcaseFrame>
  );
}
