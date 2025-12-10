---
id: markup
title: Markup and data formats
---

DAIU can be represented in both human-facing text and machine-readable data.

## Plain text tag

The recommended format is:

```text
Origin: HM · Assist — DAIU 1.0
```

This can appear in captions, bylines, assignment cover pages and credits.

## Rich text with icons

For platforms that support HTML or styled content, DAIU tags may be displayed with a
small badge icon next to the tag text, similar to how Creative Commons licenses are
shown.

**Preview (HM · Assist — DAIU 1.0)**

<div className="daiu-badge-preview">
  <a href="https://daiu.org/1.0/hm-assist" className="daiu-badge-link">
    <img
      src="/daiu-spec-site/img/badges/daiu-hm-assist.svg"
      alt="DAIU badge — HM · Assist"
      className="daiu-badge-icon"
    />
    <span>Origin: HM · Assist — DAIU 1.0</span>
  </a>
</div>

**Copy-paste HTML**

```html
<a href="https://daiu.org/1.0/hm-assist" style="text-decoration:none; color:inherit;">
  <img
    src="https://responsible-ai-usage.github.io/daiu-spec-site/img/badges/daiu-hm-assist.svg"
    alt="DAIU badge — HM · Assist"
    style="height:32px; vertical-align:middle; margin-right:0.5rem;"
  />
  <span>Origin: HM · Assist — DAIU 1.0</span>
</a>
```

Implementers may host the SVG locally or via their own CDN as long as the icon and
tag text remain unchanged.

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

Implementations may adapt these structures as needed for their systems. The key
requirement is to preserve the origin, level and version values.
