import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

async function getWorkItem(slug) {
  return client.fetch(
    `
      *[_type == "workItem" && slug.current == $slug][0]{
        title,
        category,
        fullDescription,
        role,
        impact,
        link,
        gallery
      }
    `,
    { slug }
  );
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;

  const workItem = await getWorkItem(slug);

  if (!workItem) {
    return (
      <section className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900">
            Project not found
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          {workItem.category}
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          {workItem.title}
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          {workItem.fullDescription}
        </p>

        {workItem.role && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">Role</h2>
            <p className="mt-3 leading-7 text-slate-600">
              {workItem.role}
            </p>
          </div>
        )}

        {workItem.impact && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">Impact</h2>
            <p className="mt-3 leading-7 text-slate-600">
              {workItem.impact}
            </p>
          </div>
        )}

        {workItem.gallery?.filter((image) => image?.asset).length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">
              Graphics
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {workItem.gallery
                .filter((image) => image?.asset)
                .map((image, index) => (
                  <a
                    key={image._key || index}
                    href={urlFor(image).url()}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden rounded-3xl border border-slate-200 bg-white"
                  >
                    <img
                      src={urlFor(image).width(1000).url()}
                      alt={
                        image.alt ||
                        `${workItem.title} graphic ${index + 1}`
                      }
                      className="h-auto w-full object-cover transition hover:scale-105"
                    />
                  </a>
                ))}
            </div>
          </div>
        )}

        {workItem.link && (
          <a
            href={workItem.link}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Visit Project
          </a>
        )}
      </div>
    </section>
  );
}