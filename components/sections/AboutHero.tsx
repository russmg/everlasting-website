import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeUp } from "@/components/motion/FadeUp";
import { siteConfig } from "@/lib/site-config";

export function AboutHero() {
  return (
    <section className="bg-surface px-4 pt-12 pb-16 sm:px-6 sm:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <FadeUp>
          <p className="font-semibold text-brand-gold-dark">ABOUT EVERLASTING RENOVATIONS</p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-heading sm:text-5xl">
            Family-Owned. Faith-Driven.{" "}
            <em className="text-brand-gold not-italic font-bold italic">Built to Last.</em>
          </h1>
          <p className="mt-6 max-w-xl text-content-muted">
            Everlasting Renovations was founded by Matthew Swavely in {siteConfig.founded} on a
            simple commitment: do honest work, treat every home like our own, and stand behind
            it. More than a decade later, that&apos;s still the standard every project is held to —
            from a first consultation to the final walkthrough.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/get-a-quote" variant="gold">
              Start Your Project
            </CTAButton>
            <CTAButton href={siteConfig.contact.phoneHref} variant="outline">
              {siteConfig.contact.phone}
            </CTAButton>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-sunken">
            <Image
              src="/images/about/hero.jpg"
              alt="A finished Everlasting Renovations home, representative of our work in South Orange County"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs text-content-muted">
            Representative imagery — Matthew &amp; family photo coming soon.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
