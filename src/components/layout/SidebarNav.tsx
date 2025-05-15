"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Phone, Briefcase } from 'lucide-react';
import { profileData } from '@/data/profileData';
import { SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/profile-enhancer', label: 'AI Profile Enhancer', icon: Briefcase },
];


export default function SidebarNav() {
  const pathname = usePathname();
  return (
    <>
      <SidebarHeader className="items-center text-center p-6">
        <Image
          src="https://storage.googleapis.com/aiteacher/Project%20Master/image_1724090389959_0.png"
          alt={profileData.name}
          width={140}
          height={140}
          className="rounded-full mb-4 shadow-md object-cover"
          data-ai-hint="man portrait"
        />
        <h1 className="text-xl font-semibold text-foreground">{profileData.name}</h1>
        <p className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1 mt-1 inline-block">
          {profileData.title}
        </p>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel>Contact</SidebarGroupLabel>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-accent" />
              <a href={`mailto:${profileData.email}`} className="hover:text-accent transition-colors">{profileData.email}</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-accent" />
              <span>{profileData.phone}</span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-accent" />
              <span>{profileData.location}</span>
            </li>
          </ul>
        </SidebarGroup>
        
        <Separator className="my-4" />

        <SidebarGroup>
          <SidebarGroupLabel>Social</SidebarGroupLabel>
          <div className="flex space-x-3">
            <Link href={profileData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6 text-foreground hover:text-accent transition-colors" />
            </Link>
            <Link href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
                    <SidebarMenuButton isActive={pathname === item.href} className="w-full">
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.label}
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
