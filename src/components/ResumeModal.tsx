import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Phone, 
  Check, 
  Copy, 
  ZoomIn, 
  ZoomOut, 
  ExternalLink,
  FileText,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESUME_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'document' | 'interactive'>('document');
  const [highlightSection, setHighlightSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${RESUME_DATA.header.fullName}
${RESUME_DATA.header.phone} | ${RESUME_DATA.header.email} | ${RESUME_DATA.header.linkedinDisplay} | ${RESUME_DATA.header.githubDisplay}

PROFESSIONAL SUMMARY
${RESUME_DATA.professionalSummary}

EDUCATION
${RESUME_DATA.education.map(e => `${e.institution} — ${e.degree || ''} ${e.cgpa ? `| ${e.cgpa}` : ''} | ${e.year}`).join('\n')}

TECHNICAL SKILLS
Languages: ${RESUME_DATA.technicalSkills.languages}
Frontend: ${RESUME_DATA.technicalSkills.frontend}
Backend: ${RESUME_DATA.technicalSkills.backend}
Databases: ${RESUME_DATA.technicalSkills.databases}
Core: ${RESUME_DATA.technicalSkills.core}
Tools: ${RESUME_DATA.technicalSkills.tools}
Cloud: ${RESUME_DATA.technicalSkills.cloud}

EXPERIENCE
${RESUME_DATA.experience.map(exp => `${exp.company} — ${exp.role}\n${exp.type} | ${exp.period}\n${exp.bullets.map(b => `• ${b}`).join('\n')}`).join('\n\n')}

PROJECTS
${RESUME_DATA.projects.map(p => `${p.title}\n${p.techStack}\n${p.bullets.map(b => `• ${b}`).join('\n')}`).join('\n\n')}

CERTIFICATIONS
${RESUME_DATA.certifications.join('\n')}

CAREER INTERESTS
${RESUME_DATA.careerInterests.join(' | ')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownloadTxt = () => {
    const text = `
${RESUME_DATA.header.fullName}
${RESUME_DATA.header.phone} | ${RESUME_DATA.header.email} | ${RESUME_DATA.header.linkedinDisplay} | ${RESUME_DATA.header.githubDisplay}

==================================================
PROFESSIONAL SUMMARY
==================================================
${RESUME_DATA.professionalSummary}

==================================================
EDUCATION
==================================================
${RESUME_DATA.education.map(e => `${e.institution} — ${e.degree || ''} ${e.cgpa ? `| ${e.cgpa}` : ''} | ${e.year}`).join('\n')}

==================================================
TECHNICAL SKILLS
==================================================
Languages: ${RESUME_DATA.technicalSkills.languages}
Frontend: ${RESUME_DATA.technicalSkills.frontend}
Backend: ${RESUME_DATA.technicalSkills.backend}
Databases: ${RESUME_DATA.technicalSkills.databases}
Core: ${RESUME_DATA.technicalSkills.core}
Tools: ${RESUME_DATA.technicalSkills.tools}
Cloud: ${RESUME_DATA.technicalSkills.cloud}

==================================================
EXPERIENCE
==================================================
${RESUME_DATA.experience.map(exp => `${exp.company} — ${exp.role}\n${exp.type} | ${exp.period}\n${exp.bullets.map(b => `• ${b}`).join('\n')}`).join('\n\n')}

==================================================
PROJECTS
==================================================
${RESUME_DATA.projects.map(p => `${p.title}\n${p.techStack}\n${p.bullets.map(b => `• ${b}`).join('\n')}`).join('\n\n')}

==================================================
CERTIFICATIONS
==================================================
${RESUME_DATA.certifications.join('\n')}

==================================================
CAREER INTERESTS
==================================================
${RESUME_DATA.careerInterests.join(' | ')}
    `.trim();

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Potlapally_Amog_Rao_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div 
        id="resume-modal-backdrop"
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div 
          id="resume-modal-content"
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 320 }}
          className="bg-neutral-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-neutral-700/60 my-auto max-h-[95vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Floating Control Bar */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 bg-neutral-900 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 shrink-0 text-white">
            
            {/* View Switcher & Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-neutral-800 p-1 rounded-xl border border-neutral-700/80 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab('document')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'document' 
                      ? 'bg-blue-600 text-white shadow-sm font-bold' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume Document</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('interactive')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'interactive' 
                      ? 'bg-blue-600 text-white shadow-sm font-bold' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Highlights</span>
                </button>
              </div>

              {/* Live Zoom Controls */}
              {activeTab === 'document' && (
                <div className="hidden lg:flex items-center bg-neutral-800 rounded-xl px-2 py-1 border border-neutral-700/80 text-xs text-neutral-300 gap-1">
                  <button 
                    onClick={() => setZoomLevel(prev => Math.max(80, prev - 10))}
                    className="p-1 hover:text-white cursor-pointer rounded"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono px-1 min-w-[40px] text-center">{zoomLevel}%</span>
                  <button 
                    onClick={() => setZoomLevel(prev => Math.min(130, prev + 10))}
                    className="p-1 hover:text-white cursor-pointer rounded"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Actions: Print, Copy, Download, Close */}
            <div className="flex items-center gap-2">
              <button
                id="resume-copy-btn"
                onClick={handleCopyText}
                className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-medium rounded-xl border border-neutral-700 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                title="Copy entire resume text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Text"}</span>
              </button>

              <button
                id="resume-txt-btn"
                onClick={handleDownloadTxt}
                className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-medium rounded-xl border border-neutral-700 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                title="Download as Plain Text file"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Download .txt</span>
              </button>

              <button
                id="resume-print-btn"
                onClick={handlePrint}
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl shadow-xs transition-all inline-flex items-center gap-1.5 cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                id="resume-modal-close-btn"
                onClick={onClose}
                className="p-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-neutral-700"
                aria-label="Close Resume"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body Container with Scroll */}
          <div className="flex-1 overflow-y-auto bg-neutral-950/60 p-3 sm:p-6 lg:p-8 flex justify-center items-start">
            
            {activeTab === 'document' ? (
              /* =========================================================================
                 AUTHENTIC A4 RESUME SHEET (EXACT SCREENSHOT LAYOUT & CONTENT)
                 ========================================================================= */
              <motion.div 
                id="printable-resume-sheet"
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                transition={{ duration: 0.15 }}
                className="bg-white text-neutral-900 w-full max-w-[800px] shadow-2xl rounded-sm p-6 sm:p-10 md:p-12 border border-neutral-300 print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-none text-[13px] leading-relaxed font-sans select-text"
              >
                
                {/* 1. Header Name (Blue Bold Uppercase) */}
                <div className="text-center pb-2">
                  <h1 className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#1e40af] tracking-wide uppercase">
                    {RESUME_DATA.header.fullName}
                  </h1>

                  {/* 2. Contact Information Row */}
                  <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-neutral-800 mt-1 font-medium">
                    <a 
                      href={`tel:${RESUME_DATA.header.phone}`}
                      className="hover:text-blue-700 hover:underline inline-flex items-center gap-1"
                      title="Call phone number"
                    >
                      <Phone className="w-3 h-3 text-neutral-500" />
                      <span>{RESUME_DATA.header.phone}</span>
                    </a>
                    
                    <span className="text-neutral-400">|</span>
                    
                    <a 
                      href={`mailto:${RESUME_DATA.header.email}?subject=${encodeURIComponent("Connecting with Amog Rao")}`}
                      className="hover:text-blue-700 hover:underline inline-flex items-center gap-1"
                      title="Send email"
                    >
                      <Mail className="w-3 h-3 text-neutral-500" />
                      <span>{RESUME_DATA.header.email}</span>
                    </a>

                    <span className="text-neutral-400">|</span>

                    <a 
                      href={RESUME_DATA.header.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1"
                      title="Open LinkedIn profile"
                    >
                      <Linkedin className="w-3 h-3 text-[#0077b5]" />
                      <span>{RESUME_DATA.header.linkedinDisplay}</span>
                    </a>

                    <span className="text-neutral-400">|</span>

                    <a 
                      href={RESUME_DATA.header.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1"
                      title="Open GitHub profile"
                    >
                      <Github className="w-3 h-3 text-neutral-800" />
                      <span>{RESUME_DATA.header.githubDisplay}</span>
                    </a>
                  </div>
                </div>

                {/* Horizontal Blue Divider Line */}
                <div className="w-full border-t-2 border-[#1e40af] my-2"></div>

                {/* ==================== 1. PROFESSIONAL SUMMARY ==================== */}
                <section className="mt-3">
                  <div className="border-b border-neutral-300 pb-0.5 mb-1.5">
                    <h2 className="text-xs font-bold text-[#1e40af] uppercase tracking-wide">
                      PROFESSIONAL SUMMARY
                    </h2>
                  </div>
                  <p className="text-neutral-800 text-[12px] sm:text-[12.5px] leading-relaxed text-justify">
                    {RESUME_DATA.professionalSummary}
                  </p>
                </section>

                {/* ==================== 2. EDUCATION ==================== */}
                <section className="mt-3.5">
                  <div className="border-b border-neutral-300 pb-0.5 mb-1.5">
                    <h2 className="text-xs font-bold text-[#1e40af] uppercase tracking-wide">
                      EDUCATION
                    </h2>
                  </div>
                  <div className="space-y-1 text-[12px] sm:text-[12.5px] text-neutral-800">
                    <div className="leading-snug">
                      <span className="font-bold text-neutral-950">KL University</span>
                      <span> — B.Tech in Computer Science and Engineering (AI for Autonomous Systems) </span>
                      <span className="text-neutral-600">|</span>
                      <span className="font-medium"> CGPA: 8.81/10 </span>
                      <span className="text-neutral-600">|</span>
                      <span className="font-medium"> Expected May 2027</span>
                    </div>
                    <div className="leading-snug">
                      <span className="font-bold text-neutral-950">Sri Chaitanya Raman Bhavan</span>
                      <span> — Intermediate </span>
                      <span className="text-neutral-600">|</span>
                      <span> 2021–2023</span>
                    </div>
                    <div className="leading-snug">
                      <span className="font-bold text-neutral-950">Dr. KKR Gowtham International School</span>
                      <span> — 10th Standard </span>
                      <span className="text-neutral-600">|</span>
                      <span> 2020–2021</span>
                    </div>
                  </div>
                </section>

                {/* ==================== 3. TECHNICAL SKILLS ==================== */}
                <section className="mt-3.5">
                  <div className="border-b border-neutral-300 pb-0.5 mb-1.5">
                    <h2 className="text-xs font-bold text-[#1e40af] uppercase tracking-wide">
                      TECHNICAL SKILLS
                    </h2>
                  </div>
                  <div className="space-y-0.5 text-[12px] sm:text-[12.5px] text-neutral-800 leading-snug">
                    <div>
                      <span className="font-bold text-neutral-950">Languages: </span>
                      <span>{RESUME_DATA.technicalSkills.languages}</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">Frontend: </span>
                      <span>{RESUME_DATA.technicalSkills.frontend}</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">Backend: </span>
                      <span>{RESUME_DATA.technicalSkills.backend}</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">Databases: </span>
                      <span>{RESUME_DATA.technicalSkills.databases}</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">Core: </span>
                      <span>{RESUME_DATA.technicalSkills.core}</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">Tools: </span>
                      <span>{RESUME_DATA.technicalSkills.tools}</span>
                    </div>
                    <div>
                      <span className="font-bold text-neutral-950">Cloud: </span>
                      <span>{RESUME_DATA.technicalSkills.cloud}</span>
                    </div>
                  </div>
                </section>

                {/* ==================== 4. EXPERIENCE ==================== */}
                <section className="mt-3.5">
                  <div className="border-b border-neutral-300 pb-0.5 mb-1.5">
                    <h2 className="text-xs font-bold text-[#1e40af] uppercase tracking-wide">
                      EXPERIENCE
                    </h2>
                  </div>
                  {RESUME_DATA.experience.map((exp, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="leading-snug">
                        <span className="font-bold text-neutral-950">{exp.company}</span>
                        <span className="font-semibold text-neutral-900"> — {exp.role}</span>
                      </div>
                      <div className="text-[11.5px] italic text-neutral-700 mb-1">
                        {exp.type} | {exp.period}
                      </div>
                      <ul className="list-disc ml-5 space-y-0.5 text-[12px] sm:text-[12.5px] text-neutral-800 leading-snug">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>

                {/* ==================== 5. PROJECTS ==================== */}
                <section className="mt-3.5">
                  <div className="border-b border-neutral-300 pb-0.5 mb-1.5">
                    <h2 className="text-xs font-bold text-[#1e40af] uppercase tracking-wide">
                      PROJECTS
                    </h2>
                  </div>
                  <div className="space-y-2.5">
                    {RESUME_DATA.projects.map((proj, pIdx) => (
                      <div key={pIdx}>
                        <div className="font-bold text-neutral-950 text-[12.5px]">
                          {proj.title}
                        </div>
                        <div className="text-[11.5px] italic text-neutral-700 mb-0.5">
                          {proj.techStack}
                        </div>
                        <ul className="list-disc ml-5 space-y-0.5 text-[12px] sm:text-[12.5px] text-neutral-800 leading-snug">
                          {proj.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ==================== 6. CERTIFICATIONS ==================== */}
                <section className="mt-3.5">
                  <div className="border-b border-neutral-300 pb-0.5 mb-1.5">
                    <h2 className="text-xs font-bold text-[#1e40af] uppercase tracking-wide">
                      CERTIFICATIONS
                    </h2>
                  </div>
                  <div className="text-[12px] sm:text-[12.5px] text-neutral-800">
                    {RESUME_DATA.certifications.map((cert, cIdx) => (
                      <div key={cIdx}>{cert}</div>
                    ))}
                  </div>
                </section>

                {/* ==================== 7. CAREER INTERESTS ==================== */}
                <section className="mt-3.5">
                  <div className="border-b border-neutral-300 pb-0.5 mb-1.5">
                    <h2 className="text-xs font-bold text-[#1e40af] uppercase tracking-wide">
                      CAREER INTERESTS
                    </h2>
                  </div>
                  <div className="text-[12px] sm:text-[12.5px] text-neutral-800 leading-snug">
                    {RESUME_DATA.careerInterests.join(' | ')}
                  </div>
                </section>

              </motion.div>
            ) : (
              /* =========================================================================
                 INTERACTIVE PRESENTATION VIEW (ANIMATED CARDS & QUICK JUMPS)
                 ========================================================================= */
              <div className="w-full max-w-3xl space-y-4">
                
                {/* Header Profile Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <img 
                      src={PERSONAL_INFO.defaultAvatar} 
                      alt="Amog Rao" 
                      className="w-14 h-14 rounded-2xl object-cover object-[center_22%] border border-neutral-700"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-white">{RESUME_DATA.header.fullName}</h2>
                      <p className="text-xs text-blue-400 font-semibold">KL University • AI for Autonomous Systems</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mt-1">
                        <span>📞 {RESUME_DATA.header.phone}</span>
                        <span>✉️ {RESUME_DATA.header.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={RESUME_DATA.header.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#0077b5] text-white rounded-xl text-xs font-medium inline-flex items-center gap-1.5 hover:bg-[#00669c] transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={RESUME_DATA.header.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-neutral-800 text-white rounded-xl text-xs font-medium inline-flex items-center gap-1.5 hover:bg-neutral-700 transition-colors border border-neutral-700"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </motion.div>

                {/* Professional Summary */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-white"
                >
                  <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Professional Summary</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {RESUME_DATA.professionalSummary}
                  </p>
                </motion.div>

                {/* Experience & Internship Highlight */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-white space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Experience & Internship</h3>
                    <span className="text-[11px] font-semibold bg-purple-900/60 text-purple-200 border border-purple-700/50 px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  </div>
                  {RESUME_DATA.experience.map((exp, idx) => (
                    <div key={idx} className="p-3.5 bg-neutral-800/70 border border-neutral-700/60 rounded-xl space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-extrabold text-white font-serif">{exp.company}</span>
                          <span className="text-xs text-neutral-300 font-medium">({exp.role})</span>
                        </div>
                        <span className="text-xs text-neutral-400 font-medium">{exp.period}</span>
                      </div>
                      <ul className="space-y-1 text-xs text-neutral-300 list-disc list-inside">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>

                {/* Skills Grid Interactive */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-white"
                >
                  <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Technical Skillset</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700/60">
                      <span className="text-neutral-400 block mb-1 font-semibold">Languages:</span>
                      <span className="text-white font-medium">{RESUME_DATA.technicalSkills.languages}</span>
                    </div>
                    <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700/60">
                      <span className="text-neutral-400 block mb-1 font-semibold">Frontend:</span>
                      <span className="text-white font-medium">{RESUME_DATA.technicalSkills.frontend}</span>
                    </div>
                    <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700/60">
                      <span className="text-neutral-400 block mb-1 font-semibold">Backend:</span>
                      <span className="text-white font-medium">{RESUME_DATA.technicalSkills.backend}</span>
                    </div>
                    <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700/60">
                      <span className="text-neutral-400 block mb-1 font-semibold">Databases & Cloud:</span>
                      <span className="text-white font-medium">{RESUME_DATA.technicalSkills.databases} • {RESUME_DATA.technicalSkills.cloud}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Featured Projects Highlight */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-white space-y-3"
                >
                  <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Projects in Resume</h3>
                  <div className="space-y-3">
                    {RESUME_DATA.projects.map((p, idx) => (
                      <div key={idx} className="p-3.5 bg-neutral-800/70 border border-neutral-700/60 rounded-xl">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-white">{p.title}</h4>
                          <span className="text-[11px] font-mono text-blue-300">{p.techStack}</span>
                        </div>
                        <ul className="mt-2 space-y-1 text-xs text-neutral-300 list-disc list-inside">
                          {p.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            )}

          </div>

          {/* Bottom Action Footer */}
          <div className="px-4 py-3 sm:px-6 bg-neutral-900 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-400 shrink-0">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Direct match with Potlapally Amog Rao's resume (Updated 2026)</span>
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer underline underline-offset-2"
              >
                Save as PDF
              </button>
              <span>•</span>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
