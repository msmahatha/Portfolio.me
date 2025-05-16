
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Phone, Briefcase } from 'lucide-react';
import { profileData } from '@/data/profileData';
import { SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';
// Tooltip components are not explicitly used here based on refined plan, but could be for richer tooltips
// import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { href: '/profile-enhancer', label: 'AI Profile Enhancer', icon: Briefcase },
];


export default function SidebarNav() {
  const pathname = usePathname();
  return (
    <>
      <SidebarHeader className="items-center text-center p-6 group-data-[state=collapsed]:px-1.5 group-data-[state=collapsed]:py-4 transition-all duration-200">
        <div className="relative w-[140px] h-[140px] group-data-[state=collapsed]:w-9 group-data-[state=collapsed]:h-9 mb-4 group-data-[state=collapsed]:mb-0 rounded-full shadow-md overflow-hidden transition-all duration-200">
          <Image
            src="https://placehold.co/140x140.png"
            alt={profileData.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint="man chess"
          />
        </div>
        <h1 className="text-xl font-semibold text-foreground group-data-[state=collapsed]:hidden">{profileData.name}</h1>
        <p className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1 mt-1 inline-block group-data-[state=collapsed]:hidden">
          {profileData.title}
        </p>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel>Contact</SidebarGroupLabel>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <a 
                href={`mailto:${profileData.email}`} 
                className="flex items-center hover:text-accent transition-colors w-full overflow-hidden"
                title={profileData.email}
              >
                <Mail className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                <span className="group-data-[state=collapsed]:hidden truncate"> 
                  {profileData.email}
                </span>
                <span className="hidden group-data-[state=collapsed]:inline">
                  Email
                </span>
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
               <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`} 
                  className="group-data-[state=collapsed]:hidden hover:text-accent transition-colors truncate" 
                  title={profileData.phone}>
                  {profileData.phone}
                </a>
              <span className="hidden group-data-[state=collapsed]:inline" title={profileData.phone}>Phone</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
              <span className="group-data-[state=collapsed]:hidden truncate" title={profileData.location}>{profileData.location}</span>
               <span className="hidden group-data-[state=collapsed]:inline" title={profileData.location}>Location</span>
            </li>
          </ul>
        </SidebarGroup>
        
        <Separator className="my-4" />

        <SidebarGroup>
          <SidebarGroupLabel>Social</SidebarGroupLabel>
          <div className="flex space-x-3 group-data-[state=collapsed]:flex-col group-data-[state=collapsed]:space-x-0 group-data-[state=collapsed]:space-y-3 group-data-[state=collapsed]:items-center">
            <Link href={profileData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <Github className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
            </Link>
            <Link href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <Linkedin className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
            </Link>
          </div>
        </SidebarGroup>

        <Separator className="my-4" />
        
        <SidebarGroup>
            <SidebarGroupLabel>Tools</SidebarGroupLabel>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href} passHref legacyBehavior>
                    <SidebarMenuButton 
                      isActive={pathname === item.href} 
                      className="w-full"
                      tooltip={{ children: item.label, side: 'right', align: 'center' }}
                    >
                      <item.icon className="w-4 h-4 mr-2 group-data-[state=collapsed]:mr-0" />
                      <span className="group-data-[state=collapsed]:hidden">{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

      </SidebarContent>
    </>
  );
}
