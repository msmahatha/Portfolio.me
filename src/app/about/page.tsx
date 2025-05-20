
import { profileData } from '@/data/profileData';
import SectionWrapper from '@/components/shared/SectionWrapper';
import WhatIDoCard from '@/components/shared/WhatIDoCard';
import TypingEffect from '@/components/shared/TypingEffect'; // Import the new component

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <SectionWrapper title={<TypingEffect text="About Me" />}>
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>{profileData.about.paragraph1}</p>
          <p>{profileData.about.paragraph2}</p>
        </div>
      </SectionWrapper>

      <SectionWrapper title={<TypingEffect text="What I'm Doing" />} className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.whatIDo.map((item) => (
            <WhatIDoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
