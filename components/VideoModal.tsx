"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import videoThumb from "@/assets/images/video-thumb.jpg";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  /** Local MP4 path, e.g. /videos/promo.mp4 */
  src?: string;
  /** Optional YouTube / Bilibili embed URL */
  embedUrl?: string;
};

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
    </svg>
  );
}

export function HeroPlayPauseButton({
  isPlaying,
  onToggle,
}: {
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ opacity: 0.92 }}
      whileTap={{ scale: 0.98 }}
      aria-label={isPlaying ? "Pause promotional video" : "Play promotional video"}
      className="inline-flex items-center gap-2.5 bg-[#5D9CEC] px-4 py-2.5 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-[#1A2B48] transition-opacity sm:px-5 sm:py-3 sm:text-[15px]"
    >
      {isPlaying ? (
        <PauseIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
      ) : (
        <PlayIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
      )}
      <span>{isPlaying ? "Pause" : "Play"}</span>
    </motion.button>
  );
}

export function VideoPromoTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Play promotional video"
      className="group relative z-30 h-[80px] w-[140px] overflow-hidden rounded-lg border border-white/15 shadow-lg sm:h-[120px] sm:w-[200px]"
    >
      <Image
        src={videoThumb}
        alt="Promotional video thumbnail"
        fill
        sizes="(max-width: 640px) 140px, 200px"
        className="object-cover transition-[filter] duration-300 group-hover:brightness-125"
      />
      <motion.span
        className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/15"
        aria-hidden
      >
        <motion.span
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
        >
          <PlayIcon className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6" />
        </motion.span>
      </motion.span>
    </motion.button>
  );
}

export default function VideoModal({
  isOpen,
  onClose,
  src = "/videos/promo.mp4",
  embedUrl,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = useCallback(() => {
    videoRef.current?.pause();
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (!isOpen) videoRef.current?.pause();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Promotional video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-3 backdrop-blur-sm sm:px-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[95vw] max-w-5xl sm:w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close video"
              className="absolute -top-10 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:-top-12 sm:right-0 sm:h-10 sm:w-10"
            >
              <CloseIcon />
            </button>

            <motion.div
              layout
              className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl"
            >
              {embedUrl ? (
                <div className="relative aspect-video w-full">
                  <iframe
                    src={embedUrl}
                    title="Promotional video"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                /* Lazy load: video element only mounts when modal opens */
                <video
                  ref={videoRef}
                  src={src}
                  controls
                  autoPlay
                  playsInline
                  className="aspect-video w-full bg-black"
                />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
