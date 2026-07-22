import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children, className = "" }: { id: string; eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-6 py-20 md:py-28 ${className}`}>
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.32em] text-electric-400">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </section>
  );
}
