import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

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

export default async function HomePage() {
  const home = await getHomePage();

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            {home?.smallHeading || "Communications & Policy"}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {home?.mainHeadline ||
              "Clear, thoughtful communication for policy, people, and public impact."}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {home?.subtext ||
              "A portfolio showcasing newsletters, graphics, writing samples, and public-facing communications work."}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="/work"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              View Work
            </a>

            <a
              href="/contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Contact
            </a>

            {home?.linkedin && (
              <a
                href={home.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
          {home?.profileImage?.asset ? (
            <img
              src={urlFor(home.profileImage).width(900).height(1100).fit("crop").url()}
              alt={home.profileImage.alt || "Portrait"}
              className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
            />
          ) : (
            <div className="flex h-[520px] items-center justify-center rounded-[1.5rem] bg-slate-100 text-slate-500">
              Profile image coming soon
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Bio
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {home?.bio ||
              "Kia’s work focuses on strategic communication, policy writing, and community-centered storytelling."}
          </p>
        </div>

        {home?.highlights?.length > 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Focus Areas
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
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