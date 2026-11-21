import type { ReactNode } from "react";

type Tone = "light" | "dark" | "accent";

const toneClasses: Record<Tone, { section: string; eyebrow: string }> = {
  light: { section: "bg-paper text-ink", eyebrow: "text-muted" },
  dark: { section: "bg-ink text-paper", eyebrow: "text-muted-on-dark" },
  accent: { section: "bg-accent text-ink", eyebrow: "text-ink" },
};

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: Tone;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, intro, tone = "light", children }: SectionProps) {
  return (
    <section id={id} className={toneClasses[tone].section} aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-page px-gutter py-section">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`mb-3 font-mono text-label uppercase ${toneClasses[tone].eyebrow}`}>{eyebrow}</p>
            <h2 id={`${id}-title`} className="font-display text-title uppercase">{title}</h2>
          </div>
          {intro && (
          <p className="max-w-md">{intro}</p>
        )}
        </div>
        {children}
      </div>
    </section>
  );
}
