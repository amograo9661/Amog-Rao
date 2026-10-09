import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenCal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact, onOpenCal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-800 mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-lg tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-neutral-500 font-medium">|</span>
            <span className="text-xs text-neutral-400 font-medium">
              B.Tech CSE • KL University
            </span>
          </div>
          <p className="text-xs text-neutral-400 font-normal">
            Specializing in AI for Autonomous Systems & Full-Stack Development
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 hover:border-neutral-400 text-neutral-300 hover:text-white transition-all shadow-xs"
            title="GitHub: amograo9661"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 hover:border-[#0077b5] hover:bg-[#0077b5] text-neutral-300 hover:text-white transition-all shadow-xs inline-flex items-center gap-1.5 text-xs font-semibold group"
            title="LinkedIn Profile: Amog Rao"
            aria-label="LinkedIn: Amog Rao"
          >
            <Linkedin className="w-4 h-4 text-sky-400 group-hover:text-white transition-colors" />
            <span>Amog Rao</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent("Connecting with Amog Rao")}&body=${encodeURIComponent("Hi Amog,\n\nI came across your portfolio and would like to connect regarding:\n\n")}`}
            className="p-2.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 hover:border-teal-500 hover:bg-teal-600 text-neutral-300 hover:text-white transition-all shadow-xs"
            title={`Direct Phone Mail: ${PERSONAL_INFO.email}`}
            aria-label="Email Amog Rao"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Quick actions & Back to Top */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            Resume
          </button>
          <span className="text-neutral-600">•</span>
          <button
            onClick={onOpenContact}
            className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
          <span className="text-neutral-600">•</span>
          <a
            href={PERSONAL_INFO.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-teal-300 hover:text-white transition-colors inline-flex items-center gap-1"
            title="Schedule a Meeting on Cal.com (opens in new tab)"
          >
            <Calendar className="w-3 h-3 text-teal-400" />
            <span>Schedule a Meeting</span>
          </a>
          <span className="text-neutral-600">•</span>
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-200 hover:text-teal-400 transition-colors p-1.5 rounded-full hover:bg-neutral-800/80 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-neutral-800/60 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed & engineered with modern React, TypeScript & Tailwind CSS.
      </div>
    </footer>
  );
};
