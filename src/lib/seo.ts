const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.mdmaroof.site";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");

export const seo = {
  author: "Mohd Maroof",
  title: "Mohd Maroof | Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 6+ years of experience building scalable web and mobile products with React, Next.js, and React Native.",
  siteName: "Mohd Maroof — Frontend Developer Portfolio",
  locale: "en_IN",
  canonicalUrl: `${siteUrl}/`,
  ogImageUrl: `${siteUrl}/og.png`,
  keywords: [
    "Mohd Maroof",
    "Senior Frontend Developer",
    "Frontend Developer India",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript Developer",
    "Web Performance",
    "Realtime Applications",
    "Mobile App Developer",
  ],
  profiles: {
    github: "https://github.com/mdmaroof",
    linkedin: "https://linkedin.com/in/mohd-maroof-535619118",
  },
} as const;

