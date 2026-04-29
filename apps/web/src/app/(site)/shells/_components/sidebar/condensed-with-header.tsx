import { BellIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Button,
} from "@lantern-fire/ui";
import { ContentPlaceholder, StatGrid } from "../shared";
import { CondensedRail } from "./_condensed-rail";

export function SidebarCondensedWithHeader() {
  return (
    <div className="flex min-h-full bg-muted/30">
      <CondensedRail />
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border bg-background px-6 lg:px-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Acme</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center gap-3">
            <Button variant="ghost" size="icon-sm" aria-label="Notifications">
              <BellIcon />
            </Button>
            <Avatar className="size-8">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 px-6 py-10 lg:px-10">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Acme
          </h1>
          <div className="mt-8 space-y-8">
            <StatGrid />
            <ContentPlaceholder rows={3} />
          </div>
        </main>
      </div>
    </div>
  );
}
