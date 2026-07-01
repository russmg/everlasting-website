import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import type { ServiceContent } from "@/lib/services-data";

export function ServiceGallery({ service }: { service: ServiceContent }) {
  return (
    <section className="bg-surface-sunken/40 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-center font-semibold text-brand-gold-dark">GALLERY</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold text-heading">
            {service.name} Projects
          </h2>
        </FadeUp>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {service.gallery.map((img, i) => (
            <FadeUp key={img.alt} delay={i * 0.08} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-sunken">
                <Image
                  src={`/images/services/${service.slug}/gallery-${i + 1}.jpg`}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-content-muted">
          Representative imagery — actual project photos coming soon.
        </p>
      </div>
    </section>
  );
}
