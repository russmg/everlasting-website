import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { serviceSlugs } from "@/lib/services-data";

/**
 * Generates /sitemap.xml. Priority tiers match the branchandrootconsulting.com
 * convention: Home 1.0, service pages 0.8, About 0.7. /get-a-quote is
 * intentionally excluded — it's a noindex ads landing page.
 *
 * No <lastmod>: pages have no real edit dates, and a build-time "now" tells
 * Google every page changes on every deploy.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${siteConfig.url}/services/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
