import { ShieldCheck, Sparkles, Hammer } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import type { ServiceContent } from "@/lib/services-data";

const icons = [Sparkles, Hammer, ShieldCheck];

export function WhyService({ service }: { service: ServiceContent }) {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <h2 className="text-center font-display text-3xl font-bold text-heading">
            Why Everlasting for {service.name}
          </h2>
        </FadeUp>
        <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-3">
          {service.whyUs.map((reason, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem
                key={reason.headline}
                className="rounded-2xl border border-border/10 bg-surface-raised p-6 shadow-sm"
              >
                <Icon className="h-8 w-8 text-brand-gold" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-heading">
                  {reason.headline}
                </h3>
                <p className="mt-2 text-sm text-content-muted">{reason.body}</p>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
