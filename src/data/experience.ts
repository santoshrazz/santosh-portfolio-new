export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Walsis E-Connect India Pvt. Ltd.",
    role: "Full-Stack Developer",
    period: "2023 — 2024",
    description:
      "Led development and maintenance of platforms like sarthaks.com (20M+ users) and quizard.app (200K+ users). Implemented scalable architectures and optimized performance to handle high user traffic efficiently.",
    tech: ["Next.js", "Node.js", "Fastify", "MySQL"],
  },
  {
    company: "Codebucket Solution Pvt. Ltd.",
    role: "Full-Stack Developer",
    period: "2024 — Present",
    description:
      "Designed and scaled backend systems, improving performance and reducing latency by 40% through optimization and caching strategies. Built and deployed robust, containerized applications for production environments.",
    tech: ["Docker", "Kubernetes", "PostgreSQL", "Redis"],
  },
];
