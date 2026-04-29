export function SecondaryList({
  title = "Activity",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  const items = [
    { name: "New issue created", meta: "Workcation · 12m ago" },
    { name: "Pull request merged", meta: "Lantern Fire · 1h ago" },
    { name: "Comment by Lindsay", meta: "Acme · 3h ago" },
    { name: "Build succeeded", meta: "Lantern Fire · 5h ago" },
    { name: "Release shipped v1.4", meta: "Workcation · Yesterday" },
    { name: "New teammate added", meta: "Heroicons · Yesterday" },
  ];
  return (
    <div className={"px-6 py-6 " + className}>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-4">
        {items.map((i) => (
          <li key={i.name} className="flex flex-col gap-0.5">
            <span className="text-sm font-medium text-foreground">
              {i.name}
            </span>
            <span className="text-xs text-muted-foreground">{i.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
