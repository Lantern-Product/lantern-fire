import { Avatar, AvatarFallback } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function AvatarSimple() {
  return (
    <ShowcaseFrame>
      <Avatar className="size-8">
        <AvatarFallback>RC</AvatarFallback>
      </Avatar>
      <Avatar className="size-10">
        <AvatarFallback>LW</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback>TC</AvatarFallback>
      </Avatar>
      <Avatar className="size-14">
        <AvatarFallback>WF</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarFallback>LK</AvatarFallback>
      </Avatar>
    </ShowcaseFrame>
  );
}
