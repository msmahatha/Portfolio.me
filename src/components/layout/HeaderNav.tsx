
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Flame } from 'lucide-react'; // Using Flame as a placeholder logo
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/portfolio', label: 'Portfolio' },
  // { href: '/contact', label: 'Contact' }, // Removed contact link
];

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-b-lg shadow-md border-b border-accent">
      <div className="container flex h-16 items-center justify-between max-w-screen-2xl">
        <div className="flex items-center">
          <div className="md:hidden mr-2">
            <SidebarTrigger />
          </div>
<<<<<<< HEAD
          <Link href="/about" className="flex items-center space-x-2">
            <Flame className="h-6 w-6 text-accent" />
            <span className="font-bold text-lg"> Msmahatha</span>
=======
          <Link href="/" className="flex items-center space-x-2 font-bold text-lg">
            <span className="font-bold text-lg">Msmahatha</span>
>>>>>>> 08d1f7d (Commit local changes before pull)
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Button
                key={link.href}
                variant={isActive ? 'secondary' : 'ghost'}
                asChild
                className={cn(
                  "text-sm font-medium transition-colors",
                  // If active, rely on 'secondary' variant for text color (text-secondary-foreground).
                  // If inactive, set base text to muted-foreground.
                  // Hover styles will be handled by the respective variants.
                  isActive ? "" : "text-muted-foreground"
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
