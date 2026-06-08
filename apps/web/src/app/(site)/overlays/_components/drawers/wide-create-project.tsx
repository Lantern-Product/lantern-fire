import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from "@lantern-product/ui";
import { PlusIcon } from "lucide-react";
import { DrawerCloseButton, DrawerStage, FauxAvatar } from "../shared";

const team = [
  { initials: "TC", tone: "primary" as const },
  { initials: "LW", tone: "secondary" as const },
  { initials: "RC", tone: "muted" as const },
];

function Row({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-3 border-b border-border px-4 py-5 sm:grid-cols-3 sm:gap-4 sm:px-6">
      <div className="sm:pt-1.5">{label}</div>
      <div className="sm:col-span-2">{children}</div>
    </div>
  );
}

export function DrawerWideCreateProject() {
  return (
    <DrawerStage width="wide" close="none">
      <div className="bg-primary px-4 py-6 text-primary-foreground sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-heading text-base font-semibold">New project</h2>
          <DrawerCloseButton tone="branded" />
        </div>
        <p className="mt-1 text-sm text-primary-foreground/80">
          Use a wide, two-column layout when a form needs more breathing room.
        </p>
      </div>

      <div className="flex-1 divide-y divide-border overflow-y-auto">
        <Row label={<Label htmlFor="wide-project-name">Project name</Label>}>
          <Input id="wide-project-name" defaultValue="Lantern launch" />
        </Row>

        <Row label={<Label htmlFor="wide-project-description">Description</Label>}>
          <Textarea
            id="wide-project-description"
            rows={3}
            defaultValue="A short summary of what this project is about."
          />
        </Row>

        <Row label={<Label>Team members</Label>}>
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
        </Row>

        <Row label={<span className="text-sm font-medium text-foreground">Privacy</span>}>
          <RadioGroup defaultValue="public" className="gap-3">
            <div className="flex items-start gap-3">
              <RadioGroupItem value="public" id="wide-privacy-public" className="mt-0.5" />
              <div className="grid gap-0.5">
                <Label htmlFor="wide-privacy-public">Public access</Label>
                <p className="text-sm text-muted-foreground">
                  Everyone with the link can see this project.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RadioGroupItem value="private" id="wide-privacy-private" className="mt-0.5" />
              <div className="grid gap-0.5">
                <Label htmlFor="wide-privacy-private">Private to project members</Label>
                <p className="text-sm text-muted-foreground">
                  Only members can access this project.
                </p>
              </div>
            </div>
          </RadioGroup>
        </Row>
      </div>

      <div className="flex shrink-0 justify-end gap-3 border-t border-border px-4 py-4 sm:px-6">
        <Button variant="secondary">Cancel</Button>
        <Button>Create</Button>
      </div>
    </DrawerStage>
  );
}
