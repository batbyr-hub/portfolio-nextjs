import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Batbayar Altanbagana",
  description:
    "Portfolio of software engineering projects using Django, React, Node.js, PostgreSQL, and cloud technologies.",
};

export default function ProjectsPage() {
  return (
    <section className="flex w-full flex-col gap-8">
      <div className="glass-panel rounded-[2rem] px-6 py-10 sm:px-8 sm:py-12">
        <p className="eyebrow mb-4">Projects</p>
        <h1 className="section-title mb-4">Selected work across internal tools, operations products, and web platforms.</h1>
        <p className="body-muted max-w-3xl text-base leading-8">
          Each project reflects a backend-first approach: structured data, clear
          workflows, and interfaces that support how people actually use the
          product.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
