import React from 'react';
import { GraduationCap, Award, Calendar, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Education = () => {
  const degrees = [
    {
      institution: 'Corporación Universitaria Minuto de Dios',
      degree: 'Especialista en Inteligencia Artificial',
      period: 'Marzo 2025 – Abril 2026',
      type: 'Especialización de Posgrado',
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
      description:
        'Especialización avanzada enfocada en modelos de lenguaje grande (LLMs), arquitecturas RAG, redes neuronales profundas, visión computacional y MLOps para la automatización de procesos empresariales.',
    },
    {
      institution: 'Servicio Nacional de Aprendizaje (SENA)',
      degree: 'Tecnólogo en Análisis y Desarrollo de Software',
      period: 'Abril 2024 – Julio 2026',
      type: 'Tecnología Superior',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
      description:
        'Formación integral en diseño de software, patrones de arquitectura, bases de datos relacionales y no relacionales, pruebas de software y ciclo de vida de desarrollo ágil.',
    },
    {
      institution: 'Universidad del Cauca',
      degree: 'Ingeniero Civil',
      period: 'Febrero 2008 – Septiembre 2014',
      type: 'Pregrado Universitario',
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      description:
        'Sólida base analítica, resolución de problemas cuantitativos, cálculo diferencial e integral, optimización de recursos y gestión de proyectos de ingeniería de gran escala.',
    },
    {
      institution: 'Cambridge Language Centres',
      degree: 'Inglés Profesional (Professional Working Proficiency)',
      period: 'Enero 2023 – Noviembre 2023',
      type: 'Formación Lingüística',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      description:
        'Dominio comunicativo profesional del idioma inglés para colaboración efectiva en equipos globales de ingeniería y documentación técnica internacional.',
    },
  ];

  const certifications = [
    {
      name: 'DOM Manipulation Course',
      issuer: 'Plataforma Especializada Frontend',
      topic: 'Arquitectura Web & JavaScript Avanzado',
      id: 'cert-dom',
    },
    {
      name: 'Introduction to Artificial Intelligence (AI)',
      issuer: 'IBM / Coursera',
      topic: 'Fundamentos de IA, Redes Neuronales y Aplicaciones',
      id: 'cert-ai-intro',
    },
    {
      name: 'Python for Data Science, AI & Development',
      issuer: 'IBM / Coursera',
      topic: 'Ecosistema Python, Pandas, Numpy & APIs',
      id: 'cert-python-ds',
    },
    {
      name: 'React.js Course',
      issuer: 'Plataforma Especializada Frontend',
      topic: 'Componentes, Hooks, State Management & Render Optimization',
      id: 'cert-react',
    },
    {
      name: 'Google Cloud Fundamentals: Core Infrastructure en Español',
      issuer: 'Google Cloud Training',
      topic: 'Infraestructura Cloud, Redes, Cómputo y Almacenamiento',
      id: 'cert-gcp',
    },
  ];

  return (
    <section id="educacion" className="py-20 md:py-28 bg-slate-100/50 dark:bg-[#0d1322]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            Credenciales Académicas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Educación & Certificaciones
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg">
            Formación académica multidisciplinaria complementada con certificaciones de la industria tecnológica.
          </p>
        </div>

        {/* Two-Column Grid: Formal Degrees & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Academic Degrees */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-cyan-500" />
              Títulos Universitarios y Técnicos
            </h3>

            <div className="space-y-4">
              {degrees.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-200 hover:border-cyan-500/30 space-y-3"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${item.badgeColor}`}>
                        {item.type}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1.5">
                        {item.degree}
                      </h4>
                      <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                        {item.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Official Industry Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-indigo-500" />
              5 Certificaciones Oficiales
            </h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-gray-900/90 rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-indigo-500/40 transition-all duration-200 flex items-start gap-3.5 group"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-gray-400 font-medium">
                        {cert.issuer}
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Certificado
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-gray-400 pt-1">
                      {cert.topic}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
