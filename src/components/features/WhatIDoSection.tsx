import { profileData } from '@/data/profileData';
import WhatIDoCard from '@/components/shared/WhatIDoCard';

export default function WhatIDoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {profileData.whatIDo.map((item) => (
        <WhatIDoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
      ))}
    </div>
  );
}
