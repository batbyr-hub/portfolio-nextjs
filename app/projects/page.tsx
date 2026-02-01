import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Batbayar Altanbagana",
  description: "Portfolio of software engineering projects using Django, React, Node.js, PostgreSQL, and cloud technologies.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
