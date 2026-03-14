import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,27,33,0.92),rgba(14,16,21,0.96))] px-6 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Available for freelance and full-time roles</p>
          <h2 className="section-title mb-4">Building reliable products with strong backend foundations.</h2>
          <p className="body-muted max-w-xl text-base leading-7">
            I focus on systems that scale cleanly, ship quickly, and stay maintainable
            when the product grows.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/65">
          <Link href="/projects" className="hover:text-white">
            View selected work
          </Link>
          <Link href="/resume" className="hover:text-white">
            Resume
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <p className="pt-3 text-white/35">
            Copyright {new Date().getFullYear()} Batbayar Altanbagana
          </p>
        </div>
      </div>
    </footer>
  );
}
