"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionGlow from "@/components/ui/SectionGlow";
import { fadeUp } from "@/lib/animations";

const FAQ_ITEMS = [
  {
    question: "Which aircraft types are supported?",
    answer:
      "A320 is available today, with planned support for B737, A330, A350, B747, and additional types.",
  },
  {
    question: "Which VR devices are supported?",
    answer: "Pico VR standalone headsets are the primary target — ready out of the box. Mainstream PC VR headsets are also supported.",
  },
  {
    question: "What is the difference between training and exam mode?",
    answer: [
      "Training mode: highlights, arrows, and step guidance for learning and practice.",
      "Exam mode: no hints, automatic scoring, designed for competency assessment.",
    ],
  },
  {
    question: "Does it support PM/PF dual roles?",
    answer: "Yes. Captain / First Officer and PM / PF roles can be switched during a session.",
  },
  {
    question: "Is there AI assistance?",
    answer:
      "Yes. A virtual AI co-pilot can guide trainees through steps and help beginners ramp up quickly.",
  },
  {
    question: "Are training results saved and accessible?",
    answer:
      "Yes. The system generates evaluation reports, syncs training logs to the cloud, and supports LMS review.",
  },
  {
    question: "Can it integrate with our LMS or admin platform?",
    answer:
      "Yes. Data APIs are available for grade sync, unified accounts, and admin dashboard integration.",
  },
  {
    question: "Do you provide installation, training, and support?",
    answer:
      "Full deployment, installation, onboarding, technical support, and ongoing updates are included.",
  },
] as const;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 text-white/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function FaqAnswer({ answer }: { answer: string | readonly string[] }) {
  if (Array.isArray(answer)) {
    return (
      <ul className="space-y-2">
        {answer.map((line) => (
          <li key={line} className="flex gap-2 text-sm leading-relaxed text-gray-400">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
            {line}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-sm leading-relaxed text-gray-400">{answer}</p>;
}

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string | readonly string[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="linear-card bg-white/[0.03] transition-colors duration-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="text-sm font-medium text-white sm:text-[15px]">{question}</span>
        <ChevronIcon open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/5 px-5 pb-4 pt-1 sm:px-6 sm:pb-5">
              <FaqAnswer answer={answer} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#070707] py-16 sm:py-20 md:py-24">
      <SectionGlow />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Aircraft support, device compatibility, training modes, and deployment — answered in one place."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          className="mx-auto max-w-3xl space-y-3"
        >
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-gray-500">
          More questions?{" "}
          <Link href="/contact" className="text-white/80 underline-offset-4 hover:text-white hover:underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
