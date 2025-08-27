
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { profileData } from '@/data/profileData';
import { generateAboutMe } from '@/ai/flows/about-me-generator';
import { generateTitle } from '@/ai/flows/title-generator';

import SectionWrapper from '@/components/shared/SectionWrapper';
import TypingEffect from '@/components/shared/TypingEffect';
import WhatIDoSection from '@/components/features/WhatIDoSection';
import AboutMeSkeleton from '@/components/shared/AboutMeSkeleton';

export const metadata: Metadata = {
  title: 'About | Madhusudan Mahatha',
  description: "Learn more about Madhusudan Mahatha, a Full Stack Developer specializing in applied Artificial Intelligence.",
};

async function AiPoweredAboutMe() {
  const aboutMeResult = await generateAboutMe({
    name: profileData.name,
    title: profileData.title,
    skills: profileData.skills,
    workExperience: profileData.work,
  });

  const paragraphs = aboutMeResult?.aboutMeText || [
    profileData.about.paragraph1,
    profileData.about.paragraph2,
  ];

  return (
    <div className="space-y-4 text-foreground/90 leading-relaxed">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {profileData.about.paragraph3 && <p>{profileData.about.paragraph3}</p>}
    </div>
  );
}

export default async function AboutPage() {
  const aboutTitlePromise = generateTitle({ context: "About Me" });
  const whatIDoTitlePromise = generateTitle({ context: "What I'm Doing" });

  const [aboutTitleResult, whatIDoTitleResult] = await Promise.all([
    aboutTitlePromise,
    whatIDoTitlePromise,
  ]);

  const aboutTitle = aboutTitleResult?.title || "About Me";
  const whatIDoTitle = whatIDoTitleResult?.title || "What I'm Doing";

  return (
    <div className="space-y-12">
      <SectionWrapper title={<TypingEffect text={aboutTitle} />}>
        <Suspense fallback={<AboutMeSkeleton />}>
          <AiPoweredAboutMe />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper title={<TypingEffect text={whatIDoTitle} />} className="mt-12">
        <WhatIDoSection />
      </SectionWrapper>
    </div>
  );
}
