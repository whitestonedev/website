// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from 'prism-react-renderer';
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'whiteStone_dev',
  tagline: 'Open source software community.',
  url: 'https://whitestonedev.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'whitestonedev',
  projectName: 'website',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-Br',
    locales: ['pt-Br'],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/whitestonedev/website',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/whitestonedev/website',
        },
        theme: {
          customCss: require.resolve("./src/css/index.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'whiteStone_dev',
        logo: {
          alt: 'Open source community',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: "docs/intro",
            activeBasePath: "docs",
            label: "Documentation",
            position: "left",
          },
          {
            to: "docs/intro",
            activeBasePath: "tutorials",
            label: "Tutorial",
            position: "left",
          },
          {
            to: 'https://github.com/whitestonedev/website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: "new-major-announcement",
        content:
          "We are now on <a href='https://instagram.com/whitestonedev' target='_blank'>Instagram</a> and <a href='#' target='_blank'>YouTube</a> with amazing content.",
        backgroundColor: "#1786fb",
        textColor: "#fff",
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/whitestonedev/shared_invite/zt-18gcudbpg-SeaLx27z4S4jvIZAYmxIAA',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/whitestonedev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/whitestonedev/website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} whiteStone_dev, Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
};

export default config;
