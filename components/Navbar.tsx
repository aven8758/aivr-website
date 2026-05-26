"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AirtLogo from "./AirtLogo";

const NAV_LINKS = [
  { label: "PRODUCTS", href: "/products" },
  { label: "COMPANY", href: "/company" },
  { label: "SOLUTION", href: "/solution" },
  { label: "CONTACT", href: "/contact" },
] as const;

function NavLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="nav-link-glow relative z-10 px-2 py-2 text-[10px] font-medium uppercase tracking-widest text-white transition-colors hover:text-white sm:text-[11px] md:text-xs"
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[border-color,background-color] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-void/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="site-container flex items-center justify-between gap-4 py-3">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 shrink-0 text-white"
        >
          <AirtLogo className="h-8 w-auto sm:h-9 md:h-10" />
        </motion.div>

        {/* Desktop / tablet — horizontal uppercase links */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-20 hidden items-center gap-1 md:flex lg:gap-2"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </motion.div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-20 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-xl md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 bg-void/90 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mx-auto flex max-w-[1400px] flex-col gap-1 px-4 py-4 sm:px-6"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  {...link}
                  onClick={() => setOpen(false)}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
