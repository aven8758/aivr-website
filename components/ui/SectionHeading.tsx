"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={0}
      className={`mb-10 md:mb-14 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base md:mt-5">
          {description}
        </p>
      )}
    </motion.div>
  );
}
