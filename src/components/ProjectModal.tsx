import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, Server, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="project-modal-content"
        className="bg-[#0c0e18] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/15 my-auto animate-in zoom-in-95 duration-200 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative aspect-[16/9] w-full bg-neutral-900 border-b border-white/10 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            id="project-modal-close-btn"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer shadow-md border border-white/10"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-black/80 backdrop-blur-md text-white border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          <div>
            <div className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-1">
              {project.subtitle}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-base text-neutral-300 font-normal leading-relaxed mt-2">
              {project.longDescription}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/[0.06] text-neutral-200 border border-white/10 text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Key Engineered Capabilities
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* System Architecture */}
          {project.architecture && (
            <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                System Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="bg-white/[0.04] p-3 rounded-xl border border-white/10 text-xs text-neutral-200 font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-400 text-neutral-950 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              Close Preview
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
