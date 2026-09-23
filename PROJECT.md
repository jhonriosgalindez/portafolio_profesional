# Project: Modern Interactive Web Portfolio for Jhon Fernando Rios Galindez

## Architecture
- **Framework & Build**: Vite (v6) + React (v18.3.1) with ES Modules
- **Styling**: Tailwind CSS (v3.4.16) with `class` dark mode, custom color palette, responsive breakpoints, smooth transitions
- **Icons**: Lucide React (clean SVG icons for all sections and controls)
- **Data Architecture**: Centralized, verified dataset in `src/data/profileData.js` directly mined from `Profile.pdf`
- **Testing Framework**: Vitest (v2.1.8) + React Testing Library (v16.1.0) + `@testing-library/jest-dom` + `jsdom`
- **Component Architecture**:
  - `ThemeContext.jsx`: Dark/Light mode state, system preference detection, localStorage persistence, document class toggle
  - `Navbar.jsx`: Responsive navigation, sticky glassmorphism, mobile drawer, theme switcher
  - `Hero.jsx`: High-impact hero, status badge, dual title, CTAs, social buttons
  - `About.jsx`: Professional profile bio, key metrics (+5 yrs, +40% speed, 10+ projects), core pillars
  - `Experience.jsx`: Interactive career timeline (ORBIDI Production Lead & Full Stack, Fiverr Web Dev)
  - `Education.jsx`: Academic history (Uniminuto AI, SENA Software, Univ. Cauca Civil Eng, Cambridge) + 5 Certifications
  - `Skills.jsx`: Interactive skills matrix categorized into Frontend, Backend, AI & Machine Learning, Databases
  - `Projects.jsx`: Interactive portfolio showcase with category filtering (Frontend, Backend, AI & ML, Databases)
  - `Contact.jsx`: Controlled contact form with real-time validation, feedback states (idle/submitting/success/error), direct contact channels
  - `Footer.jsx`: Copyright, social channels, smooth scroll-to-top
- **Services**:
  - `contactService.js`: Input validation (RFC 5322 email regex, required fields, character bounds), mock submission handler
  - `filterService.js`: Pure filtering logic for projects and skills

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Modern Responsive UI & Navigation | Mobile-first responsive layout, sticky navbar, mobile menu drawer, accessible ARIA roles | M1 (Frontend) | R1 |
| 2 | Dark/Light Theme Switching | Dynamic theme toggle with immediate UI transition and localStorage persistence | M1 (Frontend) | R1 |
| 3 | Profile Presentation (Hero & About) | Presentation of Jhon Fernando Rios Galindez's background, dual title, metrics, bio | M1 (Frontend) | R2 |
| 4 | Experience & Education Showcase | Chronological experience at ORBIDI and Fiverr; degrees at Uniminuto, SENA, Univ. Cauca, Cambridge + 5 certs | M1 (Frontend) | R2 |
| 5 | Interactive Project & Skill Filtering | Instant category filtering across Frontend, Backend, AI & Machine Learning, Databases | M2 (Backend/Data) | R2 |
| 6 | Functional Contact Form Validation | Real-time validation (email regex, required fields, char counter, feedback states: idle, loading, success, error) | M2 (Backend/Data) | R3 |
| 7 | Direct Contact Channels | Accessible links to LinkedIn, GitHub, Email with clipboard copy utility | M2 (Backend/Data) | R3 |
| 8 | Automated Testing Suite | Comprehensive unit and component tests verifying UI rendering, theme toggle, project filter, contact validation | M3 (QA/Testing) | R4 |
| 9 | 100% QA Pass Rate Verification | Strict verification that 100% of automated tests pass without errors or regressions | M3 (QA/Testing) | R4 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M0 | Survey & Profile Mining | Extract complete CV information from Profile.pdf, audit Windows environment, verify tech stack | none | DONE |
| M1 | Core Setup & Frontend Development | Initialize project (package.json, vite, tailwind, lucide), create components (Navbar, Hero, About, Experience, Education, Footer, ThemeContext) | M0 | DONE |
| M2 | Backend Logic, Data & Contact Module | Centralize profileData.js, implement filterService, contactService, Skills matrix, Projects showcase with instant category filtering, Contact form with real-time validation | M1 | DONE |
| M3 | QA & Automated Testing Track | Build test suite (Vitest + React Testing Library) covering all critical components, theme switch, category filtering, contact validation, 100% pass verification | M2 | DONE |
| M4 | Forensic Audit & Final Acceptance | Independent review, integrity audit, verification of all acceptance criteria, completion report to Sentinel | M3 | DONE |

## Code Layout
- `package.json`: Project dependencies and scripts (`dev`, `build`, `preview`, `test`)
- `vite.config.js`: Vite configuration with React plugin and Vitest test runner setup
- `tailwind.config.js`: Tailwind CSS configuration with `darkMode: 'class'` and custom theme colors
- `postcss.config.js`: PostCSS configuration
- `index.html`: Main HTML entry point with metadata, viewport, font imports
- `src/`
  - `main.jsx`: React root mount point
  - `App.jsx`: Main application container wrapping ThemeProvider and all page sections
  - `index.css`: Tailwind directives, custom scrollbars, animations
  - `context/`
    - `ThemeContext.jsx`: Theme provider, useTheme hook, localStorage persistence
  - `data/`
    - `profileData.js`: Centralized CV data (profile, experience, education, skills, projects, certs, contacts)
  - `services/`
    - `contactService.js`: Validation algorithms and contact handling
    - `filterService.js`: Pure category filtering logic
  - `components/`
    - `Navbar.jsx`: Top navigation, theme toggle, mobile hamburger menu
    - `Hero.jsx`: Intro section with status badge, dual title, CTAs, social links
    - `About.jsx`: Bio, core pillars, metric counters
    - `Experience.jsx`: Interactive career timeline
    - `Education.jsx`: Academic credentials and official certifications
    - `Skills.jsx`: Interactive skills matrix with category tabs
    - `Projects.jsx`: Interactive project grid with category tabs, tags, links
    - `Contact.jsx`: Contact form with real-time feedback and direct channels
    - `Footer.jsx`: Footer with links and back-to-top button
  - `test/`
    - `setup.js`: Testing Library and Jest DOM configuration
    - `App.test.jsx`: Critical sections rendering test
    - `Theme.test.jsx`: Dark/Light mode switching and localStorage persistence test
    - `ProjectsFilter.test.jsx`: Instant category filtering test across all 4 categories
    - `ContactForm.test.jsx`: Form validation, error messages, and success state test

## Interface Contracts
### `ThemeContext` ↔ UI Components
```javascript
const { theme, toggleTheme } = useTheme();
// theme: 'dark' | 'light'
// toggleTheme: () => void (toggles between 'dark' and 'light', updates localStorage, toggles 'dark' class on <html>)
```

### `profileData.js` ↔ Components
```javascript
export const profile = { name, title_es, title_en, location, email, linkedin, github, portfolio, bio_es, bio_en };
export const experience = [ { id, company, role, period, location, highlights, technologies } ];
export const education = [ { id, institution, degree, field, period, type } ];
export const certifications = [ { id, name, issuer } ];
export const skills = [ { id, name, category, level } ]; // category: 'frontend' | 'backend' | 'ai' | 'database'
export const projects = [ { id, title, description, categories, techStack, impact, liveUrl, githubUrl } ];
```

### `contactService.js` ↔ `Contact.jsx`
```javascript
export function validateContactForm({ name, email, subject, message });
// Returns: { isValid: boolean, errors: { name?: string, email?: string, subject?: string, message?: string } }

export async function submitContactMessage(formData);
// Returns: Promise<{ success: boolean, message: string }>
```

### `filterService.js` ↔ `Skills.jsx` & `Projects.jsx`
```javascript
export function filterItemsByCategory(items, activeCategory);
// items: Array of objects with .categories (array) or .category (string)
// activeCategory: 'all' | 'frontend' | 'backend' | 'ai' | 'database'
// Returns: filtered Array
```
