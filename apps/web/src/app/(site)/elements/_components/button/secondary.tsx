import { Button } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonSecondary() {
  return (
    <ShowcaseFrame>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </ShowcaseFrame>
  );
}
