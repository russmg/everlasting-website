import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { serviceSlugs, services } from "@/lib/services-data";

// lucide-react dropped brand icons from its core set — inline minimal SVGs instead.
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer({ minimal = false }: { minimal?: boolean }) {
  if (minimal) {
    return (
      <footer className="bg-surface-inverse px-4 py-8 text-center text-on-inverse">
        <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
        <p className="mt-2 text-sm">
          <a href={siteConfig.contact.phoneHref} className="font-semibold underline">
            {siteConfig.contact.phone}
          </a>{" "}
          · {siteConfig.license.display}
        </p>
      </footer>
    );
  }

  return (
    <footer className="bg-surface-inverse px-4 py-16 text-on-inverse sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="Everlasting Renovations — Home">
            <span className="flex items-center rounded-lg bg-white p-2">
              <Image
                src="/logo.png"
                alt="Everlasting Renovations, Inc."
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-on-inverse/75">
            A Christian, family-owned general contractor building lasting homes across South
            Orange County since {siteConfig.founded}.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-on-inverse/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {siteConfig.contact.address.full}
          </p>
          <p className="mt-2 text-sm text-on-inverse/75">{siteConfig.license.display}</p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-on-inverse/75">
            <li>
              <Link href="/#services" className="hover:text-on-inverse">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#process" className="hover:text-on-inverse">
                Process
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="hover:text-on-inverse">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-on-inverse">
                About
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-on-inverse">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="hover:text-on-inverse">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-on-inverse/75">
            {serviceSlugs.map((slug) => (
              <li key={slug}>
                <Link href={`/services/${slug}`} className="hover:text-on-inverse">
                  {services[slug].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-on-inverse/75">
            <li>
              <a href={siteConfig.contact.phoneHref} className="flex items-center gap-2 hover:text-on-inverse">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-on-inverse">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li>{siteConfig.contact.hours}</li>
          </ul>
          <div className="mt-4 flex gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Everlasting Renovations on Facebook"
              className="text-on-inverse/75 hover:text-on-inverse"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Everlasting Renovations on Instagram"
              className="text-on-inverse/75 hover:text-on-inverse"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border-inverse/10 pt-6 text-xs text-on-inverse/50">
        © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.license.display}
      </div>
    </footer>
  );
}
