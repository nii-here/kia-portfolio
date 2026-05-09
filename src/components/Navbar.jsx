import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Kia Clair
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-slate-950">
            Home
          </Link>
          <Link href="/work" className="hover:text-slate-950">
            Work
          </Link>
          <Link href="/about" className="hover:text-slate-950">
            About
          </Link>
          <Link href="/contact" className="hover:text-slate-950">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}