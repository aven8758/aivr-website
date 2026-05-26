"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import SectionGlow from "./ui/SectionGlow";
import { fadeUp, staggerContainer } from "@/lib/animations";
import C5 from "@/assets/images/C5.png";

export default function ProductValue() {
  return (
    <section
      id="value"
      className="relative overflow-hidden border-t border-white/5 bg-[#070707] py-20 sm:py-24 md:py-28"
    >
      <SectionGlow />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <SectionHeading title="Built for Real Training" align="left" />
            <motion.div className="space-y-4 text-sm leading-loose text-gray-400 sm:text-base">
              <p>
                <strong className="font-medium text-white/90">AIVR A320 SOPs Trainer</strong> is
                an integrated VR simulation system for flight academies, training centers, and
                aviation colleges.
              </p>
              <p>
                Beyond 1:1 cockpit fidelity and standard SOP workflows, our proprietary{" "}
                <strong className="font-medium text-white/90">VR aviation training seat</strong>{" "}
                uses foot-controlled movement to eliminate fatigue and interaction limits — enabling
                safe, efficient, repeatable aviation training.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <div className="highlight-card overflow-hidden">
              <div className="relative aspect-[4/3] border-b border-white/10 bg-white/[0.06] lg:aspect-[5/4]">
                <Image
                  src={C5}
                  alt="A320 cockpit VR training scene"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
