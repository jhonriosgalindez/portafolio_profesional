import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import App from '../App';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { profile, skills, projects, contactChannels } from '../data/profileData';
import * as contactService from '../services/contactService';
import { filterItemsByCategory } from '../services/filterService';

describe('QA Acceptance Suite - Jhon Fernando Rios Galindez Portfolio', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    window.scrollTo = vi.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // =========================================================================
  // 1. Critical Sections Rendering Suite
  // =========================================================================
  describe('1. Critical Sections Rendering Suite', () => {
    describe('Header & Navbar', () => {
      it('verifies brand identity and developer role', () => {
        render(
          <ThemeProvider>
            <Navbar />
          </ThemeProvider>
        );
        expect(screen.getByText('Jhon Rios')).toBeInTheDocument();
        expect(screen.getByText('JR')).toBeInTheDocument();
        expect(screen.getByText('Software & Web Dev')).toBeInTheDocument();
      });

      it('verifies all 7 navigation links with accurate testids and anchor hrefs', () => {
        render(<App />);
        const links = [
          { testId: 'nav-link-inicio', text: 'Inicio', href: '#inicio' },
          { testId: 'nav-link-sobre-mi', text: 'Sobre Mí', href: '#sobre-mi' },
          { testId: 'nav-link-experiencia', text: 'Experiencia', href: '#experiencia' },
          { testId: 'nav-link-educacion', text: 'Educación', href: '#educacion' },
          { testId: 'nav-link-habilidades', text: 'Habilidades', href: '#habilidades' },
          { testId: 'nav-link-proyectos', text: 'Proyectos', href: '#proyectos' },
          { testId: 'nav-link-contacto', text: 'Contacto', href: '#contacto' },
        ];

        links.forEach(({ testId, text, href }) => {
          const navEl = screen.getByTestId(testId);
          expect(navEl).toBeInTheDocument();
          expect(navEl.textContent).toBe(text);
          expect(navEl.getAttribute('href')).toBe(href);
        });
      });

      it('verifies theme switch button and mobile drawer toggle accessibility', () => {
        render(<App />);
        const themeBtn = screen.getByTestId('theme-toggle');
        expect(themeBtn).toBeInTheDocument();
        expect(themeBtn).toHaveAttribute('type', 'button');
        expect(themeBtn).toHaveAttribute('aria-label');

        const mobileBtn = screen.getByTestId('mobile-menu-button');
        expect(mobileBtn).toBeInTheDocument();
        expect(mobileBtn).toHaveAttribute('aria-expanded', 'false');

        // Toggle mobile menu drawer
        fireEvent.click(mobileBtn);
        expect(mobileBtn).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getAllByText('Descargar CV (PDF)').length).toBeGreaterThan(0);
      });
    });

    describe('Hero Section', () => {
      it('verifies headline, dual title, and active status badge', () => {
        render(<Hero />);
        // Headline
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Jhon Fernando Rios/i);

        // Primary role & secondary focus
        expect(screen.getByText(/Desarrollador de Software & Web Full Stack/i)).toBeInTheDocument();
        expect(screen.getByText(/Especialista en Inteligencia Artificial/i)).toBeInTheDocument();
        expect(screen.getByText(/Enfoque Secundario/i)).toBeInTheDocument();

        // Status badge
        expect(screen.getByText(/Disponible para proyectos & innovación técnica/i)).toBeInTheDocument();
      });

      it('verifies primary and secondary CTA buttons with correct targets', () => {
        render(<App />);
        const projectsCta = screen.getByTestId('hero-cta-projects');
        expect(projectsCta).toBeInTheDocument();
        expect(projectsCta.getAttribute('href')).toBe('#proyectos');
        expect(projectsCta.textContent).toContain('Ver Proyectos');

        const contactCta = screen.getByTestId('hero-cta-contact');
        expect(contactCta).toBeInTheDocument();
        expect(contactCta.getAttribute('href')).toBe('#contacto');
        expect(contactCta.textContent).toContain('Contactar');

        const cvLink = screen.getAllByRole('link', { name: /Descargar CV/i })[0];
        expect(cvLink).toHaveAttribute('href', '/Profile.pdf');
        expect(cvLink).toHaveAttribute('target', '_blank');
      });

      it('verifies all direct social channel links (LinkedIn, GitHub, Contact CTA)', () => {
        render(<App />);
        const linkedinLink = screen.getByLabelText(/Perfil de LinkedIn de Jhon Rios/i);
        expect(linkedinLink).toHaveAttribute('href', contactChannels.linkedin);
        expect(linkedinLink).toHaveAttribute('target', '_blank');

        const githubLink = screen.getByLabelText(/Perfil de GitHub de Jhon Rios/i);
        expect(githubLink).toHaveAttribute('href', contactChannels.github);
        expect(githubLink).toHaveAttribute('target', '_blank');

        const contactLink = screen.getByLabelText(/Contactar a Jhon Rios/i);
        expect(contactLink).toHaveAttribute('href', '#contacto');
      });

      it('verifies interactive code artifact terminal in Hero', () => {
        render(<Hero />);
        expect(screen.getByText('profile.config.ts')).toBeInTheDocument();
        expect(screen.getByText(/"Jhon Fernando Rios"/i)).toBeInTheDocument();
        expect(screen.getByText(/"Software & Web Developer"/i)).toBeInTheDocument();
        expect(screen.getByText(/"AI Specialist"/i)).toBeInTheDocument();
        expect(screen.getByText(/"RAG"/i)).toBeInTheDocument();
      });
    });

    describe('About Section', () => {
      it('verifies narrative bio mentioning engineering and AI credentials', () => {
        render(<About />);
        expect(screen.getByText('Acerca de mí')).toBeInTheDocument();
        expect(screen.getAllByText(/Universidad del Cauca/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Ingeniero Civil/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/SENA/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Corporación Universitaria Minuto de Dios/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/ORBIDI/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Fiverr/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/RAG/i).length).toBeGreaterThan(0);
      });

      it('verifies all 4 KPI metric cards (+5 Años, +40%, 10+, 100%)', () => {
        render(<About />);
        const kpis = [
          { value: '+5 Años', label: 'Experiencia Profesional' },
          { value: '+40%', label: 'Optimización de Rendimiento' },
          { value: '10+', label: 'Soluciones End-to-End' },
          { value: '100%', label: 'Calidad & Compliance' },
        ];

        kpis.forEach(({ value, label }) => {
          expect(screen.getByText(value)).toBeInTheDocument();
          expect(screen.getByText(label)).toBeInTheDocument();
        });
      });

      it('verifies all 3 core pillars of technical specialization', () => {
        render(<About />);
        expect(screen.getByText('Full Stack Architecture')).toBeInTheDocument();
        expect(screen.getByText('AI & RAG Engineering')).toBeInTheDocument();
        expect(screen.getByText('Performance & Scalability')).toBeInTheDocument();
      });
    });

    describe('Experience Timeline', () => {
      it('verifies ORBIDI Production Lead and Full Stack Developer entries', () => {
        render(<Experience />);
        expect(screen.getByText('Production Lead')).toBeInTheDocument();
        expect(screen.getByText('Programador Full Stack')).toBeInTheDocument();
        expect(screen.getAllByText('ORBIDI').length).toBe(2);

        // Period checks
        expect(screen.getByText(/Septiembre 2025 – Mayo 2026/i)).toBeInTheDocument();
        expect(screen.getByText(/Septiembre 2024 – Agosto 2025/i)).toBeInTheDocument();
      });

      it('verifies Fiverr Freelance Web Developer entry with 40% performance achievement', () => {
        render(<Experience />);
        expect(screen.getByText('Desarrollador Web Freelance')).toBeInTheDocument();
        expect(screen.getByText('Fiverr')).toBeInTheDocument();
        expect(screen.getByText(/Mayo 2021 – Agosto 2024/i)).toBeInTheDocument();
        expect(screen.getByText(/Mejoró en un ~40% el rendimiento y velocidad de carga/i)).toBeInTheDocument();
      });

      it('verifies technology tags and highlights for each experience entry', () => {
        render(<Experience />);
        const expectedTechs = [
          'Liderazgo Operativo',
          'Inteligencia Artificial',
          'Compliance & Calidad',
          'React.js',
          'WordPress',
          'MySQL',
          'Optimización Web (40%+)',
          'SEO Técnico',
        ];

        expectedTechs.forEach((tech) => {
          expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
        });
      });
    });

    describe('Education Section', () => {
      it('verifies Uniminuto AI, SENA Software, Univ. Cauca Civil Eng, and Cambridge Language', () => {
        render(<Education />);
        expect(screen.getByText('Corporación Universitaria Minuto de Dios')).toBeInTheDocument();
        expect(screen.getByText('Especialista en Inteligencia Artificial')).toBeInTheDocument();

        expect(screen.getByText('Servicio Nacional de Aprendizaje (SENA)')).toBeInTheDocument();
        expect(screen.getByText('Tecnólogo en Análisis y Desarrollo de Software')).toBeInTheDocument();

        expect(screen.getByText('Universidad del Cauca')).toBeInTheDocument();
        expect(screen.getByText('Ingeniero Civil')).toBeInTheDocument();

        expect(screen.getByText('Cambridge Language Centres')).toBeInTheDocument();
        expect(screen.getByText('Inglés Profesional (Professional Working Proficiency)')).toBeInTheDocument();
      });

      it('verifies all 5 official certifications with topics and verified badge', () => {
        render(<Education />);
        const certs = [
          'DOM Manipulation Course',
          'Introduction to Artificial Intelligence (AI)',
          'Python for Data Science, AI & Development',
          'React.js Course',
          'Google Cloud Fundamentals: Core Infrastructure en Español',
        ];

        certs.forEach((certName) => {
          expect(screen.getByText(certName)).toBeInTheDocument();
        });

        const verifiedBadges = screen.getAllByText('Certificado');
        expect(verifiedBadges.length).toBe(5);
      });
    });

    describe('Footer Section', () => {
      it('verifies copyright statement, social channels, and scroll-to-top button', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(new RegExp(`© ${currentYear} Jhon Fernando Rios Galindez`, 'i'))).toBeInTheDocument();
        expect(screen.getByText(/Todos los derechos reservados/i)).toBeInTheDocument();

        // Social and platform links
        expect(screen.getByText('Portafolio en Vercel')).toHaveAttribute('href', contactChannels.portfolio);
        expect(screen.getByText('Formulario de Contacto (Protegido)')).toHaveAttribute('href', '#contacto');

        // Scroll to top button interaction
        const scrollBtn = screen.getByRole('button', { name: /Volver arriba/i });
        expect(scrollBtn).toBeInTheDocument();
        fireEvent.click(scrollBtn);
        expect(window.scrollTo).toHaveBeenCalledWith({
          top: 0,
          behavior: 'smooth',
        });
      });
    });
  });

  // =========================================================================
  // 2. Dynamic Theme Switching & Local Persistence Suite
  // =========================================================================
  describe('2. Dynamic Theme Switching & Local Persistence Suite', () => {
    it('initializes with dark mode by default when no localStorage is stored', () => {
      render(
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      );

      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(localStorage.getItem('portfolio-theme')).toBe('dark');
    });

    it('toggles from dark mode to light mode: removes "dark" class and saves "light" in localStorage', () => {
      render(
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      );

      const toggleButton = screen.getByTestId('theme-toggle');
      expect(document.documentElement.classList.contains('dark')).toBe(true);

      fireEvent.click(toggleButton);

      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(localStorage.getItem('portfolio-theme')).toBe('light');
      expect(toggleButton.getAttribute('aria-label')).toBe('Cambiar a modo oscuro');
    });

    it('toggles from light mode back to dark mode: adds "dark" class and updates localStorage', () => {
      localStorage.setItem('portfolio-theme', 'light');

      render(
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      );

      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(localStorage.getItem('portfolio-theme')).toBe('light');

      const toggleButton = screen.getByTestId('theme-toggle');
      fireEvent.click(toggleButton);

      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(localStorage.getItem('portfolio-theme')).toBe('dark');
      expect(toggleButton.getAttribute('aria-label')).toBe('Cambiar a modo claro');
    });

    it('persists theme selection across re-renders and full App mount', () => {
      localStorage.setItem('portfolio-theme', 'dark');

      const { unmount } = render(<App />);
      expect(document.documentElement.classList.contains('dark')).toBe(true);

      const toggleBtn = screen.getByTestId('theme-toggle');
      fireEvent.click(toggleBtn);
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(localStorage.getItem('portfolio-theme')).toBe('light');

      unmount();

      // Remount App to verify persistence
      render(<App />);
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(localStorage.getItem('portfolio-theme')).toBe('light');
    });
  });

  // =========================================================================
  // 3. Category Filtering Suite (Instant & Accurate)
  // =========================================================================
  describe('3. Category Filtering Suite (Instant & Accurate)', () => {
    describe('Skills Filtering Matrix', () => {
      it('renders all 5 category filter tabs with accessibility roles and testids', () => {
        render(<Skills />);
        const tabIds = [
          'skill-filter-all',
          'skill-filter-frontend',
          'skill-filter-backend',
          'skill-filter-ai',
          'skill-filter-database',
        ];

        tabIds.forEach((id) => {
          const tab = screen.getByTestId(id);
          expect(tab).toBeInTheDocument();
          expect(tab).toHaveAttribute('role', 'tab');
        });

        expect(screen.getByTestId('skill-filter-all')).toHaveAttribute('aria-selected', 'true');
      });

      it('displays all 30 skills when "all" tab is selected', () => {
        render(<Skills />);
        const cards = screen.getAllByTestId('skill-card');
        expect(cards.length).toBe(skills.length);
        expect(cards.length).toBe(30);
        const counter = screen.getByText((_, el) => el?.tagName.toLowerCase() === 'span' && el?.textContent.trim() === `Mostrando ${skills.length} habilidades`);
        expect(counter).toBeInTheDocument();
      });

      it('filters skills accurately when selecting "frontend" tab', () => {
        render(<Skills />);
        fireEvent.click(screen.getByTestId('skill-filter-frontend'));

        const frontendSkills = skills.filter((s) => s.category === 'frontend');
        const visibleCards = screen.getAllByTestId('skill-card');
        expect(visibleCards.length).toBe(frontendSkills.length);
        expect(visibleCards.length).toBe(9);

        expect(screen.getByText('React.js')).toBeInTheDocument();
        expect(screen.getByText('Next.js')).toBeInTheDocument();
        expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
        expect(screen.queryByText('Node.js')).not.toBeInTheDocument();
        expect(screen.queryByText('PostgreSQL')).not.toBeInTheDocument();
      });

      it('filters skills accurately when selecting "backend" tab', () => {
        render(<Skills />);
        fireEvent.click(screen.getByTestId('skill-filter-backend'));

        const backendSkills = skills.filter((s) => s.category === 'backend');
        const visibleCards = screen.getAllByTestId('skill-card');
        expect(visibleCards.length).toBe(backendSkills.length);
        expect(visibleCards.length).toBe(7);

        expect(screen.getByText('Node.js')).toBeInTheDocument();
        expect(screen.getByText('PHP')).toBeInTheDocument();
        expect(screen.getByText('RESTful APIs')).toBeInTheDocument();
        expect(screen.queryByText('React.js')).not.toBeInTheDocument();
      });

      it('filters skills accurately when selecting "ai" tab', () => {
        render(<Skills />);
        fireEvent.click(screen.getByTestId('skill-filter-ai'));

        const aiSkills = skills.filter((s) => s.category === 'ai');
        const visibleCards = screen.getAllByTestId('skill-card');
        expect(visibleCards.length).toBe(aiSkills.length);
        expect(visibleCards.length).toBe(8);

        expect(screen.getByText('Arquitecturas RAG & LLMs')).toBeInTheDocument();
        expect(screen.getByText('Búsqueda Semántica & Embeddings')).toBeInTheDocument();
        expect(screen.getByText('Scikit-learn')).toBeInTheDocument();
        expect(screen.queryByText('PHP')).not.toBeInTheDocument();
      });

      it('filters skills accurately when selecting "database" tab', () => {
        render(<Skills />);
        fireEvent.click(screen.getByTestId('skill-filter-database'));

        const dbSkills = skills.filter((s) => s.category === 'database');
        const visibleCards = screen.getAllByTestId('skill-card');
        expect(visibleCards.length).toBe(dbSkills.length);
        expect(visibleCards.length).toBe(6);

        expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
        expect(screen.getByText('MySQL')).toBeInTheDocument();
        expect(screen.getByText('pgvector & Bases Vectoriales')).toBeInTheDocument();
        expect(screen.queryByText('React.js')).not.toBeInTheDocument();
      });

      it('restores all skills when clicking back to "all"', () => {
        render(<Skills />);
        fireEvent.click(screen.getByTestId('skill-filter-ai'));
        expect(screen.getAllByTestId('skill-card').length).toBe(8);

        fireEvent.click(screen.getByTestId('skill-filter-all'));
        expect(screen.getAllByTestId('skill-card').length).toBe(30);
      });
    });

    describe('Projects Filtering Showcase', () => {
      it('renders all 5 category filter tabs for projects', () => {
        render(<Projects />);
        const tabIds = [
          'project-filter-all',
          'project-filter-frontend',
          'project-filter-backend',
          'project-filter-ai',
          'project-filter-database',
        ];

        tabIds.forEach((id) => {
          expect(screen.getByTestId(id)).toBeInTheDocument();
        });
      });

      it('displays all 6 projects initially with impact metrics and links', () => {
        render(<Projects />);
        const projectCards = screen.getAllByTestId('project-card');
        expect(projectCards.length).toBe(6);
        const counter = screen.getByText((_, el) => el?.tagName.toLowerCase() === 'span' && el?.textContent.trim() === 'Mostrando 6 proyectos');
        expect(counter).toBeInTheDocument();

        // Check project titles
        expect(screen.getByText('Tesla: Landing Page Moderna & Microinteracciones')).toBeInTheDocument();
        expect(screen.getByText('Horizone: Plataforma Editorial de Viajes & Estilo de Vida')).toBeInTheDocument();
        expect(screen.getByText('DentalCare: Plataforma Clínica & Gestión de Citas Online')).toBeInTheDocument();
        expect(screen.getByText('Simulador de Crédito FinTech & Motor de Amortización')).toBeInTheDocument();
        expect(screen.getByText('Clasificador de Dígitos MNIST con Redes Neuronales & Keras')).toBeInTheDocument();
        expect(screen.getByText('Pipelines de Análisis Exploratorio de Datos & Modelado Estadístico')).toBeInTheDocument();
      });

      it('filters projects dynamically for "frontend" (4 projects)', () => {
        render(<Projects />);
        fireEvent.click(screen.getByTestId('project-filter-frontend'));

        const visibleCards = screen.getAllByTestId('project-card');
        expect(visibleCards.length).toBe(4);
        expect(screen.getByText('Tesla: Landing Page Moderna & Microinteracciones')).toBeInTheDocument();
        expect(screen.getByText('Horizone: Plataforma Editorial de Viajes & Estilo de Vida')).toBeInTheDocument();
      });

      it('filters projects dynamically for "backend" (3 projects)', () => {
        render(<Projects />);
        fireEvent.click(screen.getByTestId('project-filter-backend'));

        const visibleCards = screen.getAllByTestId('project-card');
        expect(visibleCards.length).toBe(3);
        expect(screen.getByText('Horizone: Plataforma Editorial de Viajes & Estilo de Vida')).toBeInTheDocument();
        expect(screen.queryByText('Tesla: Landing Page Moderna & Microinteracciones')).not.toBeInTheDocument();
      });

      it('filters projects dynamically for "ai" (4 projects)', () => {
        render(<Projects />);
        fireEvent.click(screen.getByTestId('project-filter-ai'));

        const visibleCards = screen.getAllByTestId('project-card');
        expect(visibleCards.length).toBe(4);
        expect(screen.getByText('DentalCare: Plataforma Clínica & Gestión de Citas Online')).toBeInTheDocument();
        expect(screen.getByText('Simulador de Crédito FinTech & Motor de Amortización')).toBeInTheDocument();
        expect(screen.getByText('Clasificador de Dígitos MNIST con Redes Neuronales & Keras')).toBeInTheDocument();
        expect(screen.getByText('Pipelines de Análisis Exploratorio de Datos & Modelado Estadístico')).toBeInTheDocument();
        expect(screen.queryByText('Tesla: Landing Page Moderna & Microinteracciones')).not.toBeInTheDocument();
      });

      it('filters projects dynamically for "database" (3 projects)', () => {
        render(<Projects />);
        fireEvent.click(screen.getByTestId('project-filter-database'));

        const visibleCards = screen.getAllByTestId('project-card');
        expect(visibleCards.length).toBe(3);
        expect(screen.getByText('Horizone: Plataforma Editorial de Viajes & Estilo de Vida')).toBeInTheDocument();
        expect(screen.getByText('DentalCare: Plataforma Clínica & Gestión de Citas Online')).toBeInTheDocument();
        expect(screen.getByText('Pipelines de Análisis Exploratorio de Datos & Modelado Estadístico')).toBeInTheDocument();
        expect(screen.queryByText('Tesla: Landing Page Moderna & Microinteracciones')).not.toBeInTheDocument();
      });

      it('strictly verifies that selecting a category displays only projects containing that category tag', () => {
        render(<Projects />);
        const categories = ['frontend', 'backend', 'ai', 'database'];

        categories.forEach((cat) => {
          fireEvent.click(screen.getByTestId(`project-filter-${cat}`));
          const expectedProjects = filterItemsByCategory(projects, cat);
          const visibleCards = screen.getAllByTestId('project-card');
          expect(visibleCards.length).toBe(expectedProjects.length);

          expectedProjects.forEach((proj) => {
            expect(proj.categories).toContain(cat);
            expect(screen.getByText(proj.title)).toBeInTheDocument();
          });
        });
      });
    });
  });

  // =========================================================================
  // 4. Functional Contact Module Validation & Submission Suite
  // =========================================================================
  describe('4. Functional Contact Module Validation & Submission Suite', () => {
    it('renders all required form inputs, counter, direct channels, and copy email button', () => {
      render(<Contact />);
      expect(screen.getByTestId('contact-name-input')).toBeInTheDocument();
      expect(screen.getByTestId('contact-email-input')).toBeInTheDocument();
      expect(screen.getByTestId('contact-subject-input')).toBeInTheDocument();
      expect(screen.getByTestId('contact-message-input')).toBeInTheDocument();
      expect(screen.getByTestId('message-char-counter')).toBeInTheDocument();
      expect(screen.getByTestId('contact-submit-button')).toBeInTheDocument();
      expect(screen.getByTestId('copy-email-button')).toBeInTheDocument();
      expect(screen.getByTestId('reveal-email-button')).toBeInTheDocument();
      expect(screen.queryByTestId('contact-email-link')).not.toBeInTheDocument();
      fireEvent.click(screen.getByTestId('reveal-email-button'));
      expect(screen.getByTestId('contact-email-link')).toHaveAttribute(
        'href',
        `mailto:${contactChannels.email}`
      );
    });

    it('flags all fields with contextual error messages upon empty form submission', () => {
      render(<Contact />);
      const submitBtn = screen.getByTestId('contact-submit-button');

      fireEvent.click(submitBtn);

      const errName = screen.getByTestId('error-name');
      const errEmail = screen.getByTestId('error-email');
      const errSubject = screen.getByTestId('error-subject');
      const errMessage = screen.getByTestId('error-message');

      expect(errName.textContent).toBe('El nombre completo es requerido.');
      expect(errEmail.textContent).toBe('El correo electrónico es requerido.');
      expect(errSubject.textContent).toBe('El asunto es requerido.');
      expect(errMessage.textContent).toBe('El mensaje es requerido.');

      // Asserts no message was stored
      expect(localStorage.getItem('portfolio-messages')).toBeNull();
    });

    it('enforces email format validation with contextual error message', () => {
      render(<Contact />);
      const emailInput = screen.getByTestId('contact-email-input');

      // Invalid email
      fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
      fireEvent.blur(emailInput);

      expect(screen.getByTestId('error-email')).toBeInTheDocument();
      expect(screen.getByTestId('error-email').textContent).toBe(
        'Ingresa una dirección de correo válida (ej. nombre@dominio.com).'
      );

      // Typing a valid email clears error
      fireEvent.change(emailInput, { target: { value: 'valid.engineer@gmail.com' } });
      expect(screen.queryByTestId('error-email')).not.toBeInTheDocument();
    });

    it('enforces message length boundary: < 10 characters flags error, character counter updates in real time', () => {
      render(<Contact />);
      const messageInput = screen.getByTestId('contact-message-input');
      const counter = screen.getByTestId('message-char-counter');

      expect(counter.textContent).toBe('0 / 1000 caracteres');

      // 6 characters (boundary < 10)
      fireEvent.change(messageInput, { target: { value: 'Hola!!' } });
      fireEvent.blur(messageInput);

      expect(counter.textContent).toBe('6 / 1000 caracteres');
      expect(screen.getByTestId('error-message')).toBeInTheDocument();
      expect(screen.getByTestId('error-message').textContent).toBe(
        'El mensaje debe tener al menos 10 caracteres.'
      );

      // 10 characters (boundary exact min)
      fireEvent.change(messageInput, { target: { value: '0123456789' } });
      expect(counter.textContent).toBe('10 / 1000 caracteres');
      expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
    });

    it('executes successful submission flow: loading state -> success banner -> reset form -> localStorage persistence', async () => {
      render(<Contact />);

      const nameInput = screen.getByTestId('contact-name-input');
      const emailInput = screen.getByTestId('contact-email-input');
      const subjectInput = screen.getByTestId('contact-subject-input');
      const messageInput = screen.getByTestId('contact-message-input');
      const submitBtn = screen.getByTestId('contact-submit-button');

      fireEvent.change(nameInput, { target: { value: 'Dr. Guillermo Santos' } });
      fireEvent.change(emailInput, { target: { value: 'guillermo.santos@ai-corp.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Oportunidad Tech Lead RAG' } });
      fireEvent.change(messageInput, {
        target: { value: 'Nos encantaría agendar una entrevista técnica para liderar nuestros sistemas RAG.' },
      });

      expect(submitBtn).not.toBeDisabled();
      expect(submitBtn.textContent).toContain('Enviar Mensaje');

      fireEvent.click(submitBtn);

      // Verify success confirmation banner displays
      await waitFor(() => {
        expect(screen.getByTestId('contact-success-message')).toBeInTheDocument();
      });

      expect(screen.getByText('¡Mensaje enviado con éxito!')).toBeInTheDocument();

      // Verify form reset
      expect(nameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(subjectInput).toHaveValue('');
      expect(messageInput).toHaveValue('');
      expect(screen.getByTestId('message-char-counter').textContent).toBe('0 / 1000 caracteres');

      // Verify persistence in localStorage
      const stored = JSON.parse(localStorage.getItem('portfolio-messages'));
      expect(Array.isArray(stored)).toBe(true);
      expect(stored).toHaveLength(1);
      expect(stored[0]).toMatchObject({
        name: 'Dr. Guillermo Santos',
        email: 'guillermo.santos@ai-corp.com',
        subject: 'Oportunidad Tech Lead RAG',
        message: 'Nos encantaría agendar una entrevista técnica para liderar nuestros sistemas RAG.',
      });
      expect(stored[0].id).toBeDefined();
      expect(stored[0].timestamp).toBeDefined();
    });

    it('triggers loading state on submit button while asynchronous submission is in-flight', async () => {
      let resolveSubmission;
      const delayedPromise = new Promise((resolve) => {
        resolveSubmission = resolve;
      });

      const spy = vi.spyOn(contactService, 'submitContactMessage').mockImplementation(() => delayedPromise);

      render(<Contact />);

      fireEvent.change(screen.getByTestId('contact-name-input'), { target: { value: 'Test User' } });
      fireEvent.change(screen.getByTestId('contact-email-input'), { target: { value: 'test@domain.com' } });
      fireEvent.change(screen.getByTestId('contact-subject-input'), { target: { value: 'Test Subject' } });
      fireEvent.change(screen.getByTestId('contact-message-input'), {
        target: { value: 'Testing in-flight loading state on submit button.' },
      });

      const submitBtn = screen.getByTestId('contact-submit-button');
      fireEvent.click(submitBtn);

      // Verify button entered loading state
      expect(submitBtn).toBeDisabled();
      expect(screen.getByText('Enviando mensaje...')).toBeInTheDocument();

      // Resolve the submission
      resolveSubmission({
        success: true,
        message: '¡Mensaje enviado con éxito!',
      });

      await waitFor(() => {
        expect(screen.getByTestId('contact-success-message')).toBeInTheDocument();
      });

      expect(submitBtn).not.toBeDisabled();
      spy.mockRestore();
    });

    it('handles clipboard copy button: copies r.jhonf@gmail.com and renders confirmation feedback', async () => {
      render(<Contact />);
      const copyBtn = screen.getByTestId('copy-email-button');

      expect(copyBtn.textContent).toContain('Copiar correo');

      fireEvent.click(copyBtn);

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('r.jhonf@gmail.com');
      expect(await screen.findByText('¡Copiado al portapapeles!')).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 5. Full End-to-End App Integration Flow
  // =========================================================================
  describe('5. Full End-to-End App Integration Flow', () => {
    it('renders entire portfolio with zero runtime errors and allows full user journey', async () => {
      render(<App />);

      // 1. Navbar & Hero are present
      expect(screen.getByText('Jhon Rios')).toBeInTheDocument();
      expect(screen.getByTestId('hero-cta-projects')).toBeInTheDocument();

      // 2. Toggle Theme
      const themeToggle = screen.getByTestId('theme-toggle');
      fireEvent.click(themeToggle);
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      fireEvent.click(themeToggle);
      expect(document.documentElement.classList.contains('dark')).toBe(true);

      // 3. Filter skills in full app
      const aiSkillsTab = screen.getByTestId('skill-filter-ai');
      fireEvent.click(aiSkillsTab);
      expect(screen.getByText('Arquitecturas RAG & LLMs')).toBeInTheDocument();

      // 4. Filter projects in full app
      const frontendProjectsTab = screen.getByTestId('project-filter-frontend');
      fireEvent.click(frontendProjectsTab);
      expect(screen.getByText('Tesla: Landing Page Moderna & Microinteracciones')).toBeInTheDocument();

      // 5. Submit contact form in full app
      fireEvent.change(screen.getByTestId('contact-name-input'), { target: { value: 'End-to-End User' } });
      fireEvent.change(screen.getByTestId('contact-email-input'), { target: { value: 'e2e@domain.com' } });
      fireEvent.change(screen.getByTestId('contact-subject-input'), { target: { value: 'E2E Full Stack Inquiry' } });
      fireEvent.change(screen.getByTestId('contact-message-input'), {
        target: { value: 'Valid end-to-end integration test message body.' },
      });

      fireEvent.click(screen.getByTestId('contact-submit-button'));

      await waitFor(() => {
        expect(screen.getByTestId('contact-success-message')).toBeInTheDocument();
      });

      const messages = JSON.parse(localStorage.getItem('portfolio-messages'));
      expect(messages).toHaveLength(1);
      expect(messages[0].name).toBe('End-to-End User');
    });
  });
});
