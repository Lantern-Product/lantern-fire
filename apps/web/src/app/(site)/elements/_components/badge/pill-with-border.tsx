import { Badge } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function BadgePillWithBorder() {
  return (
    <ShowcaseFrame>
      <Badge className="bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/30 dark:text-emerald-400">
        Active
      </Badge>
      <Badge className="bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/30 dark:text-amber-400">
        Pending
      </Badge>
      <Badge className="bg-rose-500/10 text-rose-700 ring-1 ring-rose-500/30 dark:text-rose-400">
        Failed
      </Badge>
      <Badge className="bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/30 dark:text-sky-400">
        Info
      </Badge>
    </ShowcaseFrame>
  );
}
