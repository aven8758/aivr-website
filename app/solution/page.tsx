import type { Metadata } from "next";
import SolutionIntro from "@/components/solution/SolutionIntro";

export const metadata: Metadata = {
  title: "Solution — Full-Scene Aviation VR Training",
  description:
    "VR training solutions for flight academies and aviation colleges — SOP training, assessment, and score management.",
};

export default function SolutionPage() {
  return <SolutionIntro />;
}
