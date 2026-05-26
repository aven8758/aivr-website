import Link from "next/link";
import type { ReactNode } from "react";

type SiteButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "bracket" | "ghost";
  className?: string;
};

export default function SiteButton({
  href,
  children,
  variant = "primary",
  className = "",
}: SiteButtonProps) {
  const variants = {
    primary:
      "rounded-full border border-white/25 bg-white/[0.08] px-8 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.075)]",
    bracket:
      "btn-bracket px-6 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:text-white/90",
    ghost:
      "text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline",
  };

  return (
    <Link href={href} className={`inline-flex items-center gap-2 ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
