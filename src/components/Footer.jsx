// Footer component
// Appears at the bottom of every page on the website
export default function Footer() {
  return (

    // Footer wrapper
    <footer className="border-t border-slate-200 bg-white">

      {/* Center content and control max width */}
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">

        {/* Copyright text */}
        {/* Automatically updates the year using JavaScript */}
        <p>
          © {new Date().getFullYear()} Kia Clair. All rights reserved.
        </p>

      </div>
    </footer>
  );
}