import { Badge } from "@lantern-fire/ui";
import { CheckCircle2Icon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function BadgeStatusSuccess() {
  return (
    <ShowcaseFrame>
      <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
        <CheckCircle2Icon /> Deployed
      </Badge>
      <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
        <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
        Online
      </Badge>
      <Badge variant="outline" className="border-emerald-500/40 text-emerald-700 dark:text-emerald-400">
        Verified
      </Badge>
      <Badge className="bg-emerald-500 text-white">Paid</Badge>
    </ShowcaseFrame>
  );
}
