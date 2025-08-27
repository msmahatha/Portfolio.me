
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import type { ProjectItem } from '@/types/profile';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const techArray = project.tech.split(',').map(t => t.trim());

  const hasLinks = project.link || project.liveLink;

  return (
    <Card className="bg-card shadow-lg h-full flex flex-col overflow-hidden hover:shadow-accent/20 transition-all duration-300 ease-in-out hover:scale-105 transform">
      {project.image && (
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.dataAiHint || "project technology"}
          />
        </div>
      )}
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
