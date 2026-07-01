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
 */
const variants: Record<Variant, string> = {
  gold: "bg-brand-gold text-content hover:bg-brand-gold-light",
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
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
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
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
