import { listItems, PageStage } from "../shared";

export function ListContainerWithDividers() {
  return (
    <PageStage>
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-background ring-1 ring-foreground/10">
        <ul className="divide-y divide-border">
          {listItems.map((item) => (
            <li key={item.name} className="px-4 py-3">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageStage>
  );
}
