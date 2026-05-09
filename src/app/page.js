import { client } from "@/sanity/client";

async function getHomePage() {
  return client.fetch(`*[_type == "homePage"][0]{
    eyebrow,
    headline,
    subtext
  }`);
}

export default async function HomePage() {
  const home = await getHomePage();

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-center px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          {home?.eyebrow || "Communications & Policy"}
        </p>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight text-slate-900">
          {home?.headline || "Strategic storytelling and public-facing communication."}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {home?.subtext || "A portfolio showcasing newsletters, graphics, writing samples, communications campaigns, and policy-related work."}
        </p>

        <div className="mt-10 flex gap-4">
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
        </div>
      </div>
    </section>
  );
}