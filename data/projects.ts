export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  summary: string;
  outcome: string;
  role: string;
  scope: string[];
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "urilga",
    title: "Urilga Web Application",
    category: "Full-stack platform",
    year: "2024",
    description:
      "Business workflow platform built with a Django backend and React frontend for managing records, structured data, and daily operations.",
    summary:
      "Designed to reduce manual record handling and give teams a more dependable workflow for day-to-day business processes.",
    outcome:
      "Delivered a cleaner workflow for record management and internal coordination.",
    role: "Designed and built backend workflows, API integrations, and frontend data flows.",
    scope: [
      "Workflow modeling for structured business records",
      "Authentication and role-aware interfaces",
      "React frontend backed by Django APIs",
    ],
    tech: ["Django", "React", "PostgreSQL", "REST API"],
    github: "https://github.com/batbyr-hub/e_urilga",
    demo: "https://urilga-demo.vercel.app",
  },
  {
    slug: "kiosk-system",
    title: "Self-Service Kiosk System",
    category: "Operations product",
    year: "2023",
    description:
      "Self-service ordering system for a food business, designed to streamline customer flow and reduce counter pressure during peak hours.",
    summary:
      "Built to improve ordering speed, support operational continuity, and expand service capacity during high-demand periods.",
    outcome:
      "Contributed to an 80%+ profit increase during COVID through higher service efficiency.",
    role: "Developed application workflows and operational features for kiosk-based ordering.",
    scope: [
      "Customer-friendly ordering flow",
      "Operational reporting and internal management",
      "Backend logic supporting kiosk transactions",
    ],
    tech: ["Django", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/batbyr-hub/kiosk",
  },
];
