"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { clsx } from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/site-config";
import { CTAButton } from "./CTAButton";

export function Header({ minimal = false }: { minimal?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (minimal) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [minimal]);

  const solid = minimal || scrolled;

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-colors duration-300",
        solid ? "bg-surface/95 shadow-sm backdrop-blur" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="Everlasting Renovations — Home">
          <span className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm">
            <Image
              src="/logo-wordmark.png"
              alt="Everlasting Renovations, Inc."
              width={156}
              height={86}
              sizes="(max-width: 639px) 73px, 88px"
              className="h-10 w-auto sm:h-12"
              priority
            />
          </span>
        </Link>

        {!minimal && (
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-semibold transition-colors hover:text-brand-gold-dark",
                  pathname === link.href ? "text-brand-gold-dark" : "text-heading"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-heading hover:text-brand-gold-dark"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
          {!minimal && (
            <CTAButton href="/get-a-quote" variant="gold">
              Get Free Estimate
            </CTAButton>
          )}
        </div>

        {!minimal && (
          <button
            type="button"
            className="flex items-center justify-center rounded-lg p-2 text-heading md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        )}

        {minimal && (
          <a
            href={siteConfig.contact.phoneHref}
            aria-label={`Call ${siteConfig.contact.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-heading md:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
        )}
      </div>

      <AnimatePresence initial={false}>
        {!minimal && mobileOpen && (
          <motion.nav
            key="mobile-nav"
            initial={reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/10 bg-surface md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-semibold text-heading"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2 text-base font-semibold text-heading"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
              <CTAButton href="/get-a-quote" variant="gold" className="w-full">
                Get Free Estimate
              </CTAButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
