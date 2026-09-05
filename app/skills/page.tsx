import type { Metadata } from "next";
import Skills from "@/components/skill/Skills";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description: `Languages, frameworks, and tools ${profile.name} works with, including TypeScript, Next.js, tRPC, and PostgreSQL.`,
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <main className="px-6 sm:px-10 lg:pl-80 lg:pr-16 max-w-5xl pt-16 lg:pt-24 pb-24">
        <Skills />
      </main>
    </>
  );
}
