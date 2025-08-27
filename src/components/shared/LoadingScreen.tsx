
"use client";

import React from 'react';
import { profileData } from '@/data/profileData';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-[200] fade-out-fast">
      <div className="text-center">
        <h1 
          className="text-4xl md:text-6xl font-bold animate-pulse-text"
          style={{ color: '#FFCA28' }} // Firebase Amber
        >
          {profileData.name}
        </h1>
        <p 
          className="text-lg mt-2"
          style={{ color: '#039BE5' }} // Firebase Blue
        >
          {profileData.title}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
