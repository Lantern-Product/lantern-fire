import { Button, ButtonGroup } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonGroupSegmented() {
  return (
    <ShowcaseFrame>
      <ButtonGroup>
        <Button variant="outline" className="bg-muted text-foreground">
          Day
        </Button>
        <Button variant="outline">Week</Button>
        <Button variant="outline">Month</Button>
        <Button variant="outline">Year</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm" className="bg-muted text-foreground">
          List
        </Button>
        <Button variant="outline" size="sm">
          Grid
        </Button>
        <Button variant="outline" size="sm">
          Board
        </Button>
      </ButtonGroup>
    </ShowcaseFrame>
  );
}
