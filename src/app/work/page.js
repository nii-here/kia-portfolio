import Link from "next/link";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

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

export default async function WorkPage() {
  const workItems = await getWorkItems();

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Portfolio
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Selected Work
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          A curated collection of newsletters, graphics, policy writing, and
          public-facing communications work.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {workItems.map((item) => {
            const firstImage = item.gallery?.find((image) => image?.asset);

            return (
              <article
                key={item._id}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-64 bg-slate-100">
                  {firstImage ? (
                    <img
                      src={urlFor(firstImage).width(900).height(600).fit("crop").url()}
                      alt={firstImage.alt || item.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-slate-500">
                      Project preview coming soon
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                      {item.category}
                    </span>

                    {item.featured && (
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="mt-5 text-2xl font-bold leading-tight text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

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