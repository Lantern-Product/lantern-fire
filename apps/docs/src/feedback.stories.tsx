import type { Story } from "@ladle/react";
import { Alert, AlertTitle, AlertDescription, Skeleton, Progress } from "@lantern-fire/ui";
import { InfoIcon, TriangleAlertIcon, CircleCheckIcon } from "lucide-react";

export default { title: "Components/Feedback" };

export const Alerts: Story = () => (
  <div className="flex flex-col gap-3 p-6 max-w-lg">
    <Alert>
      <InfoIcon />
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>This is an informational alert message.</AlertDescription>
    </Alert>
    <Alert variant="destructive">
      <TriangleAlertIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong. Please try again.</AlertDescription>
    </Alert>
  </div>
);

export const SkeletonLoaders: Story = () => (
  <div className="flex flex-col gap-3 p-6 max-w-sm">
    <Skeleton className="h-8 w-48" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-4/5" />
    <Skeleton className="h-32 w-full rounded-xl" />
  </div>
);

export const ProgressBars: Story = () => (
  <div className="flex flex-col gap-4 p-6 max-w-sm">
    <Progress value={30} />
    <Progress value={60} />
    <Progress value={100} />
  </div>
);
