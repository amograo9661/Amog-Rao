import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full Stack' | 'Frontend'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <span 
            id="projects-section-label"
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-900/90 border border-white/10 px-3 py-1 rounded-full inline-block mb-3 shadow-xs"
          >
            Selected Work
          </span>
          <h2 
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Recent projects.
          </h2>
        </div>

        {/* Filter Pills / "See all" pill links top-right */}
        <div className="flex items-center gap-2">
          {(['All', 'Full Stack', 'Frontend'] as const).map((filter) => (
            <button
              key={filter}
              id={`project-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-white text-neutral-950 font-semibold shadow-sm'
                  : 'bg-neutral-900/80 text-neutral-300 hover:text-white border border-neutral-700/80 hover:border-neutral-500 shadow-xs'
              }`}
            >
              {filter === 'All' ? 'See all' : filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div 
        id="projects-grid-container"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            onClick={() => onSelectProject(project)}
            className="bg-[#0c0e18]/85 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl shadow-black/50 hover:shadow-2xl border border-white/10 hover:border-teal-500/40 transition-all duration-300 flex flex-col group cursor-pointer"
          >
            {/* Project Image/Graphic at Top */}
            <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden border-b border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              
              {/* Category Badge overlay */}
              <div className="absolute top-4 left-4">
                <span className="bg-black/80 backdrop-blur-md text-white border border-white/10 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  {project.category}
                </span>
              </div>

              {/* Action Button overlay */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-neutral-200 flex items-center justify-center shadow-sm group-hover:bg-teal-500 group-hover:text-black group-hover:border-teal-400 transition-all">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                {/* PROJECT label */}
                <div className="text-[11px] font-bold text-teal-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  PROJECT
                </div>

                {/* Title */}
                <h3 
                  id={`project-title-${project.id}`}
                  className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-teal-400 transition-colors"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p 
                  id={`project-desc-${project.id}`}
                  className="text-sm text-neutral-300 leading-relaxed font-normal mb-5 line-clamp-3"
                >
                  {project.description}
                </p>
              </div>

              {/* Tech Tags: rounded pill badges */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/[0.05] text-neutral-200 border border-white/10 text-xs font-medium px-2.5 py-1 rounded-full group-hover:bg-white/[0.1] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold">
                  <span className="text-teal-400 group-hover:underline inline-flex items-center gap-1">
                    View Architecture & Details
                  </span>
                  <span className="text-neutral-400 group-hover:text-white transition-colors">
                    Explore →
                  </span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
