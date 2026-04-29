import { listItems, PageStage } from "../shared";

export function ListContainerSimple() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md">
        <ul className="space-y-2">
          {listItems.map((item) => (
            <li
              key={item.name}
              className="rounded-lg bg-background px-4 py-3 ring-1 ring-foreground/10"
            >
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageStage>
  );
}
