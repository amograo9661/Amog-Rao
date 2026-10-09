import React from 'react';
import { 
  ArrowDown, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail, 
  GraduationCap, 
  Sparkles, 
  FileText, 
  Heart,
  Calendar
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenCal?: () => void;
  avatarUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenResume,
  onOpenCal,
  avatarUrl = PERSONAL_INFO.defaultAvatar,
}) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen xl:h-screen flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-22 pb-4 box-border"
    >
      {/* Container Card for First Hero Page - styled in sleek cosmic dark glass to match starry background */}
      <div className="bg-[#0c0e18]/85 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl shadow-black/60 p-4 sm:p-6 lg:p-7 relative overflow-hidden flex flex-col justify-center">
        
        {/* Subtle Decorative Cosmic Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Photo + Open To Work Badge + Quick Actions */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            {/* Profile Photo */}
            <div className="relative mb-3">
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-48 lg:h-48 xl:w-52 xl:h-52 rounded-full overflow-hidden shadow-2xl border-3 border-neutral-700/80 bg-neutral-900 ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.02]">
                <img 
                  src={avatarUrl || PERSONAL_INFO.defaultAvatar} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Work • 2026 Opportunities</span>
            </div>

            {/* Location & Role Sub-line */}
            <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium mb-3">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Social & Contact Icons */}
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0077b5] border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Amog Rao"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-teal-600 border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-colors cursor-pointer"
                title="View Full Resume"
              >
                <FileText className="w-3.5 h-3.5 text-neutral-300" />
                <span>Resume</span>
              </button>
              <a
                id="hero-schedule-meeting-btn"
                href={PERSONAL_INFO.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/30 text-teal-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                title="Schedule a Meeting on Cal.com (opens in a new tab)"
              >
                <Calendar className="w-3.5 h-3.5 text-teal-400" />
                <span>Schedule a Meeting</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: About Me + Academics + Interests (Pure & Focused First Hero Page) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3.5 sm:space-y-4">
            
            {/* Greeting & Headline */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-neutral-300 mb-1">
                <span>👋 Welcome to my portfolio</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-white">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xs sm:text-sm font-medium text-neutral-400 mt-0.5">
                {PERSONAL_INFO.role} & Aspiring Software Engineer
              </p>
            </div>

            {/* About Me Section */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>About Me</span>
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {PERSONAL_INFO.intro}
              </p>
            </div>

            {/* Academic Highlight: Academics Card */}
            <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-blue-900/20 border border-blue-500/30 flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-2xs shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-400">
                  Academics
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-snug">
                  KL University • B.Tech CSE (AI & Autonomous Systems)
                </div>
              </div>
            </div>

            {/* My Interests Section */}
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>My Interests & Core Focus</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {PERSONAL_INFO.careerInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl bg-white/[0.05] border border-white/10 text-neutral-200 text-[11px] sm:text-xs font-semibold shadow-2xs hover:border-white/20 hover:bg-white/10 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs: Connect & Scroll Down to 2nd Page */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                onClick={onOpenContact}
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Get in Touch</span>
                <Mail className="w-3.5 h-3.5" />
              </button>

              <a
                href="#skills"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs sm:text-sm font-semibold shadow-2xs transition-all flex items-center gap-1.5 group"
              >
                <span>View Skills & Next Page</span>
                <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Subtle Bottom Bar / Scroll Cue that fits inside screen */}
      <div className="text-center mt-2.5 shrink-0">
        <a 
          href="#skills" 
          className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
        >
          <span>Scroll down for Technical Stack, Sankalp Internship & Projects</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
