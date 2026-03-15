import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const inProgressCount = projects.filter(
  (project) => project.status === "In Progress"
).length;
const productionCount = projects.filter(
  (project) => project.status === "Production"
).length;

const metrics = [
  { value: "6+", label: "Years building production software" },
  { value: "80%+", label: "Profit lift delivered through kiosk automation" },
  {
    value: `${productionCount}`,
    label: "Projects completed and running in production",
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
            <div className="mb-6">
              <div className="relative mb-5 h-56 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                <Image
                  src="/profile/profile1.JPG"
                  alt="Portrait of Batbayar Altanbagana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 22rem"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,13,16,0.72)] via-transparent to-transparent" />
              </div>
              <div className="flex items-center gap-4">
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
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Availability</span>
                <span className="text-white">Open to projects</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery status</span>
                <span className="text-white">
                  {inProgressCount} in progress / {productionCount} live
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-[rgba(15,17,22,0.92)] px-6 py-7"
          >
            <p className="mb-2 text-3xl font-semibold text-white">
              {metric.value}
            </p>
            <p className="body-muted max-w-xs text-sm leading-6">
              {metric.label}
            </p>
          </div>
        ))}
      </section>

    </div>
  );
}
