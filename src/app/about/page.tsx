
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { profileData } from '@/data/profileData';
import { generateAboutPageContent } from '@/ai/flows/about-page-generator';

import SectionWrapper from '@/components/shared/SectionWrapper';
import TypingEffect from '@/components/shared/TypingEffect';
import WhatIDoSection from '@/components/features/WhatIDoSection';
import AboutMeSkeleton from '@/components/shared/AboutMeSkeleton';

export const metadata: Metadata = {
  title: 'About | Madhusudan Mahatha',
  description: "Learn more about Madhusudan Mahatha, a Full Stack Developer specializing in applied Artificial Intelligence.",
};

// This component now fetches all dynamic data in one go
async function AiPoweredAboutPage() {
  const result = await generateAboutPageContent({
    name: profileData.name,
    title: profileData.title,
    skills: profileData.skills,
    workExperience: profileData.work,
  });

  const aboutTitle = result.aboutTitle;
  const whatIDoTitle = result.whatIDoTitle;
  const aboutMeParagraphs = result.aboutMeText;

  return (
    <div className="space-y-12">
      <SectionWrapper title={<TypingEffect text={aboutTitle} />}>
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          {aboutMeParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {profileData.about.paragraph3 && <p>{profileData.about.paragraph3}</p>}
        </div>
      </SectionWrapper>

      <SectionWrapper title={<TypingEffect text={whatIDoTitle} />} className="mt-12">
        <WhatIDoSection />
      </SectionWrapper>
    </div>
  );
}

export default async function AboutPage() {
  return (
    <Suspense fallback={
      <div className="space-y-12">
        <SectionWrapper title="Loading...">
          <AboutMeSkeleton />
        </SectionWrapper>
        <SectionWrapper title="Loading..." className="mt-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AboutMeSkeleton />
              <AboutMeSkeleton />
            </div>
        </SectionWrapper>
      </div>
    }>
      <AiPoweredAboutPage />
    </Suspense>
  );
}
