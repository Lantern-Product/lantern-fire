import type { ReactNode } from "react";

export function ShowcaseFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "flex min-h-full items-center justify-center bg-muted/30 p-12 lg:p-16 " +
        className
      }
    >
      <div className="flex flex-wrap items-center justify-center gap-6">
        {children}
      </div>
    </div>
  );
}

export function ToolbarStage({
  children,
  title = "Action Bar",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="flex min-h-full flex-col bg-muted/30">
      <div className="border-b border-border bg-background px-12 py-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {title}
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center p-16">
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-xl border border-border bg-background px-6 py-4 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ListRowStage({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full items-center justify-center bg-muted/30 p-16">
      <div className="w-full max-w-xl rounded-xl border border-border bg-background shadow-sm">
        <ul className="divide-y divide-border">
          <li className="px-6 py-4">{children}</li>
        </ul>
      </div>
    </div>
  );
}

export function CardStage({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="flex min-h-full items-center justify-center bg-muted/30 p-16">
      <div className="w-full max-w-md rounded-xl border border-border bg-background p-8 shadow-sm">
        {title ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {title}
          </p>
        ) : null}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export const teamMembers = [
  { name: "Ricardo Cooper", initials: "RC", img: "img=12" },
  { name: "Lindsay Walton", initials: "LW", img: "img=23" },
  { name: "Tom Cook", initials: "TC", img: "img=33" },
  { name: "Whitney Francis", initials: "WF", img: "img=45" },
  { name: "Leonard Krasner", initials: "LK", img: "img=51" },
  { name: "Floyd Miles", initials: "FM", img: "img=64" },
];

export const dropdownMenuItems = [
  { label: "Account settings" },
  { label: "Support" },
  { label: "License" },
  { label: "Sign out" },
];
