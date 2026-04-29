import { Badge } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function BadgeLarge() {
  return (
    <ShowcaseFrame>
      <Badge className="h-7 px-3 text-sm">Default</Badge>
      <Badge variant="secondary" className="h-7 px-3 text-sm">
        Secondary
      </Badge>
      <Badge variant="outline" className="h-7 px-3 text-sm">
        Outline
      </Badge>
      <Badge variant="destructive" className="h-7 px-3 text-sm">
        Destructive
      </Badge>
    </ShowcaseFrame>
  );
}
