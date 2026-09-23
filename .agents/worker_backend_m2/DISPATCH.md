## 2026-09-18T15:38:15Z

You are the Backend Developer for Jhon Fernando Rios Galindez's modern portfolio project.

Your working directory is: C:\Users\Personal\desktop\portafolio\.agents\worker_backend_m2
Workspace root: C:\Users\Personal\desktop\portafolio

MANDATORY FIRST STEP:
Read C:\Users\Personal\desktop\portafolio\ORIGINAL_REQUEST.md before doing anything else.

Then read the architecture and specifications:
- C:\Users\Personal\desktop\portafolio\PROJECT.md
- C:\Users\Personal\desktop\portafolio\.agents\spec_miner_cv_r0\cv_data.md (verified CV data)
- C:\Users\Personal\desktop\portafolio\.agents\explorer_ux_r0\ux_architecture_report.md (UX specifications)
- Existing code in src/ (App.jsx, Navbar.jsx, Hero.jsx, etc.)

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

SCOPE & EXCLUSIVE WRITE OWNERSHIP:
You own:
- src/data/profileData.js
- src/services/filterService.js
- src/services/contactService.js
- src/components/Skills.jsx
- src/components/Projects.jsx
- src/components/Contact.jsx
- src/App.jsx (integrating the fully implemented components)
- src/__tests__/BackendAndLogic.test.jsx

REQUIREMENTS TO IMPLEMENT (Milestone M2):
1. Centralized Data Module (`src/data/profileData.js`):
   - Export structured data mined from Profile.pdf:
     * profile (name, title_es, title_en, bio_es, bio_en, location, email, linkedin, github, portfolio)
     * skills list categorized strictly into: 'frontend', 'backend', 'ai', 'database'
     * 6 projects categorized across the 4 categories with title, description, categories array, techStack array, impact metrics, liveUrl, githubUrl
     * contact channels data
2. Pure Filtering Logic (`src/services/filterService.js`):
   - Export `filterItemsByCategory(items, activeCategory)` where activeCategory is 'all' or one of ['frontend', 'backend', 'ai', 'database']. Must handle items with single category or array of categories.
3. Contact Form Service (`src/services/contactService.js`):
   - Export `validateContactForm({ name, email, subject, message })`:
     * name: required, min 2 chars
     * email: required, valid RFC 5322 email regex
     * subject: required, min 3 chars
     * message: required, min 10 chars, max 1000 chars
     * Returns: { isValid: boolean, errors: { name?: string, email?: string, subject?: string, message?: string } }
   - Export async `submitContactMessage(formData)`:
     * Validates input
     * Simulates realistic network delay (e.g. 500ms)
     * Stores submitted message into localStorage under 'portfolio-messages'
     * Returns: { success: boolean, message: string }
4. Interactive Skills Section (`src/components/Skills.jsx`):
   - Category filter tabs: Todos ('all'), Frontend ('frontend'), Backend ('backend'), IA & Machine Learning ('ai'), Bases de Datos ('database') with data-testid attributes (`skill-filter-all`, `skill-filter-frontend`, `skill-filter-backend`, `skill-filter-ai`, `skill-filter-database`).
   - Dynamic instantaneous filtering when clicking category tabs.
   - Beautiful skill cards/badges with technology name, category indicator, and proficiency.
5. Interactive Projects Section (`src/components/Projects.jsx`):
   - Category filter tabs: Todos ('all'), Frontend ('frontend'), Backend ('backend'), IA & Machine Learning ('ai'), Bases de Datos ('database') with data-testid attributes (`project-filter-all`, `project-filter-frontend`, `project-filter-backend`, `project-filter-ai`, `project-filter-database`).
   - Displays all 6 projects with smooth transitions, tags, impact metrics, live demo link, and github link. Include `data-testid="project-card"`.
   - Instantaneous filtering by category.
6. Functional Contact Section (`src/components/Contact.jsx`):
   - Form with real-time validation (on change & on blur).
   - Inputs: Name (`data-testid="contact-name-input"`), Email (`data-testid="contact-email-input"`), Subject (`data-testid="contact-subject-input"`), Message (`data-testid="contact-message-input"`).
   - Live character counter for message (`data-testid="message-char-counter"`).
   - Visual error messages below each invalid field (`data-testid="error-name"`, `data-testid="error-email"`, `data-testid="error-subject"`, `data-testid="error-message"`).
   - Submit button with spinner loading state (`data-testid="contact-submit-button"`).
   - Dismissible success banner upon successful submission (`data-testid="contact-success-message"`), form resets.
   - Contact channel cards: LinkedIn, GitHub, Email (`data-testid="contact-email-link"`), and "Copiar correo" button with copied notification (`data-testid="copy-email-button"`).
7. Update `src/App.jsx` to mount the fully implemented `Skills`, `Projects`, and `Contact` components.
8. Automated Tests:
   - Create `src/__tests__/BackendAndLogic.test.jsx` covering:
     * filterService functionality for single and array categories
     * contactService validation edge cases (invalid email, short fields, max length)
     * Contact component validation rendering and submission flow
     * Skills and Projects interactive filtering
9. Verification:
   - Run `npm test` to verify all tests (FrontendCore + BackendAndLogic) pass 100%.
   - Run `npm run build` to verify clean build generation.
10. Deliverables:
   - Write handoff report to: C:\Users\Personal\desktop\portafolio\.agents\worker_backend_m2\handoff.md
   - Update your progress.md.
   - Send completion message to parent with test and build outputs.
