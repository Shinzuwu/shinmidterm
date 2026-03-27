import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="flex flex-col gap-6 rounded-[28px] border border-[var(--border)] bg-[var(--card)]/90 p-8 shadow-lg shadow-zinc-200/40 backdrop-blur-sm dark:shadow-black/30 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent md:text-3xl">
            Need a consistent frontend developer?
          </h2>
          <p className="mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent  ">
            Let&apos;s build and work together.
          </p>
        </div>
        <Link
          href="/contact"
          className="w-fit rounded-full border border-zinc-300 bg-white px-8 py-3 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-teal-400 hover:text-teal-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-teal-500 dark:hover:text-teal-300"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}
