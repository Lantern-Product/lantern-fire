import { Badge } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function BadgePillWithDot() {
  return (
    <ShowcaseFrame>
      <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
        <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
        Active
      </Badge>
      <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-400">
        <span className="size-1.5 rounded-full bg-amber-500" aria-hidden />
        Pending
      </Badge>
      <Badge className="bg-rose-500/15 text-rose-700 dark:text-rose-400">
        <span className="size-1.5 rounded-full bg-rose-500" aria-hidden />
        Failed
      </Badge>
      <Badge className="bg-sky-500/15 text-sky-700 dark:text-sky-400">
        <span className="size-1.5 rounded-full bg-sky-500" aria-hidden />
        Info
      </Badge>
    </ShowcaseFrame>
  );
}
