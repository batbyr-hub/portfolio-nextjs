import Link from "next/link";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="glass-panel group flex h-full flex-col rounded-[1.75rem] p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            {project.category}
          </p>
          <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
            {project.year}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-medium ${
              project.status === "In Progress"
                ? "bg-amber-500/12 text-amber-200"
                : "bg-emerald-500/12 text-emerald-200"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <p className="body-muted mb-6 text-base leading-7">{project.description}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-5">
        <p className="max-w-[18rem] text-sm text-white/45">{project.outcome}</p>
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-white group-hover:border-[rgba(215,168,110,0.45)]"
        >
          View project
        </Link>
      </div>
    </article>
  );
}
