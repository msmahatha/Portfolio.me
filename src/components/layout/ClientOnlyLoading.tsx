
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useIsMounted } from '@/hooks/useIsMounted';

const LoadingScreen = dynamic(() => import('../shared/LoadingScreen'), {
  ssr: false,
});

const ClientOnlyLoading = () => {
  const isMounted = useIsMounted();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 2000); // Wait 2 seconds before starting fade-out

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
