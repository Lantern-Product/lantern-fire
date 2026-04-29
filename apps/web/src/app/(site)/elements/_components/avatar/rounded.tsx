import { Avatar, AvatarFallback } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function AvatarRounded() {
  return (
    <ShowcaseFrame>
      <Avatar className="size-10 rounded-md after:rounded-md">
        <AvatarFallback className="rounded-md">RC</AvatarFallback>
      </Avatar>
      <Avatar className="size-12 rounded-md after:rounded-md">
        <AvatarFallback className="rounded-md">LW</AvatarFallback>
      </Avatar>
      <Avatar className="size-14 rounded-lg after:rounded-lg">
        <AvatarFallback className="rounded-lg">TC</AvatarFallback>
      </Avatar>
      <Avatar className="size-16 rounded-xl after:rounded-xl">
        <AvatarFallback className="rounded-xl">WF</AvatarFallback>
      </Avatar>
    </ShowcaseFrame>
  );
}
