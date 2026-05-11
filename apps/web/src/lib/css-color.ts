/**
 * Resolve a CSS color expression (any value the browser accepts as `color`,
 * including `var(--token)`, `oklch(...)`, hex, rgb, etc.) to a 0..1 sRGB
 * triplet by letting the browser do the heavy lifting via getComputedStyle.
 *
 * Returns null if called outside a browser, on a server-rendered pass, or if
 * the expression cannot be parsed into a usable rgb() string.
 */
export function resolveCssColor(value: string): [number, number, number] | null {
  if (typeof window === "undefined" || typeof document === "undefined") return null;

  const probe = document.createElement("span");
  probe.style.color = value;
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  probe.setAttribute("aria-hidden", "true");
  document.body.appendChild(probe);

  let parsed: [number, number, number] | null = null;
  try {
    const computed = getComputedStyle(probe).color;
    parsed = parseRgbString(computed);
  } finally {
    probe.remove();
  }

  return parsed;
}

/**
 * Convenience wrapper that reads a CSS custom property by name (e.g. `--primary`)
 * and returns its resolved sRGB triplet in 0..1 range.
 */
export function resolveCssVar(varName: string): [number, number, number] | null {
  const name = varName.startsWith("--") ? varName : `--${varName}`;
  return resolveCssColor(`var(${name})`);
}

/**
 * Linear interpolation in sRGB. Not perceptually uniform, but adequate for
 * mixing brand tokens at the shader level where a touch of imprecision is
 * lost in the noise blend.
 */
export function mixRgb(
  a: readonly [number, number, number],
  b: readonly [number, number, number],
  t: number,
): [number, number, number] {
  const k = Math.min(Math.max(t, 0), 1);
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
}

/** Darken an sRGB triplet by mixing it toward black. */
export function darken(rgb: readonly [number, number, number], amount: number): [number, number, number] {
  return mixRgb(rgb, [0, 0, 0], amount);
}

/** Lighten an sRGB triplet by mixing it toward white. */
export function lighten(rgb: readonly [number, number, number], amount: number): [number, number, number] {
  return mixRgb(rgb, [1, 1, 1], amount);
}

function parseRgbString(value: string): [number, number, number] | null {
  // getComputedStyle().color returns either `rgb(r, g, b)` or `rgba(r, g, b, a)`
  // with integer 0..255 components in every modern browser, regardless of the
  // input color space. Some engines also return the modern space-separated
  // syntax `rgb(r g b)` — handle both.
  const match = value.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i);
  if (!match) return null;
  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);
  if (![r, g, b].every(Number.isFinite)) return null;
  return [r / 255, g / 255, b / 255];
}
