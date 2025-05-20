
'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Hide cursor when mouse leaves the window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', () => setIsVisible(true));


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', () => setIsVisible(true));
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
      <Search className="w-5 h-5 text-accent" />
    </div>
  );
};

export default CustomCursor;
