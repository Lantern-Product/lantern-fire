import { Button, ButtonGroup } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonGroupSegmented() {
  return (
    <ShowcaseFrame>
      <ButtonGroup>
        <Button variant="secondary" className="bg-muted text-foreground">
          Day
        </Button>
        <Button variant="secondary">Week</Button>
        <Button variant="secondary">Month</Button>
        <Button variant="secondary">Year</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" size="sm" className="bg-muted text-foreground">
          List
        </Button>
        <Button variant="secondary" size="sm">
          Grid
        </Button>
        <Button variant="secondary" size="sm">
          Board
        </Button>
      </ButtonGroup>
    </ShowcaseFrame>
  );
}
