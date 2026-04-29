import { Button } from "@lantern-product/ui";
import { ShowcaseFrame } from "../shared";

export function ButtonSoft() {
  return (
    <ShowcaseFrame>
      <Button className="bg-primary/15 text-primary hover:bg-primary/25">
        Save
      </Button>
      <Button className="bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/25 dark:text-emerald-400">
        Approve
      </Button>
      <Button className="bg-amber-500/15 text-amber-700 hover:bg-amber-500/25 dark:text-amber-400">
        Pending
      </Button>
      <Button className="bg-rose-500/15 text-rose-700 hover:bg-rose-500/25 dark:text-rose-400">
        Discard
      </Button>
    </ShowcaseFrame>
  );
}
