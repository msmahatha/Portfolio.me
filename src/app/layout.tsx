
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
    icon: 'https://i.pinimg.com/736x/20/11/8c/20118ce1f723fe3f31e992f58c2279bd.jpg',
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
