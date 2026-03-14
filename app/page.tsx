import Link from "next/link";
import { projects } from "@/data/projects";

const metrics = [
  { value: "4+", label: "Years building production software" },
  { value: "80%+", label: "Profit lift delivered through kiosk automation" },
  { value: "Full-stack", label: "Focus across Django, React, and data systems" },
];

const services = [
  {
    title: "Backend Systems",
    description:
      "API design, business logic, authentication, and data modeling for products that need to stay stable as usage grows.",
  },
  {
    title: "Internal Tools",
    description:
      "Workflow-focused apps that reduce manual operations and help teams work faster with fewer handoffs.",
  },
  {
    title: "Product Delivery",
    description:
      "Pragmatic full-stack execution from database to UI, with an emphasis on maintainable architecture.",
  },
];

const questions = [
  {
    title: "What kind of work do you do best?",
    answer:
      "Projects that need strong backend foundations, clean APIs, structured data, and practical interfaces for real users.",
  },
  {
    title: "What stacks do you usually work with?",
    answer:
      "Django, React, Next.js, PostgreSQL, MySQL, REST APIs, and deployment workflows around modern web products.",
  },
  {
    title: "How do you approach delivery?",
    answer:
      "I keep the implementation simple, prioritize reliability first, and design for maintainability so the product can evolve without major rewrites.",
  },
];

export default function HomePage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <section className="soft-grid glass-panel relative overflow-hidden rounded-[2.2rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[rgba(215,168,110,0.14)] blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_22rem] lg:items-end">
          <div>
            <p className="eyebrow mb-5">Software Engineer based in Denver</p>
            <h1 className="display-title max-w-4xl">
              Building scalable web systems with a backend-first mindset.
            </h1>
            <p className="body-muted mt-6 max-w-2xl text-base leading-8 sm:text-lg">
              I design and ship products that turn complex workflows into reliable
              software. My work spans APIs, data models, internal tools, and the
              frontend layers that make them usable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="accent-button rounded-full px-6 py-3 text-sm font-semibold"
              >
                View projects
              </Link>
              <Link
                href="/contact"
                className="ghost-button rounded-full px-6 py-3 text-sm font-semibold"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>

          <aside className="glass-panel rounded-[1.8rem] p-6">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.26em] text-white/45">
              Profile
            </p>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold text-[var(--accent)]">
                BA
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Batbayar Altanbagana
                </h2>
                <p className="body-muted text-sm">
                  Backend and full-stack engineer focused on dependable systems.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-white/65">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Specialty</span>
                <span className="text-white">Django, APIs, data systems</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Location</span>
                <span className="text-white">Denver, CO</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Availability</span>
                <span className="text-white">Open to projects</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-[rgba(15,17,22,0.92)] px-6 py-7">
            <p className="mb-2 text-3xl font-semibold text-white">{metric.value}</p>
            <p className="body-muted max-w-xs text-sm leading-6">{metric.label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_minmax(0,1.1fr)] lg:items-start">
        <div>
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="section-title mb-4">Projects shaped around performance, workflow, and product clarity.</h2>
          <p className="body-muted max-w-xl text-base leading-8">
            The work below reflects how I build: strong backend structure first,
            practical product decisions second, and a UI layer that supports the
            workflow instead of getting in its way.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="glass-panel rounded-[1.8rem] p-6 sm:p-7"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                  {project.year}
                </span>
              </div>

              <p className="body-muted mb-5 text-base leading-7">
                {project.summary}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <p className="max-w-md text-sm text-white/45">{project.outcome}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white hover:border-[rgba(215,168,110,0.45)]"
                >
                  Read case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.85fr_minmax(0,1.15fr)]">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="eyebrow mb-4">Approach</p>
          <h2 className="section-title mb-4">I work best where engineering quality has to hold up in the real world.</h2>
          <p className="body-muted text-base leading-8">
            That usually means products with operational complexity, business rules,
            and teams that need more than a quick prototype. I focus on systems
            that are understandable to maintain and straightforward to extend.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="glass-panel rounded-[1.8rem] p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="body-muted text-sm leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="eyebrow mb-4">Quality bar</p>
          <blockquote className="section-title text-[2.1rem] sm:text-[2.8rem]">
            “Built to reduce friction, support real workflows, and stay stable when the product grows.”
          </blockquote>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-white/40">
            How I evaluate product quality
          </p>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="eyebrow mb-5">FAQ</p>
          <div className="space-y-5">
            {questions.map((question) => (
              <div key={question.title} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {question.title}
                </h3>
                <p className="body-muted text-sm leading-7">{question.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
