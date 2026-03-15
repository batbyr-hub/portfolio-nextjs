import Link from "next/link";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Batbayar Altanbagana",
      description: "Project not found in portfolio.",
    };
  }

  return {
    title: `${project.title} | Batbayar Altanbagana`,
    description: project.description,
    keywords: project.tech,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="glass-panel w-full rounded-[2rem] p-8">
        <h1 className="text-2xl font-semibold text-white">Project not found</h1>
      </section>
    );
  }

  return (
    <article className="flex w-full flex-col gap-8">
      <section className="glass-panel rounded-[2rem] px-6 py-10 sm:px-8 sm:py-12">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
          <span className="text-[var(--accent)]">{project.category}</span>
          <span>{project.year}</span>
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-medium normal-case tracking-normal ${
              project.status === "In Progress"
                ? "bg-amber-500/12 text-amber-200"
                : "bg-emerald-500/12 text-emerald-200"
            }`}
          >
            {project.status}
          </span>
        </div>
        <h1 className="section-title mb-5">{project.title}</h1>
        <p className="body-muted max-w-3xl text-base leading-8">
          {project.summary}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_minmax(0,1.1fr)]">
        <div className="glass-panel rounded-[1.8rem] p-6 sm:p-8">
          <p className="eyebrow mb-4">Project details</p>
          <div className="space-y-5 text-sm text-white/65">
            <div className="border-b border-white/10 pb-4">
              <p className="mb-1 text-white/40">Role</p>
              <p className="text-base text-white">{project.role}</p>
            </div>
            <div className="border-b border-white/10 pb-4">
              <p className="mb-1 text-white/40">Outcome</p>
              <p className="text-base text-white">{project.outcome}</p>
            </div>
            <div>
              <p className="mb-3 text-white/40">Technology</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[1.8rem] p-6 sm:p-8">
          <p className="eyebrow mb-4">Scope</p>
          <p className="body-muted mb-6 text-base leading-8">
            {project.description}
          </p>
          <div className="space-y-4">
            {project.scope.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-white/4 px-4 py-4 text-sm leading-7 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="accent-button rounded-full px-5 py-3 text-sm font-semibold"
              >
                View GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="ghost-button rounded-full px-5 py-3 text-sm font-semibold"
              >
                Visit live demo
              </a>
            )}
            <Link
              href="/projects"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white"
            >
              Back to projects
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
