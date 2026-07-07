import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type Variant = "gold" | "outline" | "brown" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold text-base px-6 py-3 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

/**
 * White text on gold (#C97429) is only ~3.5:1 — fails AA for normal text
 * (needs 4.5:1; the WCAG "large text" exemption needs >=18.66px bold, and
 * this button text is 16px). Dark slate text on gold passes at ~5:1, and
 * stays >=7:1 on the lighter hover state. Do not switch this back to white
 * text without bumping the gold background to a darker, verified shade.
 *
 * Uses text-on-gold (fixed dark slate), NOT text-content: content is a
 * theme-flipping token (near-white in dark mode), but brand-gold doesn't
 * invert brightness the same way between themes, so that pairing passed
 * light mode (~5:1) while failing dark mode badly (~2:1) — caught via a
 * live Lighthouse/axe run.
 */
const variants: Record<Variant, string> = {
  gold: "bg-brand-gold text-on-gold hover:bg-brand-gold-light",
  outline:
    "border-2 border-border text-heading hover:bg-surface-inverse hover:text-on-inverse",
  brown: "bg-surface-inverse text-on-inverse hover:bg-brand-brown-light",
  ghost: "text-heading hover:text-brand-gold-dark underline-offset-4 hover:underline",
};

export function CTAButton({
  href,
  variant = "gold",
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  /** Real disabled state, not just a dimmed look via opacity: WCAG color-
   * contrast exempts genuinely disabled controls, but opacity alone
   * doesn't communicate that semantically (axe still flags it as an
   * active low-contrast button) — this wires the actual `disabled`
   * attribute so it counts as disabled correctly. */
  disabled?: boolean;
}) {
  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
