import Link from "next/link";
import AirtLogo from "./AirtLogo";

const PRODUCT_LINKS = [
  { label: "AIVR A320 SOPs Trainer", href: "/products" },
  { label: "VR Aviation Training Seat", href: "/products/vr-seat" },
  {
    label: "Learning Management System",
    href: "https://vr.aivrtraining.com",
    external: true,
  },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void">
      <div className="site-container flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between md:py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10 lg:gap-14">
          <AirtLogo className="h-14 w-auto shrink-0 md:h-16" />
          <nav aria-label="Products">
            <ul className="space-y-2.5 sm:space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 md:items-end md:text-right">
          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-muted md:justify-end">
              {LEGAL_LINKS.map((link, i) => (
                <li key={link.href} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-2 text-white/20" aria-hidden>
                      |
                    </span>
                  )}
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="font-mono text-xs text-white/35">
            © {new Date().getFullYear()} AIVR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
