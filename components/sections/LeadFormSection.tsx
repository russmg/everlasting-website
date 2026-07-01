import { FadeUp } from "@/components/motion/FadeUp";
import { LeadForm } from "@/components/ui/LeadForm";

export function LeadFormSection({ defaultService }: { defaultService?: string }) {
  return (
    <section id="estimate" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <FadeUp>
          <p className="text-center font-semibold text-brand-gold-dark">GET STARTED</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold text-heading">
            Request Your Free Renovation Estimate
          </h2>
          <p className="mt-3 text-center text-content-muted">
            Typical booking window is {`~2 weeks`} out — tell us about your project and we&apos;ll
            follow up fast.
          </p>
        </FadeUp>
        <FadeUp delay={0.1} className="mt-8 rounded-2xl border border-border/10 bg-surface-raised p-6 shadow-sm sm:p-8">
          <LeadForm defaultService={defaultService} />
        </FadeUp>
      </div>
    </section>
  );
}
