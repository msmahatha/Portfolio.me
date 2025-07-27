
import type { Metadata } from 'next';
import { profileData } from '@/data/profileData';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ProjectCard from '@/components/shared/ProjectCard';

export const metadata: Metadata = {
  title: 'Portfolio | Madhusudan Mahatha',
  description: 'Explore the project portfolio of Madhusudan Mahatha, showcasing work in full-stack development and AI/ML.',
};

export default function PortfolioPage() {
  return (
    <SectionWrapper title="Portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileData.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
