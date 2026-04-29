import { Button } from "@lantern-fire/ui";
import {
  CopyIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  ShareIcon,
  Trash2Icon,
} from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function DropdownWithIconButton() {
  const items = [
    { label: "Edit", Icon: PencilIcon },
    { label: "Duplicate", Icon: CopyIcon },
    { label: "Share", Icon: ShareIcon },
  ];
  return (
    <ShowcaseFrame>
      <div className="flex flex-col items-end gap-1.5">
        <Button variant="ghost" size="icon" aria-label="More" aria-expanded="true">
          <EllipsisVerticalIcon />
        </Button>
        <div className="z-10 min-w-40 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10">
          {items.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              className="flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              <Icon className="size-4" />
              {label}
            </button>
          ))}
          <div className="-mx-1 my-1 h-px bg-border" />
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-sm text-destructive hover:bg-destructive/10"
          >
            <Trash2Icon className="size-4" />
            Delete
          </button>
        </div>
      </div>
    </ShowcaseFrame>
  );
}
