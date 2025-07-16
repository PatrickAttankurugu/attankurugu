import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://patrickattankurugu.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://patrickattankurugu.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://patrickattankurugu.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://patrickattankurugu.com/skills',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://patrickattankurugu.com/experience',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://patrickattankurugu.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://patrickattankurugu.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}