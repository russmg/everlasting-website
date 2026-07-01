import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

/**
 * No real photo of Matthew Swavely (or crew) exists yet. Rather than
 * generating an AI face and presenting it as a real, named person — a more
 * serious misrepresentation than illustrative project photography — we use
 * brand-colored monogram avatars until real headshots arrive.
 */
const team = [
  {
    initials: "MS",
    name: "Matthew Swavely",
    role: "Owner & General Contractor",
    bio: "Founded Everlasting Renovations in 2015 on the belief that contracting should mean honest work and a home treated like your own.",
  },
  {
    initials: "ES",
    name: "Matthew Swavely Sr.",
    role: "Operations & Project Oversight",
    bio: "Brings decades of hands-on construction experience to every project's planning and quality control.",
  },
  {
    initials: "CR",
    name: "Crew Lead",
    role: "Construction & Site Management",
    bio: "Leads our dedicated on-site crews — daily communication, clean job sites, and meticulous craftsmanship.",
  },
];

export function TeamGrid() {
  return (
    <section className="bg-surface-sunken/40 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-center font-semibold text-brand-gold-dark">MEET THE TEAM</p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold text-heading">
            The People Behind the Work
          </h2>
        </FadeUp>
        <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <StaggerItem
              key={member.name}
              className="rounded-2xl border border-border/10 bg-surface-raised p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-surface-inverse font-display text-2xl font-bold text-on-inverse">
                {member.initials}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-heading">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-brand-gold-dark">{member.role}</p>
              <p className="mt-2 text-sm text-content-muted">{member.bio}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <p className="mt-6 text-center text-xs text-content-muted">
          Team photos coming soon.
        </p>
      </div>
    </section>
  );
}
