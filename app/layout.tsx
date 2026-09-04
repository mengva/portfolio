import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description = profile.tagline;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Mengva Chuepor",
    "Full-Stack Developer",
    "Next.js Developer Laos",
    "TypeScript Developer",
    "Vientiane Web Developer",
    "Tourism Booking System Developer",
    "Drizzle ORM",
    "tRPC",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: profile.siteUrl,
    title,
    description,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Structured data so search engines and AI agents/crawlers (LLMs, answer
// engines) can parse who this site is about, without guessing from prose.
function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.about,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: profile.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vientiane",
      addressCountry: "LA",
    },
    sameAs: [profile.github],
    knowsAbout: [
      "TypeScript",
      "Next.js",
      "React",
      "Hono",
      "tRPC",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plex.variable}`}>
      <body className="font-body antialiased">
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
