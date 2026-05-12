import Link from "next/link";

// Navigation bar component
// Appears at the top of every page
export default function Navbar() {
  return (

    // Sticky header
    // "sticky top-0" keeps navbar visible while scrolling
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">

      {/* Navigation container */}
      {/* Responsive layout:
          - Mobile = stacked layout
          - Desktop = horizontal layout
      */}
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Website logo / name */}
        {/* Clicking returns user to homepage */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          Kia Clair
        </Link>

        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-600 sm:justify-end">

          {/* Home page link */}
          <Link href="/" className="hover:text-slate-950">
            Home
          </Link>

          {/* Work / Portfolio page link */}
          <Link href="/work" className="hover:text-slate-950">
            Work
          </Link>

          {/* About page link */}
          <Link href="/about" className="hover:text-slate-950">
            About
          </Link>

          {/* Contact page link */}
          <Link href="/contact" className="hover:text-slate-950">
            Contact
          </Link>

        </div>
      </nav>
    </header>
  );
}