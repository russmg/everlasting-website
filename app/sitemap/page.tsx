import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { FadeUp } from "@/components/motion/FadeUp";
import { serviceSlugs, services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "A full list of pages on the Everlasting Renovations website.",
  alternates: { canonical: "/sitemap" },
};

const mainLinks = [
  { href: "/", label: "Home", description: "Overview of our services, process, and proof of work." },
  { href: "/about", label: "About", description: "Our story, team, and values." },
  {
    href: "/get-a-quote",
    label: "Get a Free Estimate",
    description: "Request a free, no-pressure renovation estimate.",
  },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <h1 className="font-display text-4xl font-bold text-heading">Sitemap</h1>
            <p className="mt-3 text-content-muted">
              Every page on the Everlasting Renovations website, in one place.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-heading">Main</h2>
            <ul className="mt-4 divide-y divide-border/10 rounded-2xl border border-border/10 bg-surface-raised">
              {mainLinks.map((link) => (
                <li key={link.href} className="p-5">
                  <Link href={link.href} className="font-semibold text-heading hover:text-brand-gold-dark">
                    {link.label}
                  </Link>
                  <p className="mt-1 text-sm text-content-muted">{link.description}</p>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.15} className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-heading">Services</h2>
            <ul className="mt-4 divide-y divide-border/10 rounded-2xl border border-border/10 bg-surface-raised">
              {serviceSlugs.map((slug) => (
                <li key={slug} className="p-5">
                  <Link
                    href={`/services/${slug}`}
                    className="font-semibold text-heading hover:text-brand-gold-dark"
                  >
                    {services[slug].name}
                  </Link>
                  <p className="mt-1 text-sm text-content-muted">
                    {services[slug].shortDescription}
                  </p>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-heading">XML Sitemap</h2>
            <p className="mt-3 text-content-muted">
              For search engines:{" "}
              <Link href="/sitemap.xml" className="font-semibold text-brand-gold-dark hover:underline">
                /sitemap.xml
              </Link>
            </p>
          </FadeUp>
        </div>
      </main>
      <Footer />
    </>
  );
}
