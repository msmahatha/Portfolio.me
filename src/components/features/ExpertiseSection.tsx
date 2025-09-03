
import { profileData } from '@/data/profileData';
import ExpertiseCard from '@/components/shared/ExpertiseCard';

export default function ExpertiseSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {profileData.expertise.map((item) => (
        <ExpertiseCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
      ))}
    </div>
  );
}
