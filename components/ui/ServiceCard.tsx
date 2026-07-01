import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceContent } from "@/lib/services-data";

export function ServiceCard({ service, image }: { service: ServiceContent; image: string }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/10 bg-surface-raised shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-sunken">
        <Image
          src={image}
          alt={`${service.name} project by Everlasting Renovations`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-semibold text-heading">{service.name}</h3>
        <p className="flex-1 text-sm text-content-muted">{service.shortDescription}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-dark">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
