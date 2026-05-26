"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageSlider, { HeroSliderDots } from "./ImageSlider";
import { HeroPlayPauseButton } from "./VideoModal";

const PROMO_SRC = "/videos/promo.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const HERO_SCRIM =
  "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.62) 32%, rgba(0,0,0,0.22) 58%, transparent 82%)," +
  "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 42%, transparent 72%)";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [pauseSlideshow, setPauseSlideshow] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const sliderY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  const toggleMedia = () => {
    if (isVideoPlaying) {
      videoRef.current?.pause();
      setIsVideoPlaying(false);
    } else {
      setIsVideoPlaying(true);
    }
  };

  useEffect(() => {
    if (isVideoPlaying) {
      videoRef.current?.play().catch(() => {});
    }
  }, [isVideoPlaying]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[125vh] bg-void"
      aria-label="Hero"
    >
      <div className="sticky top-0 h-screen min-h-[100dvh] overflow-hidden">
        <motion.div
          style={{ y: sliderY }}
          className="pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        >
          <div
            className="absolute left-1/2 top-[36%] h-[min(85vw,640px)] w-[min(95vw,960px)] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 38%, transparent 72%)",
            }}
          />
        </motion.div>

        <motion.div style={{ y: sliderY }} className="absolute inset-0 z-0">
          {isVideoPlaying ? (
            <video
              ref={videoRef}
              src={PROMO_SRC}
              muted
              playsInline
              loop
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          ) : (
            <ImageSlider
              showOverlay={false}
              showDots={false}
              activeIndex={slideIndex}
              onIndexChange={setSlideIndex}
              pauseAutoplay={pauseSlideshow}
            />
          )}
        </motion.div>

        {!isVideoPlaying && (
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ background: HERO_SCRIM }}
            aria-hidden
          />
        )}

        <HeroSliderDots
          activeIndex={slideIndex}
          onIndexChange={setSlideIndex}
          onPauseAutoplay={setPauseSlideshow}
          className="absolute bottom-6 left-1/2 z-[25] -translate-x-1/2 sm:bottom-8 md:bottom-10"
        />

        <motion.div className="pointer-events-none relative z-20 h-full w-full">
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="pointer-events-auto absolute left-0 right-0 top-[50%] mx-auto w-full max-w-[1400px] px-4 text-left sm:top-[52%] sm:px-6 md:top-[54%] md:px-10 lg:px-14"
          >
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-3xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-[clamp(1.35rem,5vw,3.35rem)] font-bold leading-[1.1] tracking-tight text-transparent drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)] sm:text-[clamp(1.65rem,4.3vw,4rem)] lg:text-[clamp(2rem,3.67vw,4.67rem)]"
            >
              AIVR A320 SOPs Trainer
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-4 whitespace-nowrap text-[clamp(0.6875rem,2.1vw,1.125rem)] leading-relaxed tracking-wide text-gray-300 drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] sm:mt-5"
            >
              Full cockpit fidelity · Smart interaction · Standard SOP · Integrated hardware & software
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8"
            >
              <HeroPlayPauseButton isPlaying={isVideoPlaying} onToggle={toggleMedia} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
