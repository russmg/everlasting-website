import { testimonials } from "./site-config";

export type ServiceSlug =
  | "kitchen-remodeling"
  | "bathroom-renovations"
  | "painting"
  | "adu-additions"
  | "flooring";

export interface ServiceContent {
  slug: ServiceSlug;
  name: string;
  /** Exact string match to an option in `serviceDropdownOptions` (site-config.ts). */
  dropdownLabel: string;
  category: string;
  shortDescription: string;
  heroSubhead: string;
  timeline: string;
  overview: string;
  included: string[];
  whyUs: { headline: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  gallery: { alt: string }[];
  featuredTestimonial: (typeof testimonials)[number];
  metaTitleKeyword: string;
}

export const services: Record<ServiceSlug, ServiceContent> = {
  "kitchen-remodeling": {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    dropdownLabel: "Kitchen Remodeling",
    category: "Kitchen Remodeling",
    shortDescription:
      "Custom cabinetry, stone countertops, and layouts designed around how your family actually lives — built to last a lifetime.",
    heroSubhead:
      "From galley kitchens to full open-concept rebuilds, we handle demolition, electrical, plumbing, cabinetry, and stone — one dedicated crew, start to finish.",
    timeline: "6–10 week typical timeline",
    overview:
      "Your kitchen carries more daily life than any other room in the house — we design around how your family actually cooks, gathers, and lives in it. Every kitchen remodel starts with a complimentary 3D rendering so you can see your layout, cabinetry, and countertops before a single wall comes down. Our dedicated kitchen crews handle demolition, electrical, plumbing, cabinetry installation, and stone fabrication in sequence, with daily job-site cleanup and clear communication at every stage.",
    included: [
      "Custom & semi-custom shaker cabinetry",
      "Quartz, granite & natural stone countertops",
      "Full electrical & plumbing relocation",
      "Tile backsplash & flooring installation",
      "Complimentary 3D design rendering",
      "Permit pulling & inspection coordination",
    ],
    whyUs: [
      {
        headline: "3D Renderings Before Demo",
        body: "See your finished kitchen — materials, colors, and layout — before any construction begins, so there are no surprises mid-project.",
      },
      {
        headline: "One Dedicated Crew",
        body: "The same crew sees your kitchen from demolition to final walkthrough, with daily communication and a clean job site every evening.",
      },
      {
        headline: "4-Year Written Warranty",
        body: "Every kitchen remodel is backed by our written 4-year warranty on workmanship — we stand behind what we build.",
      },
    ],
    process: [
      { step: "01", title: "Consultation", body: "We meet in your home to discuss your goals, budget, and how your family uses the space." },
      { step: "02", title: "3D Rendering & Proposal", body: "Precise measurements, a virtual 3D rendering, and an itemized estimate before any work begins." },
      { step: "03", title: "Meticulous Construction", body: "A dedicated crew handles demo, rough-in, cabinetry, and stone — clean job site, daily updates." },
      { step: "04", title: "Final Walkthrough & Warranty", body: "We walk the finished kitchen with you and hand over your 4-year written warranty." },
    ],
    gallery: [
      { alt: "Representative kitchen remodel — custom shaker cabinetry and quartz island" },
      { alt: "Representative kitchen remodel — tile backsplash and pendant lighting detail" },
      { alt: "Representative kitchen remodel — open-concept layout toward dining area" },
      { alt: "Representative kitchen remodel — farmhouse sink and natural stone counters" },
    ],
    featuredTestimonial: testimonials[1],
    metaTitleKeyword: "Kitchen Remodeling",
  },

  "bathroom-renovations": {
    slug: "bathroom-renovations",
    name: "Bathroom Renovations",
    dropdownLabel: "Bathroom Renovations",
    category: "Bathroom Renovations",
    shortDescription:
      "Spa-inspired showers, custom vanities, and durable tile work — renovations built for daily life, not just photos.",
    heroSubhead:
      "From powder-room refreshes to full master-bath rebuilds, we manage waterproofing, plumbing, tile, and fixtures under one roof.",
    timeline: "4–8 week typical timeline",
    overview:
      "A bathroom renovation lives or dies on what's behind the tile — waterproofing, slope, and plumbing done right the first time. We pair careful structural work with the design details that make a bathroom feel like a retreat: frameless glass, custom vanities, and tile selections you'll still love in ten years. Every project includes a complimentary 3D rendering so you can walk through your new bathroom before construction starts.",
    included: [
      "Full waterproofing & shower pan systems",
      "Custom vanities & frameless glass enclosures",
      "Tile, stone & heated flooring options",
      "Plumbing fixture & valve replacement",
      "Complimentary 3D design rendering",
      "Permit pulling & inspection coordination",
    ],
    whyUs: [
      {
        headline: "Waterproofing Done Right",
        body: "We never cut corners on the systems you can't see — proper waterproofing and slope prevent the callbacks other contractors create.",
      },
      {
        headline: "Spa-Quality Finishes",
        body: "Frameless glass, custom vanities, and premium tile selections, all sourced through our top-tier supplier partners.",
      },
      {
        headline: "4-Year Written Warranty",
        body: "Every bathroom renovation is backed by our written 4-year warranty on workmanship.",
      },
    ],
    process: [
      { step: "01", title: "Consultation", body: "We meet in your home to discuss your goals, budget, and daily routine in the space." },
      { step: "02", title: "3D Rendering & Proposal", body: "Precise measurements, a virtual 3D rendering, and an itemized estimate before any work begins." },
      { step: "03", title: "Meticulous Construction", body: "Demo, waterproofing, plumbing, tile, and fixtures — clean job site, daily updates." },
      { step: "04", title: "Final Walkthrough & Warranty", body: "We walk the finished bathroom with you and hand over your 4-year written warranty." },
    ],
    gallery: [
      { alt: "Representative bathroom renovation — frameless glass walk-in shower" },
      { alt: "Representative bathroom renovation — double vanity with quartz top" },
      { alt: "Representative bathroom renovation — floor-to-ceiling tile detail" },
      { alt: "Representative bathroom renovation — freestanding soaking tub" },
    ],
    featuredTestimonial: testimonials[1],
    metaTitleKeyword: "Bathroom Renovations",
  },

  painting: {
    slug: "painting",
    name: "Painting",
    dropdownLabel: "Painting (Interior & Exterior)",
    category: "Interior & Exterior Painting",
    shortDescription:
      "Premium low-VOC interior & exterior painting with the prep work and clean lines that make the difference.",
    heroSubhead:
      "Interior, exterior, and wood repair — using only premium Sherwin-Williams and Dunn-Edwards coatings, applied by crews who prep like it shows.",
    timeline: "3–7 day typical timeline",
    overview:
      "Paint is the fastest way to transform a home — and the easiest place for a contractor to cut corners. We don't skip prep: pressure washing, scraping, caulking, and minor wood repair happen before a single coat goes on. We use only premium, low-VOC coatings from Sherwin-Williams (Emerald and Duration lines) and Dunn-Edwards (Aura and Aristoshield), backed by careful masking and clean lines on every job.",
    included: [
      "Full surface prep, scraping & caulking",
      "Minor wood repair & rot replacement",
      "Premium Sherwin-Williams & Dunn-Edwards coatings",
      "Interior trim, cabinet & accent wall painting",
      "Exterior siding, stucco & trim painting",
      "Daily site protection & cleanup",
    ],
    whyUs: [
      {
        headline: "Prep Work That Shows",
        body: "Pressure washing, scraping, caulking, and wood repair before paint ever goes on — it's why our finishes hold up.",
      },
      {
        headline: "Premium Coatings Only",
        body: "We use Sherwin-Williams Emerald & Duration and Dunn-Edwards Aura & Aristoshield exclusively — no big-box paint.",
      },
      {
        headline: "4-Year Written Warranty",
        body: "Every painting project is backed by our written 4-year warranty on workmanship.",
      },
    ],
    process: [
      { step: "01", title: "Consultation", body: "We walk your home, assess surfaces, and discuss color and finish goals." },
      { step: "02", title: "Proposal & Color Plan", body: "An itemized estimate and a clear plan for prep, repair, and coating selection." },
      { step: "03", title: "Prep & Painting", body: "Surface prep, wood repair, masking, and premium coatings applied by a dedicated crew." },
      { step: "04", title: "Final Walkthrough & Warranty", body: "We walk the finished work with you and hand over your 4-year written warranty." },
    ],
    gallery: [
      { alt: "Representative exterior painting — freshly painted stucco home" },
      { alt: "Representative interior painting — living room accent wall" },
      { alt: "Representative exterior painting — trim and wood repair detail" },
      { alt: "Representative interior painting — kitchen cabinet refinish" },
    ],
    featuredTestimonial: testimonials[0],
    metaTitleKeyword: "Interior & Exterior Painting",
  },

  "adu-additions": {
    slug: "adu-additions",
    name: "ADU & Home Additions",
    dropdownLabel: "ADU & Home Additions",
    category: "ADU & Additions",
    shortDescription:
      "Accessory dwelling units and home additions designed and permitted for South Orange County — built as one continuous project.",
    heroSubhead:
      "From detached ADUs to room additions, we manage design, permitting, and construction as one accountable process.",
    timeline: "4–8 month typical timeline",
    overview:
      "An ADU or addition is the largest investment most homeowners make in their property — and the one most exposed to permitting delays and design changes. We manage the full process in-house: site planning, 3D design renderings, permit submission with your local jurisdiction, and construction, so you have one point of contact from first sketch to final inspection.",
    included: [
      "Detached & attached ADU construction",
      "Room additions & second-story builds",
      "Site planning & permit submission",
      "Complimentary 3D design rendering",
      "Foundation, framing & full MEP rough-in",
      "Final inspection & occupancy coordination",
    ],
    whyUs: [
      {
        headline: "One Point of Contact",
        body: "Design, permitting, and construction managed under one roof — no handoffs between separate firms.",
      },
      {
        headline: "South OC Permitting Experience",
        body: "We know the jurisdictions we build in and plan around their requirements from day one.",
      },
      {
        headline: "4-Year Written Warranty",
        body: "Every ADU and addition is backed by our written 4-year warranty on workmanship.",
      },
    ],
    process: [
      { step: "01", title: "Consultation", body: "We assess your lot, goals, and budget for an ADU or addition." },
      { step: "02", title: "3D Rendering & Permitting", body: "Design renderings and full permit submission to your local jurisdiction." },
      { step: "03", title: "Meticulous Construction", body: "Foundation through finish, with a dedicated crew and daily communication." },
      { step: "04", title: "Final Walkthrough & Warranty", body: "Final inspection, occupancy coordination, and your 4-year written warranty." },
    ],
    gallery: [
      { alt: "Representative ADU — detached backyard unit exterior" },
      { alt: "Representative ADU — open-concept interior living space" },
      { alt: "Representative home addition — new second-story framing" },
      { alt: "Representative home addition — finished room exterior integration" },
    ],
    featuredTestimonial: testimonials[1],
    metaTitleKeyword: "ADU & Home Additions",
  },

  flooring: {
    slug: "flooring",
    name: "Flooring",
    dropdownLabel: "Flooring",
    category: "Flooring",
    shortDescription:
      "Hardwood, luxury vinyl, and tile flooring installed with the subfloor prep that determines how it actually performs.",
    heroSubhead:
      "From whole-home hardwood to durable luxury vinyl plank, we install flooring that's leveled, prepped, and built to handle real life.",
    timeline: "2–5 day typical timeline",
    overview:
      "Flooring is only as good as what's underneath it — subfloor leveling and moisture prep determine whether a floor lasts ten years or needs replacing in two. We install hardwood, engineered wood, luxury vinyl plank, and tile with proper subfloor preparation, working room by room to minimize disruption to your home.",
    included: [
      "Hardwood & engineered wood installation",
      "Luxury vinyl plank (LVP) installation",
      "Tile & natural stone flooring",
      "Subfloor leveling & moisture barrier prep",
      "Baseboard & transition trim installation",
      "Old flooring removal & disposal",
    ],
    whyUs: [
      {
        headline: "Subfloor Prep First",
        body: "Proper leveling and moisture barriers before a single plank goes down — it's why our floors stay flat and quiet.",
      },
      {
        headline: "High-Durability Materials",
        body: "We source through top-tier flooring suppliers for wood, LVP, and tile that hold up to real family life.",
      },
      {
        headline: "4-Year Written Warranty",
        body: "Every flooring installation is backed by our written 4-year warranty on workmanship.",
      },
    ],
    process: [
      { step: "01", title: "Consultation", body: "We assess your existing flooring, subfloor condition, and material preferences." },
      { step: "02", title: "Proposal & Material Selection", body: "An itemized estimate and material samples for your final selection." },
      { step: "03", title: "Subfloor Prep & Installation", body: "Old flooring removal, subfloor leveling, and careful installation room by room." },
      { step: "04", title: "Final Walkthrough & Warranty", body: "We walk the finished flooring with you and hand over your 4-year written warranty." },
    ],
    gallery: [
      { alt: "Representative flooring install — wide-plank engineered hardwood" },
      { alt: "Representative flooring install — luxury vinyl plank in living area" },
      { alt: "Representative flooring install — tile flooring with baseboard detail" },
      { alt: "Representative flooring install — hallway transition trim" },
    ],
    featuredTestimonial: testimonials[2],
    metaTitleKeyword: "Flooring",
  },
};

export const serviceSlugs = Object.keys(services) as ServiceSlug[];

export function getRelatedServices(current: ServiceSlug): ServiceContent[] {
  return serviceSlugs.filter((slug) => slug !== current).map((slug) => services[slug]);
}
