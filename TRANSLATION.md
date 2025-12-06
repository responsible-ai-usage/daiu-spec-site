# Translating the DAIU Specification

We welcome translations of the DAIU specification so that more people can use it in their own language.

## Canonical elements

In DAIU 1.0, the following elements stay in their canonical English form across languages:

- Origin codes: `HM` and `AG`
- Level codes: `None`, `Assist`, `Remix`, `Major`, `Full`
- The label `DAIU 1.0`

These appear in badges, tags and short URLs and should not be translated.

## What can be translated

You may translate:

- page titles and headings
- explanatory paragraphs
- examples and notes
- accessibility and governance guidance

Translations should keep the same section order and structure as the English source where possible.

## Folder structure

When adding a translation for language code `xx` (for example `es` or `fr`), create:

```text
i18n/xx/docusaurus-plugin-content-docs/current/1.0/overview.md
i18n/xx/docusaurus-plugin-content-docs/current/1.0/taxonomy.md
...
```

Each file mirrors the corresponding file in `docs/1.0`.

## Style

- Use clear, neutral language
- Avoid adding value judgements
- Keep any legal or policy statements faithful to the original meaning

If you are unsure about a translation choice, please open an issue to discuss it.
