import { Badge } from "@lantern-product/ui";
import { XCircleIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function BadgeStatusError() {
  return (
    <ShowcaseFrame>
      <Badge className="bg-rose-500/15 text-rose-700 dark:text-rose-400">
        <XCircleIcon /> Failed
      </Badge>
      <Badge className="bg-rose-500/15 text-rose-700 dark:text-rose-400">
        <span className="size-1.5 rounded-full bg-rose-500" aria-hidden />
        Offline
      </Badge>
      <Badge variant="outline" className="border-rose-500/40 text-rose-700 dark:text-rose-400">
        Rejected
      </Badge>
      <Badge variant="destructive">Critical</Badge>
    </ShowcaseFrame>
  );
}
