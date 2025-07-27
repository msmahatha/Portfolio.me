
import type { Metadata } from 'next';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ProfileEnhancerClient from '@/components/features/ProfileEnhancerClient';

export const metadata: Metadata = {
  title: 'AI Profile Enhancer | Madhusudan Mahatha',
  description: 'Use an AI-powered tool to get suggestions for improving your professional profile.',
};

export default function ProfileEnhancerPage() {
  return (
    <SectionWrapper title="AI Profile Enhancer">
      <ProfileEnhancerClient />
    </SectionWrapper>
  );
}
