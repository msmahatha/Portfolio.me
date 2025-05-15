"use server";

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { contactFormSchema } from './formSchema'; // Import the schema

export type ContactFormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Failed to validate form data.",
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await addDoc(collection(db, "messages"), {
      ...validatedFields.data,
      timestamp: serverTimestamp(),
    });
    return { message: "Message sent successfully! I'll get back to you soon.", status: 'success' };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { message: "Failed to send message. Please try again later.", status: 'error' };
  }
}
