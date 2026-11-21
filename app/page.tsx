import Section from "@/components/section";

// Phase 1 only: a dashed box marking where each block will be built.
// Delete once every section has its real component.
function Placeholder({ label }: { label: string }) {
  return (
    <div className="grid min-h-40 place-items-center border border-dashed border-current/30 p-6 text-center font-mono text-label uppercase">
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero is its own component in Phase 2 (h1, role tag, buttons, arch photo). */}
      <section
        aria-labelledby="hero-title"
        className="mx-auto max-w-page px-gutter py-section"
      >
        <h1
          id="hero-title"
          className="font-display text-display uppercase"
        >
          Narisara
          <br />
          Tochamnong
        </h1>
        <div className="mt-8">
          <Placeholder label="Hero: role tag, intro, buttons, photo (Phase 2)" />
        </div>
      </section>

      <Section
        id="work"
        eyebrow="01 — Selected work"
        title="Things I've shipped"
        intro="Real products for real users. Each project opens a short case study: the problem, my decisions, and the result."
      >
        <div className="flex flex-col gap-12">
          <Placeholder label="Professional & client work: 3 full-width rows (Phase 3)" />
          <Placeholder label="Personal projects: 5 cards, 3-column grid (Phase 3)" />
        </div>
      </Section>

      <Section
        id="toolkit"
        eyebrow="02 — Toolkit"
        title="What I build with"
        intro="Tools I've used in production over the years."
        tone="dark"
      >
        <Placeholder label="Tool chips by group (Phase 4)" />
      </Section>

      <Section id="journey" eyebrow="03 — Journey" title="Experience & Education">
        <Placeholder label="Experience and education timelines (Phase 4)" />
      </Section>

      <Section id="contact" eyebrow="04 — Contact" title="Let's build something" tone="accent">
        <Placeholder label="Contact links (Phase 4)" />
      </Section>
    </>
  );
}
