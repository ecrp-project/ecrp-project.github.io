// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'European Civic Resilience Programme (ECRP)',
  tagline: 'Civic resilience through structured deliberation and experiential learning',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://europeancivicresilience.eu',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ecrp-project',
  projectName: 'ecrp-project.github.io',

  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    //locales: ['en', 'fr', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      //fr: {
      //  label: 'Français',
      //},
      //zh: {
      //  label: '中文',
      //  path: 'zh',
      //},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ecrp-social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ECRP',
          logo: {
            alt: 'European Civic Resilience Programme',
            src: 'img/ecrp-logo.svg',
            height: '40px',
          },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Governance',
            to: '/docs/governance/overview',
          },
          {
            href: 'https://github.com/ecrp-project/ecrp-project.github.io',
            label: 'GitHub',
            position: 'right',
          },
          //{
          //  type: 'dropdown',
          //  label: 'Language',
          //  position: 'right',
          //  items: [
          //    { label: 'English', to: '/' },
          //    { label: 'Français', to: '/fr/' },
          //    { label: '中文', to: '/zh/' },
          //  ],
          //},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} European Civic Resilience Programme (ECRP).`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
