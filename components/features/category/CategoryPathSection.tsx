import Link from "next/link";

type CategoryPathSectionProps = {
  slug: string[];
};

export default function CategoryPathSection({ slug }: CategoryPathSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <p className="text-xs font-medium tracking-[0.2em] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
        CATEGORY
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent md:text-4xl">
        Explorer
      </h1>
      <p className="mt-4 max-w-2xl text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
        Catch-all route:{" "}
        <span className="font-mono text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          /category/[...slug]
        </span>
      </p>
      <p className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 px-5 py-4 text-zinc-800 dark:text-zinc-200">
        Selected path:{" "}
        <span className="font-medium">{slug.join(" / ")}</span>
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-block text-sm font-medium text-teal-600 hover:underline bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
      >
        ← Back to blog
      </Link>
    </section>
  );
}
