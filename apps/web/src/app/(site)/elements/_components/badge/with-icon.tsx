import { Badge } from "@lantern-fire/ui";
import { CheckIcon, ClockIcon, StarIcon, ZapIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function BadgeWithIcon() {
  return (
    <ShowcaseFrame>
      <Badge>
        <CheckIcon /> Verified
      </Badge>
      <Badge variant="secondary">
        <StarIcon /> Featured
      </Badge>
      <Badge variant="outline">
        <ClockIcon /> Pending
      </Badge>
      <Badge variant="destructive">
        <ZapIcon /> Urgent
      </Badge>
    </ShowcaseFrame>
  );
}
