import SimplePageSection from "@/components/features/shared/SimplePageSection";

const skills = [
  {
    icon: "💧",
    name: "HTML5",
    description: "Semantic structure + accessibility anchors.",
  },
  {
    icon: "🌌",
    name: "CSS3",
    description: "Layered layouts, fluid grids, custom animations.",
  },
  {
    icon: "💎",
    name: "JavaScript",
    description: "Interaction logic and state orchestration.",
  },
  {
    icon: "🔷",
    name: "React",
    description: "Component-driven architecture with hooks.",
  },
  {
    icon: "🌀",
    name: "Tailwind CSS",
    description: "Design tokens + rapid responsive styling.",
  },
  {
    icon: "🌠",
    name: "Git",
    description: "Clean commits, branching, and collaboration.",
  },
];

  export default function SkillsPage() {
    return (
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SimplePageSection
         title={
    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
      Skills
    </span>
  }
          description="Core stack: Next.js, React, TypeScript, Tailwind CSS, and UI interface."
        />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-2xl dark:bg-zinc-800">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{skill.name}</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">{skill.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 text-center shadow-sm  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          <p className="text-4xl font-bold text-teal-600  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">07+</p>
          <p className="mt-2 text-xs tracking-[0.15em]  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent uppercase">Core tools mastered</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 text-center shadow-sm  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          <p className="text-4xl font-bold text-teal-600  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">∞</p>
          <p className="mt-2 text-xs tracking-[0.15em]  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent uppercase">Layout combinations</p>
        </div>
      </div>
    </section>
  );
}
