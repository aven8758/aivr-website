"use client";

import Image from "next/image";
import C1 from "@/assets/images/C1.png";
import SW0 from "@/assets/images/sw0.png";

export default function HardwareFlipImage() {
  return (
    <div className="linear-card group overflow-hidden [perspective:1200px]">
      <div className="relative aspect-[4/3] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image
            src={C1}
            alt="AIVR VR aviation training seat — Enterprise"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span className="absolute bottom-3 right-3 bg-black/55 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-white sm:bottom-4 sm:right-4 sm:text-sm">
            Enterprise
          </span>
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image
            src={SW0}
            alt="AIVR VR aviation training seat — Personal"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span className="absolute bottom-3 right-3 bg-black/55 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-white sm:bottom-4 sm:right-4 sm:text-sm">
            Personal
          </span>
        </div>
      </div>
    </div>
  );
}
