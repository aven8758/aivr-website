import type { Metadata } from "next";
import ProductIntro from "@/components/products/ProductIntro";

export const metadata: Metadata = {
  title: "Products — AIVR A320 SOPs Trainer",
  description:
    "Integrated A320 standard SOP VR training system with software and VR aviation training seat hardware.",
};

export default function ProductsPage() {
  return <ProductIntro />;
}
