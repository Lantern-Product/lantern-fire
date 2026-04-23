import { defineConfig } from "tsup";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  external: ["react", "react-dom", "react/jsx-runtime"],
  esbuildOptions(options) {
    options.legalComments = "inline";
  },
  async onSuccess() {
    // Prepend "use client" to JS outputs so bundlers (Next.js RSC) treat the
    // whole bundle as a client module. We write this in onSuccess because
    // tsup strips in-file directives during bundling.
    const distDir = join(process.cwd(), "dist");
    for (const file of ["index.js", "index.cjs"]) {
      const path = join(distDir, file);
      const contents = readFileSync(path, "utf8");
      if (!contents.startsWith('"use client"')) {
        writeFileSync(path, `"use client";\n${contents}`);
      }
    }
  },
});
