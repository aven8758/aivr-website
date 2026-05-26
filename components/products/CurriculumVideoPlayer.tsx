"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

export type CurriculumLesson = {
  id: string;
  title: string;
  /** Set false until the YouTube video is ready */
  available: boolean;
  /**
   * YouTube video ID from URLs like https://youtu.be/VIDEO_ID
   * When ready: set available: true and add the ID — no redeploy of video files needed.
   */
  youtubeId?: string;
};

export const A320_SOP_LESSONS: CurriculumLesson[] = [
  {
    id: "preliminary-cockpit-preparation",
    title: "Preliminary Cockpit Preparation",
    available: true,
    youtubeId: "mIRo3UC9tN4",
  },
  {
    id: "exterior-walkaround",
    title: "Exterior Walkaround",
    available: false,
  },
  {
    id: "cockpit-preparation",
    title: "Cockpit Preparation",
    available: false,
    // youtubeId: "",
  },
  {
    id: "before-pushback-or-start-engine",
    title: "Before Pushback or Start Engine",
    available: false,
    // youtubeId: "",
  },
  {
    id: "taxi",
    title: "Taxi",
    available: false,
    // youtubeId: "",
  },
  {
    id: "takeoff-before-takeoff",
    title: "Takeoff, Before Takeoff",
    available: false,
    // youtubeId: "",
  },
  {
    id: "climb",
    title: "Climb",
    available: false,
    // youtubeId: "",
  },
  {
    id: "cruise",
    title: "Cruise",
    available: false,
    // youtubeId: "",
  },
  {
    id: "descent-preparation",
    title: "Descent Preparation",
    available: false,
  },
  {
    id: "descent",
    title: "Descent",
    available: false,
  },
  {
    id: "approach",
    title: "Approach",
    available: false,
  },
  {
    id: "landing",
    title: "Landing",
    available: false,
  },
  {
    id: "after-landing",
    title: "After Landing",
    available: false,
  },
  {
    id: "parking",
    title: "Parking",
    available: false,
  },
  {
    id: "shutdown",
    title: "Shutdown",
    available: false,
  },
];

const AVAILABLE_LESSONS = A320_SOP_LESSONS.filter((l) => l.available && l.youtubeId);

function PlayIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function CurriculumVideoPlayer() {
  const [selectedId, setSelectedId] = useState<string | null>(
    AVAILABLE_LESSONS[0]?.id ?? null
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const selected = A320_SOP_LESSONS.find((l) => l.id === selectedId) ?? null;
  const canPlay = Boolean(selected?.available && selected.youtubeId);

  const selectLesson = useCallback((lesson: CurriculumLesson) => {
    if (!lesson.available || !lesson.youtubeId) return;
    setSelectedId(lesson.id);
    setIsPlaying(false);
  }, []);

  const handlePlay = () => {
    if (!canPlay) return;
    setIsPlaying(true);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[min(380px,100%)_1fr] lg:items-stretch lg:gap-8">
      <aside className="min-h-0">
        <ul
          className="linear-card flex max-h-[min(70vh,520px)] flex-col overflow-y-auto border-white/10 p-0 scrollbar-none lg:h-full lg:max-h-none lg:overflow-visible"
          role="listbox"
          aria-label="A320 SOP lessons"
        >
          {A320_SOP_LESSONS.map((lesson) => {
            const isActive = lesson.id === selectedId;
            const isDisabled = !lesson.available || !lesson.youtubeId;

            return (
              <li key={lesson.id} role="presentation" className="flex min-h-0 flex-1">
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  aria-disabled={isDisabled}
                  disabled={isDisabled}
                  onClick={() => selectLesson(lesson)}
                  className={`flex min-h-0 flex-1 items-center border-b border-white/10 px-4 text-left text-sm transition-colors duration-200 last:border-b-0 sm:text-[15px] ${
                    isDisabled
                      ? "cursor-not-allowed text-gray-600"
                      : isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-gray-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {lesson.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="linear-card overflow-hidden">
          <div className="relative aspect-video w-full bg-[#0a0a0a]">
            {isPlaying && canPlay && selected.youtubeId ? (
              <iframe
                key={selected.id}
                title={selected.title}
                src={`https://www.youtube-nocookie.com/embed/${selected.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                className="absolute inset-0 h-full w-full border-0 bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                {selected ? (
                  <>
                    <p className="max-w-md text-sm font-medium text-white/90 sm:text-base">
                      {selected.title}
                    </p>
                    {canPlay ? (
                      <>
                        <p className="text-xs text-gray-500 sm:text-sm">
                          Click play to watch on YouTube
                        </p>
                        <motion.button
                          type="button"
                          onClick={handlePlay}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`Play ${selected.title}`}
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:h-[72px] sm:w-[72px]"
                        >
                          <PlayIcon className="h-8 w-8 sm:h-9 sm:w-9" />
                        </motion.button>
                      </>
                    ) : (
                      <p className="text-xs text-gray-500 sm:text-sm">Coming soon</p>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-gray-500">Select an available lesson from the list</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
