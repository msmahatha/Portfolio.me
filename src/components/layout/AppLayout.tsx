
"use client";

import type { ReactNode } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import SidebarNav from "@/components/layout/SidebarNav";
import HeaderNav from "@/components/layout/HeaderNav";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { Toaster } from "@/components/ui/toaster";
import dynamic from 'next/dynamic';
import PageTransition from './PageTransition';
import { cn } from '@/lib/utils';
import { useIsMounted } from '@/hooks/use-mobile'; // Keep for logic
import { useIsMounted as useIsMountedHook } from '@/hooks/useIsMounted'; // Renaming for clarity

// Dynamically import client-side only components
const Waves = dynamic(() => import('@/components/shared/Waves'), { ssr: false });

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const isMounted = useIsMountedHook();

  return (
    <SidebarProvider defaultOpen={true} style={{ "--sidebar-width": "var(--sidebar-width-custom)" } as React.CSSProperties}>
      <div className={cn("transition-opacity duration-500", isMounted ? "opacity-100" : "opacity-0")}>
        <div className="flex min-h-screen relative">
          {isMounted && (
            <>
              <Waves
                lineColor="hsl(var(--accent))"
                backgroundColor="transparent"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
              />
              <Sidebar side="left" variant="sidebar" collapsible="icon" className="shadow-lg z-10">
                <SidebarNav />
              </Sidebar>
            </>
          )}
          
          <SidebarInset className="flex flex-col flex-1 z-10">
            <HeaderNav />
            <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </SidebarInset>
        </div>
        {isMounted && <MobileBottomNav className="z-10" />}
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
