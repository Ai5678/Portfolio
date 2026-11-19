# Portfolio: Narisara Tochamnong

Personal portfolio for junior, front-end and web developer roles, plus freelance and agency work, in Canada.

## Read first
- docs/DESIGN.md: design outline (structure, motion, content plan)
- docs/design/draft-v1.jpeg: the visual target. Where the two disagree, the image and the overrides below win.

## Stack
Next.js (App Router) + TypeScript, Tailwind CSS, Motion and GSAP for animation, MDX for case studies, next/font, Playwright for tests, deployed on Vercel. Ask before adding any other dependency.

## Overrides from the visual draft
- Accent is yellow (#FFD43B).
- Palette: warm off-white background, near-black ink, one dark band (toolkit), one yellow band (contact).
- Type: heavy condensed uppercase display, monospace for small labels, clean sans for body.
- Hero photo sits in an arch shape with a yellow circle behind it.
- Build the homepage as a single page first: hero, selected work (Professional & Clients = 3; one column section for each project to make it's more standout than the Personal Side projects = 1 section 5 cards; 3column 2 rows), toolkit, journey, contact. Case study pages, /work and /services come later.
- Yellow is only a fill behind black text, or text on the dark band. Never yellow text on a light background.

## Working agreement (Learning mode)
- Explain what and why before writing code. Keep steps small.
- Leave me the meaningful pieces to write, marked TODO(human): design tokens, the Hero, the project card, motion presets, content types.
- Ask before installing packages or changing config.
- End each step with a suggested commit message.

## Content rules
- Facts come from my resume and docs/DESIGN.md. Never invent metrics, features, clients or testimonials.
- Label unfinished projects as "In progress".
- No skill percentage bars and no made-up statistics.
- Nothing from Southmedic's codebase is published. The case study uses redrawn visuals and sample data only.

## Motion
Animate only opacity and transform. Respect prefers-reduced-motion. Hero reveal, scroll fade-ins and hover details first; page transitions last.

## Quality bar
Keyboard accessible, visible focus states, alt text on images, 4.5:1 text contrast, mobile-first.