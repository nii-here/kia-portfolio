import Link from "next/link";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

export const revalidate = 0;

// Fetch all work items from Sanity CMS
// Featured projects appear first
// Newer projects appear before older ones
async function getWorkItems() {
  return client.fetch(`
    *[_type == "workItem"] | order(featured desc, _createdAt desc) {
      _id,
      title,
      category,
      description,
      featured,
      gallery,
      "slug": slug.current
    }
  `);
}

// Main Work page component
export default async function WorkPage() {

  // Store all fetched projects inside "workItems"
  const workItems = await getWorkItems();

  return (

    // Main page wrapper
    <section className="min-h-screen bg-slate-50 px-6 py-14 sm:py-20">

      {/* Center content and control max width */}
      <div className="mx-auto max-w-6xl">

        {/* Small heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Portfolio
        </p>

        {/* Main page title */}
        <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
          Selected Work
        </h1>

        {/* Intro paragraph */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          A curated collection of newsletters, graphics, policy writing, and
          public-facing communications work.
        </p>

        {/* Work items grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {/* Loop through every work item */}
          {workItems.map((item) => {

            // Get the first valid gallery image
            // Used as the preview image on the card
            const firstImage = item.gallery?.find(
              (image) => image?.asset
            );

            return (

              // Individual project card
              <article
                key={item._id}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image section */}
                <div className="h-56 bg-slate-100 sm:h-64">

                  {/* Show uploaded image if it exists */}
                  {firstImage ? (
                    <img
                      src={urlFor(firstImage)
                        .width(900)
                        .height(600)
                        .fit("crop")
                        .url()}
                      alt={firstImage.alt || item.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (

                    // Fallback message if no image exists
                    <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-slate-500">
                      Project preview coming soon
                    </div>

                  )}
                </div>

                {/* Card content */}
                <div className="p-6 sm:p-7">

                  {/* Category + Featured badges */}
                  <div className="flex flex-wrap items-center gap-3">

                    {/* Project category badge */}
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                      {item.category}
                    </span>

                    {/* Featured badge */}
                    {/* Only shows if "featured" is true */}
                    {item.featured && (
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project title */}
                  <h2 className="mt-5 text-2xl font-bold leading-tight text-slate-900">
                    {item.title}
                  </h2>

                  {/* Short project description */}
                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {/* Link to individual project page */}
                  {/* Only shows if slug exists */}
                  {item.slug && (
                    <Link
                      href={`/work/${item.slug}`}
                      className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-600"
                    >
                      View Details →
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}