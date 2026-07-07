"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { AmbientVideoLoop } from "@/components/ui/AmbientVideoLoop";
import { siteConfig } from "@/lib/site-config";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : item;

  return (
    <section className="relative overflow-hidden bg-[#0C0806] px-4 pt-12 pb-20 sm:px-6 sm:pt-20">
      <div className="absolute inset-0">
        <AmbientVideoLoop
          sources={["/videos/hero-loop-1.mp4", "/videos/hero-loop-2.mp4"]}
          poster="/videos/hero-poster.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0806] via-[#0C0806]/75 to-[#0C0806]/45" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={variants} className="font-semibold text-brand-gold">
            SOUTH ORANGE COUNTY GENERAL CONTRACTOR
          </motion.p>
          <motion.h1
            variants={variants}
            className="mt-4 font-display text-4xl font-bold leading-tight text-on-inverse sm:text-5xl lg:text-6xl"
          >
            South Orange County&apos;s Trusted{" "}
            <em className="text-brand-gold not-italic font-bold italic">Christian</em> Home
            Renovation Contractor
          </motion.h1>
          <motion.p variants={variants} className="mt-6 max-w-xl text-lg text-on-inverse/70">
            Family-owned since {siteConfig.founded} — rated {siteConfig.stats.buildZoomScore} on
            BuildZoom, placing us in the {siteConfig.stats.buildZoomPercentile}.
          </motion.p>

          <motion.div variants={variants} className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-1 rounded-full bg-surface-raised px-4 py-2 text-sm font-semibold text-heading shadow-sm">
              <Star className="h-4 w-4 fill-brand-gold text-brand-gold" aria-hidden="true" />
              {siteConfig.stats.buildZoomScore} BuildZoom
            </div>
            <div className="rounded-full bg-surface-raised px-4 py-2 text-sm font-semibold text-heading shadow-sm">
              {siteConfig.yearsInBusiness}+ years licensed
            </div>
            <div className="flex items-center gap-1 rounded-full bg-surface-raised px-4 py-2 text-sm font-semibold text-heading shadow-sm">
              <Star className="h-4 w-4 fill-brand-gold text-brand-gold" aria-hidden="true" />
              {siteConfig.stats.rating} client rating
            </div>
          </motion.div>

          <motion.div variants={variants} className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/get-a-quote" variant="gold">
              Get Your Free Estimate
            </CTAButton>
            <CTAButton href="/#gallery" variant="brown">
              View Our Work
            </CTAButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative"
        >
          <BeforeAfterSlider
            beforeSrc="/images/hero/before.jpg"
            afterSrc="/images/hero/after.jpg"
            beforeAlt="Home renovation before"
            afterAlt="Home renovation after, completed by Everlasting Renovations"
          />
          <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full bg-surface-inverse px-5 py-2 text-sm font-semibold text-on-inverse shadow-lg">
            {siteConfig.stats.projectsCompleted} Renovations across South OC
          </div>
        </motion.div>
      </div>
    </section>
  );
}
