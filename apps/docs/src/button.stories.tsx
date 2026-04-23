import type { Story } from "@ladle/react";
import { Button } from "@lantern-fire/ui";
import { PlusIcon, TrashIcon } from "lucide-react";

export default { title: "Components/Button" };

export const Variants: Story = () => (
  <div className="flex flex-wrap gap-3 p-6">
    <Button variant="default">Default</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="destructive-solid">Destructive Solid</Button>
    <Button variant="link">Link</Button>
  </div>
);

export const Sizes: Story = () => (
  <div className="flex flex-wrap items-center gap-3 p-6">
    <Button size="xs">XSmall</Button>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const WithIcons: Story = () => (
  <div className="flex flex-wrap gap-3 p-6">
    <Button>
      <PlusIcon /> Add item
    </Button>
    <Button variant="destructive-solid">
      <TrashIcon /> Delete
    </Button>
    <Button size="icon" variant="outline">
      <PlusIcon />
    </Button>
    <Button size="icon-sm" variant="ghost">
      <PlusIcon />
    </Button>
  </div>
);

export const Disabled: Story = () => (
  <div className="flex flex-wrap gap-3 p-6">
    <Button disabled>Default</Button>
    <Button variant="outline" disabled>Outline</Button>
    <Button variant="destructive-solid" disabled>Delete</Button>
  </div>
);
