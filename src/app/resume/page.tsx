
import type { Metadata } from 'next';
import { profileData } from '@/data/profileData';
import SectionWrapper from '@/components/shared/SectionWrapper';
import TimelineItem from '@/components/shared/TimelineItem';
import SkillBadge from '@/components/shared/SkillBadge';
import TypingEffect from '@/components/shared/TypingEffect';

export const metadata: Metadata = {
  title: 'Resume | Madhusudan Mahatha',
  description: 'View the resume of Madhusudan Mahatha, detailing work experience, education, projects, and skills.',
};

export default function ResumePage() {
  const { education, work, projects, skills, certifications, extras } = profileData;

  return (
    <div className="space-y-8">
      <SectionWrapper title={<TypingEffect text="Resume" />} className="py-0 mt-8">
        <div className="space-y-8">
          {/* Education */}
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4 text-accent">Education</h3>
            {education.map((item, index) => (
              <TimelineItem
                key={item.degree}
                title={item.degree}
                period={item.period}
                details={item.details}
                isLast={index === education.length - 1}
              />
            ))}
          </div>

          {/* Work Experience */}
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4 text-accent">Work Experience</h3>
            {work.map((item, index) => (
              <TimelineItem
                key={item.role}
                title={item.role}
                subtitle={item.company}
                period={item.period}
                details={item.bullets}
                isLast={index === work.length - 1}
              />
            ))}
          </div>

          {/* Projects */}
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4 text-accent">Projects</h3>
            {projects.map((item, index) => ( 
              <TimelineItem
                key={item.name}
                title={item.name}
                subtitle={`Tech: ${item.tech}`}
                period={item.period}
                details={item.highlights}
                isLast={index === projects.length - 1}
              />
            ))}
          </div>
          
          {/* Skills */}
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4 text-accent">Skills</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold mb-2 text-foreground/90">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Extras */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Certifications</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Extras</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {extras.map((extra) => (
                  <li key={extra}>{extra}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
