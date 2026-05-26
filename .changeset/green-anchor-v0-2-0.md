---
"@lantern-product/ui": minor
---

Re-anchor brand on Lantern green and restructure button variants.

**Breaking changes**

- `variant="default"` removed. Use `variant="primary"` (now the named filled-green action).
- `variant="outline"` removed. Use `variant="secondary"` (now the outlined low-emphasis companion).
- `variant="secondary"` semantics changed from filled-gray to outlined. Use `variant="secondary-green"` for the previous filled look.

**Added**

- `variant="secondary-green"` — filled accent using the `--secondary` token.
- `variant="secondary-coral"` — filled accent using the new `--secondary-coral` token.

**Tokens**

- OKLCH scale re-anchored on Lantern green `#005042`.
- Coral demoted from brand primary to an accent role.
