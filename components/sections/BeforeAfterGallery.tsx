import { FadeUp } from "@/components/motion/FadeUp";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

const items = [
  {
    key: "kitchen",
    before: "/images/gallery/kitchen-before.jpg",
    after: "/images/gallery/kitchen-after.jpg",
    caption: "Kitchen remodel — Lake Forest, CA",
  },
  {
    key: "bathroom",
    before: "/images/gallery/bathroom-before.jpg",
    after: "/images/gallery/bathroom-after.jpg",
    caption: "Bathroom renovation — Mission Viejo, CA",
  },
  {
    key: "exterior",
    before: "/images/gallery/exterior-before.jpg",
    after: "/images/gallery/exterior-after.jpg",
    caption: "Exterior painting — Laguna Niguel, CA",
  },
];

export function BeforeAfterGallery() {
  return (
    <section id="gallery" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-center font-semibold text-brand-gold-dark">SEE THE DIFFERENCE</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold text-heading">
            Before &amp; After
          </h2>
        </FadeUp>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeUp key={item.key} delay={i * 0.1}>
              <BeforeAfterSlider
                beforeSrc={item.before}
                afterSrc={item.after}
                beforeAlt={`${item.caption} — before`}
                afterAlt={`${item.caption} — after`}
                caption={item.caption}
                sizes="(max-width: 1023px) 100vw, 33vw"
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
