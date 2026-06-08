import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from "@lantern-product/ui";
import { PlusIcon } from "lucide-react";
import { DrawerCloseButton, FauxAvatar } from "../shared";
import { DrawerStage } from "../shared";

const team = [
  { initials: "TC", tone: "primary" as const },
  { initials: "LW", tone: "secondary" as const },
  { initials: "RC", tone: "muted" as const },
];

export function DrawerCreateProject() {
  return (
    <DrawerStage close="none">
      <div className="bg-primary px-4 py-6 text-primary-foreground sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-heading text-base font-semibold">New project</h2>
          <DrawerCloseButton tone="branded" />
        </div>
        <p className="mt-1 text-sm text-primary-foreground/80">
          Get started by filling in the information below to create your new project.
        </p>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="space-y-2">
          <Label htmlFor="project-name">Project name</Label>
          <Input id="project-name" defaultValue="Lantern launch" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="project-description">Description</Label>
          <Textarea
            id="project-description"
            rows={4}
            defaultValue="A short summary of what this project is about."
          />
        </div>

        <div className="space-y-2">
          <Label>Team members</Label>
          <div className="flex items-center gap-2">
            {team.map((member) => (
              <FauxAvatar
                key={member.initials}
                initials={member.initials}
                tone={member.tone}
                className="size-8 text-xs ring-2 ring-card"
              />
            ))}
            <button
              type="button"
              aria-label="Add team member"
              className="inline-flex size-8 items-center justify-center rounded-full border-2 border-dashed border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <PlusIcon className="size-4" />
            </button>
          </div>
        </div>

        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-foreground">Privacy</legend>
          <RadioGroup defaultValue="public" className="gap-3">
            <div className="flex items-start gap-3">
              <RadioGroupItem value="public" id="privacy-public" className="mt-0.5" />
              <div className="grid gap-0.5">
                <Label htmlFor="privacy-public">Public access</Label>
                <p className="text-sm text-muted-foreground">
                  Everyone with the link can see this project.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RadioGroupItem value="private" id="privacy-private" className="mt-0.5" />
              <div className="grid gap-0.5">
                <Label htmlFor="privacy-private">Private to project members</Label>
                <p className="text-sm text-muted-foreground">
                  Only members can access this project.
                </p>
              </div>
            </div>
          </RadioGroup>
        </fieldset>
      </div>

      <div className="flex shrink-0 justify-end gap-3 border-t border-border px-4 py-4 sm:px-6">
        <Button variant="secondary">Cancel</Button>
        <Button>Create</Button>
      </div>
    </DrawerStage>
  );
}
