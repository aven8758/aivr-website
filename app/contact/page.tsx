import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — AIVR",
  description: "Get in touch with the AIVR team for demos, partnerships, and product inquiries.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
