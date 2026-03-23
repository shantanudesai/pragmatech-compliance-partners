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
    slug: 'organization-ai-policy',
    title: 'Your Organization is Using AI. Do You Have a Policy for It?',
    author: 'Pragmatech Team',
    date: '2026-02-22',
    description:
      'Why every organization needs a living AI use policy: purpose, definitions, ethics, approved tools, data guardrails, roles, and how to start without waiting for perfection.',
    heroImage: '/logosmall.png',
    readingTime: '10 min read',
  },
  {
    slug: 'soc-reports-comparison-guide',
    title: 'SOC Reports Demystified: A Complete Comparison Guide',
    author: 'Pragmatech Team',
    date: '2025-08-11',
    description: "Understanding the differences between SOC 1, SOC 2, and SOC 3 reports, including Type I vs Type II assessments, to make informed compliance decisions for your organization.",
    heroImage: '/logosmall.png',
    readingTime: '10 min read',
  },
  {
    slug: 'rbi-free-ai-framework-guide',
    title: 'RBI\'s FREE-AI Framework: A Blueprint for Responsible AI in Finance',
    author: 'Pragmatech Team',
    date: '2025-09-09',
    description: "Exploring RBI's comprehensive Framework for Responsible and Ethical Enablement of AI (FREE-AI) and its 7 Sutras, 6 Strategic Pillars, and 26 actionable recommendations for the financial sector.",
    heroImage: '/logosmall.png',
    readingTime: '12 min read',
  },
  {
    slug: 'ai-model-vs-solution-lifecycle',
    title: 'Model vs. Solution: Why the Distinction Matters in AI Lifecycle Planning',
    author: 'Pragmatech Team',
    date: '2025-08-24',
    description: "Understanding the critical difference between AI model and AI solution lifecycles for better compliance, documentation, and audit readiness.",
    heroImage: '/logosmall.png',
    readingTime: '8 min read',
  },
  {
    slug: 'iso-27001-2022-guide',
    title: 'The Complete Guide to ISO 27001:2022',
    author: 'Pragmatech Team',
    date: '2025-07-01',
    description: "Securing Your Organization's Future: A comprehensive guide to ISO 27001:2022, its benefits, structure, and certification journey.",
    heroImage: '/logosmall.png', // Using existing logo image that we know works
    readingTime: '12 min read',
  },
  {
    slug: 'tisax-automotive-guide',
    title: 'TISAX in the Automotive Ecosystem: A Comprehensive Guide',
    author: 'Pragmatech Team',
    date: '2025-07-06',
    description: 'What TISAX is, how it relates to ISO 27001, assessment levels, prototype protection, supply chain security, and a pragmatic path to compliance—especially for India.',
    heroImage: '/logosmall.png',
    readingTime: '14 min read',
  },
]; 