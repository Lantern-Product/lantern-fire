import { Button } from "@lantern-product/ui";

export function PageWithActions() {
  return (
    <div className="border-b border-border bg-background px-6 py-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Back End Developer
        </h1>
        <div className="flex gap-2">
          <Button variant="secondary">Edit</Button>
          <Button>Publish</Button>
        </div>
      </div>
    </div>
  );
}
