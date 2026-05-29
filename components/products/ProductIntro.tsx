"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionGlow from "@/components/ui/SectionGlow";
import CurriculumVideoPlayer from "./CurriculumVideoPlayer";
import FeatureGalleryCarousel from "./FeatureGalleryCarousel";
import HardwareFlipImage from "./HardwareFlipImage";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Y1 from "@/assets/images/Y1.png";
import ProductFAQ from "./ProductFAQ";

const INSTALLATION_PDF = "/docs/AIVR Installation Instructions_V1.pdf";
const USER_GUIDE_PDF = "/docs/AIVR User Guide_V1.pdf";

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

function HeroDocButton({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hero-doc-btn w-full sm:w-auto">
      <span>{children}</span>
      <ExternalLinkIcon />
    </a>
  );
}

const SOFTWARE_FEATURES = [
  {
    title: "Onboarding Module",
    description:
      "VR fundamentals, controller button guides, locomotion, rotation, gaze interaction, magnifier reading, and wrist quick-menu tutorials.",
  },
  {
    title: "Smart Interaction System",
    description:
      "Trigger-based interaction, Grip for view adjustment, X/A to open the procedure checklist, joystick free movement, and left-wrist flip for the system menu.",
  },
  {
    title: "Training & Assessment Modes",
    description:
      "Training mode (highlights, arrows, step guidance), assessment mode (no hints for real competency evaluation), toggleable error tracking, and an AI virtual assistant to help complete steps.",
  },
  {
    title: "Role System",
    description:
      "Switch between Captain and First Officer, and between PM and PF roles in real time during a session.",
  },
  {
    title: "Assessment & Data Management",
    description:
      "Auto-generated Final Evaluation Report; records training time, score, and error rate; Training Log cloud sync and history; supports LMS integration for grade review.",
  },
  {
    title: "Quick Control Panel",
    description:
      "Return to lobby, exit application, AI assistant toggle, microphone toggle, quick role switch, and live current-course display.",
  },
] as const;

const PAIN_POINTS = [
  {
    title: "Pain Point 1: Standing training causes fatigue and motion sickness",
    description:
      "Long procedures such as exterior walkaround cannot be sustained comfortably in standing VR.",
  },
  {
    title: "Pain Point 2: Seated interaction is constrained",
    description:
      "Turning and moving are awkward, reducing immersion and freedom during exterior walkaround.",
  },
  {
    title: "Pain Point 3: Cumbersome device setup",
    description:
      "Complex wear and deployment make large-scale classroom rollout difficult.",
  },
] as const;

const HARDWARE_ADVANTAGES = [
  {
    title: "World-first foot-controlled locomotion",
    description:
      "Foot-pedal input—press forward, back, or to the sides to move—frees both hands and matches walking and observing during exterior walkaround.",
  },
  {
    title: "Comfortable immersion, less fatigue",
    description:
      "Aviation-grade ergonomic seating with 360° rotation supports extended sessions and reduces fatigue and motion sickness from standing VR.",
  },
  {
    title: "Higher efficiency in the field",
    description:
      "Enterprise deployments report ~40% better comfort and ~35% higher training throughput; no comparable product globally.",
  },
  {
    title: "Lightweight deployment for schools",
    description:
      "Highly integrated hardware with no complex external trackers—fast to deploy for flight schools and vocational programs at scale.",
  },
] as const;

const OVERALL_ADVANTAGES = [
  "Integrated software and hardware: exclusive AIVR VR seat with foot-controlled movement that solves core interaction pain points.",
  "1:1 high-fidelity cockpit replica for strong immersion and realistic operation.",
  "Fully aligned with civil Airbus A320 SOP standards—authoritative, standardized training content.",
  "Zero-risk, repeatable, low-cost training that significantly reduces live simulator hours.",
  "Closed loop from training through assessment, scoring, and archival for efficient program management.",
  "Supports Pico VR standalone headsets—ready to deploy out of the box.",
] as const;

const RUNTIME = [
  { label: "Software", value: "Pico VR standalone" },
  { label: "Hardware", value: "AIVR VR aviation training seat" },
  { label: "Deployment", value: "On-premise / cloud" },
  {
    label: "Expansion",
    value: "Future aircraft types (B737 / A330 / A350, and more)",
  },
] as const;

function FeatureCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="group linear-card p-5 sm:p-6"
    >
      <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
      <p className="mt-3 text-sm leading-loose text-gray-400">{description}</p>
    </motion.div>
  );
}

export default function ProductIntro() {
  return (
    <div className="bg-void pt-24 sm:pt-28">
      <section className="relative overflow-hidden border-b border-white/5 pb-16 sm:pb-20 md:pb-24">
        <SectionGlow />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <h1 className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-tight">
                AIVR A320 SOPs Trainer
              </h1>
              <p className="mt-6 text-sm leading-loose text-gray-400 sm:text-base">
                Integrating VR and AI technologies, this system is developed based on standard A320
                SOP procedures. Equipped with dedicated VR simulation seats, it delivers immersive
                real-cockpit experience for standardized flight training.
              </p>
              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <HeroDocButton href={INSTALLATION_PDF}>Installation Instructions</HeroDocButton>
                <HeroDocButton href={USER_GUIDE_PDF}>User Guide</HeroDocButton>
              </div>
            </div>
            <div className="linear-card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={Y1}
                  alt="AIVR A320 SOPs Trainer"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
          <SectionHeading
            title="Core Features"
            description="Software covering onboarding, interaction, training and assessment, and data management end to end"
          />
          <FeatureGalleryCarousel />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2 lg:gap-5"
          >
            {SOFTWARE_FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#070707] py-16 sm:py-20 md:py-24">
        <SectionGlow />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
          <SectionHeading title="Video demonstration" align="left" className="mb-8 md:mb-10" />
          <CurriculumVideoPlayer />
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#070707] py-16 sm:py-20 md:py-24">
        <SectionGlow />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
          <SectionHeading
            title="Companion Hardware"
            description="AIVR VR aviation training seat—built for A320 SOP VR training"
          />

          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <HardwareFlipImage />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-400 sm:text-base">
                Addresses three major pain points of traditional VR training:
              </p>
              {PAIN_POINTS.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  custom={i}
                  className="linear-card bg-white/[0.03] p-4 sm:p-5"
                >
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {p.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2 lg:gap-5"
          >
            {HARDWARE_ADVANTAGES.map((item, i) => (
              <FeatureCard key={item.title} {...item} index={i} />
            ))}
          </motion.div>

          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            className="linear-card mt-10 border-l-2 border-l-sky-400/60 p-6 sm:p-8"
          >
            <p className="text-sm font-medium leading-relaxed text-white/90 sm:text-base">
              Software and hardware together make A320 SOP VR training more efficient,
              more comfortable, and closer to real operations.
            </p>
          </motion.blockquote>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 py-16 sm:py-20 md:py-24">
        <SectionGlow />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading title="Product Advantages" align="left" />
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="space-y-3"
              >
                {OVERALL_ADVANTAGES.map((item, i) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    custom={i}
                    className="flex gap-3 text-sm leading-relaxed text-gray-400 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <SectionHeading title="Runtime Environment" align="left" />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="space-y-3"
              >
                {RUNTIME.map((row, i) => (
                  <motion.div
                    key={row.label}
                    variants={fadeUp}
                    custom={i}
                    className="linear-card flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      {row.label}
                    </span>
                    <span className="text-sm text-white/90 sm:text-base">
                      {row.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ProductFAQ />
    </div>
  );
}
