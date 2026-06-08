import { Button } from "@lantern-product/ui";
import { DownloadIcon, ImageIcon, Trash2Icon } from "lucide-react";
import {
  DrawerCloseButton,
  DrawerStage,
  FauxAvatar,
  FauxCover,
  fileMeta,
} from "../shared";

const sharedWith = [
  { name: "Aimee Douglas", initials: "AD" },
  { name: "Andrea McMillan", initials: "AM" },
];

export function DrawerFileDetails() {
  return (
    <DrawerStage close="none">
      <div className="flex items-start justify-between gap-4 px-4 py-6 sm:px-6">
        <h2 className="font-heading text-base font-semibold text-foreground">
          Information
        </h2>
        <DrawerCloseButton />
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-6 sm:px-6">
        <div className="relative">
          <FauxCover className="flex aspect-[10/7] w-full items-center justify-center rounded-lg">
            <ImageIcon className="size-10 text-primary-foreground/70" />
          </FauxCover>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate font-heading text-lg font-semibold text-foreground">
              IMG_4985.HEIC
            </h3>
            <p className="text-sm text-muted-foreground">3.9 MB</p>
          </div>
        </div>

        <dl className="mt-6 divide-y divide-border border-t border-border">
          {fileMeta.map((item) => (
            <div
              key={item.label}
              className="flex justify-between gap-4 py-3 text-sm"
            >
              <dt className="text-muted-foreground">{item.label}</dt>
              <dd className="text-right font-medium text-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-foreground">Description</h4>
          <p className="mt-1 text-sm text-muted-foreground">
            Taken at golden hour on the coast — soft light, long shadows.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-foreground">Shared with</h4>
          <ul className="mt-2 divide-y divide-border">
            {sharedWith.map((person) => (
              <li key={person.name} className="flex items-center gap-3 py-2">
                <FauxAvatar
                  initials={person.initials}
                  tone="muted"
                  className="size-8 text-xs"
                />
                <span className="text-sm font-medium text-foreground">
                  {person.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex gap-3">
          <Button className="flex-1">
            <DownloadIcon /> Download
          </Button>
          <Button variant="secondary" size="icon" aria-label="Delete file">
            <Trash2Icon />
          </Button>
        </div>
      </div>
    </DrawerStage>
  );
}
