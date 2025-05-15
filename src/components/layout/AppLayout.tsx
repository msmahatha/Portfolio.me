"use client";

import type { ReactNode } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import SidebarNav from "@/components/layout/SidebarNav";
import HeaderNav from "@/components/layout/HeaderNav";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { Toaster } from "@/components/ui/toaster";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true} style={{ "--sidebar-width": "var(--sidebar-width-custom)" } as React.CSSProperties}>
      <div className="flex min-h-screen">
        <Sidebar side="left" variant="sidebar" collapsible="icon" className="shadow-lg">
          <SidebarNav />
        </Sidebar>
        <SidebarInset className="flex flex-col flex-1">
          <HeaderNav />
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
      <MobileBottomNav />
      <Toaster />
    </SidebarProvider>
  );
}
