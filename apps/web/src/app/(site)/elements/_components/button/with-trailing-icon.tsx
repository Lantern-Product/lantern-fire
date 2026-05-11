import { Button } from "@lantern-product/ui";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function ButtonWithTrailingIcon() {
  return (
    <ShowcaseFrame>
      <Button>
        Continue <ArrowRightIcon />
      </Button>
      <Button variant="secondary">
        Options <ChevronDownIcon />
      </Button>
      <Button variant="secondary">
        Open docs <ExternalLinkIcon />
      </Button>
      <Button variant="ghost">
        Learn more <ArrowRightIcon />
      </Button>
    </ShowcaseFrame>
  );
}
