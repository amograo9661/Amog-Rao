import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  GraduationCap, 
  ExternalLink, 
  Sparkles, 
  Briefcase,
  CheckCircle2,
  Terminal,
  Layers,
  Cpu
} from 'lucide-react';
import { SKILL_GROUPS, PERSONAL_INFO } from '../data/portfolioData';

interface SkillsSectionProps {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onOpenResume, onOpenContact }) => {
  const [activeGroup, setActiveGroup] = useState<string>('frontend');

  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'tools':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'core':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      default:
        return <Terminal className="w-5 h-5 text-neutral-400" />;
    }
  };

  const selectedCategory = SKILL_GROUPS.find(g => g.id === activeGroup) || SKILL_GROUPS[0];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-12 sm:pb-16 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-neutral-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-900/90 border border-white/10 text-white mb-2 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            Page 2 • Technical Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Skills & Technical Stack
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-1 max-w-2xl">
            A comprehensive breakdown of tools, frameworks, databases, and engineering principles I use to build scalable products.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/15 shadow-sm transition-all cursor-pointer"
            >
              <span>View Full Skill Matrix</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-300" />
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Interactive Explorer + Quick Tech Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Category Tabs & Selected Category Detail */}
        <div className="lg:col-span-8 space-y-6">
          {/* Category Selector Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-900/90 border border-neutral-800 rounded-2xl">
            {SKILL_GROUPS.map((group) => {
              const isActive = activeGroup === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveGroup(group.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white/15 text-white shadow-sm border border-white/20'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {getGroupIcon(group.id)}
                  <span>{group.name}</span>
                  <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-medium ${
                    isActive ? 'bg-white/20 text-white' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    {group.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Display Card */}
          <div className="p-6 sm:p-8 bg-[#0c0e18]/85 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl shadow-black/50 relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {getGroupIcon(selectedCategory.id)}
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedCategory.name}
                  </h3>
                </div>
                <p className="text-neutral-300 text-sm">
                  {selectedCategory.description}
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-950/60 text-blue-300 border border-blue-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                Production Ready
              </span>
            </div>

            {/* Skills Pills with subtle depth */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {selectedCategory.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors flex items-center gap-2.5"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  <span className="text-sm font-semibold text-neutral-200 tracking-tight">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Practical Application Note */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Validated through full-stack projects & Sankalp internship
              </span>
              <span className="font-mono text-neutral-500">ES6+ • Java 17+ • SQL</span>
            </div>
          </div>

          {/* Core Competencies Quick Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-[#0c0e18]/85 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg shadow-black/40">
              <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Frontend Engineering</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Component architecture, state management, responsive UI with Tailwind & React.
              </p>
            </div>

            <div className="p-5 bg-[#0c0e18]/85 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg shadow-black/40">
              <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-3">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Backend Architecture</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Java Spring Boot REST APIs, MVC patterns, Node.js microservices, secure JWT auth.
              </p>
            </div>

            <div className="p-5 bg-[#0c0e18]/85 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg shadow-black/40">
              <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-3">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Database & Testing</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Relational schema design, SQL queries, Postman API validation & UI quality testing.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Academic & Industry Anchor Card */}
        <div className="lg:col-span-4 space-y-6">
          {/* Education & Academic Rigor */}
          <div className="p-6 bg-[#0c0e18]/85 backdrop-blur-xl border border-white/10 text-white rounded-3xl shadow-xl shadow-black/50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Academics
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">KL University</h3>
            <p className="text-neutral-300 text-xs sm:text-sm mb-4">
              B.Tech in Computer Science & Engineering (Specialization: AI & Autonomous Systems)
            </p>

            <div className="space-y-2.5 text-xs text-neutral-300 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span className="text-neutral-400">Academic Standing:</span>
                <span className="font-semibold text-white">Consistent High Distinctions</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Core Coursework:</span>
                <span className="font-semibold text-white">DSA, DBMS, OS, OOP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Duration:</span>
                <span className="font-semibold text-white">2023 – 2027</span>
              </div>
            </div>
          </div>

          {/* Current Experience Spotlight */}
          <div className="p-6 bg-[#0c0e18]/85 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl shadow-black/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 block">
                  Active Internship
                </span>
                <h4 className="font-bold text-white text-sm">Sankalp</h4>
              </div>
            </div>

            <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
              Frontend Developer & Application Tester focusing on production-grade React interfaces, bug audits, and cross-device testing.
            </p>

            <a
              href="#journey"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
            >
              <span>Explore Internship Journey below</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
