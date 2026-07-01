import { Check } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import type { ServiceContent } from "@/lib/services-data";

export function ServiceOverview({ service }: { service: ServiceContent }) {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr]">
        <FadeUp>
          <h2 className="font-display text-3xl font-bold text-heading">
            {service.name}, Done Right
          </h2>
          <p className="mt-4 text-content-muted">{service.overview}</p>
        </FadeUp>
        <FadeUp delay={0.1} className="rounded-2xl bg-surface-inverse p-8 text-on-inverse">
          <h3 className="font-display text-xl font-semibold">What&apos;s Included</h3>
          <ul className="mt-4 space-y-3">
            {service.included.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-on-inverse/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-light" aria-hidden="true" />
                {line}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
