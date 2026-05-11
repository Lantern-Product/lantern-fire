import { Avatar, AvatarFallback, Button } from "@lantern-product/ui";

export function CardWithAvatarAndActions() {
  return (
    <div className="bg-muted/30 p-6 lg:p-10">
      <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <Avatar className="size-10">
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <h3 className="truncate font-heading text-base font-semibold">
                Ricardo Cooper
              </h3>
              <p className="truncate text-sm text-muted-foreground">
                Updated 3 hours ago
              </p>
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button size="sm" variant="secondary">
              Message
            </Button>
            <Button size="sm">View profile</Button>
          </div>
        </div>
        <div className="space-y-3 p-6">
          <div className="h-3 w-3/4 rounded bg-muted" />
          <div className="h-3 w-2/3 rounded bg-muted" />
          <div className="h-3 w-1/2 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
