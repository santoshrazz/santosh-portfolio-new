export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "Monitor",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 93 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    category: "Backend Development",
    icon: "Database",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Python (Django / FastAPI)", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    icon: "Server",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS", level: 88 },
      { name: "CI/CD", level: 87 },
      { name: "PostgreSQL", level: 83 },
    ],
  },
];
