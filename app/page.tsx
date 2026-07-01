import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustGrid } from "@/components/sections/TrustGrid";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessBand } from "@/components/sections/ProcessBand";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Home Renovation Contractor in South Orange County, CA",
  description:
    "Everlasting Renovations is a licensed, Christian family-owned general contractor serving South Orange County — kitchens, bathrooms, painting, ADUs, and flooring. CSLB #1097824.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustGrid />
        <ServicesGrid />
        <ProcessBand />
        <BeforeAfterGallery />
        <Testimonials />
        <LeadFormSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
