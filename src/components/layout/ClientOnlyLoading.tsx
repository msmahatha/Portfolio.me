
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the LoadingScreen with SSR turned off
const LoadingScreen = dynamic(() => import('../shared/LoadingScreen'), {
  ssr: false,
});

const ClientOnlyLoading = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    // Hide the loading screen after a delay
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything on the server
  if (!isMounted) {
    return null;
  }

  // If show is false, render nothing
  if (!show) {
    return null;
  }

  return <LoadingScreen />;
};

export default ClientOnlyLoading;
