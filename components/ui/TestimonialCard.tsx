import { Star } from "lucide-react";

export function TestimonialCard({
  quote,
  name,
  city,
  rating,
}: {
  quote: string;
  name: string;
  city: string;
  rating: number;
}) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-border/10 bg-surface-raised p-6 shadow-sm">
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-brand-gold text-brand-gold" : "text-border/15"}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="flex-1 text-content">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-heading">{name}</p>
        <p className="text-sm text-content-muted">{city}</p>
      </div>
    </div>
  );
}
