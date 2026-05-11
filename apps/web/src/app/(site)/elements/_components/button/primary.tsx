import { Button } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonPrimary() {
  return (
    <ShowcaseFrame>
      <Button variant="primary" size="xs">
        Save
      </Button>
      <Button variant="primary" size="sm">
        Save
      </Button>
      <Button variant="primary">Save</Button>
      <Button variant="primary" size="lg">
        Save
      </Button>
    </ShowcaseFrame>
  );
}
