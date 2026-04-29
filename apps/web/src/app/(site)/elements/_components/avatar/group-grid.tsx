import { Avatar, AvatarFallback } from "@lantern-fire/ui";
import { ShowcaseFrame, teamMembers } from "../shared";

export function AvatarGroupGrid() {
  return (
    <ShowcaseFrame>
      <div className="grid grid-cols-3 gap-3">
        {teamMembers.map((m) => (
          <Avatar key={m.initials} className="size-12">
            <AvatarFallback>{m.initials}</AvatarFallback>
          </Avatar>
        ))}
      </div>
    </ShowcaseFrame>
  );
}
