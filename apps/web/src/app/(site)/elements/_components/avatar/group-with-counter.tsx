import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@lantern-product/ui";
import { ShowcaseFrame, teamMembers } from "../shared";

export function AvatarGroupWithCounter() {
  return (
    <ShowcaseFrame>
      <AvatarGroup>
        {teamMembers.slice(0, 3).map((m) => (
          <Avatar key={m.initials} className="size-10">
            <AvatarFallback>{m.initials}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount className="size-10">+12</AvatarGroupCount>
      </AvatarGroup>
    </ShowcaseFrame>
  );
}
