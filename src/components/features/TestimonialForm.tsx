
'use client';

import { useState, useTransition } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { addTestimonial } from '@/app/testimonials/actions';
import type { TestimonialSubmission } from '@/types/testimonial';
import { Loader2 } from 'lucide-react';


const formSchema = z.object({
    name: z.string().min(2, "Name is required."),
    company: z.string().optional(),
    message: z.string().min(10, "Please write a longer testimonial."),
});

export default function TestimonialForm() {
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();

    const form = useForm<TestimonialSubmission>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: "",
            message: "",
        },
    });

    const onSubmit: SubmitHandler<TestimonialSubmission> = async (data) => {
        startTransition(async () => {
            const result = await addTestimonial(data);
            if (result.success) {
                toast({
                    title: "Success!",
                    description: result.message,
                });
                form.reset();
            } else {
                toast({
                    title: "Error",
                    description: result.message,
                    variant: "destructive",
                });
            }
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Company/Title (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., CEO at Innovate Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Testimonial</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us about your experience..."
                                    className="resize-y min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Submit Testimonial
                </Button>
            </form>
        </Form>
    );
}
