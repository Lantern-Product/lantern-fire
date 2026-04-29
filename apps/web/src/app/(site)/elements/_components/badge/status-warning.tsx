import { Badge } from "@lantern-fire/ui";
import { ClockIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function BadgeStatusWarning() {
  return (
    <ShowcaseFrame>
      <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-400">
        <ClockIcon /> Pending
      </Badge>
      <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-400">
        <span className="size-1.5 rounded-full bg-amber-500" aria-hidden />
        Awaiting review
      </Badge>
      <Badge variant="outline" className="border-amber-500/40 text-amber-700 dark:text-amber-400">
        Draft
      </Badge>
      <Badge className="bg-amber-500 text-white">Action required</Badge>
    </ShowcaseFrame>
  );
}
