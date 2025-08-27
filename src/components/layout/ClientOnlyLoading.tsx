
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const LoadingScreen = dynamic(() => import('../shared/LoadingScreen'), {
  ssr: false,
});

interface ClientOnlyLoadingProps {
  onFinished: () => void;
}

const ClientOnlyLoading = ({ onFinished }: ClientOnlyLoadingProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    const finishTimer = setTimeout(() => {
      onFinished();
    }, 1800); // Should be slightly less than hide timer

    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 2000); // 2 seconds

    return () => {
      clearTimeout(finishTimer);
      clearTimeout(hideTimer);
    };
  }, [onFinished]);

  if (!isMounted || !show) {
    return null;
  }

  return <LoadingScreen />;
};

export default ClientOnlyLoading;
