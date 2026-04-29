"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@lantern-product/ui";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (isDark ? <SunIcon /> : <MoonIcon />) : <span className="size-3.5" />}
    </Button>
  );
}
