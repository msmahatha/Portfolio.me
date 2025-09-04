
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
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Codeforces</title>
    <path d="M39.46 216.035c2.62 0 4.542-1.922 4.542-4.542V123.17c0-2.62-1.922-4.541-4.542-4.541s-4.542 1.921-4.542 4.541v88.323c0 2.62 1.922 4.542 4.542 4.542zm36.879 0c2.62 0 4.542-1.922 4.542-4.542V99.555c0-2.62-1.922-4.542-4.542-4.542s-4.542 1.922-4.542 4.542v111.938c0 2.62 1.922 4.542 4.542 4.542zm58.58-94.43-20.65-20.65-20.65 20.65c-1.61 1.61-1.61 4.23 0 5.84 1.61 1.61 4.23 1.61 5.84 0l14.81-14.81 14.81 14.81c.805.805 1.846 1.207 2.887 1.207s2.082-.402 2.887-1.207c1.61-1.61 1.61-4.23 0-5.84zm-21.87 94.43c2.62 0 4.542-1.922 4.542-4.542V51.275c0-2.62-1.922-4.542-4.542-4.542s-4.542 1.922-4.542 4.542v159.218c0 2.62 1.922 4.542 4.542 4.542zm37.49 0c2.62 0 4.542-1.922 4.542-4.542v-52.93c0-2.62-1.922-4.542-4.542-4.542s-4.542 1.922-4.542 4.542v52.93c0 2.62 1.922 4.542 4.542 4.542zm66.429-122.38-32.5-32.5c-1.61-1.61-4.23-1.61-5.84 0s-1.61 4.23 0 5.84l32.5 32.5c1.61 1.61 4.23 1.61 5.84 0s1.61-4.23 0-5.84zm-26.74 122.38c2.62 0 4.542-1.922 4.542-4.542V30.015c0-2.62-1.922-4.542-4.542-4.542s-4.542 1.922-4.542 4.542v181.478c0 2.62 1.922 4.542 4.542 4.542z"/>
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
