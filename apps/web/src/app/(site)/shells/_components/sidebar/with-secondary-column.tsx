import { CondensedRail } from "./_condensed-rail";
import { ContentPlaceholder } from "../shared";

const inboxItems = [
  { name: "Lindsay Walton", subject: "Quote needed for Acme rollout", time: "2h" },
  { name: "Tom Cook", subject: "Re: Onboarding kickoff next week", time: "4h" },
  { name: "Whitney Francis", subject: "Q3 marketing plan draft", time: "Mon" },
  { name: "Leonard Krasner", subject: "Need approval on contract", time: "Mon" },
  { name: "Floyd Miles", subject: "Welcome to Lantern Fire", time: "Sun" },
  { name: "Emily Selman", subject: "Design tokens RFC", time: "Sun" },
  { name: "Kristin Watson", subject: "API key request", time: "Sat" },
];

export function SidebarWithSecondaryColumn() {
  return (
    <div className="flex min-h-full bg-muted/30">
      <CondensedRail />
      <aside className="hidden w-80 shrink-0 flex-col border-r border-border bg-background lg:flex">
        <div className="border-b border-border px-6 py-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Inbox
          </p>
          <h2 className="mt-1 font-heading text-lg font-semibold tracking-tight">
            All conversations
          </h2>
        </div>
        <ul className="flex-1 divide-y divide-border overflow-y-auto">
          {inboxItems.map((item, idx) => (
            <li
              key={item.name}
              className={
                "flex cursor-pointer items-start gap-3 px-6 py-4 transition-colors hover:bg-muted/40 " +
                (idx === 0 ? "bg-muted/30" : "")
              }
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                {item.name
                  .split(" ")
                  .map((s) => s[0])
                  .join("")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {item.subject}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 px-6 py-10 lg:px-10">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Lindsay Walton
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Quote needed for Acme rollout
        </p>
        <div className="mt-8">
          <ContentPlaceholder rows={4} />
        </div>
      </main>
    </div>
  );
}
