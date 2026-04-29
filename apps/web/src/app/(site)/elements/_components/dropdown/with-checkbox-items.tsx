import { Button } from "@lantern-product/ui";
import { CheckIcon, FilterIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function DropdownWithCheckboxItems() {
  const items = [
    { label: "Status: Active", checked: true },
    { label: "Status: Pending", checked: true },
    { label: "Status: Archived", checked: false },
    { label: "Show drafts", checked: false },
    { label: "Show only mine", checked: true },
  ];
  return (
    <ShowcaseFrame>
      <div className="flex flex-col items-start gap-1.5">
        <Button variant="outline" aria-expanded="true">
          <FilterIcon /> Filter
        </Button>
        <div className="z-10 min-w-56 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10">
          <div className="px-1.5 py-1 text-xs font-medium text-muted-foreground">
            Filters
          </div>
          {items.map((item) => (
            <div
              key={item.label}
              className="relative flex items-center gap-1.5 rounded-md px-1.5 py-1 pr-8 text-sm"
            >
              {item.label}
              {item.checked ? (
                <span
                  className="pointer-events-none absolute right-2 inline-flex items-center justify-center"
                  aria-hidden
                >
                  <CheckIcon className="size-4" />
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}
