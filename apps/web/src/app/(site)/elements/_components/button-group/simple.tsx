import { Button } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonGroupSimple() {
  return (
    <ShowcaseFrame>
      <div className="flex gap-2">
        <Button variant="secondary">Years</Button>
        <Button variant="secondary">Months</Button>
        <Button variant="secondary">Days</Button>
      </div>
    </ShowcaseFrame>
  );
}
