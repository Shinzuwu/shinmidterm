const stats = [
  {
    value: "01",
    label: "PROJECT DEPLOYED",
    sub: "Projects",
  },
  {
    value: "02",
    label: "DESIGN SYSTEMS",
    sub: "Reusable component kits",
  },
  {
    value: "50+",
    label: "FOCUS HOURS",
    sub: "Front end ",
  },
] as const;

export default function StatsSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 p-6 shadow-sm backdrop-blur-sm dark:bg-zinc-900/50"
        >
          <p className="text-4xl font-bold tabular-nums text-zinc-900 dark:text-zinc-50">
            {item.value}
          </p>
          <p className="mt-1 text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
            {item.label}
          </p>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            {item.sub}
          </p>
        </div>
      ))}
    </section>
  );
}
