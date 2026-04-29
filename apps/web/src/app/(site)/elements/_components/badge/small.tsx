import { Badge } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function BadgeSmall() {
  return (
    <ShowcaseFrame>
      <Badge className="h-4 px-1.5 text-[0.625rem]">Default</Badge>
      <Badge variant="secondary" className="h-4 px-1.5 text-[0.625rem]">
        Secondary
      </Badge>
      <Badge variant="outline" className="h-4 px-1.5 text-[0.625rem]">
        Outline
      </Badge>
      <Badge variant="destructive" className="h-4 px-1.5 text-[0.625rem]">
        Destructive
      </Badge>
    </ShowcaseFrame>
  );
}
