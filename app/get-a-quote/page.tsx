import { Star, Check, ShieldCheck, Award, FileCheck, Clock } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { LeadForm } from "@/components/ui/LeadForm";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FadeUp } from "@/components/motion/FadeUp";
import { siteConfig, testimonials } from "@/lib/site-config";

const trustChecks = [
  "Licensed, bonded & insured (CSLB #1097824)",
  `${siteConfig.warranty.display} on every project`,
  "Free, no-pressure in-home estimate",
];

export default function GetAQuotePage() {
  return (
    <>
      <Header minimal />
      <main className="flex-1">
        <section className="bg-surface px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
            <FadeUp>
              <span className="inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-sm font-semibold text-brand-gold-dark">
                Now booking — typical start window is {siteConfig.bookingWindow}
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-heading sm:text-5xl">
                Get a Free Renovation Estimate in{" "}
                <em className="text-brand-gold not-italic font-bold italic">
                  South Orange County
                </em>
              </h1>
              <p className="mt-4 max-w-lg text-lg text-content-muted">
                Kitchens, bathrooms, painting, ADUs, and flooring — built by a licensed, Christian
                family-owned contractor with a {siteConfig.stats.onTimeRate} on-time rate.
              </p>

              <ul className="mt-6 space-y-2">
                {trustChecks.map((line) => (
                  <li key={line} className="flex items-center gap-2 text-sm font-medium text-heading">
                    <Check className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-heading">
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" aria-hidden="true" />
                  ))}
                </span>
                BuildZoom {siteConfig.stats.buildZoomScore} · CSLB Licensed &amp; Insured
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="rounded-2xl bg-surface-inverse p-6 shadow-lg sm:p-8">
              <h2 className="font-display text-xl font-semibold text-on-inverse">
                Request Your Free Estimate
              </h2>
              <p className="mt-1 text-sm text-on-inverse/70">We typically respond within one business day.</p>
              <div className="mt-6">
                <LeadForm variant="dark" source="get-a-quote-landing" />
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="bg-surface-sunken/40 px-4 py-12 sm:px-6">
          <FadeUp className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4">
            <TrustBadge icon={ShieldCheck} label={siteConfig.license.display} />
            <TrustBadge icon={Award} label={`${siteConfig.stats.buildZoomScore} BuildZoom`} />
            <TrustBadge icon={FileCheck} label={siteConfig.warranty.display} />
            <TrustBadge icon={Clock} label={`${siteConfig.stats.onTimeRate} On-Time Rate`} />
          </FadeUp>
        </section>

        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <FadeUp>
              <h2 className="text-center font-display text-2xl font-bold text-heading">
                What Homeowners Say
              </h2>
            </FadeUp>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {testimonials.slice(0, 2).map((t) => (
                <FadeUp key={t.name + t.city}>
                  <TestimonialCard quote={t.quote} name={t.name} city={t.city} rating={t.rating} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer minimal />
    </>
  );
}
