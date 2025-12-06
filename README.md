# DAIU Specification Site

This repository contains the DAIU (Declare AI Usage) specification site built with Docusaurus.

The live site is intended to be served at:

- https://daiu.org/spec  (latest)
- https://daiu.org/spec/1.0  (DAIU 1.0)

## What is DAIU?

DAIU is an open, voluntary standard for describing how AI contributed to a specific piece of content. It combines:

- an origin (Human Made or AI Generated)
- an involvement level (None, Assist, Remix, Major, Full)

The standard is maintained by the Responsible AI Usage Foundation, Inc.

## Local development

```bash
npm install
npm run start
```

This will run the site at http://localhost:3000/spec/

## Build

```bash
npm run build
```

The output appears in the `build` folder and can be deployed to GitHub Pages or another static host.

## Contributing

We welcome contributions in the form of:

- clarifications or improvements to the specification
- additional examples
- translations into other languages

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [TRANSLATION.md](./TRANSLATION.md) for details.
