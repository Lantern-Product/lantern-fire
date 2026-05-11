import { Button } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonSecondary() {
  return (
    <ShowcaseFrame>
      <Button variant="secondary" size="xs">
        Cancel
      </Button>
      <Button variant="secondary" size="sm">
        Cancel
      </Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="secondary" size="lg">
        Cancel
      </Button>
    </ShowcaseFrame>
  );
}
