import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-500">ABOUT MYSELF</p>
        <h1 className="mt-4 text-5xl font-black leading-tight font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent md:text-6xl">
          I may not love writing code, but I’m finding real joy in the art of designing.
        </h1>
        <p className="mt-6 text-lg leading-relaxed bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent ">
          I'm Shin Aro, a frontend developer based in Cebu. I create responsive web applications with clean code and thoughtful design.
        </p>
        <p className="mt-4 text-lg leading-relaxed bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent ">
          I also focus on creating user-friendly experiences with modern technologies.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="/projects" className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700">
            My projects
          </a>
          <a href="/skills" className="rounded-full border border-zinc-900 px-6 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800">
            My Skills
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div className="overflow-hidden rounded-3xl border-4 border-zinc-900 p-2 dark:border-zinc-100">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-zinc-950">
            <Image
              src="/shinzu.jpg"
              alt="Shin aro profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase ">CURRENTLY FOCUSED ON</p>
          <h2 className="mt-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent   ">Building clean interfaces with modern design</h2>
          
        </div>
      </div>
    </section>
  );
}
