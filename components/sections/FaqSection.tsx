import { FadeUp } from "@/components/motion/FadeUp";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { faqs } from "@/lib/site-config";

export function FaqSection() {
  return (
    <section id="faq" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <p className="text-center font-semibold text-brand-gold-dark">FAQ</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} className="mt-8">
          <FAQAccordion items={faqs} />
        </FadeUp>
      </div>
    </section>
  );
}
