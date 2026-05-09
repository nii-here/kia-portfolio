export default function WorkCard({
  title,
  category,
  description,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        {category}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <button className="mt-6 text-sm font-semibold text-slate-900">
        View Project →
      </button>
    </div>
  );
}