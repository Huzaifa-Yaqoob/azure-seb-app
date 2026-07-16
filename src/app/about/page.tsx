export default function About() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">About This Project</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This is a Next.js application designed to run on Azure App Service. It
          combines a static website with API routes — all in a single codebase.
        </p>

        <div className="mt-12 grid gap-8 text-left sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="font-semibold">Frontend</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Next.js App Router</li>
              <li>React Server Components</li>
              <li>Tailwind CSS v4</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="font-semibold">API</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Route Handlers (GET)</li>
              <li>JSON responses</li>
              <li>No database required</li>
              <li>Ready to extend</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
