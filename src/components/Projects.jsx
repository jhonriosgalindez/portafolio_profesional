import React, { useState, useMemo } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Zap,
  Code,
  Server,
  Brain,
  Database,
  Layers,
  Code2,
} from 'lucide-react';
import { projects as initialProjects } from '../data/profileData';
import { filterItemsByCategory } from '../services/filterService';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos', icon: Layers, testId: 'project-filter-all' },
    { id: 'frontend', label: 'Frontend', icon: Code, testId: 'project-filter-frontend' },
    { id: 'backend', label: 'Backend', icon: Server, testId: 'project-filter-backend' },
    { id: 'ai', label: 'IA & Machine Learning', icon: Brain, testId: 'project-filter-ai' },
    { id: 'database', label: 'Bases de Datos', icon: Database, testId: 'project-filter-database' },
  ];

  const filteredProjects = useMemo(() => {
    return filterItemsByCategory(initialProjects, activeCategory);
  }, [activeCategory]);

  const getCategoryBadge = (cat) => {
    switch (cat) {
      case 'frontend':
        return {
          label: 'Frontend',
          style: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
        };
      case 'backend':
        return {
          label: 'Backend',
          style: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
        };
      case 'ai':
        return {
          label: 'IA & ML',
          style: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
        };
      case 'database':
        return {
          label: 'Bases de Datos',
          style: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
        };
      default:
        return {
          label: cat,
          style: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
        };
    }
  };

  return (
    <section id="proyectos" className="py-20 md:py-28 bg-slate-100/50 dark:bg-[#0d1322]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portafolio Destacado
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Proyectos Seleccionados
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-base">
            Desarrollo web end-to-end, APIs escalables y optimización de software, complementadas con soluciones inteligentes.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filtros de proyectos destacados"
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                data-testid={cat.testId}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white border-transparent shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-white dark:bg-gray-900 text-slate-700 dark:text-gray-300 border-slate-200 dark:border-white/10 hover:border-cyan-500/40 hover:text-cyan-500 dark:hover:text-cyan-400'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Counter */}
        <div className="text-center mb-8">
          <span className="text-xs font-medium text-slate-500 dark:text-gray-400">
            Mostrando{' '}
            <strong className="text-cyan-600 dark:text-cyan-400 font-bold">
              {filteredProjects.length}
            </strong>{' '}
            proyectos
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-testid="project-card"
              className="rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-white/10 shadow-md hover:shadow-xl hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Category Badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.categories.map((cat) => {
                    const badge = getCategoryBadge(cat);
                    return (
                      <span
                        key={cat}
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badge.style}`}
                      >
                        {badge.label}
                      </span>
                    );
                  })}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Impact Metric Banner */}
                {project.impact && (
                  <div className="mb-4 p-3 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-800 dark:text-cyan-300 flex items-start gap-2">
                    <Zap className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold">Impacto:</strong> {project.impact}
                    </span>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-gray-800/50 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Ver Demo</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-gray-400 font-medium">
                    <Code2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                    Solo Repositorio
                  </span>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Código</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
