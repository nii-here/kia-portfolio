/* Import global CSS styles */
import "./globals.css";

/* Import shared layout components */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Website metadata */
/* Controls browser tab title and SEO description */
export const metadata = {
  title: "Kia Clair",
  description: "Communications and policy portfolio website",
};

// Root layout component
// This wraps EVERY page on the website
// Example:
// - Home page
// - About page
// - Work page
// - Contact page
export default function RootLayout({ children }) {
  return (

    // Main HTML wrapper
    <html lang="en">

      {/* Global body styles */}
      <body className="bg-slate-50 text-slate-900">

        {/* Shared navigation bar */}
        {/* Appears at the top of every page */}
        <Navbar />

        {/* Main page content */}
        {/* "children" represents the current page being viewed */}
        <main>
          {children}
        </main>

        {/* Shared footer */}
        {/* Appears at the bottom of every page */}
        <Footer />

      </body>
    </html>
  );
}