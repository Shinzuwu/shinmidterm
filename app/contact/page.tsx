export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="text-center">
        <h1 className="mt-4 text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent md:text-5xl">
         Reach out and let’s create something impactful together.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
         Share your audience, the experience you’re aiming for, or the parts you’re stuck on—I’ll bring ideas, timelines, and ways to make it feel authentically yours.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-base bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
           I may be new to the field, but I bring fresh ideas, dedication, and a designer’s eye that makes every project stand out.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="mailto:shinaroplays@gmail.com"
            className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-left text-zinc-800 shadow-sm transition hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <span className="text-2xl">📧</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Email</p>
              <p className="mt-1 text-lg font-semibold">shinaroplays@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+639150380805"
            className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-left text-zinc-800 shadow-sm transition hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <span className="text-2xl">📞</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Phone</p>
              <p className="mt-1 text-lg font-semibold">+63 960 655 0639</p>
            </div>
          </a>

          <div className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-left text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Location</p>
              <p className="mt-1 text-lg font-semibold">Datag,Buagsong,Cordova,Cebu</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 py-4">
          <a
            href="https://www.facebook.com/shinzu.grimes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <span className="text-lg">📘</span>
            Facebook
          </a>

          <a
            href="https://github.com/Shinzuwu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <span className="text-lg">🐙</span>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
