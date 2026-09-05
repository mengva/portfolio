import type { Metadata } from "next";
import About from "@/components/about/About";
import Education from "@/components/about/Education";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: profile.about,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <main className="px-6 sm:px-10 lg:pl-80 lg:pr-16 max-w-5xl pt-16 lg:pt-24 pb-24">
        <About />
        <Education />
      </main>
    </>
  );
}
