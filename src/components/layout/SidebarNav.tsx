
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Phone, Instagram, X, Code2 } from 'lucide-react';
import { profileData } from '@/data/profileData';
import { SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';

export default function SidebarNav() {
  const pathname = usePathname();
  return (
    <>
      <SidebarHeader className="items-center text-center p-6 group-data-[state=collapsed]:px-2 group-data-[state=collapsed]:py-4 transition-all duration-300 ease-in-out">
        <div className="relative w-[140px] h-[140px] group-data-[state=collapsed]:w-10 group-data-[state=collapsed]:h-10 mb-4 group-data-[state=collapsed]:mb-0 rounded-full shadow-md overflow-hidden transition-all duration-300 ease-in-out">
          <Image
            src="https://i.ibb.co/CFGFw2x/Whats-App-Image-2025-03-08-at-22-15-53.jpg"
            alt={profileData.name}
            fill
            className="object-cover"
            data-ai-hint="man profile"
          />
        </div>
        <div className="transition-opacity duration-200 group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:h-0 group-data-[state=collapsed]:invisible">
          <h1 className="text-xl font-semibold text-foreground">{profileData.name}</h1>
          <p className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1 mt-1 inline-block">
            {profileData.title}
          </p>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4 transition-all duration-300 ease-in-out group-data-[state=collapsed]:p-2">
        <SidebarGroup>
          <SidebarGroupLabel>Contact</SidebarGroupLabel>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <a 
                href={`mailto:${profileData.email}`} 
                className="flex items-center hover:text-accent transition-colors w-full overflow-hidden"
                title={profileData.email}
              >
                <Mail className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                <span className="group-data-[state=collapsed]:hidden truncate"> 
                  {profileData.email}
                </span>
                <span className="hidden group-data-[state=collapsed]:inline sr-only">
                  Email
                </span>
              </a>
            </li>
            <li className="flex items-center">
               <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`} 
                  className="flex items-center group-data-[state=collapsed]:justify-center hover:text-accent transition-colors truncate w-full"
                  title={profileData.phone}>
                  <Phone className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
                  <span className="group-data-[state=collapsed]:hidden">{profileData.phone}</span>
                  <span className="hidden group-data-[state=collapsed]:inline sr-only">Phone</span>
                </a>
            </li>
            <li className="flex items-center">
              <MapPin className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
              <span className="group-data-[state=collapsed]:hidden truncate" title={profileData.location}>{profileData.location}</span>
               <span className="hidden group-data-[state=collapsed]:inline sr-only" title={profileData.location}>Location</span>
            </li>
          </ul>
        </SidebarGroup>
        
        <Separator className="my-4" />

        <SidebarGroup>
          <SidebarGroupLabel>Social</SidebarGroupLabel>
          <div className="flex flex-wrap justify-around gap-y-4 group-data-[state=collapsed]:flex-col group-data-[state=collapsed]:space-y-4">
            <Link href={profileData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <Github className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
            </Link>
            <Link href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <Linkedin className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
            </Link>
            <Link href={profileData.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <Instagram className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
            </Link>
            <Link href={profileData.social.x} target="_blank" rel="noopener noreferrer" aria-label="X" title="X">
              <X className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
            </Link>
            <Link href={profileData.social.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" title="LeetCode">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-foreground hover:text-accent transition-colors"
                fill="currentColor"
              >
                <title>LeetCode</title>
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 5.858l5.706 5.706 5.706-5.706L14.444.438A1.374 1.374 0 0 0 13.483 0zm-2.944 6.292L5.132 11.7l5.407 5.407 5.407-5.407-5.407-5.407zm9.325 5.407L14.457 17.1l5.407 5.407 5.407-5.407-5.407-5.407zM0 22.626a1.374 1.374 0 0 0 .961.438l5.407-5.407-5.407-5.407L.438 21.665a1.374 1.374 0 0 0 .523.961z" />
              </svg>
            </Link>
            {profileData.social.codeforces && (
              <Link href={profileData.social.codeforces} target="_blank" rel="noopener noreferrer" aria-label="Codeforces" title="Codeforces">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-foreground hover:text-accent transition-colors"
                  fill="currentColor"
                >
                  <title>Codeforces</title>
                  <path d="M4 18H6V6H4V18ZM8 18H10V10H8V18ZM12 18H14V4H12V18ZM16 18H18V12H16V18Z" />
                </svg>
              </Link>
            )}
          </div>
        </SidebarGroup>
      </SidebarContent>
    </>
  );
}
