import { Button } from "@lantern-product/ui";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function ButtonPill() {
  return (
    <ShowcaseFrame>
      <Button className="rounded-full">Save</Button>
      <Button variant="secondary" className="rounded-full">
        Cancel
      </Button>
      <Button variant="secondary" className="rounded-full">
        Settings
      </Button>
      <Button className="rounded-full">
        <PlusIcon /> New project
      </Button>
      <Button variant="secondary" className="rounded-full">
        Continue <ArrowRightIcon />
      </Button>
    </ShowcaseFrame>
  );
}
