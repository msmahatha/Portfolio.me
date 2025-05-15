import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/about');
  // Return null or an empty fragment if redirect doesn't immediately stop execution
  return null; 
}
