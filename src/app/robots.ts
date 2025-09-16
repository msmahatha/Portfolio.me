
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://msmahatha.com'; // Replace with your production domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/contact', '/testimonials'], // Disallow pages that are not found
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
