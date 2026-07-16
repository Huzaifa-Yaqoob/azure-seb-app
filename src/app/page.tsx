export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
          Build for the{" "}
          <span className="text-blue-600">cloud</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          A Next.js application deployed on Azure App Service — serving both your
          website and APIs from a single codebase.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/api/health"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
          >
            Health Check API
          </a>
          <a
            href="/api/hello"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            Hello API
          </a>
          <a
            href="/about"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            About
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-200 px-6 py-16 dark:border-zinc-800">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "⚡",
    title: "Blazing Fast",
    description: "Server-side rendering and static generation for optimal performance.",
  },
  {
    icon: "🔌",
    title: "API Routes",
    description: "Built-in API endpoints — no separate backend server needed.",
  },
  {
    icon: "☁️",
    title: "Azure Ready",
    description: "Configured for seamless deployment on Azure App Service.",
  },
];
