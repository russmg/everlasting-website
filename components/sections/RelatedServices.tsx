import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getRelatedServices, type ServiceSlug } from "@/lib/services-data";

export function RelatedServices({ current }: { current: ServiceSlug }) {
  const related = getRelatedServices(current);

  return (
    <section className="bg-surface-sunken/40 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-center font-semibold text-brand-gold-dark">EXPLORE MORE</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold text-heading">
            Other Services We Offer
          </h2>
        </FadeUp>
        <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} image={`/images/services/${service.slug}/card.jpg`} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
