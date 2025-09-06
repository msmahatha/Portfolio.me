
import { Pencil, Code2, Smartphone, Camera, Cpu, Briefcase, BrainCircuit, Server, Cloud, Users, LucideProps, Terminal } from 'lucide-react';
import type { ElementType } from 'react';

const LeetCodeIcon = (props: LucideProps) => (
  <Code2 {...props} />
);

const CodeforcesIcon = ({ className, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="#1F8ACB" stroke="none" />
      <path d="M9.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="#1F8ACB" stroke="none" />
      <path d="M14.5 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="#F44336" stroke="none" />
    </svg>
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
