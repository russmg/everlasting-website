import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * /get-a-quote and /landing are noindex (see their layouts). They must stay
 * crawlable here: a robots.txt block stops Google from ever seeing the
 * noindex tag, so linked URLs show up as "Indexed, though blocked by
 * robots.txt" or "Blocked by robots.txt" in Search Console.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
