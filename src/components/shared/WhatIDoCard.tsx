import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconComponent } from "./IconMap";

interface WhatIDoCardProps {
  icon: string;
  title: string;
  text: string;
}

export default function WhatIDoCard({ icon, title, text }: WhatIDoCardProps) {
  return (
    <Card className="bg-card shadow-lg h-full">
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
