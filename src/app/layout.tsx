
import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Corrected import for Geist
import './globals.css';
import AppLayout from '@/components/layout/AppLayout';

const geistSans = Geist({ // Using default Geist (sans-serif)
  variable: '--font-geist-sans',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'Madhusudan Mahatha',
  description: 'Personal portfolio of Madhusudan Mahatha, Full Stack Developer & AI/ML Specialist.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
