
import { notFound } from 'next/navigation';

export default function TestimonialsPage() {
  notFound();
  // This line is technically unreachable as notFound() throws an error.
  return null;
}
