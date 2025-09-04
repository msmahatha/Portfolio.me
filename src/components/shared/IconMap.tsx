
import { Pencil, Code2, Smartphone, Camera, Cpu, Briefcase, BrainCircuit, Server, Cloud, Users, LucideProps, Terminal } from 'lucide-react';
import type { ElementType } from 'react';

const LeetCodeIcon = (props: LucideProps) => (
  <Code2 {...props} />
);

const CodeforcesIcon = (props: LucideProps) => (
  <Terminal {...props} />
);


export const iconMap: { [key: string]: ElementType } = {
  pencil: Pencil,
  code: Code2,
  smartphone: Smartphone,
  camera: Camera,
  cpu: Cpu,
  briefcase: Briefcase,
  brainCircuit: BrainCircuit,
  server: Server,
  cloud: Cloud,
  users: Users,
  leetcode: LeetCodeIcon,
  codeforces: CodeforcesIcon,
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
