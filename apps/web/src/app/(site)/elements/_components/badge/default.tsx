import { Badge } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function BadgeDefault() {
  return (
    <ShowcaseFrame>
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </ShowcaseFrame>
  );
}
