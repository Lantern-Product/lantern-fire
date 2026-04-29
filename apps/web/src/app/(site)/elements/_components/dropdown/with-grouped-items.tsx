import { Button } from "@lantern-fire/ui";
import { ChevronDownIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function DropdownWithGroupedItems() {
  const groups = [
    {
      label: "Account",
      items: ["Profile", "Email preferences", "Notifications"],
    },
    {
      label: "Workspace",
      items: ["Team members", "Billing", "Integrations"],
    },
    {
      label: "Help",
      items: ["Documentation", "Support"],
    },
  ];
  return (
    <ShowcaseFrame>
      <div className="flex flex-col items-start gap-1.5">
        <Button variant="outline" aria-expanded="true">
          Settings <ChevronDownIcon />
        </Button>
        <div className="z-10 min-w-52 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10">
          {groups.map((group, gi) => (
            <div key={group.label}>
              {gi > 0 ? (
                <div className="-mx-1 my-1 h-px bg-border" aria-hidden />
              ) : null}
              <div className="px-1.5 py-1 text-xs font-medium text-muted-foreground">
                {group.label}
              </div>
              {group.items.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}
