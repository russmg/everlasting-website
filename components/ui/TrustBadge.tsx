import type { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

export function TrustBadge({
  icon: Icon,
  label,
  variant = "light",
}: {
  icon: LucideIcon;
  label: string;
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold",
        variant === "light"
          ? "border-border/20 bg-surface-raised text-heading"
          : "border-border-inverse/20 bg-white/10 text-on-inverse"
      )}
    >
      <Icon className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
