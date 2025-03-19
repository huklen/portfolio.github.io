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
  url: 'https://johnahl.se/',
  baseUrl: '/',
  organizationName: 'huklen', // Usually your GitHub org/user name.
  projectName: 'portfolio.github.io', // Usually your repo name.
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
      //image: 'img/hulken.png',
      navbar: {
        title: '',
        /** 
        logo: {
          alt: '',
          src: 'img/hulken.png',
        },
        */
        items: [ 
          {
            type: 'html',
            value: '<i class="fa fa-home fa-lg" aria-hidden="true"></i>'
          },
          /*
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          */
          //{to: '/blog', label: 'Changelogs', position: 'left'},
          {
            type: 'doc',
            docId: 'index',
            label: 'ABOUT ME',
          },
          {
            type: 'dropdown',
            label: 'GAME PROJECTS',
            items: 
            [
            {
              type: 'doc',
              label: 'STRIDEN',
              docId: 'games/striden',
            },
            {
              type: 'doc',
              label: 'Just Us',
              docId: 'games/just-us',
            },
            {
              type: 'doc',
              label: 'TRIGGERED',
              docId: 'games/triggered',
            },
            {
              type: 'doc',
              label: 'Shattle',
              docId: 'games/shattle',
            },
          ]
          },
          {
            type: 'doc',
            docId: 'other-projects',
            label: 'OTHER PROJECTS',
          },
          {
            type: 'doc',
            docId: 'resume',
            label: 'RESUME',
          },
          {
            type: 'doc',
            docId: 'contact',
            label: 'CONTACT',
          },
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
