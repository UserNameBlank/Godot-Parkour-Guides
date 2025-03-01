// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import remarkInlineCodeLanguage from "remark-inline-code-language";
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://UserNameBlank.github.io",
  base: "Godot-Parkour-Guides",
  trailingSlash: "always",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  experimental: {},

  markdown: {
    remarkPlugins: [remarkModifiedTime, remarkInlineCodeLanguage],
  },
  integrations: [
    mdx(),
    sitemap(),
    pagefind(),
    tailwind(),

    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false,
      },
    }),
  ],
});
