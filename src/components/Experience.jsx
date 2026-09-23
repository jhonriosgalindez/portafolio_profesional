import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      id: 'orbidi-lead',
      role: 'Production Lead',
      company: 'ORBIDI',
      type: 'Tiempo completo',
      period: 'Septiembre 2025 – Mayo 2026',
      duration: '9 meses',
      location: 'Colombia',
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
      highlights: [
        'Coordinó operaciones y el seguimiento integral de tareas bajo estrictos estándares de eficiencia, calidad y cumplimiento normativo (compliance).',
        'Identificó cuellos de botella y brechas de productividad, formulando insights analíticos y planes de acción tácticos que optimizaron la ejecución del equipo.',
        'Tradujo requerimientos estratégicos de negocio en flujos de tareas operativas con criterios rigurosos de aceptación y entrega.',
        'Impulsó la adopción activa de herramientas basadas en Inteligencia Artificial y mejores prácticas de monitoreo (tracking), fortaleciendo la automatización de flujos de trabajo.',
      ],
      technologies: [
        'Liderazgo Operativo',
        'Inteligencia Artificial',
        'Compliance & Calidad',
        'Workflow Automation',
        'Métricas de Productividad',
        'Gestión de Tareas',
      ],
    },
    {
      id: 'orbidi-dev',
      role: 'Programador Full Stack',
      company: 'ORBIDI',
      type: 'Tiempo completo',
      period: 'Septiembre 2024 – Agosto 2025',
      duration: '1 año',
      location: 'Colombia',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
      highlights: [
        'Desarrollo end-to-end de aplicaciones web de alto impacto basadas en React.js, PHP y JavaScript moderno, asegurando arquitecturas modulares listas para medición de rendimiento.',
        'Configuración, despliegue y personalización de CMS WordPress, optimizando estructuras de bases de datos relacionales MySQL para máxima escalabilidad.',
        'Ejecución sistemática de pruebas funcionales y aseguramiento de calidad (QA), garantizando compatibilidad entre navegadores (cross-browser) y diseño responsivo.',
        'Optimización técnica de velocidad, tiempos de carga y consumo de recursos, mejorando la experiencia del usuario y métricas de negocio.',
        'Soporte técnico avanzado y análisis de causa raíz (root cause analysis) para la resolución ágil de incidentes en entornos de producción.',
        'Colaboración activa en diseño UI/UX para implementar interfaces fluidas y orientadas a la conversión.',
      ],
      technologies: [
        'React.js',
        'PHP',
        'JavaScript (ES6+)',
        'WordPress',
        'MySQL',
        'UI/UX Design',
        'Pruebas QA',
        'Root Cause Analysis',
      ],
    },
    {
      id: 'fiverr-dev',
      role: 'Desarrollador Web Freelance',
      company: 'Fiverr',
      type: 'Freelance / Internacional',
      period: 'Mayo 2021 – Agosto 2024',
      duration: '3 años 4 meses',
      location: 'Remoto / Global',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      highlights: [
        'Desarrollo y entrega de plataformas web para clientes internacionales de diversas industrias, incluyendo portafolios interactivos, tiendas de comercio electrónico (e-commerce) y sitios corporativos.',
        'Mejoró en un ~40% el rendimiento y velocidad de carga en sitios web basados en WordPress mediante optimización de recursos multimedia, configuración de caché avanzada y carga diferida (lazy loading).',
        'Implementación rigurosa de mejores prácticas de SEO técnico y accesibilidad web para posicionamiento orgánico internacional.',
        'Gestión integral y actualización constante de contenidos y activos digitales con alta fidelidad gráfica.',
      ],
      technologies: [
        'WordPress',
        'PHP',
        'JavaScript',
        'WooCommerce',
        'Optimización Web (40%+)',
        'SEO Técnico',
        'Caché Avanzado',
        'Lazy Loading',
      ],
    },
  ];

  const [activeExp, setActiveExp] = useState(experiences[0].id);

  return (
    <section id="experiencia" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            Trayectoria Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experiencia Laboral
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg">
            Historial de liderazgo técnico, desarrollo de software full stack y optimización de plataformas de producción.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experiences.map((exp) => {
            const isSelected = activeExp === exp.id;
            return (
              <div
                key={exp.id}
                className="relative pl-6 sm:pl-8 group cursor-pointer"
                onClick={() => setActiveExp(exp.id)}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isSelected
                      ? 'bg-cyan-500 border-white ring-4 ring-cyan-500/30 scale-125'
                      : 'bg-slate-300 dark:bg-gray-700 border-white dark:border-[#0b0f19] group-hover:bg-cyan-400'
                  }`}
                />

                {/* Period Date Badge (Left for desktop if responsive, or in card) */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className="text-xs font-bold text-slate-500 dark:text-gray-400">
                    {exp.period.split('–')[0]}
                  </span>
                  <p className="text-[11px] text-slate-400 dark:text-gray-500">{exp.duration}</p>
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-2xl p-6 sm:p-8 transition-all duration-200 border ${
                    isSelected
                      ? 'bg-white dark:bg-gray-900 shadow-xl border-cyan-500/40 ring-1 ring-cyan-500/20'
                      : 'bg-white/80 dark:bg-gray-900/60 shadow-md border-slate-200 dark:border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${exp.badgeColor}`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-gray-300 mt-1">
                        <span className="font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-gray-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Period Tag */}
                    <div className="md:hidden flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <ul className="space-y-2.5 mb-6 text-slate-600 dark:text-gray-300 text-sm sm:text-base">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 block mb-2">
                      Competencias & Tecnologías Clave:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
