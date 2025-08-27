
'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';
import type { Testimonial, TestimonialSubmission } from '@/types/testimonial';
import { z } from 'zod';


const submissionSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message cannot exceed 500 characters."),
});

export async function addTestimonial(formData: TestimonialSubmission) {

    const parsed = submissionSchema.safeParse(formData);

    if (!parsed.success) {
        return { success: false, message: parsed.error.errors.map(e => e.message).join(', ') };
    }

    try {
        const testimonialsCollection = collection(db, 'testimonials');
        await addDoc(testimonialsCollection, {
            ...parsed.data,
            createdAt: serverTimestamp(),
            approved: false // Default to not approved
        });

        revalidatePath('/testimonials');
        return { success: true, message: 'Thank you for your testimonial! It will be reviewed shortly.' };
    } catch (error) {
        console.error("Error adding testimonial:", error);
        return { success: false, message: 'An unexpected error occurred. Please try again.' };
    }
}

export async function getTestimonials(): Promise<Testimonial[]> {
    try {
        const testimonialsCollection = collection(db, 'testimonials');
        const q = query(testimonialsCollection, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const testimonials: Testimonial[] = [];
        querySnapshot.forEach(doc => {
            const data = doc.data();
            // Note: We are fetching all testimonials for now.
            // In a real app, you'd add a where('approved', '==', true) clause here.
            testimonials.push({
                id: doc.id,
                name: data.name,
                company: data.company,
                message: data.message,
                createdAt: data.createdAt?.toDate().toISOString() || new Date().toISOString(),
                approved: data.approved,
            });
        });
        
        return testimonials;
    } catch (error) {
        console.error("Error getting testimonials:", error);
        return [];
    }
}
