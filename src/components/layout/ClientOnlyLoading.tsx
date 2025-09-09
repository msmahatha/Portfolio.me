
'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '../shared/LoadingScreen';

const ClientOnlyLoading = () => {
  const [show, setShow] = useState(true);

  // This effect will run once on the client after the component mounts.
  useEffect(() => {
    // We set a timer to hide the loading screen after a certain period.
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 2000); // The loading screen will be visible for 2 seconds.

    // Cleanup the timer if the component unmounts.
    return () => {
      clearTimeout(hideTimer);
    };
  }, []); // The empty dependency array ensures this effect runs only once.

  // If `show` is false, we render nothing.
  if (!show) {
    return null;
  }

  // Otherwise, we show the loading screen.
  return <LoadingScreen />;
};

export default ClientOnlyLoading;
