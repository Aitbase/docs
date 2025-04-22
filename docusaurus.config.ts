import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Aitbase Docs',
  tagline: 'Innovating Technology - Elevating Lives',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.aitbase.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aitbase', // Usually your GitHub org/user name.
  projectName: 'aitbase-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'chatbot',
        path: 'docs/chatbot',
        routeBasePath: 'chatbot',
        sidebarPath: './sidebars/chatbot.ts',
      },
    ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'zautobot',
    //     path: 'docs/zautobot',
    //     routeBasePath: 'zautobot',
    //     sidebarPath: './sidebars/zautobot.ts',
    //   },
    // ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/aitbase-social-card.png',
    navbar: {
      title: 'Aitbase Docs',
      logo: {
        alt: 'Aitbase Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          docsPluginId: 'chatbot',
          type: 'docSidebar',
          sidebarId: 'chatbotSidebar',
          position: 'left',
          label: 'Chatbot',
        },
        // {
        //   docsPluginId: 'zautobot',
        //   type: 'docSidebar',
        //   sidebarId: 'zautobotSidebar',
        //   position: 'left',
        //   label: 'Zautobot',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://livesupport.aitbase.com/',
          label: 'Aitbase Live Support',
          position: 'right',
        },
        {
          href: 'https://sheet.aitbase.com/',
          label: 'Aitbase Sheet',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Chatbot',
              href: '/chatbot/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: '#',
            },
            {
              label: 'X',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Aitbase Live Support',
              href: 'https://livesupport.aitbase.com/',
            },
            {
              label: 'Aitbase Sheet',
              href: 'https://sheet.aitbase.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aitbase.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
