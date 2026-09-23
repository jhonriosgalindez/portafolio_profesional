import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { getDecodedEmail, contactChannels } from '../data/profileData';

describe('Anti-Bot Email Protection Suite', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('correctly decodes the obfuscated email address via helper function', () => {
    const decoded = getDecodedEmail();
    expect(decoded).toBe('r.jhonf@gmail.com');
    expect(contactChannels.email).toBe('r.jhonf@gmail.com');
  });

  it('does NOT expose plain text email or mailto link on initial Contact component render', () => {
    render(<Contact />);

    // Must not show plain text email initially
    expect(screen.queryByText('r.jhonf@gmail.com')).not.toBeInTheDocument();
    expect(screen.queryByTestId('contact-email-link')).not.toBeInTheDocument();

    // Must render anti-bot masked indicator and reveal button
    expect(screen.getByText('•••••••••••@•••••.com')).toBeInTheDocument();
    expect(screen.getByTestId('reveal-email-button')).toBeInTheDocument();
  });

  it('reveals email on user demand and allows hiding it again', () => {
    render(<Contact />);

    const revealBtn = screen.getByTestId('reveal-email-button');
    expect(revealBtn.textContent).toContain('Revelar correo');

    // Click to reveal
    fireEvent.click(revealBtn);

    const emailLink = screen.getByTestId('contact-email-link');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.textContent).toContain('r.jhonf@gmail.com');
    expect(emailLink).toHaveAttribute('href', 'mailto:r.jhonf@gmail.com');
    expect(revealBtn.textContent).toContain('Ocultar');

    // Click to hide again
    fireEvent.click(revealBtn);

    expect(screen.queryByTestId('contact-email-link')).not.toBeInTheDocument();
    expect(screen.getByText('•••••••••••@•••••.com')).toBeInTheDocument();
    expect(revealBtn.textContent).toContain('Revelar correo');
  });

  it('copies email to clipboard and provides feedback without exposing plain text in DOM', async () => {
    render(<Contact />);

    const copyBtn = screen.getByTestId('copy-email-button');
    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('r.jhonf@gmail.com');
    expect(await screen.findByText('¡Copiado al portapapeles!')).toBeInTheDocument();
  });

  it('routes Hero and Footer mail links to internal contact section avoiding raw mailto exposure', () => {
    render(
      <div>
        <Hero />
        <Footer />
      </div>
    );

    // Hero contact link points to #contacto
    const heroMailBtn = screen.getByLabelText(/Contactar a Jhon Rios/i);
    expect(heroMailBtn).toHaveAttribute('href', '#contacto');

    // Footer contact link points to #contacto
    const footerMailLink = screen.getByText('Formulario de Contacto (Protegido)');
    expect(footerMailLink).toHaveAttribute('href', '#contacto');
  });
});
