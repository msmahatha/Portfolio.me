
"use client";

import React from 'react'; // Added React import for useEffect and useActionState
import { useFormStatus } from 'react-dom'; // useFormState removed from here
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm, type ContactFormState } from './actions';
import { contactFormSchema } from './formSchema';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto bg-accent hover:bg-accent/90 text-primary-foreground">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactPage() {
  const initialState: ContactFormState = { message: '', status: 'idle' };
  // Updated to use React.useActionState
  const [state, formAction] = React.useActionState(submitContactForm, initialState);

  // react-hook-form for client-side validation (optional, but good UX)
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  // Reset form on successful submission by Server Action
  React.useEffect(() => {
    if (state.status === 'success') {
      form.reset();
    }
  }, [state, form]);

  return (
    <SectionWrapper title="Contact Me">
      <p className="mb-8 text-muted-foreground">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>

      {state.status !== 'idle' && (
         <Alert variant={state.status === 'error' ? 'destructive' : 'default'} className="mb-6">
          {state.status === 'success' ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <AlertTitle>{state.status === 'success' ? 'Success!' : 'Error!'}</AlertTitle>
          <AlertDescription>
            {state.message}
          </AlertDescription>
        </Alert>
      )}

      <form
        // The formAction prop on the form element is the standard way to use useActionState
        // no need for form.handleSubmit wrapper if we are only using server action for submission
        // however, to keep client-side validation with react-hook-form before server action,
        // we use form.handleSubmit to trigger client validation first, 
        // and if successful, it will call the function passed to it, which then calls our formAction.
        onSubmit={form.handleSubmit(() => {
          // Create FormData from react-hook-form's current values
          const formData = new FormData();
          const values = form.getValues();
          (Object.keys(values) as Array<keyof typeof values>).forEach((key) => {
            formData.append(key, values[key]);
          });
          formAction(formData);
        })}
        className="space-y-6"
      >
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            {...form.register("name")}
            placeholder="Your Name"
            className="mt-1"
          />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
          )}
           {state.errors?.name && !form.formState.errors.name && ( // Show server error if no client error
            <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            placeholder="your.email@example.com"
            className="mt-1"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
          )}
          {state.errors?.email && !form.formState.errors.email && ( // Show server error if no client error
            <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            {...form.register("message")}
            placeholder="Your message..."
            rows={5}
            className="mt-1"
          />
          {form.formState.errors.message && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
          )}
           {state.errors?.message && !form.formState.errors.message && ( // Show server error if no client error
            <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>
          )}
        </div>
        
        <SubmitButton />
      </form>
    </SectionWrapper>
  );
}
