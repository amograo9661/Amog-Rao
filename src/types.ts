export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Frontend' | 'Autonomous & AI' | 'All';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  architecture?: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: string[];
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  type: 'work' | 'education';
  description: string[];
  skills: string[];
  gradeOrBadge?: string;
  logo?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}
