import { defineConfig } from "tsup";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");

function prependUseClient(file: string) {
  const path = join(distDir, file);
  const contents = readFileSync(path, "utf8");
  if (!contents.startsWith('"use client"')) {
    writeFileSync(path, `"use client";\n${contents}`);
  }
}

export default defineConfig([
  {
    entry: { index: "src/index.ts" },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    splitting: false,
    external: ["react", "react-dom", "react/jsx-runtime"],
    esbuildOptions(options) {
      options.legalComments = "inline";
    },
    async onSuccess() {
      // Prepend "use client" so bundlers (Next.js RSC) treat the bundle as a
      // client module. tsup strips in-file directives during bundling, so we
      // re-add it here. The main bundle contains interactive Radix components
      // that all require a client context.
      prependUseClient("index.js");
      prependUseClient("index.cjs");
    },
  },
  {
    entry: { chart: "src/chart.ts" },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    splitting: false,
    external: ["react", "react-dom", "react/jsx-runtime"],
    esbuildOptions(options) {
      options.legalComments = "inline";
    },
    async onSuccess() {
      prependUseClient("chart.js");
      prependUseClient("chart.cjs");
    },
  },
  {
    // Composed chart recipes (area, bar, line, ...). Each chart family is its
    // own subpath bundle so consumers only pay for the families they import.
    entry: { "charts/area": "src/charts/area.ts" },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    splitting: false,
    external: ["react", "react-dom", "react/jsx-runtime"],
    esbuildOptions(options) {
      options.legalComments = "inline";
    },
    async onSuccess() {
      prependUseClient("charts/area.js");
      prependUseClient("charts/area.cjs");
    },
  },
  {
    entry: { "charts/bar": "src/charts/bar.ts" },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    splitting: false,
    external: ["react", "react-dom", "react/jsx-runtime"],
    esbuildOptions(options) {
      options.legalComments = "inline";
    },
    async onSuccess() {
      prependUseClient("charts/bar.js");
      prependUseClient("charts/bar.cjs");
    },
  },
  {
    entry: { "charts/line": "src/charts/line.ts" },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    splitting: false,
    external: ["react", "react-dom", "react/jsx-runtime"],
    esbuildOptions(options) {
      options.legalComments = "inline";
    },
    async onSuccess() {
      prependUseClient("charts/line.js");
      prependUseClient("charts/line.cjs");
    },
  },
  {
    entry: { "charts/pie": "src/charts/pie.ts" },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    splitting: false,
    external: ["react", "react-dom", "react/jsx-runtime"],
    esbuildOptions(options) {
      options.legalComments = "inline";
    },
    async onSuccess() {
      prependUseClient("charts/pie.js");
      prependUseClient("charts/pie.cjs");
    },
  },
  {
    // Server-safe utilities (cn, etc.). NO "use client" — these are pure
    // functions that must be callable from React Server Components.
    entry: { utils: "src/utils.ts" },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    splitting: false,
    external: ["react", "react-dom", "react/jsx-runtime"],
    esbuildOptions(options) {
      options.legalComments = "inline";
    },
  },
]);
