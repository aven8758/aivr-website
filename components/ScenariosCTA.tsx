"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import SectionGlow from "./ui/SectionGlow";
import SiteButton from "./ui/SiteButton";
import { fadeUp, staggerContainer } from "@/lib/animations";

const SCENARIOS = [
  "Flight academy training",
  "Vocational aviation programs",
  "Airline recurrent training",
  "Training center deployment",
  "Aviation science outreach",
] as const;

export default function ScenariosCTA() {
  return (
    <section
      id="scenarios"
      className="relative overflow-hidden border-t border-white/5 bg-[#070707] py-16 sm:py-20 md:py-24"
    >
      <SectionGlow />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
        <SectionHeading
          title="Where It Fits"
          description="From academy instruction to airline recurrent training — deployable across the full aviation training chain."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mb-10 sm:gap-x-8"
        >
          {SCENARIOS.map((label, i) => (
            <motion.li key={label} variants={fadeUp} custom={i} className="list-none">
              <span className="group relative inline-block px-1 py-1 font-mono text-[11px] uppercase tracking-wider text-white/70 transition-colors duration-300 hover:text-white sm:text-xs">
                {label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-white/60 transition-all duration-300 ease-out group-hover:w-full" />
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          className="flex justify-center"
        >
          <SiteButton href="/contact" variant="bracket">
            Contact Us
            <span aria-hidden>→</span>
          </SiteButton>
        </motion.div>
      </div>
    </section>
  );
}
