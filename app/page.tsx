import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      {/* HERO */}
      <section className="mb-24">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Hi, I&apos;m Batbayar <br />
          <span className="text-neutral-400">
            Software Engineer building scalable web systems
          </span>
        </h1>

        <p className="text-lg text-neutral-400 max-w-2xl">
          I specialize in backend and full-stack development using Django,
          APIs, and modern frontend frameworks. I focus on building reliable,
          production-ready software.
        </p>
      </section>

      {/* ABOUT */}
      <section className="mb-24 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-neutral-400 leading-relaxed">
          I have professional experience building backend systems, internal
          tools, and customer-facing applications. My work focuses on clean
          architecture, data modeling, and maintainable APIs. I enjoy solving
          real problems and collaborating in cross-functional teams.
        </p>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-8">Selected Projects</h2>

        <div className="grid gap-6">
          <div className="border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Urilga Platform</h3>
            <p className="text-neutral-400 mb-4">
              Family record management system with authentication and structured
              data modeling.
            </p>
            <Link
              href="/projects"
              className="text-sm underline underline-offset-4"
            >
              View case study
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-8">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6 text-neutral-400">
          <div>
            <h3 className="font-medium text-neutral-200 mb-2">Backend</h3>
            <p>Django, REST APIs, PostgreSQL, MySQL</p>
          </div>

          <div>
            <h3 className="font-medium text-neutral-200 mb-2">Frontend</h3>
            <p>React, Next.js, Tailwind CSS</p>
          </div>

          <div>
            <h3 className="font-medium text-neutral-200 mb-2">Tools</h3>
            <p>Git, Linux, Docker, Cloud Deployment</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s work together</h2>
        <p className="text-neutral-400 mb-6">
          Interested in my work or want to get in touch?
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 border border-neutral-700 rounded-lg hover:border-neutral-500 transition"
        >
          Contact me
        </Link>
      </section>
    </main>
  );
}
