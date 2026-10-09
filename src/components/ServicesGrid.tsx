import React from 'react';
import { ArrowUpRight, Server, Layout, Layers, Cpu } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      default:
        return <Server className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <span 
            id="services-section-label"
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3"
          >
            Specializations
          </span>
          <h2 
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight"
          >
            How can I assist you?
          </h2>
        </div>
        <p className="text-sm sm:text-base text-neutral-600 max-w-md font-normal">
          From robust microservices and interactive interfaces to intelligent autonomous algorithms.
        </p>
      </div>

      {/* 2x2 Services Grid */}
      <div 
        id="services-grid-container"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        {SERVICES.map((service) => (
          <div
            key={service.id}
            id={`service-card-${service.number}`}
            onClick={() => onSelectService && onSelectService(service)}
            className="bg-[#0c0e18]/85 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl shadow-black/50 hover:shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group cursor-default text-white"
          >
            <div>
              {/* Top Row: Small Blue Numbered Label (01-04) + Diagonal Arrow Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  {/* Small blue numbered label */}
                  <span 
                    id={`service-number-${service.number}`}
                    className="text-blue-600 font-bold text-sm sm:text-base tracking-widest"
                  >
                    {service.number}
                  </span>
                </div>

                {/* Diagonal Arrow Icon Top-Right */}
                <div className="w-9 h-9 rounded-full bg-neutral-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <ArrowUpRight 
                    className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                  />
                </div>
              </div>

              {/* Title & Description */}
              <h3 
                id={`service-title-${service.number}`}
                className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-blue-700 transition-colors"
              >
                {service.title}
              </h3>
              <p 
                id={`service-desc-${service.number}`}
                className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal"
              >
                {service.description}
              </p>
            </div>

            {/* Pill Badges for Tags/Skills (light gray bg) */}
            <div className="pt-6 mt-6 border-t border-neutral-100 flex flex-wrap gap-2">
              {service.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
