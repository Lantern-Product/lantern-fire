import { Button } from "@lantern-product/ui";
import { MailIcon, PhoneIcon } from "lucide-react";
import {
  DrawerCloseButton,
  DrawerStage,
  FauxAvatar,
  FauxCover,
  profileFields,
} from "../shared";

export function DrawerWideUserProfile() {
  return (
    <DrawerStage width="wide" close="none">
      <div className="flex-1 overflow-y-auto">
        <div className="relative">
          <FauxCover className="h-40 w-full" />
          <div className="absolute right-3 top-3">
            <DrawerCloseButton tone="contrast" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col px-4 pb-6 sm:flex-row sm:gap-8 sm:px-6">
          <div className="sm:w-64 sm:shrink-0">
            <div className="-mt-14 flex flex-col items-start">
              <div className="rounded-full bg-card">
                <FauxAvatar
                  initials="AP"
                  className="size-28 text-3xl ring-4 ring-card"
                />
              </div>
              <div className="mt-4">
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  Ashley Porter
                </h2>
                <p className="text-sm text-muted-foreground">@ashleyporter</p>
              </div>
              <div className="mt-5 flex w-full gap-3">
                <Button className="flex-1">
                  <MailIcon /> Message
                </Button>
                <Button variant="secondary" size="icon" aria-label="Call">
                  <PhoneIcon />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex-1 sm:mt-6">
            <dl className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              {profileFields.map((field) => (
                <div key={field.label}>
                  <dt className="text-sm font-medium text-muted-foreground">
                    {field.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{field.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </DrawerStage>
  );
}
