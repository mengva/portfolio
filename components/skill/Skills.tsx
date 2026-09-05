import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-ink-600/60">
      <h1 className="font-display text-2xl text-paper">Skills</h1>
      <div className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-8 max-w-content">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm text-teal">{group.title}</h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-paper-muted text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
