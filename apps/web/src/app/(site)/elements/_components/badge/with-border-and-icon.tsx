import { Badge } from "@lantern-product/ui";
import {
  CheckCircle2Icon,
  ClockIcon,
  XCircleIcon,
  AlertCircleIcon,
} from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function BadgeWithBorderAndIcon() {
  return (
    <ShowcaseFrame>
      <Badge
        variant="outline"
        className="border-emerald-500/40 text-emerald-700 dark:text-emerald-400"
      >
        <CheckCircle2Icon /> Active
      </Badge>
      <Badge
        variant="outline"
        className="border-amber-500/40 text-amber-700 dark:text-amber-400"
      >
        <ClockIcon /> Pending
      </Badge>
      <Badge
        variant="outline"
        className="border-rose-500/40 text-rose-700 dark:text-rose-400"
      >
        <XCircleIcon /> Failed
      </Badge>
      <Badge
        variant="outline"
        className="border-sky-500/40 text-sky-700 dark:text-sky-400"
      >
        <AlertCircleIcon /> Info
      </Badge>
    </ShowcaseFrame>
  );
}
