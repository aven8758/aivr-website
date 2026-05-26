"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Y1 from "@/assets/images/Y1.png";
import Y2 from "@/assets/images/Y2.png";
import Y3 from "@/assets/images/Y3.png";
import Y4 from "@/assets/images/Y4.png";

export const HERO_SLIDE_COUNT = 4;
const SLIDES: StaticImageData[] = [Y1, Y2, Y3, Y4];
const INTERVAL_MS = 5000;

type ImageSliderProps = {
  className?: string;
  showOverlay?: boolean;
  showDots?: boolean;
  activeIndex?: number;
  onIndexChange?: (index: number) => void;
  pauseAutoplay?: boolean;
};

export function HeroSliderDots({
  activeIndex,
  onIndexChange,
  onPauseAutoplay,
  className = "",
}: {
  activeIndex: number;
  onIndexChange: (index: number) => void;
  onPauseAutoplay?: (paused: boolean) => void;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-auto flex items-center gap-2.5 ${className}`}
      onMouseEnter={() => onPauseAutoplay?.(true)}
      onMouseLeave={() => onPauseAutoplay?.(false)}
      role="tablist"
      aria-label="Hero image carousel"
    >
      {SLIDES.map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-label={`Slide ${i + 1}`}
          aria-selected={i === activeIndex}
          onMouseEnter={() => onIndexChange(i)}
          onFocus={() => onIndexChange(i)}
          onClick={() => onIndexChange(i)}
          className={`rounded-full transition-all duration-300 ${
            i === activeIndex
              ? "h-2.5 w-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              : "h-2 w-2 bg-white/35 hover:bg-white/80"
          }`}
        />
      ))}
    </div>
  );
}

export default function ImageSlider({
  className = "",
  showOverlay = true,
  showDots = true,
  activeIndex: controlledIndex,
  onIndexChange,
  pauseAutoplay: externalPause = false,
}: ImageSliderProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [pauseDotsHover, setPauseDotsHover] = useState(false);
  const pauseAutoplay = externalPause || pauseDotsHover;
  const isControlled = controlledIndex !== undefined && onIndexChange !== undefined;
  const index = isControlled ? controlledIndex : internalIndex;

  const setIndex = useCallback(
    (i: number) => {
      const next = i % SLIDES.length;
      if (isControlled) {
        onIndexChange(next);
      } else {
        setInternalIndex(next);
      }
    },
    [isControlled, onIndexChange]
  );

  useEffect(() => {
    if (pauseAutoplay) return;
    const timer = setInterval(() => {
      setIndex(index + 1);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [index, pauseAutoplay, setIndex]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          aria-hidden
        >
          <Image
            src={SLIDES[index]}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {showOverlay && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 100%)",
          }}
          aria-hidden
        />
      )}

      {showDots && !isControlled && (
        <div
          className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5 sm:bottom-8 md:bottom-10"
          onMouseEnter={() => setPauseDotsHover(true)}
          onMouseLeave={() => setPauseDotsHover(false)}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onMouseEnter={() => setIndex(i)}
              onFocus={() => setIndex(i)}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "h-2.5 w-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                  : "h-2 w-2 bg-white/35 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
