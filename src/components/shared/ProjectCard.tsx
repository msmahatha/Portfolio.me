
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import type { ProjectItem } from '@/types/profile';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const techArray = project.tech.split(',').map(t => t.trim());

  const hasLinks = project.link || project.liveLink;

  return (
    <Card className={cn(
      "bg-card shadow-lg h-full flex flex-col overflow-hidden",
      "transition-all duration-300 ease-in-out transform group",
      "relative", // Needed for the pseudo-element
      "hover:scale-105",
      // The pseudo-element for the glowing effect
      "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
      "after:w-[150%] after:h-2/5 after:bg-purple-500 after:opacity-0 after:blur-3xl",
      "after:transition-opacity after:duration-500",
      "group-hover:after:opacity-20"
    )}>
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image || 'https://placehold.co/600x400/0f0f0f/FFCC38?text=Project'}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          data-ai-hint={project.dataAiHint || "project technology"}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{project.name}</CardTitle>
        <CardDescription className="text-xs">{project.period}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
          {project.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1 mt-2">
          {techArray.slice(0, 5).map((tech) => ( // Show up to 5 tech items
            <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
          ))}
          {techArray.length > 5 && <Badge variant="outline" className="text-xs">+{techArray.length - 5} more</Badge>}
        </div>
      </CardContent>
      {hasLinks && (
        <CardFooter className="flex items-center gap-2 mt-auto pt-4">
          {project.link && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          )}
          {project.liveLink && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
