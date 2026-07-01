import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const steps = [
  {
    step: "01",
    title: "Consultation",
    body: "We meet in your home to discuss your goals, budget, and how your family lives in the space.",
  },
  {
    step: "02",
    title: "3D Rendering & Proposal",
    body: "Precise measurements, a virtual 3D rendering, and an itemized estimate before any work begins.",
  },
  {
    step: "03",
    title: "Meticulous Construction",
    body: "A dedicated crew, a clean job site, and daily communication from start to finish.",
  },
  {
    step: "04",
    title: "Final Walkthrough & Warranty Handover",
    body: "We walk the finished project with you and hand over your written 4-year warranty.",
  },
];

export function ProcessBand() {
  return (
    <section id="process" className="bg-surface-inverse px-4 py-20 text-on-inverse sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-center font-semibold text-on-inverse">OUR PROCESS</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold">
            A clear path from vision to reality
          </h2>
        </FadeUp>
        <StaggerChildren className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StaggerItem key={s.step}>
              {/* full-opacity gold-light — the prior /60 opacity dropped contrast on brown below 3:1 */}
              <span className="font-display text-4xl font-bold text-brand-gold-light">
                {s.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-on-inverse/75">{s.body}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
