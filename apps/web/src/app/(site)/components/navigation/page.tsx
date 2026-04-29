import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "@lantern-fire/ui";
import { ChevronsUpDownIcon, HomeIcon, InboxIcon, SettingsIcon } from "lucide-react";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

export default function NavigationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Components"
        title="Navigation"
        description="Move between sections and reveal hierarchical content."
      />

      <Demo title="Tabs · default">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-4 text-sm">
            Overview content goes here.
          </TabsContent>
          <TabsContent value="analytics" className="pt-4 text-sm">
            Analytics content goes here.
          </TabsContent>
          <TabsContent value="settings" className="pt-4 text-sm">
            Settings content goes here.
          </TabsContent>
        </Tabs>
      </Demo>

      <Demo title="Tabs · line variant">
        <Tabs defaultValue="t1" className="w-full">
          <TabsList variant="line">
            <TabsTrigger value="t1">First</TabsTrigger>
            <TabsTrigger value="t2">Second</TabsTrigger>
            <TabsTrigger value="t3">Third</TabsTrigger>
          </TabsList>
          <TabsContent value="t1" className="pt-4 text-sm">
            Content one.
          </TabsContent>
          <TabsContent value="t2" className="pt-4 text-sm">
            Content two.
          </TabsContent>
          <TabsContent value="t3" className="pt-4 text-sm">
            Content three.
          </TabsContent>
        </Tabs>
      </Demo>

      <Demo title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Navigation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Demo>

      <Demo title="Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Demo>

      <Demo title="Accordion">
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="q1">
            <AccordionTrigger>What is Lantern Fire?</AccordionTrigger>
            <AccordionContent>
              Lantern Fire is the shared design system for Lantern products, built on shadcn/ui
              primitives and Tailwind CSS v4.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>How do I consume it?</AccordionTrigger>
            <AccordionContent>
              Install the package, import the styles once, then import individual components.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
            <AccordionContent>
              Yes. Add <code className="font-mono text-xs">class=&quot;dark&quot;</code> to your{" "}
              <code className="font-mono text-xs">html</code> element.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Demo>

      <Demo
        title="Navigation menu"
        description="Top-level navigation with rich dropdown panels."
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 p-3">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#" className="flex flex-col gap-1">
                        <span className="font-medium">Lantern Cloud</span>
                        <span className="text-xs text-muted-foreground">
                          Hosted runtime with autoscaling.
                        </span>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#" className="flex flex-col gap-1">
                        <span className="font-medium">Lantern CLI</span>
                        <span className="text-xs text-muted-foreground">
                          Local development and deployment.
                        </span>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[260px] gap-2 p-3">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Documentation</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Changelog</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Community</a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-3">
                <a href="#">Pricing</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Demo>

      <Demo
        title="Collapsible"
        description="Show or hide a section of content. Lower-level than Accordion."
        code={`<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>...</CollapsibleContent>
</Collapsible>`}
      >
        <Collapsible className="w-full max-w-md space-y-2">
          <div className="flex items-center justify-between gap-4 rounded-md border border-border px-4 py-2">
            <span className="text-sm font-medium">@lantern-fire/ui peer dependencies</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Toggle">
                <ChevronsUpDownIcon />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="rounded-md border border-border px-4 py-3 text-sm font-mono text-muted-foreground">
            react · react-dom · tailwindcss · shadcn
          </CollapsibleContent>
        </Collapsible>
      </Demo>

      <Demo
        title="Sidebar"
        description="Application chrome with collapsible sidebar. Wrap your layout in SidebarProvider."
      >
        <div className="w-full overflow-hidden rounded-lg border border-border">
          <SidebarProvider className="min-h-[280px]">
            <Sidebar collapsible="icon" className="static h-[280px]">
              <SidebarHeader>
                <div className="px-2 py-1 text-sm font-semibold">Lantern</div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                          <HomeIcon /> Home
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <InboxIcon /> Inbox
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SettingsIcon /> Settings
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <div className="px-2 py-1 text-xs text-muted-foreground">v0.1.0</div>
              </SidebarFooter>
            </Sidebar>
            <SidebarInset className="bg-muted/20">
              <header className="flex h-10 items-center gap-2 border-b border-border px-3">
                <SidebarTrigger />
                <span className="text-sm font-medium">Dashboard</span>
              </header>
              <div className="p-4 text-sm text-muted-foreground">
                Click the trigger above to collapse the sidebar.
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </Demo>
    </>
  );
}
