
import type { Metadata } from 'next';
import { profileData } from '@/data/profileData';

import SectionWrapper from '@/components/shared/SectionWrapper';
import WhatIDoSection from '@/components/features/WhatIDoSection';
import TypingEffect from '@/components/shared/TypingEffect';
import ExpertiseSection from '@/components/features/ExpertiseSection';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${profileData.name}, a ${profileData.title}. Discover his skills, what he does, and his areas of expertise in web development and artificial intelligence.`,
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* About Me Section with Glassmorphism */}
      <div className="glass-card p-6 md:p-8">
        <SectionWrapper title={<TypingEffect text="About Me" />} className="py-0">
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>{profileData.about.paragraph1}</p>
            {profileData.about.paragraph3 && <p>{profileData.about.paragraph3}</p>}
          </div>
        </SectionWrapper>
      </div>

      {/* Areas of Expertise Section */}
      <div className="glass-card p-6 md:p-8">
        <SectionWrapper title="Areas of Expertise" className="py-0">
          <ExpertiseSection />
        </SectionWrapper>
      </div>

      {/* What I Do Section with Glassmorphism */}
      <div className="glass-card p-6 md:p-8">
        <SectionWrapper title="What I Do" className="py-0">
          <WhatIDoSection />
        </SectionWrapper>
      </div>
    </div>
  );
}
