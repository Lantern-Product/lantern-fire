"use client";

import { useState } from "react";
import {
  Input,
  Textarea,
  Label,
  Checkbox,
  Switch,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
  Slider,
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  Calendar,
} from "@lantern-fire/ui";
import { Demo } from "@/components/demo";
import { PageHeader } from "@/components/page-header";

export default function FormsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <PageHeader
        eyebrow="Components"
        title="Forms"
        description="Form controls built on Radix primitives. Compose with the Form component for react-hook-form integration."
      />

      <Demo
        title="Text inputs"
        code={`<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />`}
      >
        <div className="flex w-full max-w-sm flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us what you think…" rows={4} />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" placeholder="Not editable" disabled />
          </div>
        </div>
      </Demo>

      <Demo
        title="Checkbox and switch"
        code={`<Checkbox id="terms" />
<Switch id="notify" />`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="updates" defaultChecked />
            <Label htmlFor="updates">Send me product updates</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="notify" />
            <Label htmlFor="notify">Push notifications</Label>
          </div>
        </div>
      </Demo>

      <Demo
        title="Radio group"
        code={`<RadioGroup defaultValue="standard">
  <RadioGroupItem value="standard" id="r1" />
  <RadioGroupItem value="priority" id="r2" />
</RadioGroup>`}
      >
        <RadioGroup defaultValue="standard" className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="standard" id="r1" />
            <Label htmlFor="r1">Standard shipping (3–5 days)</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="priority" id="r2" />
            <Label htmlFor="r2">Priority shipping (1–2 days)</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="overnight" id="r3" />
            <Label htmlFor="r3">Overnight</Label>
          </div>
        </RadioGroup>
      </Demo>

      <Demo
        title="Select"
        code={`<Select>
  <SelectTrigger><SelectValue placeholder="Pick a role" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="admin">Admin</SelectItem>
    <SelectItem value="editor">Editor</SelectItem>
  </SelectContent>
</Select>`}
      >
        <div className="w-full max-w-xs">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Pick a role…" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Demo>

      <Demo
        title="Slider"
        description="Range input for numeric values."
        code={`<Slider defaultValue={[40]} max={100} step={1} />`}
      >
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Slider defaultValue={[40]} max={100} step={1} />
          <Slider defaultValue={[20, 80]} max={100} step={1} />
        </div>
      </Demo>

      <Demo
        title="Native select"
        description="Lightweight HTML select with consistent styling. Good for forms with simple option lists."
        code={`<NativeSelect>
  <NativeSelectOption>Apple</NativeSelectOption>
  <NativeSelectOption>Banana</NativeSelectOption>
</NativeSelect>`}
      >
        <div className="flex flex-col gap-3">
          <NativeSelect defaultValue="apple">
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
          </NativeSelect>
          <NativeSelect defaultValue="us">
            <NativeSelectOptGroup label="Americas">
              <NativeSelectOption value="us">United States</NativeSelectOption>
              <NativeSelectOption value="ca">Canada</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Europe">
              <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
              <NativeSelectOption value="de">Germany</NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
        </div>
      </Demo>

      <Demo
        title="Field"
        description="Composable wrapper that ties Label, Description, and Error together with consistent spacing."
        code={`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="username">Username</FieldLabel>
    <Input id="username" placeholder="ada" />
    <FieldDescription>This will be your public handle.</FieldDescription>
  </Field>
</FieldGroup>`}
      >
        <FieldSet className="w-full max-w-md">
          <FieldLegend>Profile</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="field-username">Username</FieldLabel>
              <Input id="field-username" placeholder="ada" />
              <FieldDescription>This will be your public handle.</FieldDescription>
            </Field>
            <Field data-invalid="true">
              <FieldLabel htmlFor="field-email">Email</FieldLabel>
              <Input
                id="field-email"
                type="email"
                aria-invalid="true"
                defaultValue="not-an-email"
              />
              <FieldError>Please enter a valid email address.</FieldError>
            </Field>
          </FieldGroup>
        </FieldSet>
      </Demo>

      <Demo
        title="Calendar"
        description="Inline date picker built on react-day-picker."
        code={`<Calendar mode="single" selected={date} onSelect={setDate} />`}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border border-border"
        />
      </Demo>

      <Demo title="Realistic form layout">
        <form className="flex w-full max-w-md flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="first">First name</Label>
              <Input id="first" placeholder="Ada" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="last">Last name</Label>
              <Input id="last" placeholder="Lovelace" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="signup-email">Email</Label>
            <Input id="signup-email" type="email" placeholder="ada@lantern.so" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="signup-terms" />
            <Label htmlFor="signup-terms">I agree to the terms</Label>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost">
              Cancel
            </Button>
            <Button type="submit">Create account</Button>
          </div>
        </form>
      </Demo>
    </>
  );
}
