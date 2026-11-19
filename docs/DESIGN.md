# Portfolio Design Outline: Editorial Minimal

## 1. Goal and positioning

The site has one job: in under a minute, a hiring manager, agency lead or small-business client should see that you ship real work, can handle client-facing projects, and are easy to contact.

**Working positioning line (edit freely):** *Front-end and full-stack developer with a UX background. I build React and Next.js apps and WordPress sites that non-technical teams can maintain.*


**Two audiences, one site**

| Audience | What they look for | Where the site answers it |
| --- | --- | --- |
| Hiring managers (junior, front-end, web developer roles) | Real projects, clean code, testing, how you work in a team | Featured projects, Southmedic case study, GitHub links, skills tied to projects |
| Agencies and freelance clients | CMS skills, client communication, handover and documentation, reliability | Global Brigades work, "how I work" section, services page, clear contact path |

**Design principles:** big type, one accent colour, lots of whitespace, evidence over claims, and motion that supports reading rather than competing with it.

## 2. Sitemap

Seven routes, kept small so every page can be finished well.

- **Home** (`/`): hero, three featured projects, skills, experience, contact
- **Work** (`/work`): all projects
    - **Case study** (`/work/[slug]`): one template, written in MDX; Southmedic is the first and longest
- **About** (`/about`): short story, career path from operations to development, education, resume PDF
- **Services** (`/services`): website design, build and maintenance for small organizations, plus how you work
- **Contact** (`/contact`): email, LinkedIn, GitHub, availability, simple form
- **Colophon** (`/how-this-site-is-built`): stack, performance and accessibility choices, and what you would change next

Top navigation: Work, About, Services, Contact. The colophon lives in the footer.

## 3. Visual system

Starting values only. Tune them in the browser once real content is in place.

| Element | Starting choice | Notes |
| --- | --- | --- |
| Display type | Condensed bold sans, uppercase (try Anton or Bebas Neue) | Hero name and section titles; line-height about 0.9; size roughly clamp(3.5rem, 12vw, 10rem) |
| Body type | Inter (or similar neutral sans) | 16 to 18px, line-height 1.6, max line length about 65 characters |
| Label type | Small caps or monospace, 11 to 12px, wide letter-spacing | Top bar, project numbers (01, 02, 03), tags |
| Background | Off-white `#F4F4F2` | Slightly warm, never pure white |
| Ink | Near-black `#111111` | Headings and body |
| Muted text | Mid-grey `#6B6B6B` | Captions, meta; check contrast |
| Accent | Yellow `#FFD43B` | Links, small rules, one shape behind the photo; roughly 4.8:1 against the background, so verify with a contrast checker |
| Grid | 12 columns, max width 1280px, 24px gutters | Project grid: 3 columns desktop, 2 tablet, 1 mobile |
| Spacing | 4/8px scale | Large vertical gaps between sections (96 to 160px desktop) |
| Imagery | Project screenshots in plain device frames; photo in black and white | Same aspect ratio for all project cards (for example 4:5) |
| Details | Thin 1px rules, short accent underline under section labels | Borrowed from the reference screenshot |

**Keep out of v1:** skill percentage bars, fake statistics, gradients, and more than one accent colour.

**Accessibility baseline:** body text contrast of 4.5:1 or better, visible focus states, semantic landmarks, alt text on every image, and keyboard-reachable navigation.

## 4. Motion spec

Four motions, all subtle, all switched off or reduced for people who set `prefers-reduced-motion`.

| Motion | What happens | Timing | Library |
| --- | --- | --- | --- |
| Hero text reveal | Each line of the name slides up from behind a mask, one after another | 0.8s per line, 0.1s stagger, ease-out; plays once on load | Motion |
| Scroll fade-in | Sections and cards fade in and rise 24px | 0.6s, triggers at about 20% in view, plays once | Motion (`whileInView`) |
| Page transition | Short crossfade with a small vertical shift between routes | About 300ms | Browser View Transitions API or a simple enter animation |
| Hover details | Link underline draws in; project image scales to 1.03 | 200 to 400ms | CSS only |

**Rules**

- Animate only `opacity` and `transform`, so nothing triggers layout work.
- Nothing blocks content: text is readable before any animation finishes.
- With reduced motion on, drop movement and keep at most a quick opacity fade.
- Page transitions are the trickiest item in the Next.js App Router, since exit animations are awkward there. Treat them as a late, optional phase and start with enter-only.

**Optional stretch, only after launch:** one signature interaction, such as a project preview that follows the cursor on the Work page.

## 5. Homepage, section by section

The order follows your reference screenshot, with the weak parts swapped for evidence.

1. **Top bar.** Small label on the left ("Front-end developer and designer"), monogram in the centre, "Portfolio 2026" on the right. Navigation sits here too.
2. **Hero.** Your name set very large in two lines. Under it, the role line in accent colour and one sentence of positioning. Two buttons: "View work" and "Get in touch". An availability line: "Open to junior and front-end roles and agency work in Canada. Freelance projects welcome." Optional black-and-white photo with a single accent-colour circle behind it.
3. **Selected work.** Numbered cards (01, 02, 03...) with project name, one-line type, and a cropped screenshot. Each links to its case study or live site. A "View all work" link follows. Separating into two groups, each has a small mono label with a black rule, matching the “Experience” and “Education” headings further down.
    3.1 Professional & client works:  Electronic Batch Records (case study from Southmedic), Global Brigades Canada website, and Global Brigades Canada Training Portal. Each gets a small yellow-edged testimonials quote under the card, and the Southmedic card has none. The quote text is a placeholder, to be replaced with wording the person has approved.
    3.2 Personal projects: Use the original card grid, unchanged from the draft design layout: Stocker_Pro, Training Module, Quick Unit Converter, Asgardians Comics and Space Assembly.


4. **Skills and toolkit.** Replace the percentage bars with grouped lists and a "used in" note, for example *React, Next.js: Southmedic batch record system*. Groups: Front-end, Back-end and data, Testing, CMS and design.
5. **Experience.** Short timeline (Southmedic, Global Brigades Canada, Luniko, John Deere) next to a row of real numbers taken from your resume: 1.5+ years professional experience, 30+ API endpoints built, 29 chapters mapped on the Global Brigades directory, GPA 3.97 at SAIT.
6. **How I work (agency angle).** Four short steps: understand, design, build, hand over. One line each, with the handover and documentation point made explicit.
7. **Let's connect.** Email, LinkedIn, GitHub, resume PDF, and city (Calgary, open to remote). One clear call to action.
8. **Footer.** Navigation, colophon link, year.

**Mobile:** same order, single column, hero name scaled with `clamp()`, project cards stacked, navigation in a simple menu.

## 6. Project lineup

Feature three on the homepage, chosen to show a team-built app, real client work and a personal build. Everything else lives on the Work page.

| # | Project | Presented as | Stack | Links | Before it goes live |
| --- | --- | --- | --- | --- | --- |
| 01 | Southmedic electronic batch record system | Featured case study | Next.js 14, TypeScript, React, Prisma and PostgreSQL, MongoDB, NextAuth.js, Jest, Playwright | None | Confirm what you may share; use redrawn screens and sample data only |
| 02 | Global Brigades Canada website and training portal | Featured, live client work | WordPress, WP Engine staging to production, Leaflet, custom JavaScript, LearnDash | [Main site](https://globalbrigadescanada.org/), [portal](https://portal.globalbrigadescanada.org/) | Ask the charity to approve being featured; screenshots for anything behind a login |
| 03 | Stocker Pro | Featured personal project | Node.js, Express, Google Gemini, live market-data API | [Live](https://stocker-pro.vercel.app), [repo](https://github.com/Ai5678/stocker-pro) | Push the refactor to main, add a README, then update stack notes if they changed |
| 04 | Quick Unit Converter | Work page | Chrome extension, Manifest V3 | [Chrome Web Store](https://chromewebstore.google.com/detail/unit-converter/oeccjedoddcbocfjagdlbhpchikcopcn) | Add repo link and a short note on MV3 constraints |
| 05 | Training Module App | Work page | See repo | [Repo](https://github.com/Ai5678/training-module-app) | Fix the live link (see section 11) and confirm it contains no Southmedic code or data |
| 06 | Asgardians Comics | Work page, labelled in progress | See repo | [Live](https://asgardians-comics.vercel.app), [repo](https://github.com/Ai5678/asgardians_comics) | Finish one more page, or keep the "in progress" label |
| 07 | Space Assembly | Work page, under experiments | Front-end game, DOM manipulation, CSS animation | [Live](https://space-assembly.vercel.app), [repo](https://github.com/Ai5678/space-assembly) | Short README with a screenshot |
| 08 | Luniko Consulting website | Work page, labelled as design | Figma, Squarespace | [Live](https://www.lunikoconsulting.com) | Describe only your part: the structure and layout redesign during your internship |

**Card template (all projects):** number, name, one-line type, cropped screenshot, three tags, and a single link. Case studies add a "Read the story" link.

**Each project page answers:** what it is, what you did, which decisions mattered, what you would change, and where to see it.

## 7. Southmedic case study structure

This is your strongest evidence of working on production software, so give it the most room. Aim for 900 to 1,400 words with four to six visuals.

1. **Header.** Title, one-sentence summary, and a small facts row: role (Junior Software Developer), dates (May 2024 to Dec 2025), team (multi-developer, Git feature branches and pull-request reviews), stack.
2. **Context.** What an electronic batch record system is and why regulated pharmaceutical manufacturing needs one. Keep it to a short paragraph for readers outside the industry.
3. **Your role.** What you owned versus what the team owned.
4. **Architecture.** A redrawn diagram of the service-oriented backend: separate permission, validation and business-logic services, with PostgreSQL (Prisma) and MongoDB (Mongoose) behind them.
5. **Three hard problems, each told as problem, decision, result:**
   - Electronic signatures: password verification and dependency validation for section and row sign-offs
   - Audit logging: recording every create, update and delete for compliance traceability
   - Data sync: cron-scheduled ETL jobs pulling employee and training data from the UKG REST API (OAuth) and a SQL Server database every day
6. **Front end.** Zustand slices, AG Grid for high-volume data, React Hook Form for validated input, role-based access with NextAuth.js, and the training compliance module.
7. **Quality.** How you set up Jest unit tests and Playwright end-to-end tests for the team.
8. **What I learned and would do differently.** Honest and specific.

**Confidentiality:** the resume describes what you built, but not what Southmedic allows you to publish. Use redrawn UI with invented sample data, leave out company-specific identifiers, and check with Southmedic if you are unsure. Do not link the company repository unless it is public and you have clearance.

**Gap to fill:** the resume lists no measured outcomes (users, time saved, errors reduced). If you have any real numbers, add them; otherwise describe the outcome qualitatively and do not estimate.

## 8. Agency and freelance angle

Agencies that build and maintain sites for businesses hire for CMS fluency, communication and reliable handover, not only React. You already have unusual evidence for that, so the site should say it plainly.

| What agencies look for | Your evidence | Where it shows |
| --- | --- | --- |
| CMS work (WordPress, Squarespace) | Global Brigades Canada site and LearnDash portal; Luniko Squarespace redesign | Featured project 02, Work page |
| Safe release process | WordPress and WP Engine staging-to-production workflow | Global Brigades project page |
| Sites clients can edit themselves | "Single source of truth" pattern: scripts read content from the page, so staff update entries without touching code | Global Brigades project page, how-I-work section |
| Documentation and handover | Technical summaries, deployment procedures, maintenance documentation | How-I-work section, Services page |
| Client and stakeholder communication | Four years in sales, marketing and operations at John Deere, including dealer training | About page |
| Design sense | UX Design diploma, Figma, Luniko redesign | About page, Luniko project |
| Modern front-end | Next.js, React, TypeScript, tested code | Southmedic case study, the portfolio itself |

**Services page (freelance):** three short offers with no prices on the page. Suggested wording: *Website design and build*, *Website maintenance and updates*, *Training and handover for your team*. Close with the four-step process and one contact button.

**For agency applications:** send a link to the Work page filtered to CMS projects, and keep one resume variant that leads with WordPress and handover work.

## 9. Tech stack and repo structure

One framework for the site, chosen to match the job listings you are targeting and to build on what you already know from Southmedic.

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js (App Router) with TypeScript | Matches your professional experience and common job listings |
| Styling | Tailwind CSS with design tokens in CSS variables | Fast to build, easy to keep consistent |
| Motion | Motion (formerly Framer Motion) plus CSS | Covers the reveal and scroll effects |
| Content | MDX for case studies, typed data file for the project list | Writing stays in the repo; cards are generated from data |
| Fonts and images | `next/font`, `next/image` | Performance and no layout shift |
| Testing | Playwright smoke tests plus an automated accessibility check; Jest for any logic | Reuses skills you list on your resume and shows a testing habit |
| Hosting | Vercel, with a custom domain | You already deploy there |
| Quality gates | ESLint, Prettier, Lighthouse checks in CI | Lets you publish real scores on the colophon page |

```text
portfolio/
  app/
    layout.tsx
    page.tsx                 home
    work/page.tsx            all projects
    work/[slug]/page.tsx     case study template
    about/  services/  contact/  how-this-site-is-built/
  components/                hero, project-card, section, nav, footer
  content/
    projects.ts              typed project data
    case-studies/*.mdx       Southmedic, Global Brigades, ...
  lib/                       helpers, motion presets
  public/                    images, resume.pdf
  styles/tokens.css          colours, type scale, spacing
  tests/                     Playwright specs
```

**Vue:** your resume lists no Vue project, so do not list it as a skill yet. If you want to show it, build one small Vue or Nuxt project after launch and add it to the Work page.

## 10. Build phases in Claude Code Learning mode

Switch Claude Code to its Learning output style so it explains each step and leaves the meaningful pieces for you to write. Put this outline in the repo as `DESIGN.md` and point a short `CLAUDE.md` at it, so every session starts with the same context.

1. **Foundations.** Create the repo, scaffold Next.js with TypeScript and Tailwind, deploy an empty page to Vercel. *Done when:* a live URL exists. *You write:* the design tokens file.
2. **Layout shell.** Nav, footer, section wrapper, responsive grid. *Done when:* the empty pages route correctly on mobile and desktop. *You write:* the nav and section components.
3. **Hero and homepage sections.** Static versions only, with placeholder content. *Done when:* the homepage matches the wireframe without any animation. *You write:* the hero and project card.
4. **Content model.** Typed project data, MDX setup, case study template. *Done when:* adding a project to the data file creates a card and a page. *You write:* the types and the data loader.
5. **Real content.** Southmedic case study, Global Brigades, Stocker Pro, About, Services, Contact. *Done when:* every page has final copy and real images.
6. **Motion pass.** Hero reveal, scroll fade-ins, hover details, reduced-motion handling. Page transitions last. *Done when:* motion feels calm and nothing shifts layout. *You write:* the motion presets.
7. **Quality pass.** Accessibility audit, Lighthouse, keyboard testing, Open Graph images, 404 page, Playwright smoke tests. *Done when:* scores are good enough to publish on the colophon page.
8. **Launch.** Custom domain, analytics if you want it, resume PDF, links added to LinkedIn and GitHub profile. Then start applying.

**Habit for every phase:** before accepting any generated code, explain it back in your own words, and commit small with a message that says why.

## 11. Content to prepare and open decisions

Based on your resume and Past projects document, plus the Global Brigades and Luniko sites. GitHub blocked automated reading, so repo contents are not reviewed here.

**Things to check first**

- [ ] **Training Module link.** Past projects lists `training-module-app-one-vercel.app`, which looks like a typo for `training-module-app-one.vercel.app`. Confirm the working address.
- [ ] **Training Module vs Southmedic.** Your resume describes a training compliance module at Southmedic with the same features (automated workflows, gap analysis, real-time validation). Confirm the portfolio app is your own work with no company code or data.
- [ ] **Southmedic repository.** The SMI-Electronic-Batch-Records link is under a different GitHub account (hangxigood), not yours. Keep it as a case study only unless the company and repo owner clear a public link.
- [ ] **Global Brigades permission.** Confirm the charity is happy to be featured, and which screens of the portal may be shown.
- [ ] **Stocker Pro refactor.** Push to main before launch, so the live site and the repo match.
- [ ] **Chrome extension repo.** `converter_chrome-ext` is synced to this project but was not in your list. Add it to the Work page.

**Content to produce**

- [ ] Final positioning line and a three-sentence bio
- [ ] Cropped screenshots (4:5) for the three featured projects, plus one wide image each for their pages
- [ ] Redrawn Southmedic architecture diagram with sample data only
- [ ] README for each repo: what it is, stack, how to run it, live link, one screenshot
- [ ] Resume as a PDF; decide which email address goes on the site and keep your phone number off it
- [ ] A testimonial or short quote from a Global Brigades colleague, if one is available
- [ ] Optional black-and-white photo

**Decisions to make**

| Decision | Options | My lean |
| --- | --- | --- |
| Accent colour | Green (as in the reference), or another single colour | Pick one that you like to look at for months; green is fine |
| Photo in hero | With photo, or type only | Photo, if you have a good one; type-only works too |
| Domain | Your name (.ca or .com), or a name plus "dev" | Your name |
| French version | Skip for v1, or add later | Skip for v1 |
| Page transitions | Include at launch, or add after | After launch if they cause trouble |
