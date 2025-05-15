import { Pencil, Code2, Smartphone, Camera, Cpu, Briefcase, LucideProps, Icon as LucideIcon } from 'lucide-react';
import type { ElementType } from 'react';

export const iconMap: { [key: string]: LucideIcon } = {
  pencil: Pencil,
  code: Code2,
  smartphone: Smartphone,
  camera: Camera,
  cpu: Cpu,
  briefcase: Briefcase,
};

interface IconProps extends LucideProps {
  name: string;
}

export const IconComponent: React.FC<IconProps> = ({ name, ...props }) => {
  const Icon = iconMap[name];
  if (!Icon) {
    return null; // Or a default icon
  }
  return <Icon {...props} />;
};
