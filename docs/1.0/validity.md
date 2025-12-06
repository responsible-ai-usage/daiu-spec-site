---
id: validity
title: Valid and invalid combinations
---

DAIU 1.0 allows only some origin and level pairs.

| Origin | None | Assist | Remix | Major | Full |
| ------ | ---- | ------ | ----- | ----- | ---- |
| **HM** (Human Made) | ✓ | ✓ | ✓ | ✕ | ✕ |
| **AG** (AI Generated) | ✕ | ✕ | ✓ | ✓ | ✓ |

1. **HM + Major** and **HM + Full** are invalid because AI would be the primary creator at that level.  
2. **AG + None** and **AG + Assist** are invalid because an AI origin implies non trivial AI involvement.

Validation tools should treat invalid pairs as errors and prompt users to choose a valid combination.
