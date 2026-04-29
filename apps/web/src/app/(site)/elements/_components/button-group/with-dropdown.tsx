import { Button, ButtonGroup } from "@lantern-product/ui";
import { ChevronDownIcon, SaveIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function ButtonGroupWithDropdown() {
  return (
    <ShowcaseFrame>
      <ButtonGroup>
        <Button variant="outline">
          <SaveIcon /> Save
        </Button>
        <Button variant="outline" size="icon" aria-label="More options">
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Publish</Button>
        <Button size="icon" aria-label="Publish options">
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
    </ShowcaseFrame>
  );
}
