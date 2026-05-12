import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]{
    eyebrow,
    headline,
    profileImage,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    focusAreas,
    tools,
    quickFacts
  }`);
}

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          {about?.eyebrow || "About"}
        </p>

        <div className="mt-6 grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h1 className="text-5xl font-bold leading-tight text-slate-900">
              {about?.headline ||
                "Communications, policy, and public interest work."}
            </h1>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              {about?.paragraphOne && <p>{about.paragraphOne}</p>}
              {about?.paragraphTwo && <p>{about.paragraphTwo}</p>}
              {about?.paragraphThree && <p>{about.paragraphThree}</p>}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
            {about?.profileImage?.asset ? (
              <img
                src={urlFor(about.profileImage)
                  .width(800)
                  .height(950)
                  .fit("crop")
                  .url()}
                alt={about.profileImage.alt || "Portrait"}
                className="h-[460px] w-full rounded-[1.5rem] object-cover"
              />
            ) : (
              <div className="flex h-[460px] items-center justify-center rounded-[1.5rem] bg-slate-100 text-slate-500">
                Profile image coming soon
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {about?.focusAreas?.length > 0 && (
            <InfoCard title="Focus Areas" items={about.focusAreas} />
          )}

          {about?.tools?.length > 0 && (
            <InfoCard title="Tools & Platforms" items={about.tools} />
          )}

          {about?.quickFacts?.length > 0 && (
            <InfoCard title="Quick Facts" items={about.quickFacts} />
          )}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, items }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>

      <div className="mt-5 flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}