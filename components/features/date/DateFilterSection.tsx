import Link from "next/link";

type DateFilterSectionProps = {
  filter?: string[];
};

export default function DateFilterSection({ filter }: DateFilterSectionProps) {
  const selectedFilter = filter?.length ? filter.join(" / ") : "All dates";

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <p className="text-xs font-medium tracking-[0.2em] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
        ARCHIVE
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent md:text-4xl">
        Date filter
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        Optional catch-all:{" "}
        <span className="font-mono text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          /date/[[...filter]]
        </span>
      </p>
      <p className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 px-5 py-4 text-zinc-800 dark:text-zinc-200">
        Current scope:{" "}
        <span className="font-medium">{selectedFilter}</span>
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-block text-sm font-medium bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
      >
        ← Back to blog
      </Link>
    </section>
  );
}
