import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/site-config";

export function Testimonials({ items = testimonials }: { items?: readonly (typeof testimonials)[number][] }) {
  return (
    <section className="bg-surface-sunken/40 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-center font-semibold text-brand-gold-dark">CLIENT STORIES</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold text-heading">
            What Homeowners Say
          </h2>
        </FadeUp>
        <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <StaggerItem key={t.name + t.city}>
              <TestimonialCard quote={t.quote} name={t.name} city={t.city} rating={t.rating} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
