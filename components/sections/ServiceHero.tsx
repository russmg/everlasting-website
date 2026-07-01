import { Clock, ShieldCheck } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { FadeUp } from "@/components/motion/FadeUp";
import type { ServiceContent } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

export function ServiceHero({ service }: { service: ServiceContent }) {
  return (
    <section className="bg-surface px-4 pt-12 pb-16 sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="font-semibold text-brand-gold-dark">{service.category.toUpperCase()}</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold leading-tight text-heading sm:text-5xl">
            {service.name} in South Orange County, CA
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-content-muted">{service.heroSubhead}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full bg-surface-raised px-4 py-2 text-sm font-semibold text-heading shadow-sm">
              <Clock className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              {service.timeline}
            </div>
            <div className="flex items-center gap-2 rounded-full bg-surface-raised px-4 py-2 text-sm font-semibold text-heading shadow-sm">
              <ShieldCheck className="h-4 w-4 text-brand-gold" aria-hidden="true" />
              {siteConfig.warranty.display}
            </div>
          </div>

          <div className="mt-8">
            <CTAButton href="#estimate" variant="gold">
              Get Your Free Estimate
            </CTAButton>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-10">
          <BeforeAfterSlider
            beforeSrc={`/images/services/${service.slug}/hero-before.jpg`}
            afterSrc={`/images/services/${service.slug}/hero-after.jpg`}
            beforeAlt={`${service.name} before`}
            afterAlt={`${service.name} after, completed by Everlasting Renovations`}
          />
        </FadeUp>
      </div>
    </section>
  );
}
