import { Badge } from "@lantern-product/ui";
import { InfoIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function BadgeStatusInfo() {
  return (
    <ShowcaseFrame>
      <Badge className="bg-sky-500/15 text-sky-700 dark:text-sky-400">
        <InfoIcon /> Note
      </Badge>
      <Badge className="bg-sky-500/15 text-sky-700 dark:text-sky-400">
        <span className="size-1.5 rounded-full bg-sky-500" aria-hidden />
        Updated
      </Badge>
      <Badge variant="outline" className="border-sky-500/40 text-sky-700 dark:text-sky-400">
        Beta
      </Badge>
      <Badge className="bg-sky-500 text-white">New</Badge>
    </ShowcaseFrame>
  );
}
