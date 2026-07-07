"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

const CROSSFADE_SECONDS = 1.2;

/**
 * Alternates between two ambient background clips, crossfading a couple
 * seconds before each one ends so the loop never hard-cuts back to frame 1.
 * Falls back to a static poster for prefers-reduced-motion.
 */
export function AmbientVideoLoop({
  sources,
  poster,
  className,
}: {
  sources: [string, string];
  poster: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const videoRefs = [videoRefA, videoRefB];
  const [activeIndex, setActiveIndex] = useState(0);
  const crossfadingRef = useRef(false);

  useEffect(() => {
    crossfadingRef.current = false;
  }, [activeIndex]);

  useEffect(() => {
    if (reduceMotion) return;
    const active = videoRefs[activeIndex].current;
    if (!active) return;

    function handleTimeUpdate() {
      if (!active || crossfadingRef.current) return;
      const remaining = active.duration - active.currentTime;
      if (Number.isFinite(remaining) && remaining <= CROSSFADE_SECONDS) {
        crossfadingRef.current = true;
        const nextIndex = activeIndex === 0 ? 1 : 0;
        const next = videoRefs[nextIndex].current;
        if (next) {
          next.currentTime = 0;
          next.play().catch(() => {});
        }
        setActiveIndex(nextIndex);
      }
    }

    active.addEventListener("timeupdate", handleTimeUpdate);
    return () => active.removeEventListener("timeupdate", handleTimeUpdate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, reduceMotion]);

  if (reduceMotion) {
    return (
      <Image src={poster} alt="" fill priority className={className ? undefined : "object-cover"} />
    );
  }

  return (
    <>
      {sources.map((src, i) => (
        <video
          key={src}
          ref={videoRefs[i]}
          src={src}
          muted
          playsInline
          preload="auto"
          autoPlay={i === 0}
          poster={i === 0 ? poster : undefined}
          className={`${className ?? "absolute inset-0 h-full w-full object-cover"} transition-opacity duration-[1200ms] ease-linear`}
          style={{ opacity: activeIndex === i ? 1 : 0 }}
        />
      ))}
    </>
  );
}
