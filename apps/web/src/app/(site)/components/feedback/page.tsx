"use client";

import { Alert, AlertTitle, AlertDescription, Skeleton, Progress, Button, Toaster } from "@lantern-product/ui";
import { toast } from "sonner";
import { InfoIcon, TriangleAlertIcon, CircleCheckIcon } from "lucide-react";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

export default function FeedbackPage() {
  return (
    <>
      <PageHeader
        eyebrow="Components"
        title="Feedback"
        description="Communicate state, progress, and outcomes to the user."
      />

      <Demo
        title="Alerts"
        code={`<Alert>
  <InfoIcon />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>
    You can update your preferences in settings.
  </AlertDescription>
</Alert>
<Alert variant="destructive">
  <TriangleAlertIcon />
  <AlertTitle>Something went wrong</AlertTitle>
  <AlertDescription>
    We couldn't save your changes. Please try again.
  </AlertDescription>
</Alert>`}
      >
        <div className="flex w-full flex-col gap-3">
          <Alert>
            <InfoIcon />
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>
              You can update your preferences in settings.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <TriangleAlertIcon />
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
              We couldn&apos;t save your changes. Please try again.
            </AlertDescription>
          </Alert>
        </div>
      </Demo>

      <Demo
        title="Skeleton loaders"
        code={`<Skeleton className="h-8 w-48" />
<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-4/5" />
<Skeleton className="h-32 w-full rounded-xl" />`}
      >
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
      </Demo>

      <Demo
        title="Progress"
        code={`<Progress value={25} />
<Progress value={60} />
<Progress value={100} />`}
      >
        <div className="flex w-full max-w-sm flex-col gap-4">
          <Progress value={25} />
          <Progress value={60} />
          <Progress value={100} />
        </div>
      </Demo>

      <Demo
        title="Toast notifications"
        code={`<Button onClick={() => toast("Event scheduled", {
  description: "Tuesday at 3:00 PM",
})}>
  Show toast
</Button>
<Button
  variant="secondary"
  onClick={() => toast.success("Profile updated")}
>
  <CircleCheckIcon /> Success
</Button>
<Button
  variant="destructive"
  onClick={() => toast.error("Upload failed")}
>
  Error
</Button>
<Toaster />`}
      >
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => toast("Event scheduled", { description: "Tuesday at 3:00 PM" })}>
            Show toast
          </Button>
          <Button
            variant="secondary"
            onClick={() => toast.success("Profile updated", { description: "Your changes have been saved." })}
          >
            <CircleCheckIcon /> Success
          </Button>
          <Button
            variant="destructive"
            onClick={() => toast.error("Upload failed", { description: "The file is too large." })}
          >
            Error
          </Button>
        </div>
        <Toaster />
      </Demo>
    </>
  );
}
