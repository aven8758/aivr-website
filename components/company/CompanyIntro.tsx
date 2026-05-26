"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionGlow from "@/components/ui/SectionGlow";
import { fadeUp, staggerContainer } from "@/lib/animations";
import G1 from "@/assets/images/G1.jpg";
import G2 from "@/assets/images/G2.jpg";

const STRATEGIC_EDGE = [
  {
    title: "Pilot-Led Consultancy",
    description:
      "Our development is guided by a global network of consultant pilots across multiple aircraft types, ensuring every procedure aligns with real-world cockpit logic.",
  },
  {
    title: "VR Pioneering Excellence",
    description:
      "We specialize in high-fidelity, 1:1 digital twins. Our immersive VR solutions deliver emotionally rich, high-retention experiences that significantly outperform traditional training methods.",
  },
  {
    title: "Cross-Platform Flexibility",
    description:
      'We offer a "Dual-World" solution — high-end VR immersion for deep procedural training, complemented by mobile versions for smartphones and tablets to enable learning anytime, anywhere.',
  },
  {
    title: "Proven Global Track Record",
    description:
      "Our solutions are trusted by leading airlines across North America (Canada and the USA), Southeast Asia, and Europe, meeting the rigorous standards of diverse international operators.",
  },
] as const;

const MISSION =
  "By integrating years of experience in 3D modeling and mobile education, we create effective Virtual Reality solutions that respond to the practical, high-pressure needs of modern aviation. From cabin safety to flight deck mastery, we build the tools that empower the next generation of aviators.";

function EdgeCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div variants={fadeUp} custom={index} className="linear-card p-5 sm:p-6">
      <p className="section-label">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-3 text-base font-semibold text-white sm:text-lg">{title}</h3>
      <p className="mt-3 text-sm leading-loose text-gray-400">{description}</p>
    </motion.div>
  );
}

export default function CompanyIntro() {
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
                Global Leadership in Aviation Training
              </h1>
              <p className="mt-6 text-sm leading-loose text-gray-400 sm:text-base">
                With over fifteen years of excellence in aviation training, we bridge the gap between
                traditional flight discipline and future-ready technology. Headquartered in Canada, we
                deliver industry-leading VR courseware and multi-platform training ecosystems.
              </p>
            </div>
            <div className="linear-card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={G1}
                  alt="Aviation VR training environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#070707] py-16 sm:py-20 md:py-24">
        <SectionGlow />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
          <SectionHeading
            title="Our Strategic Edge"
            description="Four pillars that define how we design, build, and deliver aviation training at scale."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2 lg:gap-5"
          >
            {STRATEGIC_EDGE.map((item, i) => (
              <EdgeCard key={item.title} {...item} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 py-16 sm:py-20 md:py-24">
        <SectionGlow />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0}
            >
              <SectionHeading title="Our Mission" align="left" />
              <blockquote className="linear-card border-l-2 border-l-sky-400/60 p-6 sm:p-8">
                <p className="text-sm leading-loose text-gray-300 sm:text-base">{MISSION}</p>
              </blockquote>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1}
              className="linear-card overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={G2}
                  alt="Flight deck VR training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
