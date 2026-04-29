import { Button } from "@lantern-fire/ui";
import { ChevronDownIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function DropdownWithDivider() {
  return (
    <ShowcaseFrame>
      <div className="flex flex-col items-start gap-1.5">
        <Button variant="outline" aria-expanded="true">
          Account <ChevronDownIcon />
        </Button>
        <div className="z-10 min-w-48 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10">
          {["Profile", "Settings"].map((item) => (
            <button
              key={item}
              type="button"
              className="flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {item}
            </button>
          ))}
          <div className="-mx-1 my-1 h-px bg-border" />
          {["Team", "Billing", "Support"].map((item) => (
            <button
              key={item}
              type="button"
              className="flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {item}
            </button>
          ))}
          <div className="-mx-1 my-1 h-px bg-border" />
          <button
            type="button"
            className="flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            Sign out
          </button>
        </div>
      </div>
    </ShowcaseFrame>
  );
}
