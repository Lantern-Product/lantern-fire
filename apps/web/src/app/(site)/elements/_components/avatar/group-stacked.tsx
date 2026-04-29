import { Avatar, AvatarFallback, AvatarGroup } from "@lantern-product/ui";
import { ShowcaseFrame, teamMembers } from "../shared";

export function AvatarGroupStacked() {
  return (
    <ShowcaseFrame>
      <AvatarGroup>
        {teamMembers.slice(0, 4).map((m) => (
          <Avatar key={m.initials} className="size-10">
            <AvatarFallback>{m.initials}</AvatarFallback>
          </Avatar>
        ))}
      </AvatarGroup>
    </ShowcaseFrame>
  );
}
