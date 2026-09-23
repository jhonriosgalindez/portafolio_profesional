import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { filterItemsByCategory } from '../services/filterService';
import { validateContactForm, submitContactMessage, EMAIL_REGEX } from '../services/contactService';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { skills, projects } from '../data/profileData';

describe('Filter Service (Unit Tests)', () => {
  const sampleItems = [
    { id: 1, name: 'React', category: 'frontend' },
    { id: 2, name: 'Node.js', category: 'backend' },
    { id: 3, name: 'Python', category: 'ai' },
    { id: 4, name: 'PostgreSQL', category: 'database' },
    { id: 5, name: 'FullStack App', categories: ['frontend', 'backend', 'database'] },
    { id: 6, name: 'AI Engine', categories: ['ai', 'backend'] },
  ];

  it('returns all items when activeCategory is "all" or undefined', () => {
    expect(filterItemsByCategory(sampleItems, 'all')).toHaveLength(sampleItems.length);
    expect(filterItemsByCategory(sampleItems)).toHaveLength(sampleItems.length);
  });

  it('filters items with a single category correctly', () => {
    const frontendItems = filterItemsByCategory(sampleItems, 'frontend');
    // Item 1 (category: 'frontend') and Item 5 (categories: ['frontend', ...])
    expect(frontendItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1 }),
        expect.objectContaining({ id: 5 }),
      ])
    );
    expect(frontendItems).toHaveLength(2);
  });

  it('filters items with an array of categories correctly', () => {
    const backendItems = filterItemsByCategory(sampleItems, 'backend');
    // Item 2 (backend), Item 5 (backend), Item 6 (backend)
    expect(backendItems).toHaveLength(3);
    expect(backendItems.map((i) => i.id)).toEqual([2, 5, 6]);
  });

  it('returns empty array when no items match category', () => {
    const nonExistent = filterItemsByCategory(sampleItems, 'non-existent');
    expect(nonExistent).toEqual([]);
  });

  it('handles null, undefined, or empty items array gracefully', () => {
    expect(filterItemsByCategory(null, 'frontend')).toEqual([]);
    expect(filterItemsByCategory(undefined, 'frontend')).toEqual([]);
    expect(filterItemsByCategory([], 'frontend')).toEqual([]);
  });
});

describe('Contact Service Validation & Submission (Unit Tests)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('validates required fields and reports errors for empty inputs', () => {
    const result = validateContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBeDefined();
    expect(result.errors.email).toBeDefined();
    expect(result.errors.subject).toBeDefined();
    expect(result.errors.message).toBeDefined();
  });

  it('enforces minimum length constraints for name (min 2), subject (min 3), and message (min 10)', () => {
    const shortResult = validateContactForm({
      name: 'A',
      email: 'valid@example.com',
      subject: 'Ab',
      message: 'Short',
    });

    expect(shortResult.isValid).toBe(false);
    expect(shortResult.errors.name).toMatch(/al minímo 2 caracteres/i);
    expect(shortResult.errors.subject).toMatch(/al menos 3 caracteres/i);
    expect(shortResult.errors.message).toMatch(/al menos 10 caracteres/i);
  });

  it('validates email formats with RFC 5322 compliance', () => {
    const invalidEmails = [
      'plainaddress',
      '#@%^%#$@#$@#.com',
      '@example.com',
      'Joe Smith <email@example.com>',
      'email.example.com',
      'email@example@example.com',
      'email@example',
    ];

    invalidEmails.forEach((invalidEmail) => {
      const result = validateContactForm({
        name: 'John Doe',
        email: invalidEmail,
        subject: 'Valid Subject',
        message: 'This is a sufficiently long test message.',
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBeDefined();
    });

    const validEmails = [
      'email@example.com',
      'firstname.lastname@example.com',
      'email@subdomain.example.com',
      'firstname+lastname@example.com',
      'r.jhonf@gmail.com',
    ];

    validEmails.forEach((validEmail) => {
      expect(EMAIL_REGEX.test(validEmail)).toBe(true);
    });
  });

  it('enforces maximum length of 1000 characters for message', () => {
    const validMessage = 'A'.repeat(1000);
    const validRes = validateContactForm({
      name: 'John Doe',
      email: 'valid@example.com',
      subject: 'Valid Subject',
      message: validMessage,
    });
    expect(validRes.isValid).toBe(true);

    const overlyLongMessage = 'A'.repeat(1001);
    const invalidRes = validateContactForm({
      name: 'John Doe',
      email: 'valid@example.com',
      subject: 'Valid Subject',
      message: overlyLongMessage,
    });
    expect(invalidRes.isValid).toBe(false);
    expect(invalidRes.errors.message).toMatch(/no puede exceder los 1000 caracteres/i);
  });

  it('submits valid message and persists into localStorage under "portfolio-messages"', async () => {
    const validForm = {
      name: 'Laura Gomez',
      email: 'laura@example.com',
      subject: 'Proyecto Inteligencia Artificial',
      message: 'Hola Jhon, me gustaría conversar sobre un proyecto de búsqueda semántica con RAG.',
    };

    const response = await submitContactMessage(validForm, { delayMs: 10 });
    expect(response.success).toBe(true);
    expect(response.message).toMatch(/¡Mensaje enviado con éxito!/i);

    const storedMessages = JSON.parse(localStorage.getItem('portfolio-messages'));
    expect(Array.isArray(storedMessages)).toBe(true);
    expect(storedMessages).toHaveLength(1);
    expect(storedMessages[0]).toMatchObject({
      name: validForm.name,
      email: validForm.email,
      subject: validForm.subject,
      message: validForm.message,
    });
    expect(storedMessages[0].id).toBeDefined();
    expect(storedMessages[0].timestamp).toBeDefined();
  });

  it('rejects invalid message submission without storing to localStorage', async () => {
    const invalidForm = {
      name: '',
      email: 'bad-email',
      subject: 'Hi',
      message: 'Too short',
    };

    const response = await submitContactMessage(invalidForm, { delayMs: 10 });
    expect(response.success).toBe(false);
    expect(response.errors).toBeDefined();
    expect(localStorage.getItem('portfolio-messages')).toBeNull();
  });
});

describe('Interactive Skills Component', () => {
  it('renders all 5 category filter tabs with correct testids', () => {
    render(<Skills />);

    expect(screen.getByTestId('skill-filter-all')).toBeInTheDocument();
    expect(screen.getByTestId('skill-filter-frontend')).toBeInTheDocument();
    expect(screen.getByTestId('skill-filter-backend')).toBeInTheDocument();
    expect(screen.getByTestId('skill-filter-ai')).toBeInTheDocument();
    expect(screen.getByTestId('skill-filter-database')).toBeInTheDocument();
  });

  it('filters skills dynamically upon clicking tabs', () => {
    render(<Skills />);

    // Initially all skills are shown
    const allCardsInitial = screen.getAllByTestId('skill-card');
    expect(allCardsInitial.length).toBe(skills.length);

    // Filter by frontend
    fireEvent.click(screen.getByTestId('skill-filter-frontend'));
    const frontendSkills = skills.filter((s) => s.category === 'frontend');
    const frontendCards = screen.getAllByTestId('skill-card');
    expect(frontendCards.length).toBe(frontendSkills.length);
    expect(screen.getByText('React.js')).toBeInTheDocument();

    // Filter by AI & ML
    fireEvent.click(screen.getByTestId('skill-filter-ai'));
    const aiSkills = skills.filter((s) => s.category === 'ai');
    const aiCards = screen.getAllByTestId('skill-card');
    expect(aiCards.length).toBe(aiSkills.length);
    expect(screen.getByText('Arquitecturas RAG & LLMs')).toBeInTheDocument();

    // Return to All
    fireEvent.click(screen.getByTestId('skill-filter-all'));
    expect(screen.getAllByTestId('skill-card').length).toBe(skills.length);
  });
});

describe('Interactive Projects Component', () => {
  it('renders all 5 category filter tabs with correct testids', () => {
    render(<Projects />);

    expect(screen.getByTestId('project-filter-all')).toBeInTheDocument();
    expect(screen.getByTestId('project-filter-frontend')).toBeInTheDocument();
    expect(screen.getByTestId('project-filter-backend')).toBeInTheDocument();
    expect(screen.getByTestId('project-filter-ai')).toBeInTheDocument();
    expect(screen.getByTestId('project-filter-database')).toBeInTheDocument();
  });

  it('displays all 6 projects initially with impact metrics and links', () => {
    render(<Projects />);

    const projectCards = screen.getAllByTestId('project-card');
    expect(projectCards.length).toBe(6);

    // Check titles and impact presence
    expect(screen.getByText('Tesla: Landing Page Moderna & Microinteracciones')).toBeInTheDocument();
    expect(screen.getByText('Horizone: Plataforma Editorial de Viajes & Estilo de Vida')).toBeInTheDocument();
    expect(screen.getByText('DentalCare: Plataforma Clínica & Gestión de Citas Online')).toBeInTheDocument();
    expect(screen.getByText('Simulador de Crédito FinTech & Motor de Amortización')).toBeInTheDocument();
    expect(screen.getByText('Clasificador de Dígitos MNIST con Redes Neuronales & Keras')).toBeInTheDocument();
    expect(screen.getByText('Pipelines de Análisis Exploratorio de Datos & Modelado Estadístico')).toBeInTheDocument();
    expect(screen.getAllByText(/Impacto:/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Ver Demo/i).length).toBe(4);
    expect(screen.getAllByText(/Código/i).length).toBe(6);
  });

  it('filters projects dynamically by category', () => {
    render(<Projects />);

    // Filter by frontend (4 projects: tesla, blog, dental, credit-simulator)
    fireEvent.click(screen.getByTestId('project-filter-frontend'));
    const frontendCards = screen.getAllByTestId('project-card');
    expect(frontendCards.length).toBe(4);

    // Filter by AI (4 projects: dental, credit-simulator, keras-mnist, data-analysis)
    fireEvent.click(screen.getByTestId('project-filter-ai'));
    const aiCards = screen.getAllByTestId('project-card');
    expect(aiCards.length).toBe(4);

    // Filter by database (3 projects: blog, dental, data-analysis)
    fireEvent.click(screen.getByTestId('project-filter-database'));
    const dbCards = screen.getAllByTestId('project-card');
    expect(dbCards.length).toBe(3);

    // Return to All
    fireEvent.click(screen.getByTestId('project-filter-all'));
    expect(screen.getAllByTestId('project-card').length).toBe(6);
  });

  it('correctly handles repository-only projects without demo links', () => {
    render(<Projects />);

    expect(screen.getAllByText('Solo Repositorio').length).toBe(2);
    expect(screen.getAllByText(/Ver Demo/i).length).toBe(4);
    expect(screen.getAllByText(/Código/i).length).toBe(6);
  });
});

describe('Functional Contact Component (Integration Flow)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders all required form inputs, counter, direct channels, and copy email button', () => {
    render(<Contact />);

    expect(screen.getByTestId('contact-name-input')).toBeInTheDocument();
    expect(screen.getByTestId('contact-email-input')).toBeInTheDocument();
    expect(screen.getByTestId('contact-subject-input')).toBeInTheDocument();
    expect(screen.getByTestId('contact-message-input')).toBeInTheDocument();
    expect(screen.getByTestId('message-char-counter')).toBeInTheDocument();
    expect(screen.getByTestId('contact-submit-button')).toBeInTheDocument();
    expect(screen.getByTestId('reveal-email-button')).toBeInTheDocument();
    expect(screen.queryByTestId('contact-email-link')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('reveal-email-button'));
    expect(screen.getByTestId('contact-email-link')).toBeInTheDocument();
    expect(screen.getByTestId('copy-email-button')).toBeInTheDocument();
  });

  it('updates live character counter as user types', () => {
    render(<Contact />);

    const messageInput = screen.getByTestId('contact-message-input');
    const counter = screen.getByTestId('message-char-counter');

    expect(counter.textContent).toContain('0 / 1000');

    fireEvent.change(messageInput, { target: { value: 'Hola Jhon, necesito un proyecto.' } });
    expect(counter.textContent).toContain('32 / 1000');
  });

  it('shows error messages on invalid submit and clears on correction', async () => {
    render(<Contact />);

    const submitBtn = screen.getByTestId('contact-submit-button');
    fireEvent.click(submitBtn);

    // Errors should appear
    expect(screen.getByTestId('error-name')).toBeInTheDocument();
    expect(screen.getByTestId('error-email')).toBeInTheDocument();
    expect(screen.getByTestId('error-subject')).toBeInTheDocument();
    expect(screen.getByTestId('error-message')).toBeInTheDocument();

    // Now correct the name field
    const nameInput = screen.getByTestId('contact-name-input');
    fireEvent.change(nameInput, { target: { value: 'Carlos Mendoza' } });

    expect(screen.queryByTestId('error-name')).not.toBeInTheDocument();
  });

  it('validates on blur for individual fields', () => {
    render(<Contact />);

    const emailInput = screen.getByTestId('contact-email-input');
    fireEvent.change(emailInput, { target: { value: 'invalid-email-address' } });
    fireEvent.blur(emailInput);

    expect(screen.getByTestId('error-email')).toBeInTheDocument();
    expect(screen.getByTestId('error-email').textContent).toMatch(/dirección de correo válida/i);
  });

  it('successfully submits valid form, resets inputs, and displays dismissible success message', async () => {
    render(<Contact />);

    fireEvent.change(screen.getByTestId('contact-name-input'), {
      target: { value: 'Patricia Silva' },
    });
    fireEvent.change(screen.getByTestId('contact-email-input'), {
      target: { value: 'patricia@empresa.com' },
    });
    fireEvent.change(screen.getByTestId('contact-subject-input'), {
      target: { value: 'Consultoría en MLOps & RAG' },
    });
    fireEvent.change(screen.getByTestId('contact-message-input'), {
      target: { value: 'Nos interesa agendar una reunión para discutir la implementación de un motor de búsqueda semántica.' },
    });

    const submitBtn = screen.getByTestId('contact-submit-button');
    fireEvent.click(submitBtn);

    // Wait for submission completion and success banner
    await waitFor(
      () => {
        expect(screen.getByTestId('contact-success-message')).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    expect(screen.getByTestId('contact-name-input')).toHaveValue('');
    expect(screen.getByTestId('contact-email-input')).toHaveValue('');
    expect(screen.getByTestId('contact-subject-input')).toHaveValue('');
    expect(screen.getByTestId('contact-message-input')).toHaveValue('');

    // Verify localStorage has the message
    const stored = JSON.parse(localStorage.getItem('portfolio-messages'));
    expect(stored).toHaveLength(1);
    expect(stored[0].name).toBe('Patricia Silva');

    // Dismiss the success message
    const closeBtn = screen.getByRole('button', { name: /cerrar notificación/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByTestId('contact-success-message')).not.toBeInTheDocument();
  });

  it('handles copy email button interaction', async () => {
    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    render(<Contact />);

    const copyBtn = screen.getByTestId('copy-email-button');
    expect(copyBtn.textContent).toContain('Copiar correo');

    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('r.jhonf@gmail.com');
    expect(await screen.findByText('¡Copiado al portapapeles!')).toBeInTheDocument();
  });

  it('accumulates multiple submissions in localStorage', async () => {
    localStorage.setItem(
      'portfolio-messages',
      JSON.stringify([{ id: 'msg_1', name: 'Existing User', email: 'user@test.com' }])
    );

    const newMsg = {
      name: 'Second User',
      email: 'second@test.com',
      subject: 'New Inquiry',
      message: 'This is a second test message for Jhon.',
    };

    const res = await submitContactMessage(newMsg, { delayMs: 10 });
    expect(res.success).toBe(true);

    const stored = JSON.parse(localStorage.getItem('portfolio-messages'));
    expect(stored).toHaveLength(2);
    expect(stored[1].name).toBe('Second User');
  });

  it('handles submission error gracefully when submission service fails', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });

    render(<Contact />);

    fireEvent.change(screen.getByTestId('contact-name-input'), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByTestId('contact-email-input'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByTestId('contact-subject-input'), {
      target: { value: 'Valid Subject' },
    });
    fireEvent.change(screen.getByTestId('contact-message-input'), {
      target: { value: 'Valid message body with sufficient length.' },
    });

    fireEvent.click(screen.getByTestId('contact-submit-button'));

    await waitFor(
      () => {
        expect(
          screen.getByText(/Ocurrió un error al procesar el mensaje/i)
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    setItemSpy.mockRestore();
  });
});

