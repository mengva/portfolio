import { profile } from "@/lib/data";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-20 lg:pt-24">
      <p className="text-teal font-medium">{profile.role}</p>
      <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] mt-3 max-w-content">
        {profile.name}
      </h1>
      <p className="mt-6 text-lg text-paper-muted max-w-content leading-relaxed">
        {profile.tagline}
      </p>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper-muted">
        <Link
          href={`mailto:${profile.email}`}
          className="hover:text-teal transition-colors focus-ring"
        >
          {profile.email}
        </Link>
        <Link
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal transition-colors focus-ring"
        >
          {profile.githubHandle}
        </Link>
        <span>{profile.location}</span>
      </div>

      <SystemDiagram />
    </section>
  );
}

// A small schematic showing the kind of system this developer builds:
// an enquiry flowing through role-based access into a relational store.
// Stands in for a generic hero image, grounded in the actual subject matter.
function SystemDiagram() {
  const nodes = [
    { x: 20, y: 40, label: "Enquiry" },
    { x: 170, y: 20, label: "Role check" },
    { x: 170, y: 65, label: "Booking" },
    { x: 330, y: 40, label: "PostgreSQL" },
  ];
  return (
    <svg
      viewBox="0 0 380 90"
      className="mt-14 w-full max-w-content h-auto"
      role="img"
      aria-label="Diagram: an enquiry passes through a role check and booking step into a PostgreSQL database"
    >
      <line x1="35" y1="40" x2="160" y2="20" stroke="#323D54" strokeWidth="1" />
      <line x1="35" y1="40" x2="160" y2="60" stroke="#323D54" strokeWidth="1" />
      <line x1="185" y1="20" x2="320" y2="38" stroke="#323D54" strokeWidth="1" />
      <line x1="185" y1="60" x2="320" y2="42" stroke="#323D54" strokeWidth="1" />
      {nodes.map((n) => (
        <g key={n.label}>
          <circle
            cx={n.x}
            cy={n.y}
            r="4"
            fill={n.label === "PostgreSQL" ? "#D9A441" : "#4FA8A0"}
          />
          <text
            x={n.x}
            y={n.y - 12}
            fill="#8891A6"
            fontSize="11"
            fontFamily="var(--font-plex)"
            textAnchor={n.x > 300 ? "end" : n.x < 60 ? "start" : "middle"}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
