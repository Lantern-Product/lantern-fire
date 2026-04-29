import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@lantern-fire/ui";
import { ArrowRightIcon } from "lucide-react";
import { PageHeader } from "@/components/page-header";

const groups = [
  {
    href: "/components/buttons",
    title: "Buttons",
    description: "Buttons, toggles, badges, and inline indicators.",
    components: ["Button", "ButtonGroup", "Badge", "Toggle", "ToggleGroup", "Kbd", "Spinner"],
  },
  {
    href: "/components/cards",
    title: "Cards",
    description: "Surfaces, list rows, empty states, and resizable layouts.",
    components: ["Card", "Separator", "ScrollArea", "AspectRatio", "Item", "Empty", "Resizable"],
  },
  {
    href: "/components/forms",
    title: "Forms",
    description: "Inputs, controls, sliders, and react-hook-form integration.",
    components: [
      "Input",
      "Textarea",
      "Label",
      "Checkbox",
      "RadioGroup",
      "Switch",
      "Select",
      "NativeSelect",
      "Slider",
      "Field",
      "Calendar",
      "Form",
    ],
  },
  {
    href: "/components/overlays",
    title: "Overlays",
    description: "Modals, drawers, popovers, menus, and tooltips on Radix primitives.",
    components: [
      "Dialog",
      "AlertDialog",
      "Sheet",
      "Drawer",
      "DropdownMenu",
      "ContextMenu",
      "Menubar",
      "Popover",
      "HoverCard",
      "Tooltip",
      "Command",
    ],
  },
  {
    href: "/components/feedback",
    title: "Feedback",
    description: "Alerts, progress indicators, skeletons, and toast notifications.",
    components: ["Alert", "Skeleton", "Progress", "Toaster"],
  },
  {
    href: "/components/navigation",
    title: "Navigation",
    description: "Tabs, breadcrumbs, pagination, accordions, sidebar, and menus.",
    components: [
      "Tabs",
      "Breadcrumb",
      "Pagination",
      "Accordion",
      "NavigationMenu",
      "Collapsible",
      "Sidebar",
    ],
  },
  {
    href: "/components/data",
    title: "Data",
    description: "Tables, avatars, carousels, and chart primitives.",
    components: ["Table", "Avatar", "Carousel", "ChartContainer"],
  },
];

export default function ComponentsIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Components"
        title="Component library"
        description="52 primitives across 7 categories. All components are tree-shakable, fully typed, and ship with sensible defaults."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <Link key={group.href} href={group.href} className="group">
            <Card className="h-full transition-shadow hover:ring-foreground/20">
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-xs text-muted-foreground">
                  {group.components.join(" · ")}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Explore <ArrowRightIcon className="size-3.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
