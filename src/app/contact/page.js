import { client } from "@/sanity/client";

// Fetch Contact page content from Sanity CMS
// This grabs the first Contact Page document and returns the needed fields
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

// Main Contact Page component
export default async function ContactPage() {

  // Store fetched data inside "contact"
  const contact = await getContactPage();

  return (

    // Main page wrapper
    <section className="min-h-screen bg-slate-50 px-6 py-24">

      {/* Center content and control width */}
      <div className="mx-auto max-w-6xl">

        {/* Two-column layout */}
        {/* Left side = intro content */}
        {/* Right side = contact cards */}
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT COLUMN */}
          <div>

            {/* Small heading */}
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {contact?.smallHeading || "Contact"}
            </p>

            {/* Main headline */}
            <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-slate-900">
              {contact?.mainHeadline || "Let’s connect."}
            </h1>

            {/* Intro text */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {contact?.subtext ||
                "For professional opportunities, collaborations, or questions, please reach out."}
            </p>

            {/* "Available For" card */}
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              {/* Card heading */}
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Available For
              </p>

              {/* Badge container */}
              <div className="mt-5 flex flex-wrap gap-3">

                {/* Loop through service/focus area list */}
                {[
                  "Communications Projects",
                  "Policy Writing",
                  "Content Strategy",
                  "Newsletter Design",
                  "Community Outreach",
                ].map((item) => (

                  // Individual badge/pill
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

          {/* RIGHT COLUMN */}
          {/* Contact cards */}
          <div className="space-y-5">

            {/* Email card */}
            {/* Only display if email exists */}
            {contact?.email && (
              <a
                href={`mailto:${contact.email}`}
                className="block rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Card label */}
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Email
                </p>

                {/* Email address */}
                <h2 className="mt-4 break-words text-2xl font-bold text-slate-900">
                  {contact.email}
                </h2>

                {/* Small action text */}
                <p className="mt-4 text-sm font-medium text-slate-600">
                  Send a message →
                </p>
              </a>
            )}

            {/* LinkedIn card */}
            {/* Only display if LinkedIn URL exists */}
            {contact?.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="block rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Card label */}
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  LinkedIn
                </p>

                {/* Card title */}
                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  Professional Profile
                </h2>

                {/* Small action text */}
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