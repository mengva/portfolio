export const profile = {
  name: "Mengva Chuepor",
  role: "Full-Stack Web Developer",
  tagline:
    "I build booking, rental, and operations systems for tourism and hospitality businesses across Southeast Asia.",
  email: "mengvaprogamemin@gmail.com",
  phone: "02057364321",
  location: "Vientiane, Laos",
  github: "https://github.com/mengva",
  githubHandle: "github.com/mengva",
  siteUrl: "https://mengvachuepor.dev", // placeholder — replace with your real domain
  about:
    "I'm a full-stack developer working mainly in TypeScript, across Next.js, Hono, tRPC, Drizzle ORM, and PostgreSQL. Most of my recent work has been for tourism and rental businesses: booking systems, role-based access control, and the relational database structures behind day-to-day operations. I like taking a business workflow — a booking, an enquiry, a rate — and turning it into something reliable, well-typed, and easy for other developers to extend.",
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "Nuxt.js", "React.js", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "Hono", "tRPC"],
  },
  {
    title: "Database & ORM",
    items: ["PostgreSQL", "Redis", "Drizzle ORM", "Prisma ORM"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman"],
  },
];

export type Project = {
  title: string;
  org: string;
  period: string;
  stack: string[];
  bullets: string[];
};

export const projects: Project[] = [
  {
    title: "Full-Stack Developer Screening Challenge",
    org: "Brother Tours",
    period: "Technical assessment",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    bullets: [
      "Designed a scalable tourism website architecture supporting tours, destinations, categories, content, enquiries, SEO, AEO, and GEO.",
      "Developed a production-style tour page for a 10-Day Laos Cultural Discovery Tour using reusable and scalable components.",
      "Designed an architecture capable of supporting 500+ tour, destination, and informational pages without manually maintaining individual pages.",
      "Implemented a full-stack Tour Enquiry and Booking Management System with role-based access for Administrators, Sales Staff, and Viewers.",
      "Designed database relationships, validation, authentication, authorization, booking workflows, supplier rates, availability, audit history, and automated tests.",
      "Investigated and addressed real-world scenarios including duplicate reservations, payment failures, slow dashboards, supplier price corruption, and production outages.",
    ],
  },
  {
    title: "Tour Management System",
    org: "Brother Tours",
    period: "Technical assessment",
    stack: ["Next.js", "TypeScript", "Hono", "tRPC", "Drizzle ORM", "PostgreSQL"],
    bullets: [
      "Developed a full-stack internal management system for managing customers, enquiries, itineraries, bookings, suppliers, rates, availability, and payments.",
      "Implemented role-based access control for Administrators, Sales Staff, and Viewers.",
      "Built enquiry and booking workflows including proposal, follow-up, confirmation, payment tracking, and upcoming departures.",
      "Designed relational database schemas with appropriate relationships, indexes, validation, and audit history.",
      "Implemented supplier rate management with price-change protection, availability tracking, and audit controls.",
      "Added automated tests for enquiry creation, validation, authorization, booking balance calculation, and enquiry-to-booking conversion."
    ],
  },
  {
    title: "Yerlee Rental Management System",
    org: "Final Year Project",
    period: "2025 – 2026",
    stack: ["Next.js", "TypeScript", "Hono", "tRPC", "Drizzle ORM", "PostgreSQL"],
    bullets: [
      "Built a full-stack rental management system for rooms, customers, staff, owners, and bookings.",
      "Implemented online booking, role-based access control, and rental management workflows.",
      "Designed relational database structures and APIs to support daily rental operations.",
    ],
  },
];

export const educations = [
  {
    degree: "Bachelor of Science in Web Development",
    school: "National University of Laos",
    location: "Vientiane, Laos",
    period: "2022 – 2026",
  }
];

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
