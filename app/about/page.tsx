import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { StoryStats } from "@/components/sections/StoryStats";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { ValuesGrid } from "@/components/sections/ValuesGrid";
import { TrustBadgeRow } from "@/components/sections/TrustBadgeRow";
import { CtaStrip } from "@/components/sections/CtaStrip";

export const metadata: Metadata = {
  // Root layout's title.template already appends "| Everlasting Renovations, Inc."
  title: "About Us — Family-Owned General Contractor in South Orange County, CA",
  description:
    "Everlasting Renovations is a Christian, family-owned general contractor founded by Matthew Swavely in 2015 — licensed, bonded, insured, and backed by a 4-year warranty.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <StoryStats />
        <TeamGrid />
        <ValuesGrid />
        <TrustBadgeRow />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
