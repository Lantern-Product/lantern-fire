import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
  DrawerClose,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuShortcut,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@lantern-product/ui";
import { ChevronDownIcon } from "lucide-react";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

export default function OverlaysPage() {
  return (
    <>
      <PageHeader
        eyebrow="Components"
        title="Overlays"
        description="Modals, popovers, and contextual UI built on Radix primitives. All handle focus management and keyboard navigation."
      />

      <Demo
        title="Dialog"
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm deletion</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Cancel</Button>
      </DialogClose>
      <Button variant="destructive-solid">Delete project</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm deletion</DialogTitle>
              <DialogDescription>
                This will permanently delete the project and all of its data. This action cannot be
                undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DialogClose>
              <Button variant="destructive-solid">Delete project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Demo>

      <Demo
        title="Sheet"
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="secondary">Open sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Make changes to your profile here.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">Open sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Demo>

      <Demo
        title="Dropdown menu"
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">
      Account <ChevronDownIcon />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Sign out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">
              Account <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Demo>

      <Demo
        title="Popover"
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Show popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-72">
    <p className="text-sm font-medium">Quick settings</p>
    <p className="text-xs text-muted-foreground">
      Anchored content with focus trap and arrow positioning.
    </p>
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Show popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Quick settings</p>
              <p className="text-xs text-muted-foreground">
                Anchored content with focus trap and arrow positioning.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </Demo>

      <Demo
        title="Hover card"
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@ada</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p className="text-sm font-medium">Ada Lovelace</p>
    <p className="text-xs text-muted-foreground">Mathematician · 1815–1852</p>
  </HoverCardContent>
</HoverCard>`}
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@ada</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm font-medium">Ada Lovelace</p>
            <p className="text-xs text-muted-foreground">Mathematician · 1815–1852</p>
          </HoverCardContent>
        </HoverCard>
      </Demo>

      <Demo
        title="Tooltip"
        code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>Tooltip content</TooltipContent>
</Tooltip>`}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </Demo>

      <Demo
        title="Alert dialog"
        description="Modal that requires explicit confirm or cancel. Use for destructive actions."
        code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete account</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. Your account and all of its data will be permanently
                removed from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete account</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Demo>

      <Demo
        title="Drawer"
        description="Bottom-anchored sliding panel built on vaul. Great for mobile-first sheets."
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="secondary">Open drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Move project</DrawerTitle>
      <DrawerDescription>Choose a destination workspace.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Confirm move</Button>
      <DrawerClose asChild>
        <Button variant="ghost">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary">Open drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move project</DrawerTitle>
                <DrawerDescription>
                  Choose a destination workspace for this project.
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 pb-4 text-sm text-muted-foreground">
                Drag down to dismiss, or pick an option below.
              </div>
              <DrawerFooter>
                <Button>Confirm move</Button>
                <DrawerClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </Demo>

      <Demo
        title="Context menu"
        description="Right-click (or long-press) the area below to open the menu."
        code={`<ContextMenu>
  <ContextMenuTrigger>Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Actions</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuItem>
      Open <ContextMenuShortcut>\u2318O</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Rename <ContextMenuShortcut>F2</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      >
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
            Right-click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuItem>
              Open <ContextMenuShortcut>⌘O</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Rename <ContextMenuShortcut>F2</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Duplicate <ContextMenuShortcut>⌘D</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              Delete <ContextMenuShortcut>⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Demo>

      <Demo
        title="Menubar"
        description="Application-style menu bar with multiple top-level menus."
        code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New <MenubarShortcut>\u2318N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Open <MenubarShortcut>\u2318O</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Save <MenubarShortcut>\u2318S</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      >
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Open <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Save <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find…</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Toggle sidebar</MenubarItem>
              <MenubarItem>Zen mode</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Demo>
    </>
  );
}
