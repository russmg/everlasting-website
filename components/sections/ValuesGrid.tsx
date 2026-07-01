import { HeartHandshake, Gem, Users, Cross } from "lucide-react";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const values = [
  {
    icon: HeartHandshake,
    title: "Honesty",
    body: "We tell you the truth about timelines, costs, and tradeoffs — even when it's not what you want to hear. No surprise change orders.",
  },
  {
    icon: Gem,
    title: "Quality",
    body: "We use premium materials and proper technique on the parts you'll never see, because that's what determines whether a renovation lasts.",
  },
  {
    icon: Users,
    title: "Family",
    body: "We're a family-owned business, and we treat your home — and your family's daily life during construction — with that same care.",
  },
  {
    icon: Cross,
    title: "Faith",
    body: "Our work is grounded in the belief that how we treat people matters as much as what we build. It shapes every interaction.",
  },
];

export function ValuesGrid() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-center font-semibold text-brand-gold-dark">OUR VALUES</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold text-heading">
            What Guides Our Work
          </h2>
        </FadeUp>
        <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem
              key={value.title}
              className="rounded-2xl border border-border/10 bg-surface-raised p-6 text-center shadow-sm"
            >
              <value.icon className="mx-auto h-9 w-9 text-brand-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold text-heading">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-content-muted">{value.body}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
