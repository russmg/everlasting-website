import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { value: `${siteConfig.yearsInBusiness}+`, label: "Years in Business" },
  { value: siteConfig.license.display, label: "Licensed by the CSLB" },
  { value: siteConfig.stats.buildZoomScore, label: "BuildZoom Score" },
  { value: siteConfig.warranty.display, label: "On Every Project" },
  { value: siteConfig.stats.onTimeRate, label: "On-Time Rate" },
];

export function StoryStats() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr]">
        <FadeUp>
          <h2 className="font-display text-3xl font-bold text-heading">Our Story</h2>
          <p className="mt-4 text-content-muted">
            What started as one contractor committed to doing right by his neighbors has grown
            into a full renovation company serving South Orange County — without losing the
            values it started with. Matthew and his team approach every kitchen, bathroom,
            addition, and paint job the same way: plan carefully, communicate constantly, and
            never cut a corner you can&apos;t see.
          </p>
          <p className="mt-4 text-content-muted">
            That approach shows up in the numbers as much as the work itself — a {siteConfig.stats.onTimeRate}{" "}
            on-time completion rate, a {siteConfig.stats.buildZoomScore} BuildZoom rating placing
            Everlasting in the {siteConfig.stats.buildZoomPercentile}, and a written{" "}
            {siteConfig.warranty.years}-year warranty on every project we complete.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="rounded-2xl border border-border/10 bg-surface-raised p-5 text-center shadow-sm"
            >
              <p className="font-display text-2xl font-bold text-heading">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-content-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
