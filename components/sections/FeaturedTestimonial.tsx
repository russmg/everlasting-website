import { FadeUp } from "@/components/motion/FadeUp";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { testimonials } from "@/lib/site-config";

export function FeaturedTestimonial({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-xl">
        <FadeUp>
          <TestimonialCard
            quote={testimonial.quote}
            name={testimonial.name}
            city={testimonial.city}
            rating={testimonial.rating}
          />
        </FadeUp>
      </div>
    </section>
  );
}
