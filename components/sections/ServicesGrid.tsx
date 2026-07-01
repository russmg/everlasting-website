import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { serviceSlugs, services } from "@/lib/services-data";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-surface-sunken/40 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-center font-semibold text-brand-gold-dark">WHAT WE BUILD</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold text-heading">
            Our Renovation Services
          </h2>
        </FadeUp>
        <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceSlugs.map((slug) => (
            <StaggerItem key={slug}>
              <ServiceCard service={services[slug]} image={`/images/services/${slug}/card.jpg`} />
            </StaggerItem>
          ))}
          <StaggerItem>
            <Link
              href="/get-a-quote"
              className="flex h-full flex-col items-start justify-center gap-3 rounded-2xl bg-surface-inverse p-6 text-on-inverse shadow-sm transition-transform hover:-translate-y-1"
            >
              <h3 className="font-display text-xl font-semibold">
                Not sure where to start?
              </h3>
              <p className="text-sm text-on-inverse/80">
                Talk to our team — we&apos;ll help you scope your project and walk you through
                next steps.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-on-inverse">
                Talk to Our Team
                <ArrowRight className="h-4 w-4 text-brand-gold-light" aria-hidden="true" />
              </span>
            </Link>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
