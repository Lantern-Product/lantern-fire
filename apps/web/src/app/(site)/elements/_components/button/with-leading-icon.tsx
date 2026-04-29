import { Button } from "@lantern-product/ui";
import { DownloadIcon, PlusIcon, SendIcon, UploadIcon } from "lucide-react";
import { ShowcaseFrame } from "../shared";

export function ButtonWithLeadingIcon() {
  return (
    <ShowcaseFrame>
      <Button>
        <PlusIcon /> New project
      </Button>
      <Button variant="outline">
        <UploadIcon /> Upload
      </Button>
      <Button variant="secondary">
        <DownloadIcon /> Export
      </Button>
      <Button variant="ghost">
        <SendIcon /> Send
      </Button>
    </ShowcaseFrame>
  );
}
