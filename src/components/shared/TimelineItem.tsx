
import type { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  period?: string;
  details?: string[] | ReactNode;
  isLast?: boolean;
}

export default function TimelineItem({ title, subtitle, period, details, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-12 py-4 group">
      {/* Vertical line */}
      {!isLast && <div className="absolute top-5 left-[10px] sm:left-[22px] w-0.5 h-full bg-border group-hover:bg-accent transition-colors duration-300"></div>}
      
      {/* Dot */}
      <div className="absolute top-5 left-[0px] sm:left-[12px] transform -translate-x-1/2">
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background border-2 border-border group-hover:border-accent transition-colors duration-300">
          <div className="w-full h-full rounded-full bg-border group-hover:bg-accent scale-50 group-hover:scale-75 transition-all duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground">{title}</h3>
        {subtitle && <p className="text-sm sm:text-base italic text-muted-foreground">{subtitle}</p>}
        {period && <p className="text-xs sm:text-sm text-muted-foreground">{period}</p>}
        {details && (
          <div className="mt-2 text-sm text-foreground/80">
            {Array.isArray(details) ? (
              <ul className="list-disc list-inside space-y-1">
                {details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              details
            )}
          </div>
        )}
      </div>
    </div>
  );
}
