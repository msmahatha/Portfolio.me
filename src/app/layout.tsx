
import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Corrected import for Geist
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import ClientOnlyLayout from '@/components/layout/ClientOnlyLayout';
import ClientOnlyLoading from '@/components/layout/ClientOnlyLoading';
import { profileData } from '@/data/profileData';

const geistSans = Geist({ // Using default Geist (sans-serif)
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profileData.name,
  url: 'https://madhusudanmahatha1.netlify.app', // Replace with your actual domain
  image: 'https://i.ibb.co/gbQNYrRv/Whats-App-Image-2025-03-08-at-22-15-53.jpg',
  sameAs: [
    profileData.social.github,
    profileData.social.linkedin,
    profileData.social.x,
    profileData.social.instagram,
  ],
  jobTitle: profileData.title,
  worksFor: {
    '@type': 'Organization',
    name: 'Self-Employed',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://madhusudanmahatha1.netlify.app', // Replace with your actual domain
  },
};


export const metadata: Metadata = {
  metadataBase: new URL('https://madhusudanmahatha1.netlify.app'), // Replace with your production domain
  title: {
    default: `${profileData.name} | ${profileData.title}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.about.paragraph1,
  openGraph: {
    title: profileData.name,
    description: profileData.about.paragraph1,
    url: 'https://madhusudanmahatha1.netlify.app', // Replace with your production domain
    siteName: profileData.name,
    images: [
      {
        url: 'https://i.ibb.co/gbQNYrRv/Whats-App-Image-2025-03-08-at-22-15-53.jpg',
        width: 800,
        height: 600,
        alt: `Portfolio of ${profileData.name}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: profileData.name,
    description: profileData.about.paragraph1,
    images: ['https://i.ibb.co/gbQNYrRv/Whats-App-Image-2025-03-08-at-22-15-53.jpg'],
    creator: '@msmahatha', // Your twitter handle
  },
  icons: {
    icon: 'https://i.ibb.co/gbQNYrRv/Whats-App-Image-2025-03-08-at-22-15-53.jpg',
    shortcut: 'https://i.ibb.co/gbQNYrRv/Whats-App-Image-2025-03-08-at-22-15-53.jpg',
    apple: 'https://i.ibb.co/gbQNYrRv/Whats-App-Image-2025-03-08-at-22-15-53.jpg',
  },
  authors: [{ name: profileData.name, url: profileData.social.linkedin }],
  keywords: ['Full Stack Developer', 'AI Specialist', 'ML Specialist', 'Next.js', 'React', 'Python', 'Portfolio', 'Madhusudan Mahatha'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
