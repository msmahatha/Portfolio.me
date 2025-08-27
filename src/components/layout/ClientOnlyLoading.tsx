
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

// Dynamically import the LoadingScreen with ssr: false
const LoadingScreen = dynamic(() => import('@/components/shared/LoadingScreen'), {
  ssr: false,
});

const ClientOnlyLoading = () => {
  const [show, setShow] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500); // Start fade out after 2.5 seconds

    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 3000); // Remove from DOM after fade out (2.5s + 0.5s animation)

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className={cn({ 'loading-screen-fade-out': isFadingOut })}>
      <LoadingScreen />
    </div>
  );
};

export default ClientOnlyLoading;
