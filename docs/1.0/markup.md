---
id: markup
title: Markup and data formats
---

DAIU can be represented in both human facing text and machine readable data.

## Human facing tag

The recommended format is:

```text
Origin: HM · Assist — DAIU 1.0
```

This can appear in captions, bylines, assignment cover pages and credits.

## HTML meta tags

For web content, DAIU values can be expressed as meta tags:

```html
<meta name="daiu:origin"  content="HM">
<meta name="daiu:level"   content="assist">
<meta name="daiu:version" content="DAIU 1.0">
<meta name="daiu:note"    content="Color grading and noise reduction with AI tools">
```

## JSON representation (advisory)

```json
{
  "daiu": {
    "origin": "HM",
    "level": "assist",
    "version": "DAIU 1.0",
    "note": "Color grading and noise reduction with AI tools"
  }
}
```

Implementations may adapt these structures as needed for their systems. The key requirement is to preserve the origin, level and version values.
