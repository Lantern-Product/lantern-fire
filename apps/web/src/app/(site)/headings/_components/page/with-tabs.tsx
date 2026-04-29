import { Button } from "@lantern-fire/ui";
import { HeadingTabs } from "../shared";

export function PageWithTabs() {
  return (
    <div className="border-b border-border bg-background px-6 pt-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-6 pb-2">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Back End Developer
          </h1>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline">Edit</Button>
            <Button>Publish</Button>
          </div>
        </div>
        <div className="border-t border-border">
          <HeadingTabs />
        </div>
      </div>
    </div>
  );
}
