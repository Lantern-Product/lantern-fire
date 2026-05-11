import { Button } from "@lantern-product/ui";
import { ChevronDownIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function DropdownSimple() {
  const items = ["Account settings", "Support", "License", "Sign out"];
  return (
    <ShowcaseFrame>
      <div className="flex flex-col items-start gap-1.5">
        <Button variant="secondary" aria-expanded="true">
          Options <ChevronDownIcon />
        </Button>
        <div className="z-10 min-w-44 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              className="flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}
