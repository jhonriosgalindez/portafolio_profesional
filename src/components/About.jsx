import React from 'react';
import { Code2, BrainCircuit, Zap, CheckCircle2, TrendingUp, Layers, Award } from 'lucide-react';

export const About = () => {
  const metrics = [
    {
      value: '+5 Años',
      label: 'Experiencia Profesional',
      subtext: 'Desarrollo web y operaciones técnicas',
      icon: TrendingUp,
      color: 'text-cyan-500',
    },
    {
      value: '+40%',
      label: 'Optimización de Rendimiento',
      subtext: 'Mejora en tiempos de carga y Core Web Vitals',
      icon: Zap,
      color: 'text-amber-500',
    },
    {
      value: '10+',
      label: 'Soluciones End-to-End',
      subtext: 'Aplicaciones web, software full stack e IA',
      icon: Layers,
      color: 'text-indigo-500',
    },
    {
      value: '100%',
      label: 'Calidad & Compliance',
      subtext: 'Pruebas funcionales, QA y código limpio',
      icon: CheckCircle2,
      color: 'text-emerald-500',
    },
  ];

  const pillars = [
    {
      title: 'Full Stack Architecture',
      icon: Code2,
      color: 'from-cyan-500 to-teal-600',
      description:
        'Pilar central de desarrollo de software y aplicaciones web. Construcción de arquitecturas modernas y desacopladas con React.js y Next.js en el frontend, microservicios y APIs en Node.js y PHP, y persistencia relacional en PostgreSQL y MySQL, garantizando código modular y escalable.',
    },
    {
      title: 'Performance & Scalability',
      icon: Zap,
      color: 'from-amber-500 to-orange-600',
      description:
        'Optimización exhaustiva de rendimiento web (+40% de velocidad) y Core Web Vitals. Estrategias de caching, reducción de tiempos de respuesta, renderizado eficiente y auditorías técnicas orientadas a la conversión y retención de usuarios.',
    },
    {
      title: 'AI & RAG Engineering',
      icon: BrainCircuit,
      color: 'from-indigo-500 to-purple-600',
      description:
        'Especialización secundaria y complementaria. Diseño e integración de búsqueda semántica (RAG) con LLMs, almacenamiento vectorial y pipelines de machine learning con Python para potenciar aplicaciones web cuando el requerimiento lo demanda.',
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-slate-100/50 dark:bg-[#0d1322]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Award className="w-3.5 h-3.5" />
            Perfil Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Acerca de mí
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg">
            Ingeniería de software sólida, desarrollo web de alto rendimiento y especialización complementaria en inteligencia artificial.
          </p>
        </div>

        {/* Professional Narrative Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200 dark:border-white/10 mb-16 space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <span className="w-2 h-7 rounded-full bg-gradient-to-b from-cyan-500 to-indigo-600 inline-block"></span>
            Trayectoria y Enfoque Profesional
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                Mi recorrido inició en la <strong className="text-slate-900 dark:text-white font-semibold">Universidad del Cauca</strong> como <strong className="text-slate-900 dark:text-white font-semibold">Ingeniero Civil</strong>, donde adquirí una sólida disciplina analítica, capacidad para el modelado de estructuras complejas y resolución sistemática de problemas bajo estrictos estándares.
              </p>
              <p>
                Guiado por mi pasión por la tecnología, consolidé mi profesión como desarrollador de software graduándome como <strong className="text-slate-900 dark:text-white font-semibold">Tecnólogo en Análisis y Desarrollo de Software en el SENA</strong>, complementando posteriormente mi perfil técnico como <strong className="text-slate-900 dark:text-white font-semibold">Especialista en Inteligencia Artificial en la Corporación Universitaria Minuto de Dios</strong>.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                A lo largo de mi carrera en <strong className="text-slate-900 dark:text-white font-semibold">ORBIDI</strong> y en proyectos internacionales en <strong className="text-slate-900 dark:text-white font-semibold">Fiverr</strong>, he liderado equipos técnicos y construido plataformas web de principio a fin, logrando optimizaciones de más del 40% en velocidad de carga y estabilidad operativa.
              </p>
              <p>
                Mi foco principal es el desarrollo de software y aplicaciones web escalables. De forma complementaria y según los retos del proyecto, integro modelos predictivos y arquitecturas de búsqueda semántica (<strong className="text-indigo-600 dark:text-indigo-400 font-semibold">RAG</strong>) con <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">LLMs</strong> para potenciar las capacidades de las plataformas digitales.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900/80 rounded-2xl p-5 sm:p-6 text-center border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-cyan-500/10"
              >
                <div className="inline-flex p-3 rounded-xl bg-slate-100 dark:bg-gray-800 mb-3">
                  <Icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 mt-1">
                  {metric.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Core Pillars */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-slate-900 dark:text-white">
            Pilares de Especialización Técnica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900/90 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group shadow-md"
                >
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-200`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
