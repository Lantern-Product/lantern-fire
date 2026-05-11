import { Button, ButtonGroup } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonGroupAttached() {
  return (
    <ShowcaseFrame>
      <ButtonGroup>
        <Button variant="secondary">Years</Button>
        <Button variant="secondary">Months</Button>
        <Button variant="secondary">Days</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="secondary">Top</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Bottom</Button>
      </ButtonGroup>
    </ShowcaseFrame>
  );
}
