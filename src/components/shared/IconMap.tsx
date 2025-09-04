
import { Pencil, Code2, Smartphone, Camera, Cpu, Briefcase, BrainCircuit, Server, Cloud, Users, LucideProps } from 'lucide-react';
import type { ElementType } from 'react';

const LeetCodeIcon = (props: LucideProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>LeetCode</title>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 5.858l5.706 5.706 5.706-5.706L14.444.438A1.374 1.374 0 0 0 13.483 0zm-2.944 6.292L5.132 11.7l5.407 5.407 5.407-5.407-5.407-5.407zm9.325 5.407L14.457 17.1l5.407 5.407 5.407-5.407-5.407-5.407zM0 22.626a1.374 1.374 0 0 0 .961.438l5.407-5.407-5.407-5.407L.438 21.665a1.374 1.374 0 0 0 .523.961z"></path>
  </svg>
);

const CodeforcesIcon = (props: LucideProps) => (
   <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Codeforces</title>
    <path d="M4 18H6V6H4V18ZM8 18H10V10H8V18ZM12 18H14V4H12V18ZM16 18H18V12H16V18Z" />
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
