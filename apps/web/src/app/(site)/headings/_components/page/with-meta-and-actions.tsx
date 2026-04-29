import { Button } from "@lantern-product/ui";
import {
  BriefcaseIcon,
  CalendarIcon,
  DollarSignIcon,
  MapPinIcon,
} from "lucide-react";

export function PageWithMetaAndActions() {
  return (
    <div className="border-b border-border bg-background px-6 py-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Back End Developer
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <BriefcaseIcon className="size-4" />
              Full-time
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="size-4" />
              Remote
            </span>
            <span className="inline-flex items-center gap-1.5">
              <DollarSignIcon className="size-4" />
              $120k &ndash; $140k
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon className="size-4" />
              Closing on January 9, 2026
            </span>
          </div>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline">Edit</Button>
          <Button>Publish</Button>
        </div>
      </div>
    </div>
  );
}
