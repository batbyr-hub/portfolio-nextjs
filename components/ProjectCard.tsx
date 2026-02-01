import Link from "next/link";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-sm bg-gray-100 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="text-blue-600 font-medium"
      >
        View details →
      </Link>
    </div>
  );
}
