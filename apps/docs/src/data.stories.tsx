import type { Story } from "@ladle/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Separator,
} from "@lantern-fire/ui";

export default { title: "Components/Data" };

const users = [
  { name: "Alice Martin", email: "alice@lantern.so", role: "Admin" },
  { name: "Bob Chen", email: "bob@lantern.so", role: "Editor" },
  { name: "Carol Smith", email: "carol@lantern.so", role: "Viewer" },
];

export const DataTable: Story = () => (
  <div className="p-6">
    <Table>
      <TableCaption>Team members</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((u) => (
          <TableRow key={u.email}>
            <TableCell>{u.name}</TableCell>
            <TableCell className="text-muted-foreground">{u.email}</TableCell>
            <TableCell>{u.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export const Avatars: Story = () => (
  <div className="flex items-center gap-3 p-6">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>AM</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>BC</AvatarFallback>
    </Avatar>
  </div>
);

export const Separators: Story = () => (
  <div className="p-6 space-y-4 max-w-sm">
    <p className="text-sm">Above separator</p>
    <Separator />
    <p className="text-sm">Below separator</p>
    <div className="flex items-center gap-4">
      <span className="text-sm">Left</span>
      <Separator orientation="vertical" className="h-5" />
      <span className="text-sm">Right</span>
    </div>
  </div>
);
