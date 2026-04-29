import { Button } from "@lantern-fire/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonGroupSimple() {
  return (
    <ShowcaseFrame>
      <div className="flex gap-2">
        <Button variant="outline">Years</Button>
        <Button variant="outline">Months</Button>
        <Button variant="outline">Days</Button>
      </div>
    </ShowcaseFrame>
  );
}
