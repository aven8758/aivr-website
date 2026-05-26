import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Disclaimer — AIVR",
};

export default function DisclaimerPage() {
  return (
    <ContentPage title="Website Disclaimer" subtitle="Last updated: May 2026">
      <p>
        Content on this website is provided by AIVR for product information and reference purposes
        only. You use this website at your own risk.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">Accuracy of information</h2>
      <p>
        We strive to keep information accurate and up to date but do not guarantee completeness or
        absolute correctness. Product specifications, features, and pricing may change without notice
        and are subject to formal commercial documentation.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">External links</h2>
      <p>
        This website may link to third-party sites for convenience. AIVR is not responsible for the
        content, privacy practices, or security of those sites.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, AIVR is not liable for any direct, indirect,
        incidental, or consequential loss arising from use of or inability to use this website.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">Contact</h2>
      <p>
        If you have questions about this disclaimer, please reach out through the contact page on
        this website.
      </p>
    </ContentPage>
  );
}
