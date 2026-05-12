import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

// Fetch About page content from Sanity CMS
// This grabs the first About Page document and returns all needed fields
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

// Main About Page component
export default async function AboutPage() {

  // Store Sanity data inside "about"
  const about = await getAboutPage();

  return (

    // Main page wrapper
    <section className="min-h-screen bg-slate-50 px-6 py-20">

      {/* Center content and control max width */}
      <div className="mx-auto max-w-6xl">

        {/* Small heading above main title */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          {about?.eyebrow || "About"}
        </p>

        {/* Main content grid */}
        {/* Left side = text content */}
        {/* Right side = profile image */}
        <div className="mt-6 grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">

          {/* LEFT COLUMN */}
          <div>

            {/* Main headline */}
            <h1 className="text-5xl font-bold leading-tight text-slate-900">
              {about?.headline ||
                "Communications, policy, and public interest work."}
            </h1>

            {/* About paragraphs */}
            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

              {/* Only show paragraph if content exists */}
              {about?.paragraphOne && <p>{about.paragraphOne}</p>}
              {about?.paragraphTwo && <p>{about.paragraphTwo}</p>}
              {about?.paragraphThree && <p>{about.paragraphThree}</p>}

            </div>
          </div>

          {/* RIGHT COLUMN */}
          {/* Profile image container */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">

            {/* Check if profile image exists in Sanity */}
            {about?.profileImage?.asset ? (

              // Display uploaded image
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

              // Fallback message if no image uploaded
              <div className="flex h-[460px] items-center justify-center rounded-[1.5rem] bg-slate-100 text-slate-500">
                Profile image coming soon
              </div>

            )}
          </div>
        </div>

        {/* Bottom information cards section */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {/* Focus Areas card */}
          {about?.focusAreas?.length > 0 && (
            <InfoCard title="Focus Areas" items={about.focusAreas} />
          )}

          {/* Tools & Platforms card */}
          {about?.tools?.length > 0 && (
            <InfoCard title="Tools & Platforms" items={about.tools} />
          )}

          {/* Quick Facts card */}
          {about?.quickFacts?.length > 0 && (
            <InfoCard title="Quick Facts" items={about.quickFacts} />
          )}

        </div>
      </div>
    </section>
  );
}

// Reusable card component
// Used for:
// - Focus Areas
// - Tools & Platforms
// - Quick Facts
function InfoCard({ title, items }) {
  return (

    // Card container
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      {/* Card title */}
      <h2 className="text-xl font-bold text-slate-900">
        {title}
      </h2>

      {/* Badge container */}
      <div className="mt-5 flex flex-wrap gap-3">

        {/* Loop through items array */}
        {items.map((item, index) => (

          // Individual badge/pill
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