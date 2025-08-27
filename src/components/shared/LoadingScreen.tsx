
'use client';

import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const bars = Array.from({ length: 10 });

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-[100]">
      <div className="flex items-end h-16 space-x-2">
        {bars.map((_, index) => (
          <div
            key={index}
            className="w-4 bg-accent equalizer-bar"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              height: '100%' 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
