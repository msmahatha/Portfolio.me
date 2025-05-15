import type { ReactNode } from 'react';

interface SectionWrapperProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ title, children, className }: SectionWrapperProps) {
  return (
    <section className={`py-8 md:py-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground relative inline-block">
        {title}
        <span className="absolute bottom-[-8px] left-0 w-2/3 h-1 bg-accent rounded-full"></span>
      </h2>
      <div className="mt-8">
        {children}
      </div>
    </section>
  );
}
