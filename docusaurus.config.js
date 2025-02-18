// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
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
  favicon: 'img/site/logo_blue.svg',

  // GitHub pages deployment config.
  organizationName: 'whitestonedev',
  projectName: 'landing-page',

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
          routeBasePath: '/eventos', // Mudança aqui
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/whitestonedev/landing-page',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/whitestonedev/landing-page',
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
      colorMode: {
        defaultMode: 'dark', 
        disableSwitch: false, 
        respectPrefersColorScheme: false, 
      },
      navbar: {
        title: 'whiteStone_dev',
        logo: {
          alt: 'Open source community',
          src: 'img/site/logo_blue.svg',
        },
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: "eventos/intro",
            activeBasePath: "eventos",
            label: "Eventos",
            position: "left",
          },
          {
            to: 'https://github.com/whitestonedev/landing-page',
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
                to: 'https://github.com/whitestonedev/landing-page',
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

    plugins: [
      [
        'docusaurus-plugin-includes',
        {
          sharedFolders: [
            // Configuração para copiar pastas compartilhadas (opcional)
          ],
          postBuildDeletedFolders: [
            // Configuração para deletar pastas após o build (opcional)
          ],
          replacements: [
            // Configuração para substituir placeholders (opcional)
          ],
          embeds: [
            // Configuração para embeds estilo remarkable-embed (opcional)
          ],
          injectedHtmlTags: {
            // Configuração para injetar HTML tags (opcional)
            headTags: [],
            preBodyTags: [],
            postBodyTags: [],
          },
        },
      ],
    ],
};

module.exports = config;