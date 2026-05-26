"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionGlow from "./ui/SectionGlow";
import { fadeUp, staggerContainer } from "@/lib/animations";
import C1 from "@/assets/images/C1.png";
import C2 from "@/assets/images/C2.png";
import C3 from "@/assets/images/C3.png";
import C4 from "@/assets/images/C4.png";

const HIGHLIGHTS = [
  {
    title: "Integrated Hardware & Software",
    description:
      "Proprietary VR aviation training seat with foot-controlled movement — hands-free operation for long walk-around flows.",
    image: C1,
    alt: "VR aviation training seat",
  },
  {
    title: "Full SOP Curriculum",
    description:
      "End-to-end standard procedures from cockpit prep through walk-around, taxi, takeoff, climb, and cruise.",
    image: C2,
    alt: "SOP workflow interface",
  },
  {
    title: "Training & Exam Modes",
    description:
      "Guided training with visual cues, or exam mode with no hints — automatic scoring and full traceability.",
    image: C3,
    alt: "Training and exam mode",
  },
  {
    title: "AI Assist & Cloud Sync",
    description:
      "Virtual AI co-pilot for guided learning, with scores uploaded in real time and LMS integration support.",
    image: C4,
    alt: "Cloud management platform",
  },
] as const;

function HighlightCard({
  item,
  index,
}: {
  item: (typeof HIGHLIGHTS)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group highlight-card flex flex-col"
    >
      <div className="relative aspect-[5/3] shrink-0 overflow-hidden border-b border-white/10 bg-white/[0.06] sm:aspect-[2/1] lg:aspect-[16/10]">
        <Image
          src={item.image as StaticImageData}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover object-center"
        />
      </div>
      <div className="flex shrink-0 flex-col gap-2 border-t border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5 sm:py-4">
        <h3 className="text-sm font-bold leading-snug text-white sm:text-base lg:text-lg">
          {item.title}
        </h3>
        <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function Highlights() {
  return (
    <section
      id="products"
      className="relative min-h-screen overflow-hidden border-t border-white/5 bg-void"
    >
      <SectionGlow />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 md:min-h-[calc(100vh-4rem)] md:px-10 md:py-14 lg:px-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="mb-6 shrink-0 md:mb-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
                Why AIVR
              </h2>
              <p className="mt-4 whitespace-nowrap text-[clamp(0.6875rem,1.75vw,1rem)] leading-relaxed text-gray-400">
                Hardware and software in sync — standard SOPs, dual-mode training, and cloud-ready management in one closed loop.
              </p>
            </div>
            <Link
              href="/products"
              className="link-gradient-gold shrink-0 self-start sm:pt-1.5"
            >
              View Product
              <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          {HIGHLIGHTS.map((item, i) => (
            <HighlightCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
