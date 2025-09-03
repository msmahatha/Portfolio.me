
export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  x: string;
  leetcode: string;
  geeksforgeeks: string;
}

export interface WhatIDoItem {
  icon: string;
  title: string;
  text: string;
}

export interface ExpertiseItem {
  icon: string;
  title: string;
  text: string;
}

export interface EducationItem {
  degree: string;
  period: string;
  details: string[];
}

export interface WorkItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  period: string;
  tech: string;
  highlights: string[];
  image?: string; // Optional image for portfolio
  dataAiHint?: string; // Optional AI hint for placeholder image
  link?: string; // Optional project link
  liveLink?: string; // Optional live website link
}

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: {
    paragraph1: string;
    paragraph2?: string;
    paragraph3?: string;
  };
  whatIDo: WhatIDoItem[];
  expertise: ExpertiseItem[];
  education: EducationItem[];
  work: WorkItem[];
  projects: ProjectItem[];
  skills: {
    [category: string]: string[];
  };
  certifications: string[];
  extras: string[];
  social: SocialLinks;
}
