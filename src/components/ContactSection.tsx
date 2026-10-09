import React, { useState } from 'react';
import { 
  Mail, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Phone,
  MapPin, 
  ArrowUpRight,
  Calendar,
  Sparkles,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div 
        id="contact-container-card"
        className="bg-[#0c0e18]/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-14 lg:p-16 shadow-2xl shadow-black/60 border border-white/10 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div>
            <span 
              id="contact-badge"
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-300 bg-teal-950/60 border border-teal-500/30 px-3.5 py-1 rounded-full inline-block mb-3"
            >
              Get in Touch
            </span>
            <h2 
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Let's build something exceptional together.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-normal max-w-2xl mx-auto mt-4 leading-relaxed">
              Whether you're looking for a full-stack engineer, a Java backend developer, or an autonomous systems specialist, feel free to reach out directly via email, phone, or LinkedIn.
            </p>
          </div>

          {/* Direct Communication Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 text-left">
            
            {/* Direct Email Card */}
            <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  <span>Direct Email</span>
                  <Mail className="w-4 h-4 text-teal-400" />
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-bold text-white text-sm sm:text-base hover:text-teal-400 transition-colors break-all block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 text-neutral-200 transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent("Connecting with Amog Rao")}`}
                  className="px-3 py-1.5 rounded-full bg-teal-500 hover:bg-teal-400 text-neutral-950 transition-colors shadow-xs text-xs font-bold inline-flex items-center gap-1"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  <span>Phone / WhatsApp</span>
                  <Phone className="w-4 h-4 text-teal-400" />
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-bold text-white text-sm sm:text-base hover:text-teal-400 transition-colors block"
                >
                  +91 {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  id="contact-copy-phone-btn"
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 text-neutral-200 transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Phone</span>
                    </>
                  )}
                </button>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors shadow-xs text-xs font-semibold inline-flex items-center gap-1"
                >
                  <span>Call Now</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-3 sm:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  <span>Location & Availability</span>
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <div className="font-bold text-white text-sm sm:text-base">
                  {PERSONAL_INFO.location}
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for opportunities</span>
              </div>
            </div>

          </div>

          {/* Cal.com 1:1 Instant Booking Banner / Card */}
          <div 
            id="contact-calcom-card"
            className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-teal-950/50 via-[#0e1724]/60 to-[#0c0e18] border border-teal-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0 mt-0.5 sm:mt-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg font-bold text-white">Schedule a 1:1 Meeting (Cal.com)</h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-400/20 text-teal-300 border border-teal-400/30">
                    <Sparkles className="w-3 h-3" />
                    Live Calendar
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl leading-relaxed">
                  Book a quick 15 or 30-minute slot directly on my calendar for technical discussions, interview rounds, or project collaborations.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
              <a
                id="contact-schedule-meeting-btn"
                href={PERSONAL_INFO.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-teal-500/20 cursor-pointer inline-flex items-center justify-center gap-2 active:scale-95"
                title="Schedule a Meeting on Cal.com (opens in new tab)"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Meeting</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Profiles Direct Access */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              id="contact-link-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0077b5] text-white hover:bg-[#00669c] text-xs sm:text-sm font-semibold transition-all shadow-xs"
              title="Connect on LinkedIn: Amog Rao"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-200" />
            </a>

            <a
              id="contact-link-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs sm:text-sm font-semibold transition-all shadow-xs"
              title="Explore GitHub Repositories"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

