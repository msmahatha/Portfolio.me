
'use client';

import type { ReactNode } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import PageTransition from '@/components/layout/PageTransition';
import { useIsMounted } from '@/hooks/useIsMounted';
import { cn } from '@/lib/utils';

export default function ClientOnlyLayout({ children }: { children: ReactNode }) {
  const isMounted = useIsMounted();

  return (
    <div className={cn("transition-opacity duration-500", isMounted ? "opacity-100" : "opacity-0")}>
      <AppLayout>
        <PageTransition>
          {children}
        </PageTransition>
      </AppLayout>
    </div>
  );
}
