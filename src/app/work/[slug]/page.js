import { client } from "@/sanity/client";

async function getWorkItem(slug) {
  return client.fetch(
    `
      *[_type == "workItem" && slug.current == $slug][0]{
        title,
        category,
        fullDescription,
        role,
        impact,
        link
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
            <p className="mt-3 leading-7 text-slate-600">{workItem.role}</p>
          </div>
        )}

        {workItem.impact && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">Impact</h2>
            <p className="mt-3 leading-7 text-slate-600">{workItem.impact}</p>
          </div>
        )}

        {workItem.link && (
          <a
            href={workItem.link}
            target="_blank"
            className="mt-10 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Visit Project
          </a>
        )}
      </div>
    </section>
  );
}