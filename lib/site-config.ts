/**
 * SINGLE source of truth for Everlasting Renovations business data.
 * Every page, the footer, JSON-LD, and the lead form import from here.
 * Do not hardcode phone/email/address/license/warranty anywhere else —
 * that drift is exactly what produced the wrong placeholder data the
 * original Claude Design canvases shipped with.
 */

export const siteConfig = {
  name: "Everlasting Renovations, Inc.",
  shortName: "Everlasting Renovations",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.everlastingrenovationsinc.com",
  tagline:
    "South Orange County's trusted Christian, family-owned general contractor — kitchens, bathrooms, painting, ADUs, and flooring built to last.",

  owner: {
    name: "Matthew Swavely",
    seniorName: "Matthew Swavely Sr.",
  },

  founded: 2015,
  yearsInBusiness: new Date().getFullYear() - 2015,

  license: {
    board: "CSLB",
    number: "1097824",
    display: "CA Lic. #1097824",
    type: "Class B General Building Contractor",
  },

  warranty: {
    years: 4,
    display: "4-Year Written Warranty",
  },

  stats: {
    onTimeRate: "99%",
    buildZoomScore: "99/100",
    buildZoomPercentile: "top 15% of 330,000+ CA contractors",
    rating: "5.0",
    projectsCompleted: "200+",
  },

  contact: {
    phone: "(714) 745-2777",
    phoneHref: "tel:+17147452777",
    email: "everlastingrenovationsinc@gmail.com",
    address: {
      street: "25422 Trabuco Rd. Ste. 212",
      city: "Lake Forest",
      state: "CA",
      zip: "92630",
      full: "25422 Trabuco Rd. Ste. 212, Lake Forest, CA 92630",
    },
    geo: {
      latitude: 33.6461,
      longitude: -117.6892,
    },
    hours: "Mon–Sat 8am–6pm",
  },

  social: {
    facebook: "https://www.facebook.com/everlastingrenovationsllc/",
    instagram: "https://www.instagram.com/everlastingrenovationsinc/",
  },

  bookingWindow: "~2 weeks",

  serviceArea: {
    priority: ["Lake Forest", "Mission Viejo", "Laguna Niguel"],
    also: [
      "Irvine",
      "Aliso Viejo",
      "Rancho Santa Margarita",
      "Ladera Ranch",
      "San Juan Capistrano",
      "San Clemente",
      "Dana Point",
    ],
    excluded: [
      "Laguna Woods",
      "Laguna Beach",
      "Santa Ana",
      "Midway City",
      "Garden Grove",
      "Stanton",
      "Buena Park",
      "La Mirada",
    ],
  },

  /** Full list used for city dropdowns (priority cities first). */
  get allServiceCities(): string[] {
    return [...this.serviceArea.priority, ...this.serviceArea.also];
  },
} as const;

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const serviceDropdownOptions = [
  "Kitchen Remodeling",
  "Bathroom Renovations",
  "Painting (Interior & Exterior)",
  "ADU & Home Additions",
  "Flooring",
] as const;

export const faqs = [
  {
    question: "Are you a licensed contractor in Orange County?",
    answer:
      "Yes. Everlasting Renovations, Inc. holds an active Class B General Building Contractor License (#1097824) issued by the CSLB. We are fully bonded and carry comprehensive liability insurance and workers' compensation for all team members.",
  },
  {
    question: "What cities in South Orange County do you serve?",
    answer:
      "We proudly serve homeowners throughout South Orange County, including Lake Forest, Mission Viejo, Laguna Niguel, Irvine, Aliso Viejo, Rancho Santa Margarita, Ladera Ranch, San Juan Capistrano, San Clemente, and Dana Point.",
  },
  {
    question: "Do you offer 3D design renderings before construction begins?",
    answer:
      "Yes. As part of our commitment to transparent project planning, we provide complimentary 3D virtual renderings of your kitchen, bathroom, or home renovation so you can visualize materials, colors, and layouts before any construction starts.",
  },
  {
    question: "What brands of paint and materials do you use?",
    answer:
      "For painting, we use only premium, low-VOC coatings from Sherwin-Williams (Emerald and Duration lines) and Dunn-Edwards (Aura and Aristoshield). For renovations, we partner with top-tier suppliers for custom shaker cabinets, quartz countertops, and high-durability flooring.",
  },
  {
    question: "Do you offer financing options for home renovations?",
    answer:
      "Yes. We partner with reputable local lenders to offer flexible financing options, allowing qualified homeowners to secure low monthly payments or interest-free promotional periods.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "We selected Everlasting Renovations after reviewing a dozen other painting contractors. They came through very professional, reliable, and the attention to detail is beyond anything you expect. Highly recommend!",
    name: "Homeowner",
    city: "Lake Forest, CA",
    rating: 5,
  },
  {
    quote:
      "Incredible work on our kitchen and master bath remodel. They are a well-oiled machine with dedicated crews for demolition, cabinets, and countertops. Cleaned up every single day.",
    name: "John S.",
    city: "Mission Viejo, CA",
    rating: 5,
  },
  {
    quote:
      "They painted our home's exterior and did some minor wood repair. Fair pricing, honest communication, and absolutely beautiful results. It's rare to find a contractor this trustworthy.",
    name: "Irene T.",
    city: "Laguna Niguel, CA",
    rating: 5,
  },
] as const;
