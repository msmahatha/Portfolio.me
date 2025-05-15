import { profileData } from '@/data/profileData';
import SectionWrapper from '@/components/shared/SectionWrapper';
import TimelineItem from '@/components/shared/TimelineItem';
import SkillBadge from '@/components/shared/SkillBadge';

export default function ResumePage() {
  const { education, work, projects, skills, certifications, extras } = profileData;

  return (
    <div className="space-y-12">
      <SectionWrapper title="Resume">
        {/* Education */}
        <div className="mb-10">
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
        <div className="mb-10">
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
        <div className="mb-10">
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
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-accent">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-accent">Certifications</h3>
          <ul className="list-disc list-inside space-y-1 text-foreground/80">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* Extras */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-accent">Extras</h3>
          <ul className="list-disc list-inside space-y-1 text-foreground/80">
            {extras.map((extra) => (
              <li key={extra}>{extra}</li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </div>
  );
}
