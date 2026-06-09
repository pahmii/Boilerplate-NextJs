import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 font-sans antialiased dark:bg-zinc-950">
      <main className="flex max-w-md flex-col items-center gap-8 rounded-2xl border border-zinc-200/80 bg-white p-10 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={40}
            height={40}
            priority
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Boilerplate Ready!
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Mulai bangun aplikasimu dengan mengedit file{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200">
              app/page.tsx
            </code>
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <a
            className="flex h-11 flex-1 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer">
            Docs
          </a>
          <a
            className="flex h-11 flex-1 items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
