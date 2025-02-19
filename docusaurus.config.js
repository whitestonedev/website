// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')
const lightTheme = themes.github
const darkTheme = themes.dracula

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

  i18n: {
    defaultLocale: 'pt-Br',
    locales: ['pt-Br'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/eventos',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/whitestonedev/landing-page/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args)
            function traverse(items) {
              return items.map((item) => {
                if (item.type === 'category') {
                  if (item.label === 'Agenda' && Array.isArray(item.items)) {
                    // Just sorting the 'Agenda' category, by date reverse.
                    item.items = item.items.reverse()
                  }
                  if (item.items) {
                    item.items = traverse(item.items)
                  }
                }
                return item
              })
            }
            return traverse(sidebarItems)
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/whitestonedev/landing-page/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/index.css'),
        },
      },
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
          alt: 'Comunidade whiteStone_dev',
          src: 'img/site/logo_blue.svg',
        },
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            to: 'eventos/home',
            activeBasePath: 'eventos',
            label: 'Eventos',
            position: 'left',
          },
          {
            to: 'https://github.com/whitestonedev/landing-page',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'new-major-announcement',
        content:
          "Estamos agora no <a href='https://instagram.com/whitestonedev' target='_blank'>Instagram</a> e no <a href='https://www.youtube.com/channel/UCopd9koQ5-9ZXEkJ0w-GWQQ' target='_blank'>YouTube</a> com conteúdo incrível.",
        backgroundColor: '#1786fb',
        textColor: '#fff',
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
          headTags: [],
          preBodyTags: [],
          postBodyTags: [],
        },
      },
    ],
  ],
}

module.exports = config
