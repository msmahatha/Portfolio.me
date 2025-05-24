
"use client";

import type { ReactNode } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import SidebarNav from "@/components/layout/SidebarNav";
import HeaderNav from "@/components/layout/HeaderNav";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { Toaster } from "@/components/ui/toaster";
import Waves from '@/components/shared/Waves'; // Import the Waves component

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true} style={{ "--sidebar-width": "var(--sidebar-width-custom)" } as React.CSSProperties}>
      <div className="flex min-h-screen relative"> {/* Added position: relative for Waves positioning context */}
        <Waves
          lineColor="hsl(var(--accent))" // Using theme's accent color (yellow)
          backgroundColor="transparent"   // Ensuring app's main background shows through
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
        <Sidebar side="left" variant="sidebar" collapsible="icon" className="shadow-lg z-10"> {/* Added z-index */}
          <SidebarNav />
        </Sidebar>
        <SidebarInset className="flex flex-col flex-1 z-10"> {/* Added z-index */}
          <HeaderNav />
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
      <MobileBottomNav className="z-10" /> {/* Added z-index */}
      <Toaster />
    </SidebarProvider>
  );
}
