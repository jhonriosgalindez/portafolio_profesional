import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useHashlessNavigation } from '../hooks/useHashlessNavigation';

function DummyNavigationComponent() {
  useHashlessNavigation();

  return (
    <div>
      <nav>
        <a href="#inicio" data-testid="link-inicio">Inicio</a>
        <a href="#proyectos" data-testid="link-proyectos">Proyectos</a>
        <a href="#" data-testid="link-top">Volver arriba</a>
        <a href="https://github.com/jhonriosgalindez" data-testid="link-external" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
      <section id="inicio" data-testid="section-inicio">Inicio Section</section>
      <section id="proyectos" data-testid="section-proyectos">Proyectos Section</section>
    </div>
  );
}

describe('Hashless Navigation Hook (useHashlessNavigation)', () => {
  let replaceStateSpy;
  let scrollToSpy;
  let scrollIntoViewMock;

  beforeEach(() => {
    replaceStateSpy = vi.spyOn(window.history, 'replaceState');
    scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    scrollIntoViewMock = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    window.location.hash = '';
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('intercepts anchor clicks and calls scrollIntoView on the target section without appending hash', () => {
    render(<DummyNavigationComponent />);

    const proyectosLink = screen.getByTestId('link-proyectos');
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    proyectosLink.dispatchEvent(clickEvent);

    expect(clickEvent.defaultPrevented).toBe(true);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(window.location.hash).toBe('');
  });

  it('intercepts hash "#" and smoothly scrolls to the top of the window', () => {
    render(<DummyNavigationComponent />);

    const topLink = screen.getByTestId('link-top');
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    topLink.dispatchEvent(clickEvent);

    expect(clickEvent.defaultPrevented).toBe(true);
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('does NOT intercept external or non-hash links', () => {
    render(<DummyNavigationComponent />);

    const externalLink = screen.getByTestId('link-external');
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    externalLink.dispatchEvent(clickEvent);

    expect(clickEvent.defaultPrevented).toBe(false);
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });

  it('removes hash from URL if page is initially loaded with a hash', () => {
    window.location.hash = '#inicio';

    render(<DummyNavigationComponent />);

    expect(replaceStateSpy).toHaveBeenCalledWith(null, '', window.location.pathname + window.location.search);
  });

  it('handles clicks on nested elements inside an anchor tag', () => {
    function NestedAnchorComponent() {
      useHashlessNavigation();
      return (
        <div>
          <a href="#inicio" data-testid="nested-link">
            <span data-testid="nested-child">Child Text</span>
          </a>
          <section id="inicio">Section Content</section>
        </div>
      );
    }

    render(<NestedAnchorComponent />);

    const childSpan = screen.getByTestId('nested-child');
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    childSpan.dispatchEvent(clickEvent);

    expect(clickEvent.defaultPrevented).toBe(true);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
