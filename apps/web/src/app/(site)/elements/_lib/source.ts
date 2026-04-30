import { readFileSync } from "node:fs";
import { join } from "node:path";

import type { ElementCategory } from "../_registry";

const COMPONENTS_DIR = join(
  process.cwd(),
  "src",
  "app",
  "(site)",
  "elements",
  "_components"
);

export function readElementSource(
  category: ElementCategory,
  slug: string
): string {
  try {
    const filePath = join(COMPONENTS_DIR, category, `${slug}.tsx`);
    return readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}
