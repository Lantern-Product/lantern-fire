import type { Story } from "@ladle/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  Button,
  Badge,
} from "@lantern-fire/ui";

export default { title: "Components/Card" };

export const Default: Story = () => (
  <div className="p-6 max-w-md">
    <Card>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>A brief description of the card content.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content area of the card.</p>
      </CardContent>
    </Card>
  </div>
);

export const WithFooter: Story = () => (
  <div className="p-6 max-w-md">
    <Card>
      <CardHeader>
        <CardTitle>Card with footer</CardTitle>
        <CardDescription>Cards can have footer action areas.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Confirm</Button>
        <Button size="sm" variant="ghost">Cancel</Button>
      </CardFooter>
    </Card>
  </div>
);

export const WithAction: Story = () => (
  <div className="p-6 max-w-md">
    <Card>
      <CardHeader>
        <CardTitle>Card with action</CardTitle>
        <CardDescription>The header supports an inline action slot.</CardDescription>
        <CardAction>
          <Badge>New</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Content area.</p>
      </CardContent>
    </Card>
  </div>
);

export const SmallSize: Story = () => (
  <div className="p-6 max-w-md">
    <Card size="sm">
      <CardHeader>
        <CardTitle>Small card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Reduced padding variant.</p>
      </CardContent>
    </Card>
  </div>
);
