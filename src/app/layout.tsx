
import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Corrected import for Geist
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import ClientOnlyLayout from '@/components/layout/ClientOnlyLayout';
import ClientOnlyLoading from '@/components/layout/ClientOnlyLoading';

const geistSans = Geist({ // Using default Geist (sans-serif)
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Madhusudan Mahatha',
  description: 'Personal portfolio of Madhusudan Mahatha, Full Stack Developer & AI/ML Specialist.',
  icons: {
    icon: 'https://i.ibb.co/gbQNYrRv/Whats-App-Image-2025-03-08-at-22-15-53.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          themes={['dark', 'purple']}
        >
          <ClientOnlyLoading />
          <ClientOnlyLayout>
            {children}
          </ClientOnlyLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
