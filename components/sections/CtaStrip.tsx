import { FadeUp } from "@/components/motion/FadeUp";
import { CTAButton } from "@/components/ui/CTAButton";

export function CtaStrip() {
  return (
    <section className="bg-surface-inverse px-4 py-16 text-center text-on-inverse sm:px-6">
      <FadeUp>
        <h2 className="font-display text-3xl font-bold">
          Ready to work with a contractor you can trust?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-on-inverse/80">
          Tell us about your project and we&apos;ll follow up with a free, no-pressure estimate.
        </p>
        <div className="mt-8">
          <CTAButton href="/get-a-quote" variant="gold">
            Get Your Free Estimate
          </CTAButton>
        </div>
      </FadeUp>
    </section>
  );
}
