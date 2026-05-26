import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Terms of Service — AIVR",
};

export default function TermsPage() {
  return (
    <ContentPage title="Terms of Service" subtitle="Last updated: May 2026">
      <p>
        Welcome to the AIVR website and related services. By accessing or using this website, you
        agree to these Terms of Service.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">Services</h2>
      <p>
        This website presents AIVR product information and provides a contact channel for inquiries.
        Product features, delivery methods, and pricing are governed by formal agreements between the
        parties.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">User responsibilities</h2>
      <p>
        You agree to provide accurate information and not use this website for unlawful activity or
        in any way that interferes with its normal operation or infringes the rights of others.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">Intellectual property</h2>
      <p>
        Text, images, video, software interfaces, and branding on this website are owned by AIVR or
        its licensors and may not be copied or used commercially without permission.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">Changes to these terms</h2>
      <p>
        We may update these terms as needed. Revisions will be posted on this page. Continued use of
        the website constitutes acceptance of the updated terms.
      </p>
    </ContentPage>
  );
}
