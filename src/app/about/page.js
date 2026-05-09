import { client } from "@/sanity/client";

async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]{
    eyebrow,
    headline,
    paragraphOne,
    paragraphTwo
  }`);
}

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          {about?.eyebrow || "About"}
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          {about?.headline || "Communications, policy, and public interest work."}
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          {about?.paragraphOne}
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {about?.paragraphTwo}
        </p>
      </div>
    </section>
  );
}