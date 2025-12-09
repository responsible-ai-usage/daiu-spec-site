// docusaurus.config.js

/** @type {import('@docusaurus/types').Config} */

// Safe Prism theme imports
const prismReactRenderer = require('prism-react-renderer');
const lightCodeTheme = prismReactRenderer.themes.github;
const darkCodeTheme = prismReactRenderer.themes.dracula;

const config = {
  title: 'DAIU Specification',
  tagline: 'Be Transparent About AI Use',

  // For now we’re hosting on GitHub Pages at:
  // https://responsible-ai-usage.github.io/daiu-spec-site/
  url: 'https://responsible-ai-usage.github.io',
  baseUrl: '/daiu-spec-site/',

  favicon: 'favicon.ico',
  organizationName: 'responsible-ai-usage',      // GitHub org/user
  projectName: 'daiu-spec-site',                // Repo name

  // Don’t fail the build on broken links – just warn
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
          routeBasePath: '/',  // /daiu-spec-site/ is docs root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/responsible-ai-usage/daiu-spec-site/edit/main/'
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
      title: 'Specification',
      logo: {
        alt: 'DAIU logo',
        // Place your logo at static/img/daiu-logo.png
        src: 'img/daiu-logo.png'
      },
      items: [
        {
          type: 'doc',
          docId: '1.0/overview',
          position: 'left',
          label: 'V 1.0 (draft)'
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
      disableSwitch: true,          // no dark-mode toggle
      respectPrefersColorScheme: false
    },

    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} Disclose AI Usage - <a href="https://responsibleaiusage.org" target="_blank" rel="noopener noreferrer">Responsible AI Usage Foundation, Inc.</a>`
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  }
};

module.exports = config;
