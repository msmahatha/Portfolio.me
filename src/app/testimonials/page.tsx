
import type { Metadata } from 'next';
import SectionWrapper from '@/components/shared/SectionWrapper';
import TestimonialForm from '@/components/features/TestimonialForm';
import { getTestimonials } from './actions';
import TestimonialCard from '@/components/shared/TestimonialCard';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Testimonials | Madhusudan Mahatha',
    description: 'See what people are saying about working with Madhusudan Mahatha.',
};

async function TestimonialsList() {
    const testimonials = await getTestimonials();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
        </div>
    );
}

function TestimonialsSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-card p-6 rounded-lg shadow-lg space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-muted animate-pulse"></div>
                        <div className="space-y-2">
                            <div className="h-4 w-32 bg-muted animate-pulse rounded"></div>
                            <div className="h-3 w-24 bg-muted animate-pulse rounded"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                         <div className="h-3 w-full bg-muted animate-pulse rounded"></div>
                         <div className="h-3 w-full bg-muted animate-pulse rounded"></div>
                         <div className="h-3 w-3/4 bg-muted animate-pulse rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default function TestimonialsPage() {

    return (
        <div className="space-y-12">
            <SectionWrapper title="Testimonials">
                <Suspense fallback={<TestimonialsSkeleton />}>
                   <TestimonialsList />
                </Suspense>
            </SectionWrapper>
            
            <SectionWrapper title="Leave a Testimonial">
                <TestimonialForm />
            </SectionWrapper>
        </div>
    );
}
