import { client } from "@/sanity/client";

async function getContactPage() {
  return client.fetch(`
    *[_type == "contactPage"][0]{
      eyebrow,
      headline,
      subtext,
      email
    }
  `);
}

export default async function ContactPage() {
  const contact = await getContactPage();

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          {contact?.eyebrow}
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          {contact?.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {contact?.subtext}
        </p>

        {contact?.email && (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Email
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-3 inline-block text-2xl font-semibold text-slate-900 hover:text-slate-600"
            >
              {contact.email}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}