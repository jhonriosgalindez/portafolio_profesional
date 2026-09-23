## 2026-09-18T15:32:56Z
You are the Frontend Developer for Jhon Fernando Rios Galindez's modern portfolio project.

Your working directory is: C:\Users\Personal\desktop\portafolio\.agents\worker_frontend_m1
Workspace root: C:\Users\Personal\desktop\portafolio

MANDATORY FIRST STEP:
Read C:\Users\Personal\desktop\portafolio\ORIGINAL_REQUEST.md before doing anything else.

Then read the architecture and specifications:
- C:\Users\Personal\desktop\portafolio\PROJECT.md
- C:\Users\Personal\desktop\portafolio\.agents\spec_miner_cv_r0\cv_data.md (all verified CV data)
- C:\Users\Personal\desktop\portafolio\.agents\explorer_env_r0\tech_stack_report.md (dependencies & setup instructions)
- C:\Users\Personal\desktop\portafolio\.agents\explorer_ux_r0\ux_architecture_report.md (component and design specs)

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

SCOPE & EXCLUSIVE WRITE OWNERSHIP:
You own:
- package.json
- vite.config.js
- tailwind.config.js
- postcss.config.js
- index.html
- src/main.jsx
- src/App.jsx
- src/index.css
- src/context/ThemeContext.jsx
- src/components/Navbar.jsx
- src/components/Hero.jsx
- src/components/About.jsx
- src/components/Experience.jsx
- src/components/Education.jsx
- src/components/Footer.jsx
(You may also set up basic stub/placeholder references in App.jsx for Skills, Projects, and Contact if needed so that the project compiles cleanly, which the Backend Developer will flesh out in M2).

REQUIREMENTS TO IMPLEMENT:
1. Initialize the project with Vite + React + Tailwind CSS + Lucide Icons + Vitest dependencies according to tech_stack_report.md.
2. Theme Toggle & Persistence (R1):
   - In src/context/ThemeContext.jsx: Provide ThemeProvider with theme ('dark' | 'light'), toggleTheme(), auto-detect system preference, and persist to localStorage ('portfolio-theme').
   - Apply 'dark' class to <html> or documentElement. Ensure smooth color transitions.
3. Navbar:
   - Sticky navigation with glassmorphism (backdrop-blur).
   - Brand logo/name with subtle gradient.
   - Smooth navigation links (Inicio, Sobre Mí, Experiencia, Habilidades, Proyectos, Contacto).
   - Theme toggle button with animated Sun/Moon icons. Include data-testid="theme-toggle".
   - Mobile hamburger menu with accessible drawer toggle. Include data-testid="mobile-menu-button".
4. Hero Section:
   - Impactful presentation of Jhon Fernando Rios Galindez.
   - Dual headline: Full Stack Developer & Especialista en Inteligencia Artificial.
   - Status badge: "Disponible para proyectos" with glowing pulse indicator.
   - Call to action buttons: "Ver Proyectos", "Contactar", and "Descargar CV".
   - Social links (LinkedIn, GitHub, Email).
   - Dynamic tech stack pills/card.
5. About Section:
   - Professional narrative from CV: bridge between civil engineering analytical rigor, full stack software development, and AI specialization.
   - Key impact metrics cards: +5 años de experiencia, +40% optimización de rendimiento en plataformas web, 10+ soluciones end-to-end, 100% calidad & compliance.
   - 3 Core Pillars: Full Stack Architecture, AI & RAG Engineering, Performance & Scalability.
6. Experience Section:
   - Chronological interactive timeline with company cards:
     * ORBIDI - Production Lead (Sep 2025 - May 2026): Operations, AI automation, compliance, task intelligence.
     * ORBIDI - Programador Full Stack (Sep 2024 - Aug 2025): React.js, PHP, WordPress, MySQL, UI/UX, cross-browser performance.
     * Fiverr - Desarrollador Web Freelance (May 2021 - Aug 2024): 40% performance boost on international platforms, caching, SEO.
     Include badges for technologies and key achievements.
7. Education & Certifications:
   - Educational degrees:
     * Corporación Universitaria Minuto de Dios - Especialista en Inteligencia Artificial.
     * SENA - Tecnólogo en Análisis y Desarrollo de Software.
     * Universidad del Cauca - Ingeniero Civil.
     * Cambridge Language Centres - Inglés Profesional.
   - 5 Official Certifications cards:
     * DOM Manipulation Course
     * Introduction to Artificial Intelligence (AI)
     * Python for Data Science, AI & Development
     * React.js Course
     * Google Cloud Fundamentals: Core Infrastructure en Español
8. Footer:
   - Branding, copyright, social channels, and smooth scroll-to-top button.
9. Verification:
   - Run `npm install` in the project root.
   - Run `npm run build` to verify clean build generation without errors or warnings.
10. Deliverables:
   - Write your handoff report to: C:\Users\Personal\desktop\portafolio\.agents\worker_frontend_m1\handoff.md
   - Update your progress.md.
   - Send a message to parent with build output and summary when complete.
