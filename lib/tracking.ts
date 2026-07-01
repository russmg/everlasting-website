/**
 * Client-side conversion tracking — Meta Pixel "Lead" event + Google Ads
 * conversion tag. Both are env-gated placeholders (real Pixel ID / Ads tag
 * are a Phase 2 dependency) and no-op safely if unset or if the scripts
 * haven't loaded yet.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackingConfig = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
  googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL,
};

/** Fire on successful lead form submission. */
export function trackLeadSubmitted() {
  if (typeof window === "undefined") return;

  if (trackingConfig.metaPixelId && typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }

  if (
    trackingConfig.googleAdsId &&
    trackingConfig.googleAdsConversionLabel &&
    typeof window.gtag === "function"
  ) {
    window.gtag("event", "conversion", {
      send_to: `${trackingConfig.googleAdsId}/${trackingConfig.googleAdsConversionLabel}`,
    });
  }
}
