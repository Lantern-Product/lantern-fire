import type { Story } from "@ladle/react";
import { Badge } from "@lantern-fire/ui";

export default { title: "Components/Badge" };

export const Variants: Story = () => (
  <div className="flex flex-wrap gap-3 p-6">
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="ghost">Ghost</Badge>
  </div>
);
