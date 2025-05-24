
'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredText, setHoveredText] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        setIsVisible(true);
      }
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      let textToShow: string | null = null;

      if (
        target &&
        typeof target.innerText === 'string' &&
        target.tagName !== 'BODY' &&
        target.tagName !== 'HTML' &&
        target.innerText.trim().length > 0 &&
        !target.classList.contains('custom-cursor') && 
        !target.closest('.custom-cursor') 
      ) {
        const rawText = target.innerText.trim();
        textToShow = rawText.substring(0, 35); // Show a snippet of text
      }
      setHoveredText(textToShow);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      className={cn(
        'custom-cursor',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {hoveredText ? (
        <div className="magnified-text-container">
          <span className="magnified-text">{hoveredText}</span>
        </div>
      ) : (
        <Search className="w-8 h-8 text-accent" />
      )}
    </div>
  );
};

export default CustomCursor;
