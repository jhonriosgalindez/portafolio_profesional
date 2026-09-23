## 2026-09-18T15:44:40Z
You are the QA / Tester for Jhon Fernando Rios Galindez's modern portfolio project.

Your working directory is: C:\Users\Personal\desktop\portafolio\.agents\worker_qa_m3
Workspace root: C:\Users\Personal\desktop\portafolio

MANDATORY FIRST STEP:
Read C:\Users\Personal\desktop\portafolio\ORIGINAL_REQUEST.md before doing anything else.

Then read:
- C:\Users\Personal\desktop\portafolio\PROJECT.md
- Existing source code in src/ (App.jsx, components, services, data)
- Existing tests in src/__tests__/

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

SCOPE & EXCLUSIVE WRITE OWNERSHIP:
You own:
- src/__tests__/QA_AcceptanceSuite.test.jsx
- C:\Users\Personal\desktop\portafolio\TEST_READY.md
- Any auxiliary test fixtures in src/__tests__/ (do not modify application source code in src/components or src/services unless fixing an exposed bug).

QA ACCEPTANCE SUITE REQUIREMENTS (Milestone M3):
Design, implement, and execute a comprehensive automated testing suite covering all acceptance criteria in ORIGINAL_REQUEST.md:
1. Critical Sections Rendering Suite:
   - Header & Navbar: Verifies brand, all navigation links (Inicio, Sobre Mí, Experiencia, Educacion, Habilidades, Proyectos, Contacto), and theme switch button.
   - Hero Section: Verifies Jhon Fernando Rios Galindez headline, dual title ("Full Stack Developer & Especialista en Inteligencia Artificial"), status badge ("Disponible para proyectos"), CTA buttons, social links (LinkedIn, GitHub, Email).
   - About Section: Verifies narrative bio, 4 KPI metric cards (+5 Años, +40%, 10+, 100%), and 3 core pillars.
   - Experience Timeline: Verifies ORBIDI (Production Lead & Full Stack) and Fiverr entries with achievements and technology tags.
   - Education Section: Verifies Uniminuto AI, SENA Software, Univ. Cauca Civil Eng, Cambridge, and all 5 official certifications.
   - Footer: Verifies copyright, social links, and scroll-to-top button.
2. Dynamic Theme Switching & Local Persistence Suite:
   - Verifies toggling from light to dark mode adds 'dark' class to document.documentElement.
   - Verifies theme preference is saved to localStorage ('portfolio-theme').
   - Verifies toggling back to light mode removes 'dark' class and updates localStorage.
3. Category Filtering Suite (Instant & Accurate):
   - Skills filtering: Verifies clicking tabs ('all', 'frontend', 'backend', 'ai', 'database') filters visible skills accurately.
   - Projects filtering: Verifies clicking tabs ('all', 'frontend', 'backend', 'ai', 'database') updates visible project cards accurately.
   - Edge case: Verifies selecting a category displays only projects containing that category tag.
4. Functional Contact Module Validation & Submission Suite:
   - Required fields validation: submitting empty form flags all fields with contextual error messages.
   - Email format validation: typing invalid email (e.g., 'not-an-email') triggers contextual email error message.
   - Message length boundary: typing message < 10 characters triggers minimum character length error; character counter updates in real time.
   - Successful submission flow: entering valid name, email, subject, message -> triggers loading state on submit button -> displays green success confirmation banner -> resets form -> stores message in localStorage ('portfolio-messages').
   - Clipboard copy button: clicking 'Copiar correo' triggers clipboard write with 'r.jhonf@gmail.com' and displays confirmation feedback.

EXECUTION & 100% PASS RATE VERIFICATION:
1. Run `npm test` (`vitest run`).
2. Verify that 100% of all tests pass across all test suites (FrontendCore, BackendAndLogic, QA_AcceptanceSuite). Zero failures permitted.
3. Run `npm run build` (`vite build`) to verify that the build compiles cleanly.
4. Generate `TEST_READY.md` at project root (`C:\Users\Personal\desktop\portafolio\TEST_READY.md`) summarizing:
   - Test runner command and status
   - Total test count and tier/category breakdown
   - Full acceptance checklist with verified results
   - Formal 100% Pass Certification signed by QA / Tester
5. Deliverables:
   - Handoff report in: C:\Users\Personal\desktop\portafolio\.agents\worker_qa_m3\handoff.md
   - Update progress.md
   - Send a message to parent with the final test results.
