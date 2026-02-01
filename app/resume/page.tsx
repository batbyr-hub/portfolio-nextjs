export const metadata = {
  title: "Resume | Batbayar Altanbagana",
  description: "Software Engineer resume – Django, React, PostgreSQL, Node.js, AWS",
  keywords: ["Resume", "Software Engineer", "Django", "React", "Portfolio"],
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>

      {/* Download Button */}
      <a
        href="/resume/Batbayar_Altanbagana_Software_Engineer_Resume.pdf"
        download
        className="inline-block mb-6 px-6 py-3 bg-black text-white rounded-lg hover:opacity-80"
      >
        Download Resume (PDF)
      </a>

      {/* PDF Embed */}
      <div className="w-full h-[800px] border rounded-lg overflow-hidden">
        <iframe
          src="/resume/Batbayar_Altanbagana_Software_Engineer_Resume.pdf"
          className="w-full h-full"
        />
        <p className="mt-4 text-sm text-gray-600">
  If the resume doesn’t display correctly, please use the download button above.
</p>
      </div>
    </div>
  )
}
