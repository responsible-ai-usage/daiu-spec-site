// docusaurus.config.js

/** @type {import('@docusaurus/types').Config} */

// Safe Prism theme imports
const prismReactRenderer = require('prism-react-renderer');
const lightCodeTheme = prismReactRenderer.themes.github;
const darkCodeTheme = prismReactRenderer.themes.dracula;

const config = {
  title: 'DAIU Specification',
  tagline: 'Be Transparent About AI Use',
  url: 'https://daiu.org',
  baseUrl: '/spec/',
  favicon: 'favicon.ico',
  organizationName: 'responsible-ai-usage-foundation',
  projectName: 'daiu-spec-site',

  // IMPORTANT: avoid build failures on any broken links
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',  // /spec/ = root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/responsible-ai-usage-foundation/daiu-spec-site/edit/main/'
          // ❗ Do NOT add ignoreBrokenMarkdownLinks here — Docusaurus v3 rejects it
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],

  themeConfig: {
    navbar: {
      title: 'DAIU Spec',
      logo: {
        alt: 'DAIU logo',
        src: 'favicon.ico'
      },
      items: [
        {
          type: 'doc',
          docId: '1.0/overview',
          position: 'left',
          label: 'Version 1.0'
        },
        {
          href: 'https://daiu.org',
          label: 'daiu.org',
          position: 'right'
        }
      ]
    },

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false
    },

    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} Responsible AI Usage Foundation, Inc.`
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  }
};

module.exports = config;
