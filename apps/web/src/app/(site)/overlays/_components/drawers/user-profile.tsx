import { Button } from "@lantern-product/ui";
import { MailIcon, PhoneIcon } from "lucide-react";
import {
  DrawerCloseButton,
  DrawerStage,
  FauxAvatar,
  FauxCover,
  profileFields,
} from "../shared";

export function DrawerUserProfile() {
  return (
    <DrawerStage close="none">
      <div className="flex-1 overflow-y-auto">
        <div className="relative">
          <FauxCover className="h-32 w-full" />
          <div className="absolute right-3 top-3">
            <DrawerCloseButton tone="contrast" />
          </div>
        </div>

        <div className="relative z-10 px-4 pb-6 sm:px-6">
          <div className="-mt-12 flex items-end gap-4">
            <div className="rounded-full bg-card">
              <FauxAvatar
                initials="AP"
                className="size-24 text-2xl ring-4 ring-card"
              />
            </div>
          </div>
          <div className="mt-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Ashley Porter
            </h2>
            <p className="text-sm text-muted-foreground">@ashleyporter</p>
          </div>

          <div className="mt-5 flex gap-3">
            <Button className="flex-1">
              <MailIcon /> Message
            </Button>
            <Button variant="secondary" className="flex-1">
              <PhoneIcon /> Call
            </Button>
          </div>

          <dl className="mt-6 divide-y divide-border">
            {profileFields.map((field) => (
              <div key={field.label} className="py-4">
                <dt className="text-sm font-medium text-muted-foreground">
                  {field.label}
                </dt>
                <dd className="mt-1 text-sm text-foreground">{field.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </DrawerStage>
  );
}
