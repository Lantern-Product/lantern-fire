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
        <Button variant="outline" size="icon" aria-label="Bold">
          <BoldIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Italic">
          <ItalicIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Underline">
          <UnderlineIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Align left">
          <AlignLeftIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Align center">
          <AlignCenterIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Align right">
          <AlignRightIcon />
        </Button>
      </ButtonGroup>
    </ShowcaseFrame>
  );
}
