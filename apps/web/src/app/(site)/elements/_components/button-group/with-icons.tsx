import { Button, ButtonGroup } from "@lantern-product/ui";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function ButtonGroupWithIcons() {
  return (
    <ShowcaseFrame>
      <ButtonGroup>
        <Button variant="secondary" size="icon" aria-label="Bold">
          <BoldIcon />
        </Button>
        <Button variant="secondary" size="icon" aria-label="Italic">
          <ItalicIcon />
        </Button>
        <Button variant="secondary" size="icon" aria-label="Underline">
          <UnderlineIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" size="icon" aria-label="Align left">
          <AlignLeftIcon />
        </Button>
        <Button variant="secondary" size="icon" aria-label="Align center">
          <AlignCenterIcon />
        </Button>
        <Button variant="secondary" size="icon" aria-label="Align right">
          <AlignRightIcon />
        </Button>
      </ButtonGroup>
    </ShowcaseFrame>
  );
}
