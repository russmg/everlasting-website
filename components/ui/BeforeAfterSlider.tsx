"use client";

import { useRef, useState, useCallback, useId } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Drag-to-reveal before/after slider with spring physics + full keyboard
 * support (arrow keys move the handle by 5%, Home/End jump to 0/100).
 * Reduced-motion users get a static 50/50 split with no animated handle.
 *
 * Honesty note: pairs passed in here must be presented as *representative*
 * imagery, never as a documented before/after of a specific real project,
 * unless the photos are genuinely from a real Everlasting Renovations job.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
  representative = true,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
  representative?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderId = useId();

  const [position, setPosition] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as Element).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let next = position;
    if (e.key === "ArrowLeft") next = Math.max(0, position - 5);
    else if (e.key === "ArrowRight") next = Math.min(100, position + 5);
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = 100;
    else return;
    e.preventDefault();
    setPosition(next);
  };

  const clipPosition = reduceMotion ? 50 : position;

  return (
    <figure>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl bg-surface-sunken touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - clipPosition}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="absolute left-3 top-3 rounded-full bg-brand-slate/70 px-3 py-1 text-xs font-semibold text-white">
          Before
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-brand-gold/90 px-3 py-1 text-xs font-semibold text-white">
          After
        </div>

        {!reduceMotion && (
          <motion.div
            role="slider"
            tabIndex={0}
            aria-label="Drag to compare before and after"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            id={sliderId}
            onKeyDown={handleKeyDown}
            className="absolute top-0 bottom-0 w-1 cursor-ew-resize bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
            style={{ left: `${clipPosition}%`, x: "-50%" }}
          >
            <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M4 2L1 7L4 12M10 2L13 7L10 12" stroke="#6B2D0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.div>
        )}
      </div>

      {(caption || representative) && (
        <figcaption className="mt-3 space-y-1">
          {caption && <p className="text-sm font-medium text-content">{caption}</p>}
          {representative && (
            <p className="text-xs text-content-muted">
              Representative imagery — actual project photos coming soon.
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
