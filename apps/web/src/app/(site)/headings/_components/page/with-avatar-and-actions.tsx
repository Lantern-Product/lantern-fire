import { Avatar, AvatarFallback, Button } from "@lantern-product/ui";
import { MailIcon, PhoneIcon } from "lucide-react";

export function PageWithAvatarAndActions() {
  return (
    <div className="border-b border-border bg-background px-6 py-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 min-w-0">
          <Avatar className="size-14">
            <AvatarFallback>RC</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Profile
            </p>
            <h1 className="mt-0.5 truncate font-heading text-2xl font-semibold tracking-tight">
              Ricardo Cooper
            </h1>
          </div>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline">
            <MailIcon /> Message
          </Button>
          <Button>
            <PhoneIcon /> Call
          </Button>
        </div>
      </div>
    </div>
  );
}
