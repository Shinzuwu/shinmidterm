import Link from "next/link";
import ProfileCard from "./ProfileCard";

export default function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 md:py-20">
      <div>
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-teal-600 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          SHIN ARO (FRONT END DEVELOPER)
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
         Designs that inspire trust, speed, and delight.
        </h1>

        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
          Currently doing{" "}
          <span className="font-medium bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            responsive design
          </span>
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white shadow-md transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            View projects
          </Link>

        </div>
      </div>

      <ProfileCard />
    </section>
  );
}
