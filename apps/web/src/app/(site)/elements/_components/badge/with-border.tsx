import { Badge } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function BadgeWithBorder() {
  return (
    <ShowcaseFrame>
      <Badge variant="outline">Draft</Badge>
      <Badge
        variant="outline"
        className="border-emerald-500/40 text-emerald-700 dark:text-emerald-400"
      >
        Active
      </Badge>
      <Badge
        variant="outline"
        className="border-amber-500/40 text-amber-700 dark:text-amber-400"
      >
        Pending
      </Badge>
      <Badge
        variant="outline"
        className="border-rose-500/40 text-rose-700 dark:text-rose-400"
      >
        Failed
      </Badge>
    </ShowcaseFrame>
  );
}
