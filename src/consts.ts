// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "IF-10 Godot Parkour";
export const SITE_TITLE = "Godot Parkour";
export const SITE_DESCRIPTION = "Ein paar Guides für den Godot Parkour";
export const LIGHT_THEME = "corporate";
export const DARK_THEME = "halloween";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "GodotParkour - Alle Tags";
export const Tags_DESCRIPTION =
  "GodotParkour - Alle Tags und deren Anzahl an Artikeln";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `Alle Artikel mit '${tag}' Tag`,
    description: `Entdecke Artikel über ${tag}.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `Alle Artikel der '${category}' Kategorie`,
    description: `Entdecke alle Artikel der ${category} Kategorie`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "Eins" },
  { href: "/category/Two/1/", title: "Zwei" },
  { href: "/category/Three/1/", title: "Drei" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  {
    href: "https://github.com/UserNameBlank",
    icon: "i-tabler-brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Suche`;
export const SEARCH_PAGE_DESCRIPTION = `Suche alles auf ${SITE_TITLE}`;
