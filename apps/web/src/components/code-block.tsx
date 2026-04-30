import { highlight } from "sugar-high";
import { cn } from "@lantern-product/ui/utils";

export function CodeBlock({
  children,
  className,
  language,
}: {
  children: string;
  className?: string;
  language?: string;
}) {
  const html = highlight(children);

  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-xl border border-border bg-muted/40 p-4 text-xs leading-relaxed",
        className
      )}
      data-language={language}
    >
      <code
        className="font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </pre>
  );
}
