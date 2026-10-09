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
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { CalModal } from './components/CalModal';
import { StarryBackground } from './components/StarryBackground';
import { PERSONAL_INFO } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [calModalOpen, setCalModalOpen] = useState(false);
  
  // Persistent avatar in localStorage so changes survive page reloads and browser sessions
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('amog_portfolio_profile_photo');
      if (saved && saved.trim()) {
        return saved;
      }
    } catch (e) {
      console.warn('Unable to read saved photo from localStorage', e);
    }
    return PERSONAL_INFO.defaultAvatar;
  });

  const handleSaveAvatar = (newUrl: string) => {
    setAvatarUrl(newUrl);
    try {
      if (newUrl) {
        localStorage.setItem('amog_portfolio_profile_photo', newUrl);
      }
    } catch (e) {
      console.warn('Unable to save photo to localStorage', e);
    }
  };

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
          avatarUrl={avatarUrl}
        />

      {/* Main Content Area */}
      <main className="flex-1 space-y-8 sm:space-y-12">
        {/* 1. Page 1 / Hero Page: Photo, Open to Work, About Me, CGPA, and Interests */}
        <HeroSection 
          onOpenContact={handleOpenContact}
          onOpenResume={() => setResumeOpen(true)}
          onOpenPhotoModal={() => setPhotoModalOpen(true)}
          onOpenCal={() => setCalModalOpen(true)}
          avatarUrl={avatarUrl}
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

      <PhotoUploadModal 
        isOpen={photoModalOpen} 
        onClose={() => setPhotoModalOpen(false)} 
        currentAvatar={avatarUrl}
        onSaveAvatar={handleSaveAvatar}
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
