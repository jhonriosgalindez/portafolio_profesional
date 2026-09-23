import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from '../App';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

describe('Theme Context and Toggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders with default theme and allows toggling', () => {
    const TestComponent = () => {
      const { theme, toggleTheme } = useTheme();
      return (
        <div>
          <span data-testid="current-theme">{theme}</span>
          <button data-testid="toggle-btn" onClick={toggleTheme}>Toggle</button>
        </div>
      );
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeSpan = screen.getByTestId('current-theme');
    const toggleBtn = screen.getByTestId('toggle-btn');
    const initialTheme = themeSpan.textContent;

    expect(['dark', 'light']).toContain(initialTheme);

    fireEvent.click(toggleBtn);
    const updatedTheme = themeSpan.textContent;
    expect(updatedTheme).not.toBe(initialTheme);
    expect(localStorage.getItem('portfolio-theme')).toBe(updatedTheme);
  });
});

describe('Frontend Core UI Components', () => {
  it('renders Navbar with brand and navigation links', () => {
    render(<App />);

    expect(screen.getByText('Jhon Rios')).toBeInTheDocument();
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument();

    expect(screen.getByTestId('nav-link-inicio')).toBeInTheDocument();
    expect(screen.getByTestId('nav-link-sobre-mi')).toBeInTheDocument();
    expect(screen.getByTestId('nav-link-experiencia')).toBeInTheDocument();
    expect(screen.getByTestId('nav-link-educacion')).toBeInTheDocument();
    expect(screen.getByTestId('nav-link-habilidades')).toBeInTheDocument();
    expect(screen.getByTestId('nav-link-proyectos')).toBeInTheDocument();
    expect(screen.getByTestId('nav-link-contacto')).toBeInTheDocument();
  });

  it('renders Hero section with presentation, status badge, and CTAs', () => {
    render(<App />);

    expect(screen.getAllByText(/Jhon Fernando Rios/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Disponible para proyectos/i).length).toBeGreaterThan(0);
    expect(screen.getByTestId('hero-cta-projects')).toBeInTheDocument();
    expect(screen.getByTestId('hero-cta-contact')).toBeInTheDocument();
  });

  it('renders About section with metrics and 3 core pillars', () => {
    render(<App />);

    expect(screen.getByText('+5 Años')).toBeInTheDocument();
    expect(screen.getByText('+40%')).toBeInTheDocument();
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();

    expect(screen.getByText('Full Stack Architecture')).toBeInTheDocument();
    expect(screen.getByText('AI & RAG Engineering')).toBeInTheDocument();
    expect(screen.getByText('Performance & Scalability')).toBeInTheDocument();
  });

  it('renders Experience section with ORBIDI and Fiverr career history', () => {
    render(<App />);

    expect(screen.getByText('Production Lead')).toBeInTheDocument();
    expect(screen.getByText('Programador Full Stack')).toBeInTheDocument();
    expect(screen.getByText('Desarrollador Web Freelance')).toBeInTheDocument();
    expect(screen.getAllByText('ORBIDI').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Fiverr').length).toBeGreaterThan(0);
  });

  it('renders Education and all 5 official certifications', () => {
    render(<App />);

    expect(screen.getAllByText(/Corporación Universitaria Minuto de Dios/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Servicio Nacional de Aprendizaje/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Universidad del Cauca/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Cambridge Language Centres/i)).toBeInTheDocument();

    expect(screen.getByText('DOM Manipulation Course')).toBeInTheDocument();
    expect(screen.getByText('Introduction to Artificial Intelligence (AI)')).toBeInTheDocument();
    expect(screen.getByText('Python for Data Science, AI & Development')).toBeInTheDocument();
    expect(screen.getByText('React.js Course')).toBeInTheDocument();
    expect(screen.getByText('Google Cloud Fundamentals: Core Infrastructure en Español')).toBeInTheDocument();
  });

  it('renders Footer with copyright and social links', () => {
    render(<App />);

    expect(screen.getByText(/Todos los derechos reservados/i)).toBeInTheDocument();
    expect(screen.getByText('Volver arriba')).toBeInTheDocument();
  });
});
