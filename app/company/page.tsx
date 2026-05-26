import type { Metadata } from "next";
import CompanyIntro from "@/components/company/CompanyIntro";

export const metadata: Metadata = {
  title: "Company — Global Leadership in Aviation Training",
  description:
    "Over fifteen years of aviation training excellence. VR flight courseware and multi-platform training ecosystems, headquartered in Canada.",
};

export default function CompanyPage() {
  return <CompanyIntro />;
}
