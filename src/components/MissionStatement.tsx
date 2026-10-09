import React from 'react';
import { Sparkles, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const MissionStatement: React.FC = () => {
  return (
    <section id="mission" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div 
        id="mission-statement-card"
        className="rounded-3xl bg-[#0f766e] sm:bg-[#0d9488] text-white p-8 sm:p-12 md:p-16 shadow-lg shadow-teal-900/10 relative overflow-hidden transition-all duration-300"
      >
        {/* Subtle decorative background glow */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-teal-900/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          {/* Header pill indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest text-teal-50 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-teal-200" />
            <span>Mission & Engineering Philosophy</span>
          </div>

          {/* Large Bold White Statement */}
          <blockquote 
            id="mission-sentence"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-8 sm:mb-10"
          >
            "{PERSONAL_INFO.missionStatement}"
          </blockquote>

          {/* Row of Uppercase Skill Tags */}
          <div className="pt-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-teal-200/90 mb-3">
              Core Tech Stack & Capabilities
            </div>
            <div 
              id="mission-skill-tags-row"
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {PERSONAL_INFO.missionSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-white/20 shadow-xs transition-all duration-200 hover:scale-105 select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
