
'use client';

import type { Metadata } from 'next';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '@/data/profileData';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ProjectCard from '@/components/shared/ProjectCard';
import TypingEffect from '@/components/shared/TypingEffect';
import { useIsMounted } from '@/hooks/useIsMounted';

const allTechs = Array.from(new Set(profileData.projects.flatMap(p => p.tech.split(',').map(t => t.trim()))));
const featuredFilters = ['All', 'Next.js', 'Python', 'AI/ML', 'Firebase', 'TypeScript'];
// You can customize the filters you want to show
const filters = featuredFilters.filter(f => f === 'All' || allTechs.includes(f));

export const metadata: Metadata = {
  title: 'Portfolio',
  description: `Explore the portfolio of ${profileData.name}. A collection of projects in web development, AI/ML, and more. See examples of work with Next.js, Python, Firebase, and other technologies.`,
};


export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const isMounted = useIsMounted();

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return profileData.projects;
    }
    return profileData.projects.filter(project =>
      project.tech.split(',').map(t => t.trim()).includes(activeFilter)
    );
  }, [activeFilter]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="glass-card p-6 md:p-8">
      <SectionWrapper title={<TypingEffect text="Portfolio" />} className="py-0">
        <div className="relative flex flex-wrap justify-center gap-2 mb-8 p-2 bg-secondary/50 rounded-full">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors z-10"
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="active-filter-pill"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
