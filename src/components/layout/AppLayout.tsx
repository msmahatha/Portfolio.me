
"use client";

import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import SidebarNav from "@/components/layout/SidebarNav";
import HeaderNav from "@/components/layout/HeaderNav";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { Toaster } from "@/components/ui/toaster";
import dynamic from 'next/dynamic';
import PageTransition from './PageTransition';
import ClientOnlyLoading from './ClientOnlyLoading';
import { cn } from '@/lib/utils';

const Waves = dynamic(() => import('@/components/shared/Waves'), { ssr: false });

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* The loading screen is always rendered on the client first */}
      <ClientOnlyLoading onFinished={() => setIsLoading(false)} />
      
      {/* The main content is hidden via opacity until client is mounted and loading is finished */}
      <div className={cn("transition-opacity duration-500", !isMounted || isLoading ? "opacity-0" : "opacity-100")}>
        <SidebarProvider defaultOpen={true} style={{ "--sidebar-width": "var(--sidebar-width-custom)" } as React.CSSProperties}>
          <div className="flex min-h-screen relative">
            
            {/* These components are only rendered on the client after mount to prevent hydration errors */}
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
        </SidebarProvider>
      </div>
    </>
  );
}
