import { projects } from "@/lib/data";

export default function Experience() {
  return (
    <section id="work" className="py-16 border-t border-ink-600/60">
      <h1 className="font-display text-2xl text-paper">Work</h1>
      <div className="mt-8 space-y-12">
        {projects.map((project) => (
          <article key={project.title} className="max-w-content">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg text-paper">
                {project.title}
              </h3>
              <span className="text-xs text-paper-muted">
                {project.period}
              </span>
            </div>
            <p className="text-teal text-sm mt-1">{project.org}</p>

            <ul className="mt-4 space-y-2">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-paper-muted text-sm leading-relaxed pl-4 border-l border-ink-600"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="text-xs text-paper-muted border border-ink-600 rounded-full px-3 py-1"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
