import Link from "next/link";
import { client } from "@/sanity/client";

async function getWorkItems() {
  return client.fetch(`
    *[_type == "workItem"]{
      _id,
      title,
      category,
      description,
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
          A collection of communications, policy, writing, and creative work.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item) => (
            <div
              key={item._id}
              className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {item.category}
              </p>

              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                {item.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

              {item.slug && (
                <Link
                  href={`/work/${item.slug}`}
                  className="mt-6 inline-block text-sm font-semibold text-slate-900 hover:text-slate-600"
                >
                  View Project →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}