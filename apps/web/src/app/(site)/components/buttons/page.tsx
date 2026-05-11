import {
  Button,
  Badge,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Kbd,
  KbdGroup,
  Spinner,
} from "@lantern-product/ui";
import {
  PlusIcon,
  TrashIcon,
  DownloadIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

export default function ButtonsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Components"
        title="Buttons"
        description="Trigger actions and indicate status. Built with class-variance-authority for type-safe variants."
      />

      <Demo
        title="Variants"
        description="Hierarchy first: Primary is the filled high-emphasis action; Secondary is the outlined companion. Secondary green and coral are filled accent variants — same hierarchy as primary, different color for distinct actions."
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="secondary-green">Secondary green</Button>
<Button variant="secondary-coral">Secondary coral</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="destructive-solid">Destructive Solid</Button>
<Button variant="link">Link</Button>`}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary-green">Secondary green</Button>
        <Button variant="secondary-coral">Secondary coral</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive-solid">Destructive Solid</Button>
        <Button variant="link">Link</Button>
      </Demo>

      <Demo
        title="Sizes"
        description="Four height tiers plus icon-only variants."
        code={`<Button size="xs">XSmall</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
      >
        <Button size="xs">XSmall</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </Demo>

      <Demo
        title="With icons"
        code={`<Button><PlusIcon /> Add item</Button>
<Button variant="destructive-solid"><TrashIcon /> Delete</Button>
<Button size="icon" variant="secondary" aria-label="Add"><PlusIcon /></Button>`}
      >
        <Button>
          <PlusIcon /> Add item
        </Button>
        <Button variant="secondary">
          <DownloadIcon /> Download
        </Button>
        <Button variant="destructive-solid">
          <TrashIcon /> Delete
        </Button>
        <Button size="icon" variant="secondary" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon-sm" variant="ghost" aria-label="Add">
          <PlusIcon />
        </Button>
      </Demo>

      <Demo
        title="Disabled"
        code={`<Button disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="destructive-solid" disabled>Delete</Button>`}
      >
        <Button disabled>Primary</Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="destructive-solid" disabled>
          Delete
        </Button>
      </Demo>

      <Demo
        title="Badges"
        description="Inline status indicators."
        code={`<Badge>New</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="outline">v0.1.0</Badge>
<Badge variant="destructive">Deprecated</Badge>`}
      >
        <Badge>New</Badge>
        <Badge variant="secondary">Beta</Badge>
        <Badge variant="outline">v0.1.0</Badge>
        <Badge variant="destructive">Deprecated</Badge>
        <Badge variant="ghost">Ghost</Badge>
      </Demo>

      <Demo
        title="Button group"
        description="Joined buttons that share borders and focus styles."
        code={`<ButtonGroup>
  <Button variant="secondary"><ChevronLeftIcon /> Previous</Button>
  <Button variant="secondary">Next <ChevronRightIcon /></Button>
</ButtonGroup>`}
      >
        <ButtonGroup>
          <Button variant="secondary">
            <ChevronLeftIcon /> Previous
          </Button>
          <Button variant="secondary">
            Next <ChevronRightIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="secondary" size="icon" aria-label="Bold">
            <BoldIcon />
          </Button>
          <Button variant="secondary" size="icon" aria-label="Italic">
            <ItalicIcon />
          </Button>
          <Button variant="secondary" size="icon" aria-label="Underline">
            <UnderlineIcon />
          </Button>
          <ButtonGroupSeparator />
          <ButtonGroupText>Format</ButtonGroupText>
        </ButtonGroup>
      </Demo>

      <Demo
        title="Toggle"
        description="A single two-state button."
        code={`<Toggle aria-label="Toggle bold"><BoldIcon /></Toggle>`}
      >
        <Toggle aria-label="Toggle bold">
          <BoldIcon />
        </Toggle>
        <Toggle aria-label="Toggle italic" variant="outline">
          <ItalicIcon />
        </Toggle>
        <Toggle aria-label="Toggle underline" defaultPressed>
          <UnderlineIcon /> Underline
        </Toggle>
      </Demo>

      <Demo
        title="Toggle group"
        description="Multi- or single-select pressed-state group."
        code={`<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left"><AlignLeftIcon /></ToggleGroupItem>
  <ToggleGroupItem value="center"><AlignCenterIcon /></ToggleGroupItem>
  <ToggleGroupItem value="right"><AlignRightIcon /></ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single" defaultValue="left" variant="outline">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenterIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRightIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </Demo>

      <Demo
        title="Keyboard shortcut"
        description="Display key combinations inline with prose."
        code={`<KbdGroup>
  <Kbd>\u2318</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`}
      >
        <p className="text-sm">
          Open the command palette with{" "}
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </p>
        <KbdGroup>
          <Kbd>Shift</Kbd>
          <Kbd>?</Kbd>
        </KbdGroup>
        <Kbd>Esc</Kbd>
      </Demo>

      <Demo
        title="Spinner"
        description="Loading indicator. Use inside buttons or alongside text."
        code={`<Spinner />
<Button disabled><Spinner /> Loading</Button>`}
      >
        <Spinner />
        <Spinner className="size-6" />
        <Button disabled>
          <Spinner /> Saving…
        </Button>
        <Button variant="secondary" disabled>
          <Spinner /> Refreshing
        </Button>
      </Demo>
    </>
  );
}
