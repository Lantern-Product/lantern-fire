import { readFileSync } from "node:fs";
import { join } from "node:path";

import type { OverlayCategory } from "../_registry";

const COMPONENTS_DIR = join(
  process.cwd(),
  "src",
  "app",
  "(site)",
  "overlays",
  "_components"
);

export function readOverlaySource(
  category: OverlayCategory,
  slug: string
): string {
  try {
    const filePath = join(COMPONENTS_DIR, category, `${slug}.tsx`);
    return readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}
