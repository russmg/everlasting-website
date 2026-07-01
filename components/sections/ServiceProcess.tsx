import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import type { ServiceContent } from "@/lib/services-data";

export function ServiceProcess({ service }: { service: ServiceContent }) {
  return (
    <section className="bg-surface-inverse px-4 py-20 text-on-inverse sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-center font-semibold text-on-inverse">OUR PROCESS</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold">
            How We Approach {service.name}
          </h2>
        </FadeUp>
        <StaggerChildren className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((s) => (
            <StaggerItem key={s.step}>
              {/* full-opacity gold-light — the prior /60 opacity dropped contrast on brown below 3:1 */}
              <span className="font-display text-4xl font-bold text-brand-gold-light">
                {s.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-on-inverse/75">{s.body}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
