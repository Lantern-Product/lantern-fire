import { cn } from "@lantern-fire/ui/utils";

export function CodeBlock({
  children,
  className,
  language,
}: {
  children: string;
  className?: string;
  language?: string;
}) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-xl border border-border bg-muted/40 p-4 text-xs leading-relaxed",
        className
      )}
      data-language={language}
    >
      <code className="font-mono">{children}</code>
    </pre>
  );
}
