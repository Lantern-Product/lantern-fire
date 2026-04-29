import { Badge } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function BadgePill() {
  return (
    <ShowcaseFrame>
      <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
        Active
      </Badge>
      <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-400">
        Pending
      </Badge>
      <Badge className="bg-rose-500/15 text-rose-700 dark:text-rose-400">
        Failed
      </Badge>
      <Badge className="bg-sky-500/15 text-sky-700 dark:text-sky-400">
        Info
      </Badge>
      <Badge className="bg-violet-500/15 text-violet-700 dark:text-violet-400">
        New
      </Badge>
    </ShowcaseFrame>
  );
}
