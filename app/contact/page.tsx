import type { Metadata } from "next";
import Contact from "@/components/contact/Contact";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} — ${profile.email}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <main className="px-6 sm:px-10 lg:pl-80 lg:pr-16 max-w-5xl pt-16 lg:pt-24">
        <Contact />
      </main>
    </>
  );
}
