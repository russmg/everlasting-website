import { Heart, Award, ShieldCheck, FileCheck } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { siteConfig } from "@/lib/site-config";

const trustItems = [
  {
    icon: Heart,
    title: "Values-Driven Craftsmanship",
    body: "Every project is built the way we'd build it for our own family — honest work, no shortcuts.",
  },
  {
    icon: Award,
    title: "Elite Industry Rating",
    body: `Rated ${siteConfig.stats.buildZoomScore} on BuildZoom — ${siteConfig.stats.buildZoomPercentile}.`,
  },
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    body: `${siteConfig.license.display} — bonded, insured, and carrying full workers' comp coverage.`,
  },
  {
    icon: FileCheck,
    title: siteConfig.warranty.display,
    body: "Every renovation is backed by a written warranty on workmanship — we stand behind what we build.",
  },
];

export function TrustGrid() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <h2 className="text-center font-display text-3xl font-bold text-heading">
            Why South Orange County Trusts Us
          </h2>
        </FadeUp>
        <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((trustItem) => (
            <StaggerItem
              key={trustItem.title}
              className="rounded-2xl border border-border/10 bg-surface-raised p-6 text-center shadow-sm"
            >
              <trustItem.icon className="mx-auto h-9 w-9 text-brand-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold text-heading">
                {trustItem.title}
              </h3>
              <p className="mt-2 text-sm text-content-muted">{trustItem.body}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
