
import { MetadataRoute } from 'next';
import { profileData } from '@/data/profileData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://madhusudanmahatha1.netlify.app'; // Replace with your production domain

  // Static pages
  const staticRoutes = ['/about', '/portfolio', '/resume'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '/about' ? 1 : 0.8,
  }));
  
  // You could add dynamic routes here if you had any, for example project detail pages
  // const projectRoutes = profileData.projects.map(project => ({
  //   url: `${baseUrl}/portfolio/${project.slug}`, // Assuming you have a slug for projects
  //   lastModified: new Date().toISOString(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...staticRoutes,
    // ...projectRoutes,
  ];
}
