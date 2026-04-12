export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Full-Stack Apps with Next.js and Node.js",
    excerpt:
      "A practical guide to structuring full-stack applications using Next.js, APIs, and modern backend patterns for scalability.",
    date: "Mar 2026",
    readTime: "8 min read",
    tag: "Full Stack",
  },
  {
    title: "REST vs GraphQL: Which One Should You Use?",
    excerpt:
      "A developer-focused comparison of REST and GraphQL, including performance, flexibility, and real-world use cases.",
    date: "Jan 2026",
    readTime: "10 min read",
    tag: "Backend",
  },
  {
    title: "How I Built a Production-Ready CI/CD Pipeline",
    excerpt:
      "Step-by-step breakdown of setting up CI/CD using GitHub Actions, Docker, and automated deployments.",
    date: "Nov 2025",
    readTime: "7 min read",
    tag: "DevOps",
  },
  {
    title: "Optimizing React Apps for Performance",
    excerpt:
      "Tips and techniques to improve React performance using memoization, lazy loading, and efficient state management.",
    date: "Sep 2025",
    readTime: "9 min read",
    tag: "Frontend",
  },
];
