import { ShieldCheck, Award, FileCheck, Hammer } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { siteConfig } from "@/lib/site-config";

export function TrustBadgeRow() {
  return (
    <section className="bg-surface-sunken/40 px-4 py-12 sm:px-6">
      <FadeUp className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4">
        <TrustBadge icon={ShieldCheck} label={siteConfig.license.display} />
        <TrustBadge icon={Hammer} label="Bonded & Insured" />
        <TrustBadge icon={Award} label={`${siteConfig.stats.buildZoomScore} BuildZoom`} />
        <TrustBadge icon={FileCheck} label={siteConfig.warranty.display} />
      </FadeUp>
    </section>
  );
}
