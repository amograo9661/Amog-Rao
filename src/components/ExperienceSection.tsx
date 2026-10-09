import React from 'react';
import { FileText, Calendar, MapPin, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceSectionProps {
  onOpenResume: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="journey" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header with "View Full Resume" Pill Button */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <span 
            id="experience-section-label"
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-300 bg-teal-950/60 border border-teal-500/30 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Internship & Journey</span>
          </span>
          <h2 
            id="experience-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Experience & Education
          </h2>
        </div>

        {/* View Full Resume Pill Button */}
        <button
          id="experience-resume-pill-btn"
          onClick={onOpenResume}
          className="bg-white/10 hover:bg-white/15 text-white border border-white/15 rounded-full px-6 py-3 font-semibold text-sm sm:text-base inline-flex items-center gap-2 shadow-sm hover:shadow active:scale-95 transition-all self-start sm:self-auto cursor-pointer"
        >
          <FileText className="w-4 h-4 text-teal-400" />
          <span>View Full Resume</span>
        </button>
      </div>

      {/* Experience & Education Cards Container */}
      <div 
        id="experience-cards-container"
        className="space-y-6 sm:space-y-8"
      >
        {EXPERIENCES.map((item) => {
          const isWork = item.type === 'work';
          return (
            <div
              key={item.id}
              id={`journey-card-${item.id}`}
              className={`bg-[#0c0e18]/85 backdrop-blur-xl rounded-3xl p-7 sm:p-9 md:p-11 shadow-xl shadow-black/50 hover:shadow-2xl border transition-all duration-300 relative overflow-hidden ${
                isWork ? 'border-purple-500/30 hover:border-purple-400/50' : 'border-white/10 hover:border-white/20'
              }`}
            >
              {isWork && (
                <div className="absolute top-0 right-0 bg-linear-to-l from-purple-900/25 via-teal-900/15 to-transparent w-72 h-32 pointer-events-none rounded-tr-3xl" />
              )}

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10 relative">
                
                {/* Left Column: Logo / Icon, Organization, Role, Dates */}
                <div className="flex items-start gap-4">
                  {/* Logo or Category Icon */}
                  {item.logo ? (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-sm border border-purple-400/40 shrink-0 bg-neutral-900 flex items-center justify-center">
                      <img 
                        src={item.logo} 
                        alt={`${item.organization} Logo`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <span className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-neutral-300 shrink-0 border border-white/10">
                      {item.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-teal-400" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-blue-400" />
                      )}
                    </span>
                  )}

                  <div className="space-y-1.5">
                    {/* Organization and Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span 
                        id={`journey-org-${item.id}`}
                        className={`text-sm sm:text-base font-extrabold tracking-wide ${
                          item.organization === 'Sankalp' ? 'text-purple-300 font-serif' : 'text-neutral-300 uppercase'
                        }`}
                      >
                        {item.organization}
                      </span>
                      {item.gradeOrBadge && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-300 border border-purple-500/30">
                          {item.gradeOrBadge}
                        </span>
                      )}
                    </div>

                    {/* Role Bold */}
                    <h3 
                      id={`journey-role-${item.id}`}
                      className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                    >
                      {item.role}
                    </h3>

                    {/* Dates & Location */}
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-400 font-medium pt-0.5">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills applied pills */}
                <div className="flex flex-wrap gap-1.5 lg:max-w-xs self-start pt-1">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/[0.05] text-neutral-200 border border-white/10 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Description Bullet points */}
              <div className="pt-6 space-y-3">
                {item.description.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2.5 shrink-0"></span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
