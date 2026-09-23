import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white dark:bg-[#080c14] border-t border-slate-200 dark:border-white/10 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md">
                JR
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Jhon Fernando Rios Galindez
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-gray-400 max-w-md leading-relaxed">
              Desarrollador de Software & Desarrollador Web Full Stack con especialización complementaria en Inteligencia Artificial. Construyendo aplicaciones web de alto rendimiento y arquitecturas digitales escalables.
            </p>
            <p className="text-xs text-slate-500 dark:text-gray-500">
              Ubicación: Colombia • Disponible para proyectos globales
            </p>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#educacion" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Educación
                </a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Canales Oficiales
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="https://www.linkedin.com/in/jhon-rios-galindez/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-500" />
                LinkedIn
              </a>
              <a
                href="https://github.com/jhonriosgalindez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-500" />
                GitHub
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                Formulario de Contacto (Protegido)
              </a>
              <a
                href="https://jhonriosportfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-cyan-500" />
                Portafolio en Vercel
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Jhon Fernando Rios Galindez. Todos los derechos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-cyan-500 bg-slate-50 dark:bg-gray-800 text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
