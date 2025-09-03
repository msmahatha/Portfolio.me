
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const LoadingScreen = dynamic(() => import('../shared/LoadingScreen'), {
  ssr: false,
});

const ClientOnlyLoading = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 2000); // 2 seconds

    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isMounted || !show) {
    return null;
  }

  return <LoadingScreen />;
};

export default ClientOnlyLoading;
