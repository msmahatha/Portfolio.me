
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconComponent } from "./IconMap";

interface ExpertiseCardProps {
  icon: string;
  title: string;
  text: string;
}

export default function ExpertiseCard({ icon, title, text }: ExpertiseCardProps) {
  return (
    <Card className="bg-card shadow-lg h-full transition-all duration-300 ease-in-out hover:bg-accent/10 hover:shadow-accent/20">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <div className="p-3 rounded-md bg-accent/20">
           <IconComponent name={icon} className="w-6 h-6 text-accent" />
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
