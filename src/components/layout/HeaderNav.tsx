"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/portfolio', label: 'Portfolio' },
];

export default function HeaderNav() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render a placeholder or null on the server to prevent mismatch
  if (!isClient) {
    return (
       <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-b-lg shadow-md border-b border-accent">
        <div className="container flex h-16 items-center justify-between max-w-screen-2xl">
          <div className="flex items-center">
            <div className="md:hidden mr-2">
              <SidebarTrigger />
            </div>
            <Link href="/about" className="flex items-center">
              <span className="font-bold text-lg ml-3">Msmahatha</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md h-10 px-4 py-2"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-b-lg shadow-md border-b border-accent">
      <div className="container grid h-16 grid-cols-3 items-center max-w-screen-2xl">
        <div className="flex items-center justify-start">
          <div className="md:hidden mr-2">
            <SidebarTrigger />
          </div>
          <Link href="/about" className="flex items-center">
            <span className="font-bold text-lg ml-3">Msmahatha</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center space-x-2 lg:space-x-4 col-start-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Button
                key={link.href}
                variant="ghost"
                asChild
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            );
          })}
        </nav>

        {/* Empty div for spacing, keeping the nav centered */}
        <div className="justify-end hidden md:flex"></div>
      </div>
    </header>
  );
}
