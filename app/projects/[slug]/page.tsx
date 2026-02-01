import { projects } from "@/data/projects";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Batbayar Altanbagana",
      description: "Project not found in portfolio.",
    };
  }

  return {
    title: `${project.title} | Batbayar Altanbagana`,
    description: project.description,
    keywords: project.tech, // e.g., React, Django
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h1 className="text-xl">Project not found</h1>;
  }

  return (
    <article className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </header>

      <section>
        <h2 className="font-semibold mb-2">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 px-3 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="flex gap-4">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            GitHub Repo
          </Link>
        )}

        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            Live Demo
          </Link>
        )}
      </section>
    </article>
  );
}
