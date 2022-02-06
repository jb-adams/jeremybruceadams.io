// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Jeremy Bruce Adams',
  tagline: 'Senior full-stack software engineer, specializing in genomics and life science',
  url: 'https://jeremybruceadams.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/signature.ico',
  organizationName: 'jb-adams', // Usually your GitHub org/user name.
  projectName: 'jeremybruceadams.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Jeremy',
        logo: {
          alt: 'Jeremy',
          src: 'img/signature.png',
          srcDark: 'img/signature-white.png'
        },
        items: [
          { position: 'left', label: 'Resume', to: "/resume" },
          // { position: 'left', label: 'Projects', to: '/projects' },
          {
            href: 'https://github.com/jb-adams',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jeremy-bruce-adams/',
              },
              {
                label: 'Github',
                href: 'https://github.com/jb-adams',
              },
              {
                label: 'ORCID',
                href: 'https://orcid.org/0000-0003-1215-8123',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} jeremybruceadams.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
