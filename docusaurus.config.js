/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'VisualCron Help',
  tagline: 'VC RPA Training Guide',
  url: 'https://help.visualcron.com',
  baseUrl: '/training/vc-rpa-training-guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'smatechnologies',
  projectName: 'vc-rpa-training-guide',
  themeConfig: {
    navbar: {
      title: 'Help',
      logo: {
        alt: 'VisualCron Help Logo',
        src: 'img/VisualCronBlue.svg',
        href: 'https://help.visualcron.com',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/smatechnologies/vc-rpa-training-guide/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
//    [
//      require.resolve('@cmfcmf/docusaurus-search-local'), 
//      {
//      }
//    ],
  ],
};
