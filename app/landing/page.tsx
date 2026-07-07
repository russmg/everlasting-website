import { Star, Check } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { LeadForm } from "@/components/ui/LeadForm";
import { AmbientVideoLoop } from "@/components/ui/AmbientVideoLoop";
import { FadeUp } from "@/components/motion/FadeUp";
import { TrustBadgeRow } from "@/components/sections/TrustBadgeRow";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessBand } from "@/components/sections/ProcessBand";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { siteConfig } from "@/lib/site-config";

const trustChecks = [
  "Licensed, bonded & insured (CSLB #1097824)",
  `${siteConfig.warranty.display} on every project`,
  "Free, no-pressure in-home estimate",
];

export default function LandingPage() {
  return (
    <>
      <Header minimal />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#0C0806] px-4 py-12 sm:px-6 sm:py-16">
          <div className="absolute inset-0">
            <AmbientVideoLoop
              sources={["/videos/landing-loop-1.mp4", "/videos/landing-loop-2.mp4"]}
              poster="/videos/landing-poster.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0806] via-[#0C0806]/75 to-[#0C0806]/45" />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
            <FadeUp>
              <span className="inline-block rounded-full border border-border-inverse bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-gold backdrop-blur-sm">
                Now booking — typical start window is {siteConfig.bookingWindow}
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-on-inverse sm:text-5xl">
                Get a Free Renovation Estimate in{" "}
                <em className="text-brand-gold not-italic font-bold italic">
                  South Orange County
                </em>
              </h1>
              <p className="mt-4 max-w-lg text-lg text-on-inverse/70">
                Kitchens, bathrooms, painting, ADUs, and flooring — built by a licensed, Christian
                family-owned contractor with a {siteConfig.stats.onTimeRate} on-time rate.
              </p>

              <ul className="mt-6 space-y-2">
                {trustChecks.map((line) => (
                  <li key={line} className="flex items-center gap-2 text-sm font-medium text-on-inverse">
                    <Check className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-on-inverse">
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
                <LeadForm variant="dark" source="landing-page" />
              </div>
            </FadeUp>
          </div>
        </section>

        <TrustBadgeRow />
        <ServicesGrid />
        <ProcessBand />
        <BeforeAfterGallery />
        <Testimonials />
        <FaqSection />
        <CtaStrip />
      </main>
      <Footer minimal />
    </>
  );
}
