
'use client';

import type { ReactNode } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import PageTransition from '@/components/layout/PageTransition';
import { useIsMounted } from '@/hooks/useIsMounted';
import ClientOnlyLoading from './ClientOnlyLoading';

export default function ClientOnlyLayout({ children }: { children: ReactNode }) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <ClientOnlyLoading />;
  }

  return (
    <AppLayout>
      <PageTransition>
        {children}
      </PageTransition>
    </AppLayout>
  );
}
