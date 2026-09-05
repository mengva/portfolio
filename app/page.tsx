import Hero from "@/components/home/Hero";
import QuickLinks from "@/components/home/QuickLinks";

export default function Home() {
  return (
    <>
      <main className="px-6 sm:px-10 lg:pl-80 lg:pr-16 max-w-5xl pb-24">
        <Hero />
        <QuickLinks />
      </main>
    </>
  );
}
