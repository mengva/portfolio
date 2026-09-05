import Link from "next/link";
import { navItems } from "@/lib/data";

const blurbs: Record<string, string> = {
  "/": "Let's build something together. I specialize in full-stack web development with Next.js, tRPC, and Drizzle ORM.",
  "/about": "Background, focus, and how I approach a build.",
  "/work": "Booking, rental, and role-based access systems.",
  "/skills": "Languages, frameworks, and tools I use daily.",
  "/contact": "Email, phone, and GitHub.",
};

export default function QuickLinks() {
  return (
    <section
      aria-label="Site sections"
      className="py-16 border-t border-ink-600/60 grid sm:grid-cols-2 gap-6 max-w-content"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group block border border-ink-600 rounded-lg p-5 hover:border-teal transition-colors focus-ring"
        >
          <h2 className="font-display text-lg text-paper group-hover:text-teal transition-colors">
            {item.label}
          </h2>
          <p className="mt-2 text-sm text-paper-muted">
            {blurbs[item.href]}
          </p>
        </Link>
      ))}
    </section>
  );
}
