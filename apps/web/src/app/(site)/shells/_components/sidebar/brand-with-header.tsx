import { BellIcon, SearchIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@lantern-fire/ui";
import { ContentPlaceholder, StatGrid } from "../shared";
import { FullSidebar } from "./_full-sidebar";

export function SidebarBrandWithHeader() {
  return (
    <div className="flex min-h-full bg-muted/30">
      <FullSidebar tone="brand" />
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border bg-background px-6 lg:px-10">
          <div className="flex-1 max-w-md">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon className="size-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search…" />
            </InputGroup>
          </div>
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
            Dashboard
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
