import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { serviceSlugs } from "@/lib/services-data";

/**
 * Generates /sitemap.xml. Priority tiers match the branchandrootconsulting.com
 * convention: Home 1.0, service pages 0.8, About 0.7. /get-a-quote is
 * intentionally excluded — it's a noindex ads landing page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${siteConfig.url}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
