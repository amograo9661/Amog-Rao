import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Mail, Sparkles, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenCal?: () => void;
  avatarUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenResume, onOpenCal, avatarUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey & Internship', href: '#journey' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-2.5 sm:top-3.5 inset-x-0 z-40 px-3 sm:px-6 pointer-events-none">
      <div 
        id="navbar-container"
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 pointer-events-auto ${
          isScrolled 
            ? 'bg-[#0c0e18]/90 backdrop-blur-xl shadow-xl shadow-black/50 border border-white/15 py-2 px-4 sm:px-5' 
            : 'bg-[#0c0e18]/80 backdrop-blur-md shadow-lg shadow-black/40 border border-white/10 py-2 sm:py-2.5 px-4 sm:px-5'
        } flex items-center justify-between`}
      >
        {/* Brand / Name on Left */}
        <a 
          id="nav-brand-logo"
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/15 shadow-xs group-hover:scale-105 transition-transform bg-neutral-900">
            <img 
              src={avatarUrl} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover object-[center_22%]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-sm sm:text-base tracking-tight leading-none group-hover:text-teal-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] text-neutral-400 font-medium tracking-wide">
              AI & Full-Stack
            </span>
          </div>
        </a>

        {/* Center / Right Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              id={`nav-link-${link.label.toLowerCase()}`}
              onClick={() => handleLinkClick(link.href)}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <a
            id="nav-cal-btn"
            href={PERSONAL_INFO.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-teal-300 hover:text-white bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 rounded-full transition-all inline-flex items-center gap-1.5"
            title="Schedule a Meeting with Amog via Cal.com (opens in new tab)"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-400" />
            <span>Schedule a Meeting</span>
          </a>
        </nav>

        {/* Far Right Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            id="nav-contact-pill-btn"
            onClick={onOpenContact}
            className="bg-teal-500 hover:bg-teal-400 text-neutral-950 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>

          {/* Mobile menu toggle button */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          id="nav-mobile-drawer"
          className="md:hidden max-w-5xl mx-auto mt-2 p-4 bg-[#0c0e18]/95 backdrop-blur-xl rounded-3xl border border-white/15 shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-left px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors inline-flex items-center justify-between cursor-pointer"
            >
              <span>View Resume</span>
              <FileText className="w-4 h-4 text-neutral-400" />
            </button>
            <a
              href={PERSONAL_INFO.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left px-4 py-2.5 text-sm font-semibold text-teal-300 hover:text-white hover:bg-teal-500/10 rounded-xl transition-colors inline-flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Schedule a Meeting</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-teal-400/20 text-teal-300 border border-teal-400/30">Cal.com</span>
            </a>
            <div className="pt-2 mt-1 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-teal-500 text-neutral-950 font-bold text-center py-2.5 rounded-full text-sm hover:bg-teal-400 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
