import { siteConfig } from "./site-config";

/**
 * JSON-LD builders. The GeneralContractor graph is embedded once (root
 * layout) and referenced by @id from every other page; service pages add
 * their own Service node that points back at the same organization @id.
 */

const ORG_ID = `${siteConfig.url}/#organization`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": ORG_ID,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      telephone: "+1-714-745-2777",
      email: siteConfig.contact.email,
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.address.street,
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.state,
        postalCode: siteConfig.contact.address.zip,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.contact.geo.latitude,
        longitude: siteConfig.contact.geo.longitude,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
      areaServed: [...siteConfig.serviceArea.priority, ...siteConfig.serviceArea.also].map(
        (name) => ({ "@type": "AdministrativeArea", name })
      ),
    },
  ],
};

export function serviceJsonLd({
  name,
  description,
  slug,
  areaServed,
}: {
  name: string;
  description: string;
  slug: string;
  areaServed: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${siteConfig.url}/services/${slug}`,
    provider: { "@id": ORG_ID },
    areaServed: areaServed.map((city) => ({
      "@type": "AdministrativeArea",
      name: city,
    })),
  };
}
