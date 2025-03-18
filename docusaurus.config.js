// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Portfolio',
  tagline: 'Portfolio',
  favicon: 'img/favicon.ico',
  url: 'https://huklen.github.io/',
  baseUrl: '/',
  organizationName: 'huklen', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  deploymentBranch: 'deployment',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  /*
 i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },*/

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Portfolio',
        logo: {
          alt: 'My Portfolio',
          src: 'img/logo.svg',
        },
        items: [
          { href: 'https://eeldev.com', label: 'eeldev.com' },
          { href: 'https://www.unrealengine.com/marketplace/slug/459e1c72939b4ead8b5132187808a3e7', label: 'Unreal Marketplace' },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/3Yu7pEy',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dryeeldev',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC6Rhr_F5BxwfTtcADVPUNYA',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'eelDev (my company)',
                href: 'https://eeldev.com/',
              },
              {
                label: 'Unreal Engine Marketplace (my',
                href: 'https://www.unrealengine.com/marketplace/slug/459e1c72939b4ead8b5132187808a3e7',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} John Åhl`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
