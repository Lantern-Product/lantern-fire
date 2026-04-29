import { Badge } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function BadgeWithDot() {
  return (
    <ShowcaseFrame>
      <Badge variant="secondary">
        <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
        Active
      </Badge>
      <Badge variant="secondary">
        <span className="size-1.5 rounded-full bg-amber-500" aria-hidden />
        Pending
      </Badge>
      <Badge variant="secondary">
        <span className="size-1.5 rounded-full bg-rose-500" aria-hidden />
        Failed
      </Badge>
      <Badge variant="secondary">
        <span
          className="size-1.5 rounded-full bg-muted-foreground"
          aria-hidden
        />
        Archived
      </Badge>
    </ShowcaseFrame>
  );
}
