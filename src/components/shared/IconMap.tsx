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
    <path d="M4.03 18.32c.23 0 .4-.17.4-.4v-8.3c0-.23-.17-.4-.4-.4s-.4.17-.4.4v8.3c0 .23.17.4.4.4zm3.64 0c.23 0 .4-.17.4-.4V9.28c0-.23-.17-.4-.4-.4s-.4.17-.4.4v8.64c0 .23.17.4.4.4zm7.72-8.09-2.04 2.04-2.04-2.04c-.16-.16-.4-.16-.56 0-.16.16-.16.4 0 .56l2.32 2.32c.08.08.18.12.28.12s.2-.04.28-.12l2.32-2.32c.16-.16.16-.4 0-.56-.16-.16-.4-.16-.56 0zm-2.16 8.09c.23 0 .4-.17.4-.4V5.68c0-.23-.17-.4-.4-.4s-.4.17-.4.4v12.24c0 .23.17.4.4.4zm3.7 0c.23 0 .4-.17.4-.4v-5.2c0-.23-.17-.4-.4-.4s-.4.17-.4.4v5.2c0 .23.17.4.4.4zm6.56-12.08-3.21-3.21c-.16-.16-.4-.16-.56 0s-.16.4 0 .56l3.21 3.21c.16.16.4.16.56 0s.16-.4 0-.56zm-2.64 12.08c.23 0 .4-.17.4-.4V3.68c0-.23-.17-.4-.4-.4s-.4.17-.4.4v14.24c0 .23.17.4.4.4z"/>
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
