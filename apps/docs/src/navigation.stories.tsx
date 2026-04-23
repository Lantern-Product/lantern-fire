import type { Story } from "@ladle/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@lantern-fire/ui";

export default { title: "Components/Navigation" };

export const TabsDefault: Story = () => (
  <div className="p-6">
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="pt-4">Overview content</TabsContent>
      <TabsContent value="analytics" className="pt-4">Analytics content</TabsContent>
      <TabsContent value="settings" className="pt-4">Settings content</TabsContent>
    </Tabs>
  </div>
);

export const TabsLine: Story = () => (
  <div className="p-6">
    <Tabs defaultValue="tab1">
      <TabsList variant="line">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="pt-4">Content 1</TabsContent>
      <TabsContent value="tab2" className="pt-4">Content 2</TabsContent>
      <TabsContent value="tab3" className="pt-4">Content 3</TabsContent>
    </Tabs>
  </div>
);

export const BreadcrumbNav: Story = () => (
  <div className="p-6">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Lantern Pro</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
);

export const AccordionDefault: Story = () => (
  <div className="p-6 max-w-md">
    <Accordion type="single" collapsible>
      <AccordionItem value="q1">
        <AccordionTrigger>What is Lantern Fire?</AccordionTrigger>
        <AccordionContent>
          Lantern Fire is the shared design system for Lantern products, built on
          shadcn/ui primitives and Tailwind CSS v4.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger>How do I consume it?</AccordionTrigger>
        <AccordionContent>
          Import the styles once, then import individual components as needed.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
