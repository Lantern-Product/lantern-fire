import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  Badge,
  Button,
  Separator,
  ScrollArea,
  AspectRatio,
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
  Avatar,
  AvatarFallback,
} from "@lantern-product/ui";
import { FolderIcon, PlusIcon, FileTextIcon, ChevronRightIcon } from "lucide-react";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

export default function CardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Components"
        title="Cards"
        description="Surfaces for grouping related content. Composable header, content, footer, and action slots."
      />

      <Demo
        title="Default"
        code={`<Card>
  <CardHeader>
    <CardTitle>Project Aurora</CardTitle>
    <CardDescription>Brief overview of project status.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Last updated 3 hours ago.</p>
  </CardContent>
</Card>`}
      >
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Project Aurora</CardTitle>
              <CardDescription>Brief overview of project status.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Last updated 3 hours ago.</p>
            </CardContent>
          </Card>
        </div>
      </Demo>

      <Demo
        title="With footer and action"
        code={`<Card>
  <CardHeader>
    <CardTitle>Notification settings</CardTitle>
    <CardDescription>Manage how you get notified.</CardDescription>
    <CardAction><Badge>Beta</Badge></CardAction>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>
    <Button>Save</Button>
    <Button variant="ghost">Cancel</Button>
  </CardFooter>
</Card>`}
      >
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Notification settings</CardTitle>
              <CardDescription>Manage how and when you get notified.</CardDescription>
              <CardAction>
                <Badge>Beta</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>Email, push, and in-app notifications can be configured per category.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Save</Button>
              <Button size="sm" variant="ghost">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Demo>

      <Demo
        title="Small size"
        code={`<Card size="sm">...</Card>`}
      >
        <div className="w-full max-w-sm">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Compact card</CardTitle>
              <CardDescription>Reduced padding throughout.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Useful for dense layouts.</p>
            </CardContent>
          </Card>
        </div>
      </Demo>

      <Demo
        title="Separator"
        code={`<Separator />`}
      >
        <div className="w-full max-w-md space-y-4">
          <p className="text-sm">Above</p>
          <Separator />
          <p className="text-sm">Below</p>
          <div className="flex h-5 items-center gap-4">
            <span className="text-sm">Left</span>
            <Separator orientation="vertical" />
            <span className="text-sm">Right</span>
          </div>
        </div>
      </Demo>

      <Demo
        title="Scroll area"
        code={`<ScrollArea className="h-32">
  ...content...
</ScrollArea>`}
      >
        <ScrollArea className="h-32 w-full max-w-md rounded-md border border-border p-3">
          <ul className="space-y-2 text-sm">
            {Array.from({ length: 20 }, (_, i) => (
              <li key={i}>Item {i + 1}</li>
            ))}
          </ul>
        </ScrollArea>
      </Demo>

      <Demo
        title="Aspect ratio"
        description="Lock content to a fixed width-to-height ratio."
        code={`<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." className="h-full w-full object-cover" />
</AspectRatio>`}
      >
        <div className="w-full max-w-sm">
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden rounded-lg bg-gradient-to-br from-primary/30 via-secondary/40 to-muted"
          >
            <div className="flex h-full w-full items-center justify-center text-sm font-medium">
              16 / 9
            </div>
          </AspectRatio>
        </div>
      </Demo>

      <Demo
        title="Item"
        description="Compact list-row primitive with media, content, and action slots."
        code={`<ItemGroup>
  <Item variant="outline">
    <ItemMedia><FolderIcon /></ItemMedia>
    <ItemContent>
      <ItemTitle>Marketing assets</ItemTitle>
      <ItemDescription>12 files \u00b7 Updated 2h ago</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="sm" variant="ghost">Open</Button>
    </ItemActions>
  </Item>
</ItemGroup>`}
      >
        <div className="w-full max-w-md">
          <ItemGroup>
            <Item variant="outline">
              <ItemMedia>
                <FolderIcon className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Marketing assets</ItemTitle>
                <ItemDescription>12 files · Updated 2h ago</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm" variant="ghost" aria-label="Open">
                  <ChevronRightIcon />
                </Button>
              </ItemActions>
            </Item>
            <Item variant="outline">
              <ItemMedia>
                <FileTextIcon className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Q3 roadmap</ItemTitle>
                <ItemDescription>PDF · 1.2 MB</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm" variant="ghost" aria-label="Open">
                  <ChevronRightIcon />
                </Button>
              </ItemActions>
            </Item>
            <Item variant="muted">
              <ItemMedia>
                <Avatar className="size-8">
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Ada Lovelace</ItemTitle>
                <ItemDescription>ada@lantern.so</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Badge variant="secondary">Admin</Badge>
              </ItemActions>
            </Item>
          </ItemGroup>
        </div>
      </Demo>

      <Demo
        title="Empty state"
        description="Placeholder for empty lists, search results, or first-run experiences."
        code={`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon"><FolderIcon /></EmptyMedia>
    <EmptyTitle>No projects yet</EmptyTitle>
    <EmptyDescription>Create your first project to get started.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button><PlusIcon /> New project</Button>
  </EmptyContent>
</Empty>`}
      >
        <div className="w-full max-w-md">
          <Empty className="border border-dashed">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderIcon />
              </EmptyMedia>
              <EmptyTitle>No projects yet</EmptyTitle>
              <EmptyDescription>
                Create your first project to start collaborating with your team.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">
                <PlusIcon /> New project
              </Button>
            </EmptyContent>
          </Empty>
        </div>
      </Demo>

      <Demo
        title="Resizable panels"
        description="Drag the handle between panels to resize. Built on react-resizable-panels."
        code={`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={30}>Sidebar</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>Content</ResizablePanel>
</ResizablePanelGroup>`}
      >
        <div className="w-full max-w-2xl">
          <ResizablePanelGroup
            orientation="horizontal"
            className="h-48 rounded-lg border border-border"
          >
            <ResizablePanel defaultSize={30} minSize={15}>
              <div className="flex h-full items-center justify-center p-4 text-sm">Sidebar</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={70}>
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize={60}>
                  <div className="flex h-full items-center justify-center p-4 text-sm">
                    Content
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={40}>
                  <div className="flex h-full items-center justify-center p-4 text-sm">
                    Console
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </Demo>
    </>
  );
}
