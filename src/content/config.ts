import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts/" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      index: z.number(),
      nextPost: z.optional(z.string()),
    }),
});

export const collections = { posts };
