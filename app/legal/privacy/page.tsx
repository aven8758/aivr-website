import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Privacy Policy — AIVR",
};

export default function PrivacyPage() {
  return (
    <ContentPage title="Privacy Policy" subtitle="Last updated: May 2026">
      <p>
        AIVR (&quot;we&quot;) values your privacy. This policy explains how we collect, use, store,
        and protect personal information when you use this website and related services.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">Information we collect</h2>
      <p>
        When you contact us or request information, we may collect details you provide voluntarily,
        such as your name, organization, contact information, and a description of your needs.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">How we use information</h2>
      <p>
        We use this information only to respond to inquiries, provide product and service support,
        improve the user experience, and meet legal obligations. We do not sell your personal
        information.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">Data protection</h2>
      <p>
        We apply reasonable technical and organizational safeguards to protect your data. To access,
        correct, or delete personal information, please contact us through the website.
      </p>
      <h2 className="pt-2 text-lg font-semibold text-white">Policy updates</h2>
      <p>
        We may revise this policy from time to time. Updated versions will be posted on this page.
        Continued use of the website indicates acceptance of the revised policy.
      </p>
    </ContentPage>
  );
}
