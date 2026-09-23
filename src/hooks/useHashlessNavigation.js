import { useEffect } from 'react';

/**
 * Hook to enable smooth scrolling navigation without exposing URL hashes (#inicio, #experiencia, etc.).
 * - Intercepts anchor clicks pointing to #ids.
 * - Prevents default browser hash fragment appending in the address bar.
 * - Scrolls smoothly to the requested section with offset support.
 * - Cleans any hash fragment from URL if present upon initial loading or navigation.
 */
export const useHashlessNavigation = () => {
  useEffect(() => {
    // 1. If loaded with a hash in URL (e.g. from bookmark/external link), scroll to it and remove hash from address bar
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement && typeof targetElement.scrollIntoView === 'function') {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // 2. Intercept clicks on any internal anchor links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.slice(1);

        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement && typeof targetElement.scrollIntoView === 'function') {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // href="#" scrolls to top of page
          if (typeof window.scrollTo === 'function') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }

        // Ensure the address bar remains clean without any hash
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    };

    // 3. Clear hash if hashchange ever occurs
    const handleHashChange = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement && typeof targetElement.scrollIntoView === 'function') {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };

    document.addEventListener('click', handleAnchorClick, true);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      document.removeEventListener('click', handleAnchorClick, true);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
};

export default useHashlessNavigation;
