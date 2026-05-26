import Link from "next/link";
import type { ReactNode } from "react";

type ContentPageProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function ContentPage({ title, subtitle, children }: ContentPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
      >
        ← Back to home
      </Link>
      <header className="mb-10 border-b border-white/10 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-sm text-muted sm:text-base">{subtitle}</p>
        )}
      </header>
      <div className="prose-airt space-y-5 text-sm leading-relaxed text-muted sm:text-base">
        {children}
      </div>
    </article>
  );
}
