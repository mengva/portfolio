import { profile } from "@/lib/data";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 border-t border-ink-600/60 pb-24"
    >
      <h1 className="font-display text-2xl text-paper">Contact</h1>
      <p className="mt-5 max-w-content text-paper-muted leading-relaxed">
        Open to full-stack roles and freelance projects, especially systems
        involving bookings, scheduling, or role-based access. Reach out
        directly:
      </p>
      <dl className="mt-6 space-y-2 text-sm">
        <div className="flex gap-3">
          <dt className="text-paper-muted w-16">Email</dt>
          <dd>
            <Link
              href={`mailto:${profile.email}`}
              className="text-teal hover:underline focus-ring"
            >
              {profile.email}
            </Link>
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="text-paper-muted w-16">Phone</dt>
          <dd className="text-paper">{profile.phone}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="text-paper-muted w-16">GitHub</dt>
          <dd>
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline focus-ring"
            >
              {profile.githubHandle}
            </Link>
          </dd>
        </div>
      </dl>
      <p className="mt-16 text-xs text-paper-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
