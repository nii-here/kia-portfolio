import { client } from "@/sanity/client";

async function getContactPage() {
  return client.fetch(`
    *[_type == "contactPage"][0]{
      smallHeading,
      mainHeadline,
      subtext,
      email,
      linkedin
    }
  `);
}

export default async function ContactPage() {
  const contact = await getContactPage();

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {contact?.smallHeading || "Contact"}
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-slate-900">
              {contact?.mainHeadline || "Let’s connect."}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {contact?.subtext ||
                "For professional opportunities, collaborations, or questions, please reach out."}
            </p>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Available For
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Communications Projects",
                  "Policy Writing",
                  "Content Strategy",
                  "Newsletter Design",
                  "Community Outreach",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {contact?.email && (
              <a
                href={`mailto:${contact.email}`}
                className="block rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Email
                </p>

                <h2 className="mt-4 break-words text-2xl font-bold text-slate-900">
                  {contact.email}
                </h2>

                <p className="mt-4 text-sm font-medium text-slate-600">
                  Send a message →
                </p>
              </a>
            )}

            {contact?.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  LinkedIn
                </p>

                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  Professional Profile
                </h2>

                <p className="mt-4 text-sm font-medium text-slate-600">
                  View LinkedIn →
                </p>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}