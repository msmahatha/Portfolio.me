
import type { Metadata } from 'next';
import { profileData } from '@/data/profileData';

import SectionWrapper from '@/components/shared/SectionWrapper';
import WhatIDoSection from '@/components/features/WhatIDoSection';

export const metadata: Metadata = {
  title: 'About | Madhusudan Mahatha',
  description: "Learn more about Madhusudan Mahatha, a Full Stack Developer specializing in applied Artificial Intelligence.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <SectionWrapper title="About Me">
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>{profileData.about.paragraph1}</p>
          <p>{profileData.about.paragraph2}</p>
          {profileData.about.paragraph3 && <p>{profileData.about.paragraph3}</p>}
        </div>
      </SectionWrapper>

      <SectionWrapper title="What I Do" className="mt-12">
        <WhatIDoSection />
      </SectionWrapper>
    </div>
  );
}
