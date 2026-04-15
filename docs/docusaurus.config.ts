import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "diagrams-js",
  tagline: "Draw cloud system architecture diagrams as code in TypeScript",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://diagrams-js.hatemhosny.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "diagrams-js", // Usually your GitHub org/user name.
  projectName: "diagrams-js", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/diagrams-js/diagrams-js/tree/main/docs/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/diagrams-js-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "diagrams-js",
      logo: {
        alt: "diagrams-js",
        src: "img/logo.svg",
      },
      items: [
        {
          position: "left",
          label: "Docs",
          to: "/docs/getting-started/installation",
        },
        {
          position: "left",
          label: "Examples",
          to: "/docs/getting-started/examples",
        },
        {
          position: "left",
          label: "Guides",
          to: "/docs/guides/diagram",
        },
        {
          position: "left",
          label: "Providers",
          to: "/docs/guides/providers",
        },
        { to: "/playground", label: "Playground", position: "left" },
        {
          href: "https://www.npmjs.com/package/diagrams-js",
          label: "npm",
          position: "right",
        },
        {
          href: "https://github.com/diagrams-js/diagrams-js",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started/quickstart",
            },
            {
              label: "Examples",
              to: "/docs/getting-started/examples",
            },
            {
              label: "API Reference",
              to: "/docs/guides/diagram",
            },
          ],
        },
        {
          title: "For AI",
          items: [
            {
              label: "AI Guide",
              to: "/docs/ai-guide",
            },
            {
              label: "llms.txt",
              href: "pathname:///llms.txt",
            },
            {
              label: "llms-full.txt",
              href: "pathname:///llms-full.txt",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/diagrams-js/diagrams-js",
            },
            {
              label: "𝕏 / Twitter",
              href: "https://x.com/hatem_hosny_",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Playground",
              to: "/playground",
            },
            {
              label: "Sponsor 💚",
              href: "https://github.com/sponsors/hatemhosny",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/hatemhosny" target="_blank">Hatem Hosny</a>. MIT License.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash"],
    },
    algolia: {
      appId: "8SFHTLVOQQ",
      apiKey: "c91e004c50934f4eec81d3cdea16f907",
      indexName: "diagrams-js",
      contextualSearch: true,
      searchPagePath: "search",
      // askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [],
  scripts: [],
  plugins: [
    "docusaurus-markdown-source-plugin",
    [
      "@signalwire/docusaurus-plugin-llms-txt",
      {
        siteTitle: "diagrams-js",
        siteDescription: "Draw cloud system architecture diagrams as code in TypeScript",
        content: {
          includeBlog: false,
          includePages: true,
          enableMarkdownFiles: false, //already created by docusaurus-markdown-source-plugin
          enableLlmsFullTxt: true,
        },
      },
    ],
  ],
  // themes: ["@signalwire/docusaurus-theme-llms-txt"], // breaks the build
};

export default config;
