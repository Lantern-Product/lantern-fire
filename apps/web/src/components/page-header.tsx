export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-8 border-b border-border pb-6">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-heading text-3xl font-semibold tracking-tight">{title}</h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </header>
  );
}
