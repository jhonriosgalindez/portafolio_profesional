import React from 'react';
import { ArrowRight, Mail, Linkedin, Github, FileText, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[350px] bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Presentation & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Disponible para proyectos & innovación técnica
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hola, soy{' '}
                <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 bg-clip-text text-transparent">
                  Jhon Fernando Rios
                </span>
              </h1>
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-800 dark:text-white">
                  Desarrollador de Software & Web Full Stack
                </p>
                <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-indigo-300 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"></span>
                  Especialista en Inteligencia Artificial{' '}
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-semibold">
                    Enfoque Secundario
                  </span>
                </p>
              </div>
            </div>

            {/* Bio Narrative pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Desarrollador de software y aplicaciones web con más de 5 años de trayectoria diseñando soluciones digitales robustas, modulares y de alto rendimiento. Especializado en el desarrollo web de extremo a extremo (<strong className="font-semibold text-slate-800 dark:text-gray-100">React.js, Node.js, PHP, PostgreSQL, WordPress</strong>) y en optimización de carga (<strong className="font-semibold text-cyan-600 dark:text-cyan-400">+40% de velocidad</strong>), con una <strong className="font-semibold text-indigo-600 dark:text-indigo-400">especialización complementaria en Inteligencia Artificial</strong> para integrar búsqueda semántica (RAG) y pipelines de datos cuando el proyecto lo requiere.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#proyectos"
                data-testid="hero-cta-projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                Ver Proyectos
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                data-testid="hero-cta-contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-gray-800/90 text-slate-800 dark:text-gray-100 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-gray-700 shadow-sm hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                Contactar
              </a>

              <a
                href="/Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                Descargar CV
              </a>
            </div>

            {/* Social Channels & Contact quicklinks */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-gray-500">
                Conectar:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/jhon-rios-galindez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de LinkedIn de Jhon Rios"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800/80 text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/jhonriosgalindez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de GitHub de Jhon Rios"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800/80 text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#contacto"
                  aria-label="Contactar a Jhon Rios (Formulario directo)"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800/80 text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Tech Card / Code Artifact */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-slate-900 to-[#0b0f19] p-1 shadow-2xl shadow-cyan-500/10 border border-slate-800 dark:border-white/10">
              <div className="rounded-[14px] bg-[#0d1322] p-5 sm:p-6 text-gray-200 font-mono text-xs sm:text-sm space-y-4">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>profile.config.ts</span>
                  </div>
                </div>

                {/* Code Snippet Body */}
                <div className="space-y-2 leading-relaxed">
                  <p className="text-gray-400">
                    <span className="text-cyan-400">const</span> engineer = {'{'}
                  </p>
                  <p className="pl-4">
                    name: <span className="text-amber-300">"Jhon Fernando Rios"</span>,
                  </p>
                  <p className="pl-4">
                    location: <span className="text-amber-300">"Colombia"</span>,
                  </p>
                  <p className="pl-4">
                    role: <span className="text-emerald-400">"Software & Web Developer"</span>,
                  </p>
                  <p className="pl-4">
                    secondary_focus: <span className="text-indigo-300">"AI Specialist"</span>,
                  </p>
                  <p className="pl-4">
                    core_stack: [
                    <span className="text-cyan-300">"React"</span>,{' '}
                    <span className="text-cyan-300">"Node.js"</span>,{' '}
                    <span className="text-cyan-300">"PHP"</span>,{' '}
                    <span className="text-cyan-300">"PostgreSQL"</span>
                    ],
                  </p>
                  <p className="pl-4">
                    ai_stack: [
                    <span className="text-indigo-300">"RAG"</span>,{' '}
                    <span className="text-indigo-300">"LLMs"</span>,{' '}
                    <span className="text-indigo-300">"Python"</span>,{' '}
                    <span className="text-indigo-300">"MLOps"</span>
                    ],
                  </p>
                  <p className="pl-4">
                    experience: <span className="text-amber-300">"5+ years"</span>,
                  </p>
                  <p className="pl-4 text-emerald-400 flex items-center gap-1">
                    available: <span className="text-emerald-300">true</span> <CheckCircle2 className="w-3.5 h-3.5 inline" />
                  </p>
                  <p className="text-gray-400">{'}'};</p>
                </div>

                {/* Status Bar */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" /> High Performance
                  </span>
                  <span className="text-gray-500">UTF-8 • ES6+</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
