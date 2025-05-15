"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, FileText, Briefcase, Send, Home } from 'lucide-react'; // Added Home for /about

const navItems = [
  { href: '/about', label: 'About', icon: Home },
  { href: '/resume', label: 'Resume', icon: FileText },
  { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '/contact', label: 'Contact', icon: Send },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors
              ${pathname === item.href ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6 mb-0.5" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
