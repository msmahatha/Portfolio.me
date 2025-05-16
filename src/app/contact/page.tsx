import { notFound } from 'next/navigation';

export default function ContactPage() {
  notFound();
  // This line is technically unreachable as notFound() throws an error.
  return null;
}
