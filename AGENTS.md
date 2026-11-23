# Agent Directives

> This file is the **single canonical source of truth for this project's technology stack, folder structure, key conventions, and cross-artifact rules**. Every T2S workflow and agent (`backend-developer`, `frontend-developer`, `senior-architect`, and every `{stack}-developer` skill) reads this file before doing anything stack-specific — it is what lets T2S stay agnostic of any one framework.
>
> **`CLAUDE.md`, `GEMINI.md`, and `codex.md` at the project root are symlinks to this file.** Whatever IDE/agent you're using (Claude Code, Antigravity/Gemini, Cursor, Codex, OpenCode...), it reads the file matching its own convention, but there is only ever one copy of the content. Never edit `CLAUDE.md`/`GEMINI.md`/`codex.md` directly — edit `AGENTS.md`.

---

## 2. Technology Stack

### Frontend
- **Framework:** React 19 (^19.0.0, StrictMode)
- **Build Tool:** Vite 6 (^6.2.0) with @vitejs/plugin-react
- **Routing:** Component SPA Section Router with hash deep linking (`#about`, `#research`, `#publications`, `#projects`, `#experience`, `#education`, `#contact`)
- **Server State / Data Fetching:** Static Decoupled Data Modules in `src/data/` (zero unnecessary remote API overhead)
- **UI Component Library:** Custom Editorial Academic Components with Lucide icons (lucide-react ^0.475.0)
- **Styling:** Tailwind CSS v4 (^4.0.0) with @tailwindcss/vite
- **Forms:** Client-side 1-click clipboard & mailto direct inquiry actions
- **HTTP Client:** Not used (Static client-side architecture optimized for GitHub Pages)
- **API Client Generation:** Not used
- **Notifications / Toasts:** Integrated inline visual feedback & clipboard state indicators
- **Linting / Formatting:** TypeScript strict check & Biome ready
- **E2E Testing:** Playwright ready
- **Type Checking:** TypeScript 5.7+ strict mode
- **Theme:** Dual Academic/Editorial Light & Dark mode + System preference via `site_theme` localStorage key

### Backend
- **Framework:** Not used (Client-side static SPA hosted on GitHub Pages)
- **Language / Runtime:** Not used
- **ORM / Models:** Not used
- **Database Migrations:** Not used
- **Validation:** TypeScript 5.7+ strict compile-time types
- **Authentication:** Not used
- **Database Driver:** Not used
- **Email:** Mailto & clipboard integration with direct public contacts
- **Error Monitoring:** Not used
- **CORS:** Not used
- **API prefix:** Not used
- **Linting:** Not used
- **Testing:** Not used

### Database
- **Engine:** Not used (In-memory typed modular TypeScript datasets in `app/frontend/src/data/`)
- **Schema:** Strict TypeScript interfaces defined in `app/frontend/src/data/types.ts`

### Infrastructure / Tooling
- **Package Manager (Frontend):** Bun 1.4+ (workspace at `app/frontend/`)
- **Package Manager (Backend):** Not used
- **Containerization:** Not used
- **Pre-commit Hooks:** Git hooks
- **CI/CD:** GitHub Actions (configured for GitHub Pages static artifact deployment)

### Integration Config
- **JIRA_PROJECT_NAME**: `[Leave blank to disable JIRA integration, or set to your JIRA Project Key — e.g. T2S, TRACE, DEV]`
- **JIRA_INSTANCE_URL**: `[Optional: e.g. https://your-org.atlassian.net]`
- **JIRA_API_TOKEN**: `[Optional: Set via environment variable, never hardcode here]`

---

## 3. Project Structure

### Code Roots

- **Backend root:** none
- **Frontend root:** app/frontend/

### Directory Tree

```
personal-website-app/            ← Workspace root (Trace2Spec + git)
├── AGENTS.md                    ← Canonical agent directives (this file)
├── CLAUDE.md → AGENTS.md        ← Symlink for Claude IDE
├── GEMINI.md → AGENTS.md        ← Symlink for Gemini/Antigravity IDE
├── codex.md  → AGENTS.md        ← Symlink for Codex/OpenAI IDE
│
├── docs/                        ← Trace2Spec SSoT documentation
│   ├── input/                   ← Raw project requirements & master curriculum data
│   │   ├── Juan_Coronel_Website_Bio_Portfolio.md  ← Master CV & portfolio data
│   │   ├── requeriment.md                         ← Technical & design specifications
│   │   └── image/               ← Profile and project visual assets
│   ├── design/                  ← Generated design artifacts (SRS, UC, SDD, etc.)
│   ├── features/                ← Development Units (DU-XXX.md)
│   └── standards/               ← Base, backend, frontend, and documentation standards
│
└── app/
    └── frontend/                ← React 19 + Vite + Tailwind CSS v4 web application
        ├── index.html           ← HTML entry with Space Grotesk, Inter, Schema.org Person JSON-LD
        ├── package.json         ← Dependencies (React 19, Lucide, Tailwind v4)
        ├── vite.config.ts       ← Vite configuration with relative base and Tailwind plugin
        ├── tsconfig.json        ← Strict TypeScript compiler settings
        ├── public/
        │   └── images/          ← Public static images (portraits and diagrams)
        └── src/
            ├── main.tsx         ← React DOM root mount
            ├── App.tsx          ← Master application shell with modal dialogs and layout
            ├── index.css        ← Tailwind CSS v4 setup and editorial color tokens
            ├── context/         ← React Context providers
            │   ├── LanguageContext.tsx  ← Bilingual EN/ES state & translation helper
            │   └── ThemeContext.tsx     ← Light/Dark/System theme switcher with persistence
            ├── data/            ← Single source of truth for all website content (EASY DATA UPDATES)
            │   ├── types.ts             ← Strict TypeScript interfaces for all data models
            │   ├── profile.ts           ← Name, headlines, narrative bio, and verified metrics
            │   ├── research.ts          ← 5 Research lines and core scientific inquiry questions
            │   ├── publications.ts      ← 5 Papers with status tags, venue, and full BibTeX
            │   ├── projects.ts          ← Flagship case studies (T2S, D2M, Admitto, NEXO, etc.)
            │   ├── experience.ts        ← Professional & academic timeline
            │   ├── education.ts         ← Academic degrees, awards, certs, and references
            │   ├── skills.ts            ← Skills matrix categorized by technical domain
            │   └── index.ts             ← Central barrel export
            └── components/      ← Modular UI presentation components
                ├── layout/
                │   ├── Navbar.tsx       ← Responsive header with language & theme toggles
                │   └── Footer.tsx       ← Scholarly profiles, affiliations, and copyright
                ├── home/
                │   ├── Hero.tsx         ← Editorial headline, photo card, and 6 verified metrics
                │   ├── AboutSection.tsx ← Narrative bio and engineering philosophy
                │   ├── ResearchSection.tsx     ← 5 Research pillars with questions and keywords
                │   ├── PublicationsSection.tsx ← Filterable paper catalog with BibTeX & DOI links
                │   ├── ProjectsSection.tsx     ← Categorized projects with case study modal trigger
                │   ├── ExperienceSection.tsx   ← Chronological career timeline
                │   ├── EducationSection.tsx    ← Degrees, awards, certs, and professor endorsements
                │   ├── SkillsSection.tsx       ← Categorized technical skills matrix
                │   └── ContactSection.tsx      ← 1-click email copy, office location, credentials
                └── ui/
                    ├── BibtexModal.tsx    ← Accessible dialog with 1-click citation copy
                    └── CaseStudyModal.tsx ← Comprehensive case study modal (Problem, Architecture, Results)
```

---

## 4. Project Specs (Single Source of Truth)

All artifact creation and implementation MUST follow the project's technical context defined here. Read and apply these when creating or implementing:

- `docs/design/software-design-document.md`
- `docs/design/user-flow-document.md`
- `docs/standards/base-standards.md` — core principles, TDD, language standards, links to backend/frontend/docs standards
- `docs/standards/backend-standards.md` — API, database, testing, security (backend changes)
- `docs/standards/frontend-standards.md` — UI/UX, component patterns (frontend changes)
- `docs/design/api-spec.yml` — API contracts and endpoint definitions
- `docs/design/data-model.md` — domain and data model
- `docs/design/requirement-traceability-matrix.md` — active RTM mapping paths, specs, and tests

For implementation: adopt the relevant agent from `.agents/` (`backend-developer.md` for backend, `frontend-developer.md` for frontend) — each one reads the Technology Stack above to select the matching `{stack}-developer` skill under `.agents/skills/code/`. Use `.agents/skills/` for workflow guidance when applicable.

## 5. Per-Artifact Rules

**Global:**
- Before creating any artifact, read and apply `docs/standards/base-standards.md`.
- For backend-related artifacts, read `docs/standards/backend-standards.md` and adopt guidelines from `.agents/backend-developer.md`.
- For frontend-related artifacts, read `docs/standards/frontend-standards.md` and adopt guidelines from `.agents/frontend-developer.md`.
- Use `docs/design/api-spec.yml` and `docs/design/data-model.md` for API and data consistency in specs and DUs.
- Ensure any modification in functional behaviors updates both `docs/design/requirement-traceability-matrix.md` and the corresponding file trees.

**Development Units:**
- CRITICAL: Every DU generated by `/mcp:t2s:plan` or `/mcp:t2s:change` MUST strictly follow `docs/templates/development-unit-template.md` — do not invent an alternate task-tracking structure (e.g. a `tasks.md`).

---

## 6. Key Conventions

- **Code roots:** Frontend code lives strictly in `app/frontend/`; backend root is `none` as this is an optimized static web platform (see `package.json`).
- **Data architecture (Easy Updates):** All website content is strictly decoupled from presentation components and centralized in `app/frontend/src/data/` (`profile.ts`, `research.ts`, `publications.ts`, `projects.ts`, `experience.ts`, `education.ts`, `skills.ts`). Updating any information is performed directly by editing these typed files with zero JSX/CSS changes required.
- **Type safety:** All models, props, and bilingual content dictionaries have strict interfaces defined in `app/frontend/src/data/types.ts` with TypeScript strict mode enabled.
- **Bilingual Internationalization (EN / ES):** English is primary by default with an instant Spanish toggle managed by `LanguageContext.tsx` and persisted in `localStorage.getItem('site_lang')`.
- **Editorial Design System:** Academic meets Technology styling using Source Serif 4 (headings and reading text), Inter (interface text), JetBrains Mono (BibTeX/code only). Semantic tokens in `src/index.css` (`paper`, `ink`, `ink-muted`, `rule`, `accent`), defined once for light (`#F8F6F1` paper, `#1B3A63` ink-blue accent) and dark (`#151618` paper, `#9DBBE6` accent). Dark mode uses the `.dark` class via `@custom-variant`.
- **Theme persistence:** Theme toggle supports Light, Dark, and System preferences managed by `ThemeContext.tsx` and saved under `site_theme` in localStorage.
- **Static Hosting & Deep Linking:** Vite configured with relative base (`./`) to support GitHub Pages subpath or custom domain deployments with zero routing 404s.
