import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-ink-600/60">
      <h2 className="font-display text-2xl text-paper">About</h2>
      <p className="mt-5 max-w-content text-paper-muted leading-relaxed">
        {profile.about}
      </p>
    </section>
  );
}
