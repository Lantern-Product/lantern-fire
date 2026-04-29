import { Button } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonPrimary() {
  return (
    <ShowcaseFrame>
      <Button size="xs">Save</Button>
      <Button size="sm">Save</Button>
      <Button>Save</Button>
      <Button size="lg">Save</Button>
    </ShowcaseFrame>
  );
}
