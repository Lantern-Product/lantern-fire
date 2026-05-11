import { Button } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonSecondaryGreen() {
  return (
    <ShowcaseFrame>
      <Button variant="secondary-green">Approve</Button>
      <Button variant="secondary-green" size="sm">
        Approve
      </Button>
    </ShowcaseFrame>
  );
}
