import { Input } from "@lantern-product/ui";
import { SearchIcon } from "lucide-react";

export function SectionWithInputGroup() {
  return (
    <div className="bg-background p-6 lg:p-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-3 border-b border-border pb-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-heading text-lg font-semibold tracking-tight">
            Job Postings
          </h2>
          <div className="relative w-full sm:w-72">
            <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-8" placeholder="Search postings" />
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="h-3 w-3/4 rounded bg-muted" />
          <div className="h-3 w-2/3 rounded bg-muted" />
          <div className="h-3 w-1/2 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
