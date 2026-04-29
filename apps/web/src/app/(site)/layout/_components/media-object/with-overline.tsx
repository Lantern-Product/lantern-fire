import { FauxImage, PageStage } from "../shared";

export function MediaObjectWithOverline() {
  const items = [
    {
      overline: "Engineering",
      title: "Building durable workflows",
      desc: "A practical introduction to crash-safe orchestration.",
    },
    {
      overline: "Design",
      title: "Designing accessible color systems",
      desc: "How we built tokens that work in light and dark mode.",
    },
    {
      overline: "Product",
      title: "Faster onboarding for teams",
      desc: "Recent improvements to invitation flows and roles.",
    },
  ];
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-2xl">
        <ul className="space-y-5">
          {items.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <FauxImage className="size-20 shrink-0 rounded-lg" ratio="" />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.overline}
                </p>
                <h3 className="mt-1 font-heading text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageStage>
  );
}
