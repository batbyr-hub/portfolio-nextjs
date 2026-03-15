export type ProjectStatus = "In Progress" | "Production";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  status: ProjectStatus;
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
    year: "2025",
    status: "In Progress",
    description:
      "Business workflow platform built with a Django backend and React frontend for managing records, structured data, and daily operations.",
    summary:
      "Designed to reduce manual record handling and give teams a more dependable workflow for day-to-day business processes.",
    outcome:
      "In active development with a focus on workflow reliability, role-based access, and structured business operations.",
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
    slug: "maoms",
    title: "MAOMS",
    category: "Operations system",
    year: "2026",
    status: "In Progress",
    description:
      "An in-progress operations-focused system currently being developed and refined for production use.",
    summary:
      "A backend-heavy product in progress, intended to support business workflows with cleaner internal operations.",
    outcome:
      "Currently under development and not yet positioned as a production case study.",
    role: "Building the core product architecture and implementation.",
    scope: [
      "Backend development and workflow logic",
      "Internal operations support",
      "Production preparation and iteration",
    ],
    tech: ["Django", "Python", "REST API"],
  },
  {
    slug: "nfilternew",
    title: "nFilterNew",
    category: "Telecom tool",
    year: "2018",
    status: "Production",
    description:
      "Django web app for filtering and managing phone numbers with a simple interface for fast lookup and organization.",
    summary:
      "Built to help users and telecom teams search, filter, and manage phone numbers more efficiently through a focused web workflow.",
    outcome:
      "Production-ready number filtering workflow with a live public deployment.",
    role: "Built the Django application, filtering logic, and delivery workflow.",
    scope: [
      "Phone number filtering based on business rules",
      "Django and Bootstrap interface design",
      "Deployment for live usage",
    ],
    tech: ["Django", "Bootstrap", "Python", "HTML", "CSS"],
    github: "https://github.com/batbyr-hub/nFilterNew",
    demo: "https://shuult.gmobile.mn/",
  },
  {
    slug: "enjoy-kids",
    title: "Enjoy Kids",
    category: "SMS service",
    year: "2021",
    status: "Production",
    description:
      "SMS-based service for children built with Django, supporting unlimited calling to selected numbers and prepaid data purchase by SMS command.",
    summary:
      "Designed as a telecom service workflow that turns SMS commands into family-oriented calling and data package actions.",
    outcome:
      "Completed and presented as a production telecom service.",
    role: "Implemented backend SMS service workflows and supporting business logic.",
    scope: [
      "SMS command processing",
      "Telecom service logic for family plans",
      "Prepaid data package workflows",
    ],
    tech: ["Django", "Python", "SMS Service", "REST API"],
    github: "https://github.com/batbyr-hub/enjoy_kids",
  },
  {
    slug: "tusgaidugaar",
    title: "Tusgai Dugaar",
    category: "Telecom backend",
    year: "2020",
    status: "Production",
    description:
      "Django-based SMS and API system for identity lookup, customer registration, bundle activation, and automated recharging.",
    summary:
      "Built for telecom staff, customers, and external systems to work with subscriber data, SMS workflows, and recharge services through APIs.",
    outcome:
      "Completed backend platform for production-style telecom operations and SMS services.",
    role: "Built backend service logic, SMS-driven flows, and REST API integrations.",
    scope: [
      "Customer lookup through SMS shortcode workflows",
      "User registration and identity verification APIs",
      "Bundle activation and automated recharge logic",
    ],
    tech: ["Django", "Django REST Framework", "MySQL", "Python", "SMS Gateway"],
    github: "https://github.com/batbyr-hub/tusgaidugaar",
  },
  {
    slug: "asset",
    title: "Asset",
    category: "Internal tool",
    year: "2019",
    status: "Production",
    description:
      "Django-based internal asset management system created to digitize asset tracking and operational workflows.",
    summary:
      "Designed to replace manual tracking with a structured system for asset workflows and internal operations.",
    outcome:
      "Reduced company expenditures by 95% through better asset tracking and workflow control.",
    role: "Built internal tooling around asset workflows, tracking, and operational visibility.",
    scope: [
      "Asset lifecycle tracking",
      "Digitized internal workflows",
      "Operational reporting and management support",
    ],
    tech: ["Django", "JavaScript", "Python", "Internal Tools"],
    github: "https://github.com/batbyr-hub/asset",
  },
  {
    slug: "saleor-backend",
    title: "Saleor Backend",
    category: "Commerce backend",
    year: "2022",
    status: "Production",
    description:
      "Backend work centered on ecommerce and service integrations for a production commerce environment.",
    summary:
      "A production backend project around commerce workflows and integration-heavy application behavior.",
    outcome:
      "Completed and treated as a production system.",
    role: "Implemented backend services and integration logic.",
    scope: [
      "Commerce-oriented backend workflows",
      "Service integration and API logic",
      "Production backend support",
    ],
    tech: ["Python", "Backend APIs", "Integrations"],
    github: "https://github.com/batbyr-hub/saleor_backend",
    demo: "https://gmobile.mn/",
  },
  {
    slug: "kiosk-system",
    title: "Self-Service Kiosk System",
    category: "Operations product",
    year: "2017",
    status: "Production",
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
