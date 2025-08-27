
"use client";

import type { ReactNode } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import SidebarNav from "@/components/layout/SidebarNav";
import HeaderNav from "@/components/layout/HeaderNav";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { Toaster } from "@/components/ui/toaster";
import dynamic from 'next/dynamic';
import PageTransition from './PageTransition';

const Waves = dynamic(() => import('@/components/shared/Waves'), { ssr: false });

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SidebarProvider defaultOpen={true} style={{ "--sidebar-width": "var(--sidebar-width-custom)" } as React.CSSProperties}>
        <div className="flex min-h-screen relative">
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
          <SidebarInset className="flex flex-col flex-1 z-10">
            <HeaderNav />
            <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </SidebarInset>
        </div>
        <MobileBottomNav className="z-10" />
        <Toaster />
      </SidebarProvider>
    </>
  );
}
