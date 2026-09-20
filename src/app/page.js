import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

export const revalidate = 0;

// Fetch editable homepage content from Sanity.
async function getHomePage() {
  return client.fetch(`
    *[_type == "homePage"][0]{
      smallHeading,
      mainHeadline,
      subtext,
      profileImage,
      bio,
      highlights,
      linkedin
    }
  `);
}

// Display Sanity content, with FolioPress text for empty fields.
export default async function HomePage() {
  const home = await getHomePage();

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-14 sm:py-20">
      {/* Hero: introduction and demo image */}
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {/* Small heading */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            {home?.smallHeading || "Your work. Your words. Your website."}
          </p>

          {/* Main headline */}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {home?.mainHeadline ||
              "Great work deserves a place to shine."}
          </h1>

          {/* Supporting description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {home?.subtext ||
              "A customizable portfolio powered by Sanity. Publish projects, update your story, and manage your content without touching code."}
          </p>

          {/* Navigation buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="/work"
              className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Explore Sample Projects
            </a>

            <a
              href="/contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Contact the Developer
            </a>

            {/* Only show LinkedIn when a URL is provided in Sanity. */}
            {home?.linkedin && (
              <a
                href={home.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Keep the existing Sanity image field for the demo artwork. */}
        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
          {home?.profileImage?.asset ? (
            <img
              src={urlFor(home.profileImage)
                .width(900)
                .height(1100)
                .fit("crop")
                .url()}
              alt={
                home.profileImage.alt ||
                "FolioPress website concept mockup"
              }
              className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
            />
          ) : (
            // Match the image height when no artwork has been uploaded.
            <div className="flex h-[360px] items-center justify-center rounded-[1.5rem] bg-slate-100 px-6 text-center text-slate-500 sm:h-[520px]">
              FolioPress preview coming soon
            </div>
          )}
        </div>
      </div>

      {/* Project overview and editable feature highlights */}
      <div className="mx-auto mt-16 grid gap-8 max-w-6xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            About FolioPress
          </h2>

          {/* The Short Bio field in Sanity supplies this description. */}
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {home?.bio ||
              "FolioPress is a portfolio website demo built with Next.js and Sanity. It shows how someone can manage their pages, images, and projects through a simple content editor."}
          </p>
        </div>

        {/* Only display this card when highlights exist in Sanity. */}
        {home?.highlights?.length > 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Website Features
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {/* Display each Sanity highlight as a badge. */}
              {home.highlights.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}