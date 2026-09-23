import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', testId: 'nav-link-inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi', testId: 'nav-link-sobre-mi' },
    { name: 'Experiencia', href: '#experiencia', testId: 'nav-link-experiencia' },
    { name: 'Educación', href: '#educacion', testId: 'nav-link-educacion' },
    { name: 'Habilidades', href: '#habilidades', testId: 'nav-link-habilidades' },
    { name: 'Proyectos', href: '#proyectos', testId: 'nav-link-proyectos' },
    { name: 'Contacto', href: '#contacto', testId: 'nav-link-contacto' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0b0f19]/90 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-white/10'
          : 'bg-transparent backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a
            href="#inicio"
            className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              JR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Jhon Rios
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-gray-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Software & Web Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={link.testId}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Controls: Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              data-testid="theme-toggle"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-4 pt-2 pb-6 space-y-1 shadow-2xl transition-all animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="/Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              Descargar CV (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
