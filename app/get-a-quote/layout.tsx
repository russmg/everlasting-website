import type { Metadata } from "next";

/**
 * Ads landing page — intentionally excluded from search indexing. It exists
 * only as a paid-traffic destination, not for organic discovery, and
 * carries no outbound links besides click-to-call.
 */
export const metadata: Metadata = {
  title: "Get a Free Renovation Estimate in South Orange County, CA",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function GetAQuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
