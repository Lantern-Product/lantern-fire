import { Avatar, AvatarFallback, Button } from "@lantern-product/ui";
import { MailIcon, PhoneIcon } from "lucide-react";
import { CardStage } from "../shared";

export function AvatarLargeWithActions() {
  return (
    <CardStage>
      <div className="flex flex-col items-center gap-4">
        <Avatar className="size-20">
          <AvatarFallback className="text-xl">RC</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <p className="font-heading text-lg font-semibold">Ricardo Cooper</p>
          <p className="text-sm text-muted-foreground">
            Senior Back End Developer
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">
            <MailIcon /> Message
          </Button>
          <Button>
            <PhoneIcon /> Call
          </Button>
        </div>
      </div>
    </CardStage>
  );
}
