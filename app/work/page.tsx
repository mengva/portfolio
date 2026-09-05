import type { Metadata } from "next";
import Experience from "@/components/work/Experience";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: `Projects by ${profile.name}: booking, tour, and rental management systems built with Next.js, tRPC, and Drizzle ORM.`,
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <main className="px-6 sm:px-10 lg:pl-80 lg:pr-16 max-w-5xl pt-16 lg:pt-24 pb-24">
        <Experience />
      </main>
    </>
  );
}
