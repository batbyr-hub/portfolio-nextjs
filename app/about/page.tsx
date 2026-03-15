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

export const metadata = {
  title: "About | Batbayar Altanbagana",
  description:
    "Approach, engineering philosophy, and FAQ for Batbayar Altanbagana.",
};

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <section className="glass-panel rounded-[2rem] px-6 py-10 sm:px-8 sm:py-12">
        <p className="eyebrow mb-4">About</p>
        <h1 className="section-title mb-4">
          Backend-focused engineering shaped around reliability and product clarity.
        </h1>
        <p className="body-muted max-w-3xl text-base leading-8">
          I work best where software has to support real workflows, hold up in
          production, and stay maintainable as requirements evolve.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.85fr_minmax(0,1.15fr)]">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="eyebrow mb-4">Approach</p>
          <h2 className="section-title mb-4">
            I work best where engineering quality has to hold up in the real world.
          </h2>
          <p className="body-muted text-base leading-8">
            That usually means products with operational complexity, business
            rules, and teams that need more than a quick prototype. I focus on
            systems that are understandable to maintain and straightforward to
            extend.
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
          <p className="eyebrow mb-4">Quality Bar</p>
          <blockquote className="section-title text-[2.1rem] sm:text-[2.8rem]">
            &quot;Built to reduce friction, support real workflows, and stay stable when the product grows.&quot;
          </blockquote>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-white/40">
            How I evaluate product quality
          </p>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="eyebrow mb-5">FAQ</p>
          <div className="space-y-5">
            {questions.map((question) => (
              <div
                key={question.title}
                className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
              >
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
