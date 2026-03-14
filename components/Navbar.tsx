import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-5 pt-5 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(11,13,16,0.75)] px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur xl:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-[var(--accent)]">
            BA
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-white/90 uppercase">
              Batbayar
            </p>
            <p className="text-xs text-white/50">Software Engineer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-white hover:border-[rgba(215,168,110,0.45)]"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
