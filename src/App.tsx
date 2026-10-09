/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { CalModal } from './components/CalModal';
import { StarryBackground } from './components/StarryBackground';
import { PERSONAL_INFO } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [calModalOpen, setCalModalOpen] = useState(false);

  // Clear any legacy custom photo overrides so only Amog's authentic photo is displayed
  React.useEffect(() => {
    try {
      localStorage.removeItem('amog_portfolio_profile_photo');
    } catch {
      // ignore
    }
  }, []);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-teal-500 selection:text-white">
      {/* Dynamic Cosmic Black Starry Background */}
      <StarryBackground />

      <div className="relative z-10 flex flex-col flex-1">
        {/* 1. Sticky Navbar (pill-shaped, white bg) */}
        <Navbar 
          onOpenContact={handleOpenContact}
          onOpenResume={() => setResumeOpen(true)}
          onOpenCal={() => setCalModalOpen(true)}
          avatarUrl={PERSONAL_INFO.defaultAvatar}
        />

      {/* Main Content Area */}
      <main className="flex-1 space-y-8 sm:space-y-12">
        {/* 1. Page 1 / Hero Page: Photo, Open to Work, About Me, CGPA, and Interests */}
        <HeroSection 
          onOpenContact={handleOpenContact}
          onOpenResume={() => setResumeOpen(true)}
          onOpenCal={() => setCalModalOpen(true)}
          avatarUrl={PERSONAL_INFO.defaultAvatar}
        />

        {/* 2. Page 2 / Skills & Technical Capabilities Section */}
        <SkillsSection 
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* 3. Professional Journey / Internship (Sankalp) & Experience Section */}
        <ExperienceSection onOpenResume={() => setResumeOpen(true)} />

        {/* 4. Recent Projects Section */}
        <ProjectsSection onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* 5. Contact Section */}
        <ContactSection 
          onOpenCal={() => setCalModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={handleOpenContact}
        onOpenCal={() => setCalModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      {/* Cal.com Scheduling Modal */}
      <CalModal 
        isOpen={calModalOpen} 
        onClose={() => setCalModalOpen(false)} 
        defaultCalLink={PERSONAL_INFO.calLink || "amog-rao-hnd3vf/30min"}
      />

      </div>
    </div>
  );
}
