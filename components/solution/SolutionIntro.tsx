"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionGlow from "@/components/ui/SectionGlow";
import { fadeUp, staggerContainer } from "@/lib/animations";

type SolutionBlock = {
  title: string;
  audience: string;
  painPoints?: string;
  content: string;
  value: string;
};

const HERO_HIGHLIGHTS = [
  {
    title: "Instruction to assessment",
    description: "End-to-end VR workflows from SOP training through competency grading and archival.",
  },
  {
    title: "Built for institutions",
    description: "Programs shaped for airlines, academies, colleges, and public outreach venues.",
  },
  {
    title: "Deploy at scale",
    description: "Turnkey hardware, software, curriculum, and ongoing support where needed.",
  },
] as const;

const SOLUTIONS: SolutionBlock[] = [
  {
    title: "Airline Recurrent Training",
    audience: "Airlines, flight departments, training divisions",
    painPoints: "High recurrent cost, limited sim time, inconsistent procedures",
    content: "Standardized SOP training + competency grading + data archival",
    value: "Reinforce standard procedures, reduce recurrent cost, improve safety",
  },
  {
    title: "Training Center Turnkey Build",
    audience: "Training bases, science centers, examination facilities",
    content: "VR hardware deployment + software platform + curriculum + maintenance",
    value: "Turnkey delivery — demo-ready, teach-ready, exam-ready",
  },
  {
    title: "Flight Academy Program",
    audience: "Flight academies and training centers",
    painPoints: "Limited aircraft access, high cost, safety risk, standardization gaps",
    content: "Full A320 SOP VR training + exam system + grade management",
    value: "Higher throughput, standardized flows, lower training cost",
  },
  {
    title: "Aviation College Curriculum",
    audience: "Aviation colleges and vocational programs",
    painPoints: "Expensive lab equipment, scheduling limits, safety, uneven assessment",
    content: "Modular VR courses + training seat + grade management",
    value: "Industry-academia integration, consistent instruction, better pass rates",
  },
  {
    title: "Aviation Outreach & Experience",
    audience: "Science museums, outreach centers, aviation pavilions",
    content: "Lightweight experience modules + immersive flight experiences",
    value: "Public engagement, accessible aviation education, showcase innovation",
  },
];

const DETAIL_ROWS = [
  { key: "Audience", field: "audience" as const },
  { key: "Pain Points", field: "painPoints" as const },
  { key: "Scope", field: "content" as const },
  { key: "Value", field: "value" as const },
];

function SolutionCard({ solution, index }: { solution: SolutionBlock; index: number }) {
  const visibleRows = DETAIL_ROWS.filter(
    (row) => row.field !== "painPoints" || solution.painPoints
  );

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="linear-card flex h-full flex-col p-6 sm:p-8"
    >
      <p className="section-label">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{solution.title}</h3>
      <dl className="mt-6 grid flex-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
        {visibleRows.map((row) => (
          <div key={row.key} className={row.field === "value" ? "sm:col-span-2" : undefined}>
            <dt className="text-xs font-medium uppercase tracking-wider text-gray-500">
              {row.key}
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-gray-300 sm:text-[15px]">
              {solution[row.field as keyof SolutionBlock] as string}
            </dd>
          </div>
        ))}
      </dl>
    </motion.article>
  );
}

export default function SolutionIntro() {
  return (
    <div className="bg-void pt-24 sm:pt-28">
      <section className="relative overflow-hidden border-b border-white/5 pb-16 sm:pb-20 md:pb-24">
        <SectionGlow />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="section-label mb-4">Solutions</p>
            <h1 className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-tight">
              Full-Scene Aviation VR Training
            </h1>
            <p className="mt-6 text-sm leading-loose text-gray-400 sm:text-base md:text-lg">
              Integrated VR systems for academies, colleges, and training centers — covering
              instruction, assessment, management, and scalable deployment.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16 lg:gap-5"
          >
            {HERO_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="linear-card p-5 sm:p-6"
              >
                <h2 className="text-sm font-semibold text-white sm:text-base">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#070707] py-16 sm:py-20 md:py-24">
        <SectionGlow />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
          <SectionHeading
            title="Industry Programs"
            description="Tailored deployments by institution type, training stage, and operational goal."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-5 lg:grid-cols-2 lg:gap-6"
          >
            {SOLUTIONS.map((solution, i) => (
              <SolutionCard key={solution.title} solution={solution} index={i} />
            ))}
          </motion.div>

          <p className="mt-12 text-center text-sm text-gray-500">
            See the product stack behind these programs on the{" "}
            <Link
              href="/products"
              className="text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              product page
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
