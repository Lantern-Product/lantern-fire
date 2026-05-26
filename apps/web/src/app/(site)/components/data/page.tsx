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
  Badge,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@lantern-product/ui";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

const users = [
  { name: "Ada Lovelace", email: "ada@lantern.so", role: "Admin", status: "active" },
  { name: "Bob Chen", email: "bob@lantern.so", role: "Editor", status: "active" },
  { name: "Carol Smith", email: "carol@lantern.so", role: "Viewer", status: "invited" },
];

export default function DataPage() {
  return (
    <>
      <PageHeader
        eyebrow="Components"
        title="Data display"
        description="Surfaces for tabular data and identity. For chart primitives and composed visualizations, see the Charts section."
      />

      <Demo
        title="Table"
        code={`<Table>
  <TableCaption>Team members</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((u) => (
      <TableRow key={u.email}>
        <TableCell>{u.name}</TableCell>
        <TableCell>{u.email}</TableCell>
        <TableCell>{u.role}</TableCell>
        <TableCell>
          <Badge variant="secondary">{u.status}</Badge>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
      >
        <Table>
          <TableCaption>Team members</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.email}>
                <TableCell>{u.name}</TableCell>
                <TableCell className="text-muted-foreground">{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell>
                  {u.status === "active" ? (
                    <Badge variant="secondary">Active</Badge>
                  ) : (
                    <Badge variant="outline">Invited</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Demo>

      <Demo
        title="Avatars"
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
  <AvatarFallback>SC</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>AL</AvatarFallback>
</Avatar>`}
      >
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>BC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>+3</AvatarFallback>
          </Avatar>
        </div>
      </Demo>

      <Demo
        title="Carousel"
        description="Scrollable horizontal list of items powered by Embla. Use the buttons or swipe to navigate."
        code={`<Carousel>
  <CarouselContent>
    {items.map((item, i) => (
      <CarouselItem key={i}>{item}</CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      >
        <div className="w-full max-w-md px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }, (_, i) => (
                <CarouselItem key={i}>
                  <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 via-secondary/30 to-muted text-3xl font-semibold">
                    {i + 1}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Demo>
    </>
  );
}
