type SimplePageSectionProps = {
 title: React.ReactNode;
description: React.ReactNode;
  eyebrow?: string;
};

export default function SimplePageSection({
  title,
  description,
  eyebrow = "SECTION",
}: SimplePageSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <p className="text-xs font-medium tracking-[0.2em] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent hover:underline">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent hover:underline">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </section>
  );
}
