import { Button } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonRounded() {
  return (
    <ShowcaseFrame>
      <Button className="rounded-md">Save</Button>
      <Button variant="outline" className="rounded-md">
        Cancel
      </Button>
      <Button variant="secondary" className="rounded-md">
        Settings
      </Button>
      <Button className="rounded-none">Save</Button>
      <Button variant="outline" className="rounded-none">
        Cancel
      </Button>
    </ShowcaseFrame>
  );
}
