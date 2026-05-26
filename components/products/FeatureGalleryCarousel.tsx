"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import L1 from "@/assets/images/L1.jpg";
import L2 from "@/assets/images/L2.jpg";
import L3 from "@/assets/images/L3.jpg";
import L4 from "@/assets/images/L4.jpg";
import L5 from "@/assets/images/L5.jpg";
import L6 from "@/assets/images/L6.jpg";
import L7 from "@/assets/images/L7.jpg";
import L8 from "@/assets/images/L8.jpg";
import L9 from "@/assets/images/L9.jpg";
import L10 from "@/assets/images/L10.jpg";

const GALLERY_IMAGES: StaticImageData[] = [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10];

const SCROLL_SPEED = 0.65;

export default function FeatureGalleryCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const directionRef = useRef(1);
  const [paused, setPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    let frameId = 0;

    const tick = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (viewport && track && !paused) {
        const maxScroll = Math.max(0, track.scrollWidth - viewport.clientWidth);
        if (maxScroll > 0) {
          offsetRef.current += directionRef.current * SCROLL_SPEED;
          if (offsetRef.current >= maxScroll) {
            offsetRef.current = maxScroll;
            directionRef.current = -1;
          } else if (offsetRef.current <= 0) {
            offsetRef.current = 0;
            directionRef.current = 1;
          }
          track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
        }
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [paused]);

  return (
    <div
      ref={viewportRef}
      className="mb-10 overflow-hidden"
      onMouseLeave={() => {
        setPaused(false);
        setHoveredIndex(null);
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max items-start gap-4 will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {GALLERY_IMAGES.map((src, index) => (
          <div
            key={index}
            className={`shrink-0 border bg-white/[0.04] transition-[border-color] duration-200 ${
              hoveredIndex === index ? "border-[#facc15]" : "border-white/10"
            }`}
            onMouseEnter={() => {
              setPaused(true);
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
            }}
          >
            <Image
              src={src}
              alt=""
              width={src.width}
              height={src.height}
              className="block h-auto w-auto max-w-none"
              sizes={`${src.width}px`}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
