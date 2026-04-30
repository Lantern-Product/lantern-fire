"use client";

import { useState } from "react";
import { Button } from "@lantern-product/ui";
import { cn } from "@lantern-product/ui/utils";
import { CodeIcon, EyeIcon } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

type DemoProps = {
  title: string;
  description?: string;
  code?: string;
  className?: string;
  children: React.ReactNode;
};

export function Demo({ title, description, code, className, children }: DemoProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="mb-10">
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <h3 className="font-heading text-base font-semibold">{title}</h3>
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {code ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCode((v) => !v)}
            aria-label={showCode ? "Show preview" : "Show code"}
          >
            {showCode ? (
              <>
                <EyeIcon /> Preview
              </>
            ) : (
              <>
                <CodeIcon /> Code
              </>
            )}
          </Button>
        ) : null}
      </div>
      {showCode && code ? (
        <CodeBlock language="tsx">{code}</CodeBlock>
      ) : (
        <div
          className={cn(
            "flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-6 ring-1 ring-foreground/5",
            className
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}
