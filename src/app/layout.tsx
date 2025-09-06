
import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Corrected import for Geist
import './globals.css';
import AppLayout from '@/components/layout/AppLayout';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import ClientOnlyLoading from '@/components/layout/ClientOnlyLoading';
import PageTransition from '@/components/layout/PageTransition';

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
          <AppLayout>
            <PageTransition>
              {children}
            </PageTransition>
          </AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
