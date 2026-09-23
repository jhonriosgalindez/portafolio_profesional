import React, { useState, useMemo } from 'react';
import { Sparkles, Code, Server, Brain, Database, CheckCircle2, Layers } from 'lucide-react';
import { skills as initialSkills } from '../data/profileData';
import { filterItemsByCategory } from '../services/filterService';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos', icon: Layers, testId: 'skill-filter-all' },
    { id: 'frontend', label: 'Frontend', icon: Code, testId: 'skill-filter-frontend' },
    { id: 'backend', label: 'Backend', icon: Server, testId: 'skill-filter-backend' },
    { id: 'ai', label: 'IA & Machine Learning', icon: Brain, testId: 'skill-filter-ai' },
    { id: 'database', label: 'Bases de Datos', icon: Database, testId: 'skill-filter-database' },
  ];

  const filteredSkills = useMemo(() => {
    return filterItemsByCategory(initialSkills, activeCategory);
  }, [activeCategory]);

  const getCategoryBadgeStyle = (category) => {
    switch (category) {
      case 'frontend':
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20';
      case 'backend':
        return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
      case 'ai':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'database':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'frontend':
        return 'Frontend';
      case 'backend':
        return 'Backend';
      case 'ai':
        return 'IA & ML';
      case 'database':
        return 'Bases de Datos';
      default:
        return category;
    }
  };

  return (
    <section id="habilidades" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Competencias Técnicas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Habilidades & Tecnologías
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-base">
            Ecosistema tecnológico clasificado por dominios de ingeniería y ciencia de datos.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filtros de habilidades técnicas"
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

        {/* Dynamic Counter Indicator */}
        <div className="text-center mb-8">
          <span className="text-xs font-medium text-slate-500 dark:text-gray-400">
            Mostrando{' '}
            <strong className="text-cyan-600 dark:text-cyan-400 font-bold">
              {filteredSkills.length}
            </strong>{' '}
            habilidades
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              data-testid="skill-card"
              className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getCategoryBadgeStyle(
                      skill.category
                    )}`}
                  >
                    {getCategoryName(skill.category)}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
                {skill.tag && (
                  <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                    {skill.tag}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
