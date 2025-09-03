
'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ProjectCard from '@/components/shared/ProjectCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const allTechs = Array.from(new Set(profileData.projects.flatMap(p => p.tech.split(',').map(t => t.trim()))));
const featuredFilters = ['All', 'Next.js', 'Python', 'AI/ML', 'Firebase', 'TypeScript'];
// You can customize the filters you want to show
const filters = featuredFilters.filter(f => f === 'All' || allTechs.includes(f));


export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return profileData.projects;
    }
    return profileData.projects.filter(project =>
      project.tech.split(',').map(t => t.trim()).includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <SectionWrapper title="Portfolio">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filters.map(filter => (
          <Button
            key={filter}
            variant={activeFilter === filter ? 'default' : 'outline'}
            onClick={() => setActiveFilter(filter)}
            className={cn(
                "transition-all duration-300 ease-in-out",
                activeFilter === filter && "shadow-lg shadow-accent/30"
            )}
          >
            {filter}
          </Button>
        ))}
      </div>
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
