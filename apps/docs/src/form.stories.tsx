import type { Story } from "@ladle/react";
import {
  Input,
  Textarea,
  Label,
  Checkbox,
  Switch,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@lantern-fire/ui";

export default { title: "Components/Form" };

export const Inputs: Story = () => (
  <div className="flex flex-col gap-4 p-6 max-w-sm">
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message…" rows={4} />
    </div>
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="disabled">Disabled</Label>
      <Input id="disabled" placeholder="Not editable" disabled />
    </div>
  </div>
);

export const CheckboxAndSwitch: Story = () => (
  <div className="flex flex-col gap-4 p-6">
    <div className="flex items-center gap-2">
      <Checkbox id="check1" />
      <Label htmlFor="check1">Accept terms and conditions</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="check2" defaultChecked />
      <Label htmlFor="check2">Receive notifications</Label>
    </div>
    <div className="flex items-center gap-2">
      <Switch id="sw1" />
      <Label htmlFor="sw1">Enable feature</Label>
    </div>
  </div>
);

export const SelectControl: Story = () => (
  <div className="p-6 max-w-xs">
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Pick a role…" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="editor">Editor</SelectItem>
        <SelectItem value="viewer">Viewer</SelectItem>
      </SelectContent>
    </Select>
  </div>
);
