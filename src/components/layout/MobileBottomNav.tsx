"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, FileText, Briefcase, Send, Home } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/about', label: 'About', icon: Home },
  { href: '/resume', label: 'Resume', icon: FileText },
  { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
];

export default function MobileBottomNav({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className={`md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg z-50 ${className}`}>
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
            const isActive = isClient && pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors
                  ${isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
                aria-label={item.label}
              >
                <item.icon className="w-6 h-6 mb-0.5" />
                <span className="text-xs">{item.label}</span>
              </Link>
            )
          })}
      </div>
    </nav>
  );
}
