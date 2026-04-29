import { Button, ButtonGroup } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonGroupAttached() {
  return (
    <ShowcaseFrame>
      <ButtonGroup>
        <Button variant="outline">Years</Button>
        <Button variant="outline">Months</Button>
        <Button variant="outline">Days</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    </ShowcaseFrame>
  );
}
