export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  description: string;
  heroImage: string;
  readingTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'iso-27001-2022-guide',
    title: 'The Complete Guide to ISO 27001:2022',
    author: 'Pragmatech Team',
    date: '2025-07-01',
    description: "Securing Your Organization's Future: A comprehensive guide to ISO 27001:2022, its benefits, structure, and certification journey.",
    heroImage: '/logosmall.png', // Using existing logo image that we know works
    readingTime: '12 min read',
  },
]; 