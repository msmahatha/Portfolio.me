
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="px-3 py-1 text-sm bg-secondary hover:bg-accent/20 hover:text-accent transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-accent/30 cursor-pointer">
      {skill}
    </Badge>
  );
}
