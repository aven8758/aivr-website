import type { Metadata } from "next";
import Image from "next/image";
import ContentPage from "@/components/ContentPage";
import SW0 from "@/assets/images/sw0.png";

export const metadata: Metadata = {
  title: "VR Aviation Training Seat — AIVR",
  description: "Foot-controlled VR locomotion seat designed for aviation training workflows",
};

export default function VrSeatProductPage() {
  return (
    <ContentPage
      title="VR Aviation Training Seat"
      subtitle="Integrated hardware designed for long-form aviation VR training"
    >
      <div className="linear-card relative mb-8 aspect-[16/10] overflow-hidden">
        <Image
          src={SW0}
          alt="AIVR VR aviation training seat"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <p>
        The VR Aviation Training Seat is AIVR&apos;s dedicated hardware solution. Foot-controlled
        movement replaces hand-controller locomotion so trainees can keep both hands on procedures
        and inspections, reducing fatigue during extended sessions.
      </p>
      <p>
        The seat is deeply integrated with AIVR A320 SOPs Trainer software — ideal for walk-around
        checks, cockpit preparation, and other training flows that require sustained movement.
      </p>
      <h2 className="pt-4 text-lg font-semibold text-white">Key features</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Foot-controlled movement, hands free for tasks</li>
        <li>Ergonomic design for extended training sessions</li>
        <li>Plug-and-play with supported VR headsets and training software</li>
        <li>Suitable for academy labs and corporate training centers</li>
      </ul>
    </ContentPage>
  );
}
