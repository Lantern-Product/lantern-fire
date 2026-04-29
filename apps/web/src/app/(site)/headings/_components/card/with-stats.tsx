import { stats } from "../shared";

export function CardWithStats() {
  return (
    <div className="bg-muted/30 p-6 lg:p-10">
      <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card shadow-sm">
        <div className="border-b border-border px-6 py-5">
          <h3 className="font-heading text-base font-semibold">Last 30 days</h3>
          <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.name}>
                <dt className="text-xs text-muted-foreground">{s.name}</dt>
                <dd className="mt-1 flex items-baseline gap-1">
                  <span className="font-heading text-xl font-semibold">
                    {s.value}
                  </span>
                  {s.unit ? (
                    <span className="text-xs text-muted-foreground">
                      {s.unit}
                    </span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="space-y-3 p-6">
          <div className="h-3 w-3/4 rounded bg-muted" />
          <div className="h-3 w-2/3 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
