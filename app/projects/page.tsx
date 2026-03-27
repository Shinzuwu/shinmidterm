import Image from "next/image";
import SimplePageSection from "@/components/features/shared/SimplePageSection";

const projects = [

  {
    title: "E-Commerce Website",
    description: "This project is a fully functional e-commerce shop interface built with Vite and React, designed to showcase cosmetic products.",
    repoUrl: "https://github.com/JanAro1/Ecommerce-App.git",
    image: "/project-images/ecoms.PNG",
    alt: "Screenshot of e-commerce web app",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <SimplePageSection
        title={
    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
      Projects
    </span>
  }
       description={
    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
      I’m showcasing my frontend project from building portfolio sections to crafting complete, responsive user interfaces.
    </span>
  }
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            {project.image && (
              <div className="relative h-48 w-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.alt ?? project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{project.title}</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-300">{project.description}</p>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-500"
              >
                View Repository
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
