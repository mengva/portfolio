import { educations } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-16 border-t border-ink-600/60">
      <h1 className="font-display text-2xl text-paper">Education</h1>
      {educations.map((education, index) => (
        <EducationItem key={index} education={education} />
      ))}
    </section>
  );
}

function EducationItem({ education }: { education: typeof educations[0] }) {
  return (
    <section>
      <div className="flex items-center gap-x-4">
        <div className="mt-6 max-w-content flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <div>
            <h3 className="font-display text-lg text-paper">
              {education.degree}
            </h3>
            <p className="text-teal text-sm mt-1">
              {education.school}, {education.location}
            </p>
          </div>
          <span className="text-xs text-paper-muted">{education.period}</span>
        </div>
      </div>
    </section>
  );
}
