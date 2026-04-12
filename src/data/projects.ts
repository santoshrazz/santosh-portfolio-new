export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "ShopSphere",
    description:
      "A full-stack e-commerce platform with product management, cart, payments, and order tracking. Supports secure authentication and admin dashboard.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    gradient: "from-blue-500/20 to-indigo-600/20",
    icon: "ShoppingCart",
  },
  {
    title: "TaskFlow",
    description:
      "A collaborative task management app with real-time updates, drag-and-drop boards, and team workspaces. Includes role-based access control.",
    tech: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL"],
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "CheckSquare",
  },
  {
    title: "DevConnect",
    description:
      "A developer social platform with profiles, posts, likes, and follow system. Integrated with GitHub API for showcasing repositories.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "OAuth"],
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "Users",
  },
  {
    title: "FinTrack",
    description:
      "Personal finance tracker with expense categorization, budgeting, and analytics dashboard. Provides insights with charts and reports.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    gradient: "from-yellow-500/20 to-orange-600/20",
    icon: "BarChart",
  },
  {
    title: "NeuroChat",
    description:
      "An enterprise LLM chatbot platform with multi-model orchestration, RAG pipelines, and real-time streaming.",
    tech: ["React", "Python", "LangChain", "Redis", "PostgreSQL"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "MessageSquare",
  },
  {
    title: "PixelForge",
    description:
      "AI image generation platform with fine-tuning, inpainting, and style transfer. Handles thousands of daily generations.",
    tech: ["Stable Diffusion", "React", "Node.js", "AWS", "S3"],
    gradient: "from-pink-500/20 to-violet-600/20",
    icon: "Image",
  },
];
