export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "urilga",
    title: "Urilga Web Application",
    description:
      "Capstone project built with Django backend and React frontend for managing business workflows.",
    tech: ["Django", "React", "PostgreSQL"],
    github: "https://github.com/batbyr-hub/e_urilga",
    demo: "https://urilga-demo.vercel.app",
  },
  {
    slug: "kiosk-system",
    title: "Self-Service Kiosk System",
    description:
      "A Django-based kiosk system that increased company profit by over 80% during COVID.",
    tech: ["Django", "MySQL", "JavaScript"],
    github: "https://github.com/batbyr-hub/kiosk",
  },
];
