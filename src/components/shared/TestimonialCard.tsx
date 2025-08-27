
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/types/testimonial";
import { formatDistanceToNow } from 'date-fns';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, email, message, createdAt } = testimonial;
  const initial = name.charAt(0).toUpperCase();

  return (
    <Card className="bg-card shadow-lg flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
            <AvatarFallback>{initial}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
            <p className="font-semibold text-card-foreground">{name}</p>
            {email && <p className="text-sm text-muted-foreground">{email}</p>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground italic">"{message}"</p>
      </CardContent>
      <CardFooter>
          <p className="text-xs text-muted-foreground ml-auto">
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </p>
      </CardFooter>
    </Card>
  );
}
