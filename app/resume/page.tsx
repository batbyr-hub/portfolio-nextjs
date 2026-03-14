export const metadata = {
  title: "Resume | Batbayar Altanbagana",
  description:
    "Software Engineer resume - Django, React, PostgreSQL, Node.js, AWS",
  keywords: ["Resume", "Software Engineer", "Django", "React", "Portfolio"],
};

export default function ResumePage() {
  return (
    <section className="flex w-full flex-col gap-6">
      <div className="glass-panel rounded-[2rem] px-6 py-10 sm:px-8 sm:py-12">
        <p className="eyebrow mb-4">Resume</p>
        <h1 className="section-title mb-4">Experience, systems thinking, and product-focused engineering.</h1>
        <p className="body-muted max-w-3xl text-base leading-8">
          Download the PDF version or preview it below. The resume is focused on
          backend development, full-stack delivery, and database-driven products.
        </p>
        <a
          href="/resume/Batbayar_Altanbagana_Software_Engineer_Resume.pdf"
          download
          className="accent-button mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold"
        >
          Download PDF
        </a>
      </div>

      <div className="glass-panel overflow-hidden rounded-[2rem] p-3 sm:p-4">
        <iframe
          src="/resume/Batbayar_Altanbagana_Software_Engineer_Resume.pdf"
          title="Batbayar Altanbagana resume"
          className="h-[70vh] w-full rounded-[1.4rem] bg-white"
        />
        <p className="body-muted px-3 pb-2 pt-5 text-sm">
          If the preview does not load in your browser, use the download button above.
        </p>
      </div>
    </section>
  );
}
