import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { ServiceGallery } from "@/components/sections/ServiceGallery";
import { WhyService } from "@/components/sections/WhyService";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { FeaturedTestimonial } from "@/components/sections/FeaturedTestimonial";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { services, serviceSlugs, type ServiceSlug } from "@/lib/services-data";
import { serviceJsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) return {};

  return {
    // Root layout's title.template already appends "| Everlasting Renovations, Inc."
    title: `${service.metaTitleKeyword} in Lake Forest, CA`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.shortDescription,
          slug: service.slug,
          areaServed: siteConfig.allServiceCities,
        })}
      />
      <Header />
      <main className="flex-1">
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceGallery service={service} />
        <WhyService service={service} />
        <ServiceProcess service={service} />
        <FeaturedTestimonial testimonial={service.featuredTestimonial} />
        <LeadFormSection defaultService={service.dropdownLabel} />
        <RelatedServices current={service.slug} />
      </main>
      <Footer />
    </>
  );
}
