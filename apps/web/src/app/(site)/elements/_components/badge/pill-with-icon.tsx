import { Badge } from "@lantern-fire/ui";
import {
  CheckCircle2Icon,
  ClockIcon,
  XCircleIcon,
  InfoIcon,
} from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function BadgePillWithIcon() {
  return (
    <ShowcaseFrame>
      <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
        <CheckCircle2Icon /> Active
      </Badge>
      <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-400">
        <ClockIcon /> Pending
      </Badge>
      <Badge className="bg-rose-500/15 text-rose-700 dark:text-rose-400">
        <XCircleIcon /> Failed
      </Badge>
      <Badge className="bg-sky-500/15 text-sky-700 dark:text-sky-400">
        <InfoIcon /> Info
      </Badge>
    </ShowcaseFrame>
  );
}
