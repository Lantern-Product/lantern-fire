"use client";

import { useEffect, useState } from "react";

export function ColorSwatch({ cssVar, label }: { cssVar: string; label: string }) {
  const [resolved, setResolved] = useState<string>("");

  useEffect(() => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(cssVar)
      .trim();
    setResolved(value);
  }, [cssVar]);

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 ring-1 ring-foreground/5">
      <div
        className="size-10 shrink-0 rounded-md border border-border"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium truncate">{label}</p>
        <p className="font-mono text-[10px] text-muted-foreground truncate">
          {resolved || cssVar}
        </p>
      </div>
    </div>
  );
}
